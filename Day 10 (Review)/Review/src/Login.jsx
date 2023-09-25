import React from "react";
import { useState } from "react";
// import "./style/login.css";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    // const {setUser}= useStates();
    // const[login, setLogin]=useState({
    //     username: "",
    //     password: "",

    // });
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate=useNavigate();
    // const handleChange =(e)=>{
    //     e.preventDefault();
    //     const{name,value}=e.target;
    //     setLogin({...login,[name]: value});

    // };
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/home")
    };
    const createacc=()=>{
        navigate("/signup");
    }

    return(
        // <><div className="auth-form-container">
        //     <form className="signup-form" onSubmit={handleSubmit}>
        //     <div>
        //     <label>User</label>
        //     <input type="text" onChange={handleChange} name="user" />
        // </div>
        // <div>

        //         <label>password</label>
        //         <input type="text" onChange={handleChange} name="password" />
        //     </div>
        //     </form>
        //     <button type="submit" >Sign in</button>
        //     <button onClick={createacc}>create new account click here..</button>
        //     </div>
        //     </>

        <div className="auth-form-container">
            <h1>Student Information Management System</h1>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter you mail" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            <button type="submit" >Sign in</button>
        </form>
        <button onClick={createacc}  className="link-btn">Don't have an account? Register here.</button>


        {/* <Link to="/Signup"></Link> */}
    </div>

      
    );
};
export default Login;
