import React, { useState } from "react";
import { data } from "../Data/regorgname";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//var data = require("../data/regorgname.json");

function PopupACC({ closePopup, organisationName }) {
  const notify = () => {
    toast(" Information Saved! ", { autoClose: false });
    //closePopup(false);
  };

  const [areaButton, setAreaButton] = useState(false);
  const [governorateButton, setGovernorateButton] = useState(false);
  const [detailsButton, setDetailsButton] = useState(false);
  const [addressButton, setAddressButton] = useState(false);
  const [locationButton, setLocationButton] = useState(false);

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
      <div className="popupContainer">
        <div className="title">
          <h1>Edit Info</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.organisation === organisationName && (
                <div className="textInputContainer">
                  <input type="text" placeholder={item.organisation} disabled />
                  <input type="text" placeholder={item.type} disabled />
                  {areaButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.area} />
                      <button onClick={areaClick} className="search-button">
                        REMOVE
                      </button>
                    </div>
                  )}

                  {governorateButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.governorate} />
                      <button
                        onClick={governorateClick}
                        className="search-button"
                      >
                        {" "}
                        REMOVE{" "}
                      </button>
                    </div>
                  )}

                  {detailsButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.details} />
                      <button onClick={detailsClick} className="search-button">
                        {" "}
                        REMOVE{" "}
                      </button>
                    </div>
                  )}

                  {addressButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.address} />
                      <button onClick={addressClick} className="search-button">
                        {" "}
                        REMOVE{" "}
                      </button>
                    </div>
                  )}

                  {locationButton ? null : (
                    <div>
                      {item.location}

                      <button onClick={locationClick} className="search-button">
                        {" "}
                        REMOVE{" "}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> BACK </button>
          <button onClick={notify}> SAVE </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PopupACC;
