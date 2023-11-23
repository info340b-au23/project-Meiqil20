import React from 'react';

export function LoginPage() {

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
    
        </div>
    );
};
