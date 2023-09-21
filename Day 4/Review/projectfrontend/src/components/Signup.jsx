import React, { useState } from "react";
// import './App.css';
import { Link, useNavigate } from "react-router-dom";


export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");

        console.log(email);
    }
    const loginrt=()=>{
        navigate("/");
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your mail" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            <button type="submit" >Create Account</button>
        </form>
            <button onClick={loginrt}  className="link-btn">Already have an account? Login here.</button>
        {/* <Link to="/"></Link> */}
    </div>
    )
}