import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwhN4hx9B8nCMyXnpuDiIoYR67j18U34Q",
    authDomain: "live-chat-2ecc8.firebaseapp.com",
    projectId: "live-chat-2ecc8",
    storageBucket: "live-chat-2ecc8.appspot.com",
    messagingSenderId: "590574539697",
    appId: "1:590574539697:web:37c0225daeabff28f4a390",
    measurementId: "G-L3PBY6BWRF"
  };
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth,projectFirestore,timestamp}