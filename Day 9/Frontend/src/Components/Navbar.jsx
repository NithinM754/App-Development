import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/Navbar.css";
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../redux/userSlice'

function NavBar() {
    const user=useSelector(selectUser)
    const dispatch= useDispatch();
    const navigate=useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLogout = () =>{
    dispatch(logout())
    navigate('/')
}
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Student Information Management System
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink> */}
            {/* </li> */}
                {/* <span class='user'>{user?.username}</span> */}
            {/* <li className="nav-item"> */}
              {/* <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;