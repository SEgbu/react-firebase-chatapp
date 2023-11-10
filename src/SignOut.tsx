import React from "react"
import { auth } from "./Firebase"

export const SignOut : React.FC = () => {
    return (
        <div className="SignOut">
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}