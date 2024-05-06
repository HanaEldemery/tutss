import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
//import { Link } from "react-router-dom";
import "../styles/SignUpIn.css";

const SignUpIn = () => {
  const [action, setAction] = useState("Sign Up");
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleClick = () => {
    setIsForgotPassword(true); // Set state to show forgot password inputs
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {isForgotPassword ? (
          <>
            <div className="input2">
              <PasswordIcon
                fontSize="large"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
              <input type="password" placeholder="New Password" />
            </div>
            <div className="submit-container">
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                  setIsForgotPassword(false);
                }}
              >
                {" "}
                Login{" "}
              </div>
            </div>
          </>
        ) : (
          <>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input2">
                <PersonIcon
                  fontSize="large"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                />
                <input type="text" placeholder="Name" />
              </div>
            )}
            <div className="input2">
              <EmailIcon
                fontSize="large"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input2">
              <PasswordIcon
                fontSize="large"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
              <input type="password" placeholder="Password" />
            </div>

            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Forgot password? <span onClick={handleClick}>Click Here!</span>
              </div>
            )}

            <div className="submit-container">
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                {" "}
                Sign Up{" "}
              </div>
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                {" "}
                Login{" "}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpIn;
