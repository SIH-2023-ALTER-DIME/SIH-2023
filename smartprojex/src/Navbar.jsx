import React from 'react';
import { Link } from "react-router-dom";
import logo from "./images/landingPageImg/logo.png";
import "./css/footer.css";
import "./css/landingpage.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt='logo'/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/colleges">Colleges</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
        <li>
          <Link to="/loginorsignup">Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
