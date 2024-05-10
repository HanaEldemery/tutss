import { BreakfastDiningOutlined } from "@mui/icons-material";
import React, { useState, useHistory } from "react";
import { Link } from "react-router-dom";

function DonorReg() {
  //my first name, last name, gender, email, contact number, password, address, area, governorate
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [address, setaddress] = useState("");
  const [area, setarea] = useState("");
  const [error, setError] = useState("");
  const [donorType, setDonorType] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [gender, setgender] = useState("");
  const [governorate, setgovernorate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      number === "" ||
      password === "" ||
      conpassword === "" ||
      address === "" ||
      area === ""
    ) {
      setError("Please Fill All the Spaces.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } else {
      if (password === conpassword) {
        let flag = false;
        for (let i = 0; i < number.length; i++) {
          if (isNaN(parseInt(number[i]))) {
            setError("Enter a Valid Contact Number");
            const clearError = () => {
              setError(null);
            };

            setTimeout(clearError, 3000);
            flag = true;
          }
        }
        if (!flag)
          switch (donorType) {
            case "normal":
              switch (governorate) {
                case "Alexandria":
                case "Aswan":
                case "Asyut":
                case "Beheira":
                case "Beni Suef":
                case "Cairo":
                case "Dakahlia":
                case "Damietta":
                case "Faiyum":
                case "Gharbia":
                case "Giza":
                case "Ismailia":
                case "Kafr El Sheikh":
                case "Luxor":
                case "Matrouh":
                case "Minya":
                case "Monufia":
                case "New Valley":
                case "North Sinai":
                case "Port Said":
                case "Qalyubia":
                case "Qena":
                case "Red Sea":
                case "Sharqia":
                case "Sohag":
                case "South Sinai":
                case "Suez":
                  switch (gender) {
                    case "male":
                    case "female":
                      setPopupMessage(
                        `Registeration Accepted by Admin; Redirecting you to your Home Page.`
                      );
                      setTimeout(() => {
                        setPopupMessage("");
                        window.location.href = "/CommonPagegeneral";
                      }, 3000);
                      break;
                    default:
                      setError("Please Choose your Gender");
                      const clearError = () => {
                        setError(null);
                      };

                      setTimeout(clearError, 3000);
                      break;
                  }
                  break;

                default:
                  setError("Please Choose your Governorate");
                  const clearError = () => {
                    setError(null);
                  };

                  setTimeout(clearError, 3000);
                  break;
              }
              break;

            case "doctor":
              switch (governorate) {
                case "Alexandria":
                case "Aswan":
                case "Asyut":
                case "Beheira":
                case "Beni Suef":
                case "Cairo":
                case "Dakahlia":
                case "Damietta":
                case "Faiyum":
                case "Gharbia":
                case "Giza":
                case "Ismailia":
                case "Kafr El Sheikh":
                case "Luxor":
                case "Matrouh":
                case "Minya":
                case "Monufia":
                case "New Valley":
                case "North Sinai":
                case "Port Said":
                case "Qalyubia":
                case "Qena":
                case "Red Sea":
                case "Sharqia":
                case "Sohag":
                case "South Sinai":
                case "Suez":
                  switch (gender) {
                    case "male":
                    case "female":
                      window.location.href = "/doctorrole";

                      break;
                    default:
                      setError("Please Choose your Gender");
                      const clearError = () => {
                        setError(null);
                      };

                      setTimeout(clearError, 3000);
                      break;
                  }
                  break;

                default:
                  setError("Please Choose your Governorate");
                  const clearError = () => {
                    setError(null);
                  };

                  setTimeout(clearError, 3000);
                  break;
              }

              break;
            case "teacher":
              switch (governorate) {
                case "Alexandria":
                case "Aswan":
                case "Asyut":
                case "Beheira":
                case "Beni Suef":
                case "Cairo":
                case "Dakahlia":
                case "Damietta":
                case "Faiyum":
                case "Gharbia":
                case "Giza":
                case "Ismailia":
                case "Kafr El Sheikh":
                case "Luxor":
                case "Matrouh":
                case "Minya":
                case "Monufia":
                case "New Valley":
                case "North Sinai":
                case "Port Said":
                case "Qalyubia":
                case "Qena":
                case "Red Sea":
                case "Sharqia":
                case "Sohag":
                case "South Sinai":
                case "Suez":
                  switch (gender) {
                    case "male":
                    case "female":
                      window.location.href = "/teacherprobo";
                      break;
                    default:
                      setError("Please Choose your Gender");
                      const clearError = () => {
                        setError(null);
                      };

                      setTimeout(clearError, 3000);
                      break;
                  }
                  break;

                default:
                  setError("Please Choose your Governorate");
                  const clearError = () => {
                    setError(null);
                  };

                  setTimeout(clearError, 3000);
                  break;
              }

              break;
            default:
              setError("Please Choose your Role as a Donor");
              const clearError = () => {
                setError(null);
              };

              setTimeout(clearError, 3000);
              break;
          }
      } else {
        setError("Password Confirmation Failed");
        const clearError = () => {
          setError(null);
        };

        setTimeout(clearError, 3000);
      }
    }
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Donor Registration</h1>
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
            <select
              id="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value="choose">Choose</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
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
            <label htmlFor="address"> Enter Address: </label>
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
            <select
              id="governorate"
              value={governorate}
              onChange={(e) => setgovernorate(e.target.value)}
            >
              <option value="Choose">Choose</option>
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

          {/* <div>
                    <label htmlFor="lastname"> Enter Last Name: </label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname"> Enter Last Name: </label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div> */}

          <div>
            <form onSubmit={handleSubmit}>
              {/* Your form fields */}
              <div>
                <label htmlFor="type">Select Donor Type:</label>
                <select
                  id="type"
                  value={donorType}
                  onChange={(e) => setDonorType(e.target.value)}
                >
                  <option value="choose">Choose</option>
                  <option value="normal">Normal Donor</option>
                  <option value="doctor">Doctor</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              {/* Your other form fields */}
            </form>
          </div>
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
          {error && <p>{error}</p>}

          <Link to="/">
            <button> Back </button>
          </Link>
          <button> Register </button>
        </form>
      </div>
    </div>
  );
}

export default DonorReg;
