import { useState } from "react";

const LoginControl = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    if (loginStatus) {
        return (
            <>
                <h4>Welcome Back!</h4>
                <button onClick={() => setLoginStatus(false)}>Log Out</button>
            </>
        );
    } else {
        return (
            <>
                <h4>Please Sign Me Up!</h4>
                <button onClick={() => setLoginStatus(true)}>Log In</button>
            </>
        );
    }
}
export default LoginControl;