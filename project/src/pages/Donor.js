import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
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
            <button onClick={notify}>Donate</button>
            <button onClick={viewList}>View All Organizations</button>
            <button onClick={viewEditAccount}>Account Information</button>
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
