import React, { FormEvent, useState } from "react";
import { SignOut } from "./SignOut";
import {
    addDoc,
    collection,
    limit,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { auth, firestore } from "./Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom: React.FC = () => {
    // reference to the message collection
    const messageRef = collection(firestore, "messages");

    // query 30 documents from the message documents (order by time created)
    const q = query(messageRef, orderBy("createdAt"), limit(30));

    // get a list of object containing data from the queries
    const [messages] = useCollectionData(q);

    // gets the value from the text input
    const [formValue, setFormValue] = useState("");

    // asynchronous send message function
    const sendMessage = async (event: FormEvent) => {
        event.preventDefault();
    
        if (formValue != ""){
            await addDoc(messageRef, {
                text: formValue,
                createdAt: serverTimestamp(),
                uid: auth.currentUser?.uid,
                photoURL:
                    "https://yt3.ggpht.com/s7nQ-2WByv3K7FuNqA2hlV9R3ox9Nqs6bmemG5LnsTMHdgz-EQ3QuynAJ_dMXdq38A18zRTp=s88-c-k-c0x00ffffff-no-rj",
            });
        }

        // empty text input
        setFormValue("");
    };

    return (
        <div>
            <SignOut />
            <div>
                {/* List of messages */}
                {messages?.map((msg) => (
                    <ChatMessage key={msg.id} messageProp={msg} />
                ))}
            </div>

            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button type="submit">🕊️</button>
            </form>
        </div>
    );
};
