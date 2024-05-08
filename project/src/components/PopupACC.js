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
              {item.organisation === organisationName && (
                <div className="textInputContainer">
                  <p>
                    Name:
                    <input
                      type="text"
                      placeholder={item.organisation}
                      disabled
                    />
                  </p>
                  <p>
                    Type:
                    <input type="text" placeholder={item.type} disabled />
                  </p>
                  {areaButton ? (
                    <p>
                      Area:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Area:
                        <input type="text" placeholder={item.area} />
                        <button onClick={areaClick} className="search-button">
                          Remove
                        </button>
                      </p>
                    </div>
                  )}

                  {governorateButton ? (
                    <p>
                      Government:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Government:
                        <input type="text" placeholder={item.governorate} />
                        <button
                          onClick={governorateClick}
                          className="search-button"
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  )}

                  {detailsButton ? (
                    <p>
                      Number:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Number:
                        <input type="text" placeholder={item.details} />
                        <button
                          onClick={detailsClick}
                          className="search-button"
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  )}

                  {addressButton ? (
                    <p>
                      Address:
                      <input type="text" />
                    </p>
                  ) : (
                    <div>
                      <p>
                        Address:
                        <input type="text" placeholder={item.address} />
                        <button
                          onClick={addressClick}
                          className="search-button"
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </p>
                    </div>
                  )}

                  {locationButton ? null : (
                    <div>
                      <p>
                        Location:
                        {item.location}
                        <button
                          //onClick={locationClick}
                          className="search-button"
                        >
                          {" "}
                          Remove{" "}
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
          <button onClick={() => closePopup(false)}>
            {" "}
            Collapse Account Information{" "}
          </button>
          <button onClick={notify}> Save </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PopupACC;
