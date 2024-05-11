import React, { useState } from "react";
import { Link } from "react-router-dom";
function Adminchangepass() {
  const [currpassword, setcurrPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currpassword === "" || password === "") {
      setError("Please Fill All the Spaces.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } else {
      if (currpassword === "Hana") {
        if (currpassword != password) {
          //alert("password change successful");
          // window.location.href = "/AdminHomePage";
          setPopupMessage(`Password Changed Successfully!`);
          setTimeout(() => {
            setPopupMessage("");
            // Redirect to another page after the popup message disappears
            window.location.href = "/AdminHomePage";
          }, 3000);

          // setError("Password Changed Successfully!");
          //   const clearError = () => {
          //     setError(null);
          //   };
        } else {
          setError("Please enter a Different Password");
          const clearError = () => {
            setError(null);
          };

          setTimeout(clearError, 3000);
        }
      } else {
        setError("Invalid Current Password");
        const clearError = () => {
          setError(null);
        };

        setTimeout(clearError, 3000);
      }
    }
  };

  return (
    <div className="all">
      <div className="headerContainer">
      <h1>Admin Change Password</h1>
      <form onSubmit={handleSubmit} className="form">
      <div className="input-container">
          <div className="input-wrapper">          
          <label htmlFor="oldpass"> Enter Current Password: </label>
          <input
            type="password"
            id="oldpass"
            value={currpassword}
            onChange={(e) => setcurrPassword(e.target.value)}
            className="inputForm"

          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password"> Enter New Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputForm"

          />
        </div>
        {error && <p className="error">{error}</p>}
        {popupMessage && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              border: "1px solid black",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            {popupMessage}
          </div>
        )}
           <div className="button-container">
              
              <Link to="/AdminHomePage">
                <button className="back-button">Back</button>
              </Link>
              <button type="submit" className="donate-button">
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminchangepass;