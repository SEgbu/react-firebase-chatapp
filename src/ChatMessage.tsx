import { DocumentData } from "firebase/firestore";
import React from "react";
import { auth } from "./Firebase";

type ChatMessageProps = {
    messageProp : DocumentData;
}

export const ChatMessage : React.FC<ChatMessageProps> = (props) => {
    // accessing the document attributes
    const {text, uid, photoURL} = props.messageProp
    
    // if message id == currentUser's id, then message is from currentUser (sent) otherwise it is not (recieved)
    const sentOrRecieved = (uid === auth.currentUser?.uid) ? "sent" : "recieved"

    return (
        <div className="ChatMessage">
            <img src={photoURL}/>
            <p>{text}</p>
            <p id="status">status: {sentOrRecieved}</p>
        </div>
    )
}