import React from "react";
import "../css/loginpage.css";
import logo from "../images/landingPageImg/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const toggleRegister = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };

  const toggleLogin = () => {
    const x = document.getElementById("login");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/colleges");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignup = async () => {};

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={toggleLogin}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={toggleRegister}>
            Register
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div id="login" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <input type="checkbox" className="check-box" />
          <span>Remember Password</span>
          <button className="submit-btn" onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div id="register" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Enter Full Name"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            required
          />
          <label for="field" className="input-option">
            Choose One:
          </label>
          <select name="field" className="input-field">
            <option value="student">Choose</option>
            <option value="student">Student</option>
            <option value="college/university">College/University</option>
          </select>
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="check-box" />
          <span>I agree to the terms & condtions</span>
          <button className="submit-btn" onClick={handleSignup}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
