import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your Name" required />
          )}

          <input type="text" placeholder="Enter your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>
          {currState === "Sign Up" ? "Create New Account" : " Login"}
        </button>
        <div className="login-popup-conditions">
          <input type="checkbox" required />
          <p>By Continuing ,I agree to all terms and conditions.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account /<span onClick={()=>setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account /<span onClick={()=>setcurrState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
