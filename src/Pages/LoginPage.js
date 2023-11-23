import React, { useState } from 'react';

const  LoginPage = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    
    const handleUserName = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    //this should log the user in (we could make it a set user/pass for example purposes)
    const handleLogin = (event) => {

    }

    return (
        <div calssName="container">
            <h2> Login </h2>
            <form>
                <div className="container">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="container"
                        id="username"
                        value={username}
                        onChange={handleUserName}
                    />
                </div>
                <div className="container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        className="container"
                        id="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <button type="button" className="btn" onClick={handleLogin}>
                    Log in
                </button>
            </form>
        </div>
    ); 
};

export default LoginPage