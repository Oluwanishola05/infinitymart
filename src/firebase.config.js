
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOXcYj_ZKzklbBKmvejkyBxkf3Tyn4WA0",
  authDomain: "infinitymrt-658d6.firebaseapp.com",
  projectId: "infinitymrt-658d6",
  storageBucket: "infinitymrt-658d6.appspot.com",
  messagingSenderId: "1069915769714",
  appId: "1:1069915769714:web:8187ef2808098a9f34ebeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;