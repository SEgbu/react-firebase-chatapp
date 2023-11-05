import React from "react";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {auth, firestore} from "./firebase";

// import other components
import { SignIn } from "./SignIn";
import { ChatRoom } from "./ChatRoom";

function App() {
	const [user] = useAuthState(auth);

    return (
        <div>
			<section>
				{user ? <ChatRoom/> : <SignIn/>}
			</section>
        </div>
    );
}

export default App;
