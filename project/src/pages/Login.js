import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please Fill All the Spaces.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } else {
      if (username === "Seif" && password === "Hana") {
        window.location.href = "/AdminHomePage";
      } else {
        setError("Invalid username or password");
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
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="inputForm"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputForm"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-container">
            <Link to="/">
              <button className="back-button">Back</button>
            </Link>
            <button type="submit" className="donate-button">Login</button>
          </div>
          </div>

        </form>
      </div>
    </div>
    
  );
}

export default Login;
