import firebaseConfig from './firebase-config'
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//ref for each collection
export const aboutRef = collection(db, 'about')
export const barRef = collection(db, 'bartenders')
export const drinksRef = collection(db, 'drinks')
export const testRef = collection(db, 'testimonials')

