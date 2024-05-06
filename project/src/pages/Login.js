import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username==="" || password==="") {
            setError("Please Fill All the Spaces.")
                        const clearError = () => {
                            setError(null); 
                          };
                          
                          setTimeout(clearError, 1500);
                        }
        else {

        if (username === "Seif" && password === "Hana") {
            alert("Login successful");
        } else {
            setError("Invalid username or password");
            const clearError = () => {
                setError(null); 
              };
              
              setTimeout(clearError, 1500);
            
            
        }
    }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"> Enter Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Enter Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
