import React from "react";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

import {auth} from "./Firebase";

// import other components
import { SignIn } from "./SignIn";
import { ChatRoom } from "./ChatRoom";

const App : React.FC = () =>  {
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
