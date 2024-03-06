import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfqoFtT3_Z7j1Czgn0ZihbPyGYvsQmOi4',
  authDomain: 'disney-p1us-c1one.firebaseapp.com',
  projectId: 'disney-p1us-c1one',
  storageBucket: 'disney-p1us-c1one.appspot.com',
  messagingSenderId: '802305076378',
  appId: '1:802305076378:web:4a86a70c380d284745c323',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
