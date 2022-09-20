import firebaseConfig from './firebase-config'
import { initializeApp } from "firebase/app";
import { getFirestore, collection,getDocs } from "firebase/firestore";

// Web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//ref for each collection
const aboutRef = collection(db, 'about')
const barRef = collection(db, 'bartenders')
const drinksRef = collection(db, 'drinks')
const testRef = collection(db, 'testimonials')

//get information from collection
export let aboutContent = []

getDocs(aboutRef).then(res => {
    res.docs.forEach(docs => {
        aboutContent.push({...docs.data()})
    })
})

export let bartenderContent = []

getDocs(barRef).then(res =>{
    res.docs.forEach(item =>{ 
        bartenderContent.push({...item.data(), id: item.id})
    })
   })

   export let drinksContent = []
getDocs(drinksRef).then(res =>{
    res.docs.forEach(item =>{ 
        drinksContent.push({...item.data(), id: item.id})
    })
   })
export let testimonialsContent = []
   getDocs(testRef).then(res =>{
    res.docs.forEach(item =>{ 
        testimonialsContent.push({...item.data(), id: item.id})
    })
   })