// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiCVT3u0AcxxJ8ou70gSLaiwpbIYmkKlM",
  authDomain: "hospital-service-usa.firebaseapp.com",
  projectId: "hospital-service-usa",
  storageBucket: "hospital-service-usa.appspot.com",
  messagingSenderId: "718840727658",
  appId: "1:718840727658:web:f6956317218c5846de6213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;