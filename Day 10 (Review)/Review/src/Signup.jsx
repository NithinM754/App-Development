import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup =(props)=>{
    // const [signup,setSignup]=useState({
    //     username: "",
    //     password: "",
    //     email: "",
    // });
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    // const handleChange=(e)=>{
    //     const {name,value}=e.target;
    //     setSignup({...signup,[name]:value});
    // };
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/");
    };
    const haveacc=()=>{
        navigate("/Login");

    }

    return(
        // <>
        // <h1>Sign up here!!!!!</h1>
        // <p></p>
        // <div>
        //     <label>User Name</label>
        //     <input type="text"  onChange={handleChange} name="user name"/>
        // </div>
        // <div>
        //     <label>Email</label>
        //     <input type="email"  onChange={handleChange} name="email"/>

        // </div>
        // <div>
        //     <label>Password</label>
        //     <input type="password"  onChange={handleChange} name="password"/>

        // </div>
        // <button type="submit" >Sign up</button>
      
        // </>

        <div className="auth-form-container">
                        <h1>Student Information Management System</h1>

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
        <button onClick={haveacc}  className="link-btn">Already have an account? Login here.</button>
    {/* <Link to="/"></Link> */}
</div>
    );
}