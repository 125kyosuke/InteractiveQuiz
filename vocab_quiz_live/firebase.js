// Firebase設定をここに貼り付け
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5wBjorqyIKwyIGkKzMLNrrgefEgMUU8w",
  authDomain: "interactive-quiz-ad3e8.firebaseapp.com",
  databaseURL: "https://interactive-quiz-ad3e8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "interactive-quiz-ad3e8",
  storageBucket: "interactive-quiz-ad3e8.firebasestorage.app",
  messagingSenderId: "21251657109",
  appId: "1:21251657109:web:a40c5b6491cb52e1e07a9c",
  measurementId: "G-3NCP4F1FV8"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
