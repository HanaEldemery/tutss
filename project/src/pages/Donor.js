import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Donor.css";
import Popup from "../components/Popup";
import ViewAllOrganisationsForDonor from "../pages/ViewAllOrganisationsForDonor";
import ViewEditAccount from "../pages/ViewEditAccount";

const Donor = ({ idOfDonorFromLogin }) => {
  idOfDonorFromLogin = 1;
  const [flag, setFlag] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const notify = () => {
    toast(" Estimated Delivery Time: 2 days ", {
      autoClose: false,
      onClose: () => setFlag(true),
    });
  };

  const viewList = () => {
    setShowPopup(true);
  };

  const viewEditAccount = () => {
    setShowAccountInfo(true);
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
        {showPopup || showAccountInfo ? null : (
          <div className="buttonnow">
            <button onClick={notify}>DONATE</button>
            <button onClick={viewList}>VIEW ALL ORGANISATIONS</button>
            <button onClick={viewEditAccount}>ACCOUNT INFORMATION</button>
          </div>
        )}
        {showPopup && (
          <ViewAllOrganisationsForDonor closePopup={setShowPopup} />
        )}
        {showAccountInfo && (
          <ViewEditAccount
            closePopup={setShowAccountInfo}
            donorId={idOfDonorFromLogin}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Donor;
