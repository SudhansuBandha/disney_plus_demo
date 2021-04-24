import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXH77dZlrVL-2XhYp_TK6JcQ9Rg9orM5k",
  authDomain: "disney-plus-demo.firebaseapp.com",
  projectId: "disney-plus-demo",
  storageBucket: "disney-plus-demo.appspot.com",
  messagingSenderId: "180577449432",
  appId: "1:180577449432:web:abb3554ca1899a6a43eead",
  measurementId: "G-CN7RWHF49C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
