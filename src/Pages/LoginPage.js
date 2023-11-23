import React from 'react';

export function LoginPage() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleUserName = (event) => {
    //     setUsername(event.target.value);
    // };
    // const handlePassword = (event) => {
    //     setPassword(event.target.value);
    // }

    //this should log the user in (we could make it a set user/pass for example purposes)
    // const handleLogin = (event) => {

    // }

    return (
        <div>
            <header id="login_box">
                <h1>LOGIN</h1>
            </header>
            <main>
            <div id="login">
                <label for="email">Email</label><br />
                <input type="email" id="email" name="email" required/><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" required/><br/>
                <button type="button" id="button">Login</button>
            </div>
            <div id="sign_up">
                <p>----------------------OR----------------------</p>
                <p>Need an account? <a href="/">SIGN UP</a></p>
            </div>
        </main>
            {/* <form>
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
            </form> */}
        </div>
    );
};
