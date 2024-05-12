import React, { useState } from "react";
import { data } from "../Data/regorgname";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//var data = require("../data/regorgname.json");

function PopupACC({ closePopup, organisationName }) {
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
    <div className="home">
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
      <div className="headerContainer">
        <h1>Account Information</h1>

        <div className="popupContainer">
          {data.map((item, index) => (
            <div key={index}>
              {item.organisation === organisationName && (
                <div className="textInputContainer">
                  <p>
                    <p>Name</p>
                    <p>
                      <input
                        type="text"
                        placeholder={item.organisation}
                        disabled
                      />
                    </p>
                  </p>
                  <p>
                    <p>Type</p>
                    <p>
                      <input type="text" placeholder={item.type} disabled />
                    </p>
                  </p>
                  {areaButton ? (
                    <p>
                      <p>Area</p>
                      <p>
                        <input type="text" />
                      </p>
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Area</p>
                        <p>
                          <input type="text" placeholder={item.area} />
                        </p>
                        <p>
                          <button onClick={areaClick}>Delete</button>
                        </p>
                      </p>
                    </div>
                  )}

                  {governorateButton ? (
                    <p>
                      <p>Government</p>
                      <p>
                        <input type="text" />
                      </p>
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Government</p>
                        <p>
                          <input type="text" placeholder={item.governorate} />
                        </p>
                        <p>
                          <button onClick={governorateClick}> Delete </button>
                        </p>
                      </p>
                    </div>
                  )}

                  {detailsButton ? (
                    <p>
                      <p>Number</p>
                      <p>
                        <input type="text" />
                      </p>
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Number</p>
                        <p>
                          <input type="text" placeholder={item.details} />
                        </p>
                        <p>
                          <button onClick={detailsClick}> Delete </button>
                        </p>
                      </p>
                    </div>
                  )}

                  {addressButton ? (
                    <p>
                      <p>Address</p>
                      <p>
                        <input type="text" />
                      </p>
                    </p>
                  ) : (
                    <div>
                      <p>
                        <p>Address</p>
                        <p>
                          <input type="text" placeholder={item.address} />
                        </p>
                        <p>
                          <button onClick={addressClick}> Delete </button>
                        </p>
                      </p>
                    </div>
                  )}

                  {locationButton ? null : (
                    <div>
                      <p>
                        <p>Location</p>
                        {item.location}
                        <button
                        //onClick={locationClick}
                        >
                          Delete
                        </button>
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

export default PopupACC;
