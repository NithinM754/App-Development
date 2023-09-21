import React, { useState } from "react";
// import './App.css';
import { Link, useNavigate } from "react-router-dom";



export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate("/Home");
    }
    const navigate=useNavigate();
    const signuprt=()=>{
        navigate("/Signup");
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter you mail" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit" >Sign in</button>
            </form>
            <button onClick={signuprt}  className="link-btn">Don't have an account? Register here.</button>


            {/* <Link to="/Signup"></Link> */}
        </div>
    )
}