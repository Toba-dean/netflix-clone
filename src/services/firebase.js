// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3aEBiZMxOK_m5_g8rEHy6oI8QTWLCqw",
  authDomain: "netflix-d4a0b.firebaseapp.com",
  projectId: "netflix-d4a0b",
  storageBucket: "netflix-d4a0b.appspot.com",
  messagingSenderId: "603495406199",
  appId: "1:603495406199:web:78d6d0d0997cff6b28c472"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase);

// Adding the seedData to the db once
// seedDatabase(db, addDoc, collection)

// save user data in the fire store db
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toISOString();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
}