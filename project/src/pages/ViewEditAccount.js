import React, { useState } from "react";
import { data } from "../Data/regdonor";
import { ToastContainer, toast } from "react-toastify";
//var data = require("../data/regorgname.json");

function ViewEditAccount({ closePopup, donorId }) {
  const notify = () => {
    // toast(" Information Saved! ", { autoClose: false });
    // closePopup(false);
    setPopupMessage("Information Saved!");
    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  const [areaButton, setAreaButton] = useState(false);
  const [governorateButton, setGovernorateButton] = useState(false);
  const [detailsButton, setDetailsButton] = useState(false);
  const [addressButton, setAddressButton] = useState(false);
  const [locationButton, setLocationButton] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const areaClick = () => {
    setAreaButton(true);
  };

  const governorateClick = () => {
    setGovernorateButton(true);
  };

  const detailsClick = () => {
    setDetailsButton(true);
  };

  const addressClick = () => {
    setAddressButton(true);
  };

  const locationClick = () => {
    setLocationButton(true);
  };

  return (
    <div className="popupBackground">
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
      <div className="popupContainer">
        <div className="title">
          <h1>Account Information</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.id === donorId && (
                <div className="textInputContainer">
                  <p>
                    Name:
                    <input
                      type="text"
                      placeholder={item.patientName}
                      disabled
                    />
                  </p>

                  {detailsButton ? (
                    <p>
                      Donor Type:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      Donor Type:
                      <input type="text" placeholder={item.typeDonor} />
                      <button onClick={detailsClick} className="search-button">
                        Remove
                      </button>
                    </div>
                  )}
                  {areaButton ? (
                    <p>
                      Address:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Address:
                        <input type="text" placeholder={item.address} />
                        <button onClick={areaClick} className="search-button">
                          Remove
                        </button>
                      </p>
                    </div>
                  )}
                  {governorateButton ? (
                    <p>
                      Age:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Age:
                        <input type="text" placeholder={item.age} />
                        <button
                          onClick={governorateClick}
                          className="search-button"
                        >
                          Remove
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> Back </button>
          <button onClick={notify}> Save </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ViewEditAccount;
