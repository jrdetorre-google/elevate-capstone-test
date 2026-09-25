import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, isFirebaseConfigured } from '../services/firebaseConfig';

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGoogleAccount: (email: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const GOOGLE_SESSION_KEY = 'elevate_google_session';
const LEGACY_DEMO_KEY = 'elevate_demo_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Purge any legacy demo mock keys
    localStorage.removeItem(LEGACY_DEMO_KEY);

    // 1. Listen to Firebase Authentication if configured
    let unsubscribe = () => {};
    if (isFirebaseConfigured) {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const authenticatedUser: AppUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Google Engineer',
            photoURL: firebaseUser.photoURL || 'https://lh3.googleusercontent.com/a/default-user=s96-c',
          };
          setUser(authenticatedUser);
          localStorage.setItem(GOOGLE_SESSION_KEY, JSON.stringify(authenticatedUser));
          
          // Sync user to Firestore
          try {
            await setDoc(doc(db, 'users', authenticatedUser.uid), {
              email: authenticatedUser.email,
              displayName: authenticatedUser.displayName,
              lastLogin: new Date().toISOString(),
            }, { merge: true });
          } catch (e) {
            console.warn('Could not sync user to Firestore:', e);
          }
        } else {
          // Check if session was saved via direct Google identity
          const savedSession = localStorage.getItem(GOOGLE_SESSION_KEY);
          if (savedSession) {
            try {
              setUser(JSON.parse(savedSession));
            } catch {
              setUser(null);
            }
          } else {
            setUser(null);
          }
        }
        setLoading(false);
      });
    } else {
      // Check stored session
      const savedSession = localStorage.getItem(GOOGLE_SESSION_KEY);
      if (savedSession) {
        try {
          setUser(JSON.parse(savedSession));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    }

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured) {
        const result = await signInWithPopup(auth, googleProvider);
        const fbUser = result.user;
        const appUser: AppUser = {
          uid: fbUser.uid,
          email: fbUser.email,
          displayName: fbUser.displayName || 'Google Customer Engineer',
          photoURL: fbUser.photoURL || 'https://lh3.googleusercontent.com/a/default-user=s96-c',
        };
        setUser(appUser);
        localStorage.setItem(GOOGLE_SESSION_KEY, JSON.stringify(appUser));
      } else {
        throw new Error('Firebase configuration not detected. Use Google email login.');
      }
    } catch (err: any) {
      console.warn('Google SSO popup failed or blocked:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogleAccount = async (email: string) => {
    setLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      // Derive stable, safe UID for user identity
      const uid = 'google_' + btoa(cleanEmail).replace(/=/g, '').toLowerCase();
      const displayName = cleanEmail.split('@')[0]
        .split('.')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

      const appUser: AppUser = {
        uid,
        email: cleanEmail,
        displayName: displayName || 'Google Customer Engineer',
        photoURL: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
      };

      setUser(appUser);
      localStorage.setItem(GOOGLE_SESSION_KEY, JSON.stringify(appUser));

      if (isFirebaseConfigured) {
        try {
          await setDoc(doc(db, 'users', appUser.uid), {
            email: appUser.email,
            displayName: appUser.displayName,
            lastLogin: new Date().toISOString(),
          }, { merge: true });
        } catch (e) {
          console.warn('Firestore user doc sync warning:', e);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      if (isFirebaseConfigured) {
        await signOut(auth);
      }
    } catch (e) {
      console.warn('Sign-out error:', e);
    } finally {
      localStorage.removeItem(GOOGLE_SESSION_KEY);
      localStorage.removeItem(LEGACY_DEMO_KEY);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signInWithGoogleAccount, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
