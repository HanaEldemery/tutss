import React, { useState } from "react";
import ViewAllOrganisations from "../pages/ViewAllOrganisations";
import ViewAllDonors from "../pages/ViewAllDonors";

const Admin = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDonorPopup, setShowDonorPopup] = useState(true);

  const viewList = () => {
    setShowPopup(true);
  };

  const viewListDonor = () => {
    setShowDonorPopup(true);
  };

  return (
    <div>
      <div className="donor">
        {showPopup || showDonorPopup ? null : (
          <div className="buttonnow">
            <button onClick={viewList}>View Organizations</button>
            <button onClick={viewListDonor}> View Donors </button>
          </div>
        )}
        {showPopup && <ViewAllOrganisations closePopup={setShowPopup} />}
        {showDonorPopup && <ViewAllDonors closePopup={setShowDonorPopup} />}
      </div>
    </div>
  );
};

export default Admin;
