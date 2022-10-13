import { useState } from "react";

const UserDetails = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const printDetails = event => {
        event.preventDefault();
        console.log(username, password);
    };

    return (
        <>
        <form onSubmit={printDetails}>
            <label>Username:</label>
            <input name="username"
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}/>
            <br/>
            <label>Password:</label>
            <input name="password"
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}/>
            <br/>
            <button>Submit</button>
        </form>
        
        </>
    );
}

export default UserDetails;
