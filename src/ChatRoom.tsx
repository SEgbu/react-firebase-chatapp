import React from "react"
import { SignOut } from "./SignOut"
import { collection, limit, orderBy, query } from "firebase/firestore"
import { firestore } from "./Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom : React.FC = () => {
    // reference to the message collection 
    const messageRef = collection(firestore, "messages");

    // query 30 documents from the message documents (order by time created)
    const q = query(messageRef, orderBy("createdAt"), limit(30));

    // get a list of object containing data from the queries
    const [messages] = useCollectionData(q);

    return (
        <div>
            <div>
                {messages?.map(msg => <ChatMessage key={msg.id} messageProp={msg}/>)}
            </div>
            <SignOut/>
        </div>
    )
}