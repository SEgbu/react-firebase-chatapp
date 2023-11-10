import React from "react"
import { auth } from "./Firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import "./styles/App.css"

export const SignIn : React.FC  = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider;
        signInWithPopup(auth, provider);
    }

    return (
        <div className="SignIn">
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}