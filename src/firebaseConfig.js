import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCh58yWkkVl2wa_MlVB_ox9iclSp1Tv57A",
  authDomain: "coder29-blogs-747db.firebaseapp.com",
  projectId: "coder29-blogs-747db",
  storageBucket: "coder29-blogs-747db.appspot.com",
  messagingSenderId: "916670384087",
  appId: "1:916670384087:web:aa4df92fc562d5f6756d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};