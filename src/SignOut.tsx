import React from "react"
import { auth } from "./Firebase"

export const SignOut : React.FC = () => {
    return (
        <>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </>
    )
}