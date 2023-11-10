import { DocumentData } from "firebase/firestore";
import React from "react";

type ChatMessageProps = {
    messageProp : DocumentData;
}

export const ChatMessage : React.FC<ChatMessageProps> = (props) => {
    const {text, uid} = props.messageProp

    return (
        <>
            <p>{text}</p>
        </>
    )
}