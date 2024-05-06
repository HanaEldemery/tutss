import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Donor.css";
import Popup from "../components/Popup";
import ViewAllOrganisations from "../pages/ViewAllOrganisations";

const Donor = () => {
  const [flag, setFlag] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const notify = () => {
    toast(" Estimated Delivery Time: 2 days ", {
      autoClose: false,
      onClose: () => setFlag(true),
    });
  };

  const viewList = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    if (flag) {
      toast(" Donation has Arrived! ", {
        autoClose: false,
      });
      setFlag(false);
    }
  }, [flag]);

  return (
    <div>
      <div className="donor">
        {showPopup ? null : (
          <div className="buttonnow">
            <button onClick={notify}>DONATE</button>
            <button onClick={viewList}>VIEW ALL ORGANISATIONS</button>
          </div>
        )}
        {showPopup && <ViewAllOrganisations closePopup={setShowPopup} />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Donor;
