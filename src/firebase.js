import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKgi_jjti_Cd4GHpadEFNH-fdyvJ3dUnk",
  authDomain: "m6motivation-61676.firebaseapp.com",
  projectId: "m6motivation-61676",
  storageBucket: "m6motivation-61676.appspot.com",
  messagingSenderId: "186647874543",
  appId: "1:186647874543:web:64ab246ac402575dfb041a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };