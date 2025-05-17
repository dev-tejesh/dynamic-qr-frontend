import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfM-m3aAkgF866qAjgXUkvDdj-68ipilo",
  authDomain: "dynamic-qr-6bfe1.firebaseapp.com",
  projectId: "dynamic-qr-6bfe1",
  storageBucket: "dynamic-qr-6bfe1.firebasestorage.app",
  messagingSenderId: "984273980873",
  appId: "1:984273980873:web:70bb9c8eaa84760cfdec18",
  measurementId: "G-KKWYE1WL46",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
