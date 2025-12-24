import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8lBZmwJN4KIqEE9T1EbuLYOluivjwu_4",
  authDomain: "diariolacuenca-7d6b0.firebaseapp.com",
  databaseURL: "https://diariolacuenca-7d6b0-default-rtdb.firebaseio.com",
  projectId: "diariolacuenca-7d6b0",
  storageBucket: "diariolacuenca-7d6b0.appspot.com",
  messagingSenderId: "473681665953",
  appId: "1:473681665953:web:0eb69c012f7227471235e0",
  measurementId: "G-787439R89N"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)

export default app

