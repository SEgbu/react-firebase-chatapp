import React from "react"
import { auth } from "./firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export const SignIn : React.FC  = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider;
        signInWithPopup(auth, provider);
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}