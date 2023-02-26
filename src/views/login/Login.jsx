import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin' && pass === 'admin'){
            props.onFormSwitch("Dashboard");
        }else{
            alert("Failed!!!");
        }
    }

    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}