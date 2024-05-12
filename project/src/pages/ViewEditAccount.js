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
      <div>
        <div className="title">
          <h1>Account Information</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.id === donorId && (
                <div className="textInputContainer">
                  <p>
                    <p>Name</p>

                    <input
                      type="text"
                      placeholder={item.patientName}
                      disabled
                    />
                  </p>

                  {detailsButton ? (
                    <p>
                      <p>Donor Type</p>
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>Donor Type</p>
                      <input type="text" placeholder={item.typeDonor} />
                      <p>
                        <button
                          onClick={detailsClick}
                          className="search-button"
                        >
                          Delete
                        </button>
                      </p>
                    </div>
                  )}
                  {areaButton ? (
                    <p>
                      <p>Address</p>
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Address</p>
                        <input type="text" placeholder={item.address} />
                        <p>
                          <button onClick={areaClick} className="search-button">
                            Delete
                          </button>
                        </p>
                      </p>
                    </div>
                  )}
                  {governorateButton ? (
                    <p>
                      <p>Age</p>
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Age</p>

                        <input type="text" placeholder={item.age} />
                        <p>
                          <button
                            onClick={governorateClick}
                            className="search-button"
                          >
                            Delete
                          </button>
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <button onClick={() => closePopup(false)}> Back </button>
          <button onClick={notify}> Save </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ViewEditAccount;
