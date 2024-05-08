import React, { useState } from "react";
import { data } from "../Data/regdonor";
import { ToastContainer, toast } from "react-toastify";
//var data = require("../data/regorgname.json");

function ViewEditAccount({ closePopup, donorId }) {
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
              {item.id === donorId && (
                <div className="textInputContainer">
                  <input type="text" placeholder={item.patientName} disabled />
                  {detailsButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.typeDonor} />
                      <button onClick={detailsClick} className="search-button">
                        REMOVE
                      </button>
                    </div>
                  )}
                  {areaButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.address} />
                      <button onClick={areaClick} className="search-button">
                        REMOVE
                      </button>
                    </div>
                  )}
                  {governorateButton ? (
                    <input type="text" />
                  ) : (
                    <div>
                      <input type="text" placeholder={item.age} />
                      <button
                        onClick={governorateClick}
                        className="search-button"
                      >
                        REMOVE
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

export default ViewEditAccount;
