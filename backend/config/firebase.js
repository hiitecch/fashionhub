// backend/config/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzsDt1Bca5oSuWhEY0R6EceaW1-fhxl4",
  authDomain: "gp18-2362b.firebaseapp.com",
  projectId: "gp18-2362b",
  storageBucket: "gp18-2362b.appspot.com",
  messagingSenderId: "40219794382",
  appId: "1:40219794382:web:f07a629b06aab4607d93",
  measurementId: "G-1KGEJQJSDM"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// ✅ Export using ESM syntax
export { db }
export default app // Optional, if you need the app instance elsewhere