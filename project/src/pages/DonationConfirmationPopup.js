import React from "react";

function DonationConfirmationPopup({ handleNoThankYou, handleRide }) {
  return (
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
      <h2>Donate</h2>
      <p>Would you like a ride?</p>
      <button onClick={handleRide}>Yes</button>
      <button onClick={handleNoThankYou}>No</button>
    </div>
  );
}

export default DonationConfirmationPopup;
