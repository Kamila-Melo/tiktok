import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'; 

const firebaseConfig = {
    apiKey: "AIzaSyC2XpLdfkeUXVGxy90_S3vK31EVeddDG3Y",
    authDomain: "tiktok-4c6e2.firebaseapp.com",
    projectId: "tiktok-4c6e2",
    storageBucket: "tiktok-4c6e2.appspot.com",
    messagingSenderId: "758567620754",
    appId: "1:758567620754:web:d1da8b2d5c5ffd5ad0164b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;