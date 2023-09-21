import React, { useState } from "react";
import './asserts/App.css';
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import { Home } from "./components/Home";
function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
    // );
    return (
      
      <>
      <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>

      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App;