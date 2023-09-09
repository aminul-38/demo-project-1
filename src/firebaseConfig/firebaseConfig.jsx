import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCik52p8SIOLy-0W8MV6Wi5dJqBeXala-0",
  authDomain: "triptels-12fb8.firebaseapp.com",
  projectId: "triptels-12fb8",
  storageBucket: "triptels-12fb8.appspot.com",
  messagingSenderId: "257717702220",
  appId: "1:257717702220:web:b55192c05e0785b4ec6ee9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
