import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyCOQI7NVYq6c4_pFvevS3N5hBINwEJGYyY",
  authDomain: "beena-80085.firebaseapp.com",
  projectId: "beena-80085",
  storageBucket: "beena-80085.firebasestorage.app",
  messagingSenderId: "139583826449",
  appId: "1:139583826449:web:7eeb56a4c7d8c8e57cdfb0",
  measurementId: "G-M2J8D1CPMG"

};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);