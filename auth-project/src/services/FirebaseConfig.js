import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDN8Pwh2BuuVU4um9hRGfWxIhg2EyVBmNs',
  authDomain: 'portfolioproject-4e38b.firebaseapp.com',
  projectId: 'portfolioproject-4e38b',
  storageBucket: 'portfolioproject-4e38b.appspot.com',
  messagingSenderId: '745586458721',
  appId: '1:745586458721:web:8104962ae9b2713f7a2a20',
  measurementId: 'G-SJVP2RYWE5',
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
