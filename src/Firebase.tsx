// firebase
import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// initialize firebase
export const firebase = initializeApp
({
    // my config
	apiKey: "AIzaSyDDbtgufOImO4xb2eCAdWmqaeQbNUCPiNE",
	authDomain: "react-firebase-chatapp-a23c6.firebaseapp.com",
	projectId: "react-firebase-chatapp-a23c6",
	storageBucket: "react-firebase-chatapp-a23c6.appspot.com",
	messagingSenderId: "1080168353635",
	appId: "1:1080168353635:web:9fa0dd31ad4ae9baa18d56",
	measurementId: "G-30KXP64XRF"
});

// global reference to auth and firestore
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);