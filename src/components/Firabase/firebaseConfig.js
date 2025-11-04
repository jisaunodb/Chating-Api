// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY8GcLeQS-HuLDZxDFYQStMN5ny7LTLLA",
  authDomain: "chatting-api-b0e03.firebaseapp.com",
  databaseURL: "https://chatting-api-b0e03-default-rtdb.firebaseio.com",
  projectId: "chatting-api-b0e03",
  storageBucket: "chatting-api-b0e03.firebasestorage.app",
  messagingSenderId: "603014599813",
  appId: "1:603014599813:web:8d055fec03a0970c09c5ec",
  measurementId: "G-ND0V8YHZD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig