// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId



  /* apiKey: "AIzaSyBg4OdDtXrRWf_pWfQDgwW1SYE9bJeywGE",
  authDomain: "cloud-kitchen-9bfe0.firebaseapp.com",
  projectId: "cloud-kitchen-9bfe0",
  storageBucket: "cloud-kitchen-9bfe0.appspot.com",
  messagingSenderId: "735864487632",
  appId: "1:735864487632:web:4c3d4cbbdfa6255f87e8d5", */
};

/* 

apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId

*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
