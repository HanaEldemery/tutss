import React, { useState } from "react";
import "../styles/Donor.css";
import ViewAllOrganisations from "../pages/ViewAllOrganisations";

const Admin = () => {
  const [showPopup, setShowPopup] = useState(false);

  const viewList = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div className="donor">
        {showPopup ? null : (
          <div className="buttonnow">
            <button onClick={viewList}>SHOW ALL ORGANISATIONS</button>
          </div>
        )}
        {showPopup && <ViewAllOrganisations closePopup={setShowPopup} />}
      </div>
    </div>
  );
};

export default Admin;
