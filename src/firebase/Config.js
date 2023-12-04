import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAPZnao-d-vJiXEDTylC2Wi5vgpYXkRGkE",
  authDomain: "olxnew-51f8b.firebaseapp.com",
  projectId: "olxnew-51f8b",
  storageBucket: "olxnew-51f8b.appspot.com",
  messagingSenderId: "230930270130",
  appId: "1:230930270130:web:f935947f2e45baa1d406ab",
  measurementId: "G-K0LH4BN2QR"
};

export default firebase.initializeApp(firebaseConfig)
  