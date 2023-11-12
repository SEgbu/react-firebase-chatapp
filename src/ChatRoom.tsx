import React, { FormEvent, useRef, useState } from "react";
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
    const [formValue, setFormValue] = useState<string>("");

    // bottom of the page reference
    const bottom = useRef<HTMLDivElement>(null);

    // asynchronous send message function
    const sendMessage = async (event: FormEvent) => {
        event.preventDefault();

        if (formValue != "") {
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

        // scroll to the bottom of the page
        bottom.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="ChatRoom">
            <div className="ListOfMessages">
                {/* List of messages */}
                {messages?.map((msg) => (
                    <ChatMessage key={msg.uid} messageProp={msg} />
                ))}

                <div ref={bottom}></div>
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
