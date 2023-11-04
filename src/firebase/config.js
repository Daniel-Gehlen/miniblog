import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDrtID-70BP7nGskObXJw-WrhAkESCkdg",
  authDomain: "miniblog-d6e0c.firebaseapp.com",
  projectId: "miniblog-d6e0c",
  storageBucket: "miniblog-d6e0c.appspot.com",
  messagingSenderId: "806221426939",
  appId: "1:806221426939:web:323527d59d5291236bc05e",
  measurementId: "G-FL4PHRFZ6M"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
