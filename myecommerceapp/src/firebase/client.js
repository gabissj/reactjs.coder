import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    // Objeto que nos brinda firebase
    apiKey: "AIzaSyDKbSzldmX7WkUf3zZdKGtn9wg84VHiBiI",
    authDomain: "proyectofinalreact-102bf.firebaseapp.com",
    projectId: "proyectofinalreact-102bf",
    storageBucket: "proyectofinalreact-102bf.appspot.com",
    messagingSenderId: "12115883977",
    appId: "1:12115883977:web:18425afbac23c0f129da18"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);