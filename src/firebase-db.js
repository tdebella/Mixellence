import firebaseConfig from './firebase-config'
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

// Web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase storage for images
export const storage = getStorage(app);

//firestore database
const db = getFirestore(app);

//ref for each collection in db
export const aboutRef = collection(db, 'about')
export const barRef = collection(db, 'bartenders')
export const drinksRef = collection(db, 'drinks')
export const testRef = collection(db, 'testimonials')

