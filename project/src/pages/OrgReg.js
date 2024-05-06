import React, { useState, useRef, useEffect } from "react";


function OrgReg() { // my first name, last name, gender, email, password, contact number, organization name, organization type, and organization address, area, governorate,
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [orgname, setorgname] = useState("");
    const [number, setnumber] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");
    const [address, setaddress] = useState("");
    const [area, setarea] = useState("");
    const [error, setError] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstname==="" || lastname==="" || email==="" || number==="" || password==="" || conpassword===""
    || address==="" || area==="" ||orgname==="") {
        setError("Please Fill All the Spaces.")
                    const clearError = () => {
                        setError(null); 
                      };
                      
                      setTimeout(clearError, 1500);
    }
    else {
        if (password=== conpassword) {
            let flag=false
            for(let i=0;i<number.length;i++) {
                if (isNaN(parseInt(number[i]))) {
                    setError("Enter a Valid Contact Number")
                    const clearError = () => {
                        setError(null); 
                      };
                      
                      setTimeout(clearError, 1500);
                    flag=true
                }
            }
            if (!selectedFile) {
                setError('Please select a file.');
              }
            else if(flag===false)
            alert("Success!");
           // window.location.href = '/role';
        } else {
            setError("Password Confirmation Failed");
            const clearError = () => {
                setError(null); 
              };
              
              setTimeout(clearError, 1500);
        }
    }

       
    };

    
    

    return (
        <div>
            <h1>Organization Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname"> Enter First Name: </label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname"> Enter Last Name: </label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                    />
                </div>
                <div>
                <label for="gender">Select Gender:</label>
                    <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="orgname"> Enter Organization Name: </label>
                    <input
                        type="text"
                        id="orgname"
                        value={orgname}
                        onChange={(e) => setorgname(e.target.value)}
                    />
                </div>
                <div>
                <label for="orgtype">Select Organization Type:</label>
                    <select id="orgtype">
                    <option value="hospital">Hospital</option>
                    <option value="school">School</option>
                    <option value="orphanage">Orphanage</option>
                    <option value="vet">Vet</option>



                    </select>
                </div>
                <div>
                    <label htmlFor="email"> Enter Email: </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="number"> Enter Contact Number: </label>
                    <input
                        type="text"
                        id="number"
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Enter Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="conpassword"> Enter Password Again: </label>
                    <input
                        type="password"
                        id="conpassword"
                        value={conpassword}
                        onChange={(e) => setconpassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address"> Enter Organization Address: </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="area"> Enter Area: </label>
                    <input
                        type="text"
                        id="area"
                        value={area}
                        onChange={(e) => setarea(e.target.value)}
                    />
                </div>
                <div>
                <label for="governorate">Select Governorate:</label>
                    <select id="governorate">
                    <option value="Alexandria">Alexandria</option>
                    <option value="Aswan">Aswan</option>
                    <option value="Asyut">Asyut</option>
                    <option value="Beheira">Beheira</option>
                    <option value="Beni Suef">Beni Suef</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Dakahlia">Dakahlia</option>
                    <option value="Damietta">Damietta</option>
                    <option value="Faiyum">Faiyum</option>
                    <option value="Gharbia">Gharbia</option>
                    <option value="Giza">Giza</option>
                    <option value="Ismailia">Ismailia</option>
                    <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                    <option value="Luxor">Luxor</option>
                    <option value="Matrouh">Matrouh</option>
                    <option value="Minya">Minya</option>
                    <option value="Monufia">Monufia</option>
                    <option value="New Valley">New Valley</option>
                    <option value="North Sinai">North Sinai</option>
                    <option value="Port Said">Port Said</option>
                    <option value="Qalyubia">Qalyubia</option>
                    <option value="Qena">Qena</option>
                    <option value="Red Sea">Red Sea</option>
                    <option value="Sharqia">Sharqia</option>
                    <option value="Sohag">Sohag</option>
                    <option value="South Sinai">South Sinai</option>
                    <option value="Suez">Suez</option>
</select>
</div>
            <div>
                <h2>
                    Specify Your Location on Map
                </h2>
            <iframe width="40%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AF%D9%82%D9%8A+(Organization%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
            </div>
            <div>
            <h2>Please Upload an Official Government License to Ensure Authentication</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </form>
            </div>
            <br/>
            <br/>



                {error && <p>{error}</p>}
                <button type="submit">Register</button>
                
            
      </form>
    </div>
    );
}

export default OrgReg;
