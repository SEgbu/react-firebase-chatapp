import React from "react";
import "./styles/App.css"

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

import {auth} from "./Firebase";

// import other components
import { SignIn } from "./SignIn";
import { ChatRoom } from "./ChatRoom";
import { SignOut } from "./SignOut";

const App : React.FC = () =>  {
	const [user] = useAuthState(auth);

    return (
        <div className="App">
			<section>
                {user ? <SignOut/> : <></>}
				{user ? <ChatRoom/> : <SignIn/>}
			</section>
        </div>
    );
}

export default App;
