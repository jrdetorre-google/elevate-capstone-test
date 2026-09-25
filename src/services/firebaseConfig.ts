import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCFYxEe2DImkRyHDJVHrQHE54B0f7_wB-0',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'elevate-capstone-testprep.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'elevate-capstone-testprep',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'elevate-capstone-testprep.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '90301122967',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:90301122967:web:elevatecapstone01',
};

// True when project configuration is present
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId
);

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

auth = getAuth(app);
db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { app, auth, db };
