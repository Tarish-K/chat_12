
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUUupjVtJkcBnH97XLEjBfOnzVmHUlSUU",
  authDomain: "chat-12-a95c0.firebaseapp.com",
  projectId: "chat-12-a95c0",
  storageBucket: "chat-12-a95c0.appspot.com",
  messagingSenderId: "928424094778",
  appId: "1:928424094778:web:a7d9bd1e8efa0854919903"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)