import React, { useState } from "react";

function Adminchangepass() {
    const [currpassword, setcurrPassword] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currpassword==="" || password==="") {
            setError("Please Fill All the Spaces.")
                        const clearError = () => {
                            setError(null); 
                          };
                          
                          setTimeout(clearError, 1500);
                        }
        else {

        if (currpassword === "Hana" ) {
            if(currpassword!=password) {
            alert("password change successful");
            }
            else {
            setError("Please enter a Different Password");
            const clearError = () => {
                setError(null); 
              };
              
              setTimeout(clearError, 1500);
            }
        } else {
            setError("Invalid Current Password");
            const clearError = () => {
                setError(null); 
              };
              
              setTimeout(clearError, 1500);
            
            
        }
    }
    };

    return (
        <div>
            <h1>Admin Change Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="oldpass"> Enter Current Password: </label>
                    <input
                        type="password"
                        id="oldpass"
                        value={currpassword}
                        onChange={(e) => setcurrPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Enter New Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
}

export default Adminchangepass;
