import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from '../services/firebaseConfig';

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isDemo?: boolean;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  signInAsDemo: (name?: string, email?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER_KEY = 'elevate_demo_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 1. If Firebase is configured, listen to Firebase Auth
    if (isFirebaseConfigured) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Customer Engineer',
            photoURL: firebaseUser.photoURL,
          });
          localStorage.removeItem(DEMO_USER_KEY);
        } else {
          // Check demo user in local storage
          const savedDemo = localStorage.getItem(DEMO_USER_KEY);
          if (savedDemo) {
            try {
              setUser(JSON.parse(savedDemo));
            } catch {
              setUser(null);
            }
          } else {
            setUser(null);
          }
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // 2. Local fallback demo user if no live Firebase
      const savedDemo = localStorage.getItem(DEMO_USER_KEY);
      if (savedDemo) {
        try {
          setUser(JSON.parse(savedDemo));
        } catch {
          setUser(null);
        }
      }
      setLoading(false);
    }
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      if (isFirebaseConfigured) {
        const result = await signInWithPopup(auth, googleProvider);
        const fbUser = result.user;
        setUser({
          uid: fbUser.uid,
          email: fbUser.email,
          displayName: fbUser.displayName || 'Customer Engineer',
          photoURL: fbUser.photoURL,
        });
      } else {
        // Fallback demo sign-in for testing without live Firebase credentials
        signInAsDemo('Google Customer Engineer', 'ce.architect@google.com');
      }
    } catch (err) {
      console.error('Sign-in failed:', err);
      // Fallback to demo mode if popup is blocked or network errors
      signInAsDemo('Google Customer Engineer', 'ce.architect@google.com');
    } finally {
      setLoading(false);
    }
  };

  const signInAsDemo = (name = 'Google Customer Engineer', email = 'ce.architect@google.com') => {
    const demoUser: AppUser = {
      uid: 'demo_ce_' + Math.random().toString(36).substring(2, 9),
      displayName: name,
      email: email,
      photoURL: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
      isDemo: true,
    };
    setUser(demoUser);
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
    setLoading(false);
  };

  const signOutUser = async () => {
    try {
      if (isFirebaseConfigured) {
        await signOut(auth);
      }
    } catch (e) {
      console.warn('Firebase sign-out error:', e);
    } finally {
      localStorage.removeItem(DEMO_USER_KEY);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOutUser, signInAsDemo }}>
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
