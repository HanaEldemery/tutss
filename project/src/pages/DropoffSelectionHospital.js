import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropoffSelection() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  // Available time slots for donation dropoff
  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "10:00 AM - 12:00 PM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "2:00 PM - 4:00 PM",
    "3:00 PM - 5:00 PM",
  ];

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
    setErrorMessage(""); // Clear error message when user chooses a time
  };

  const handleConfirmation = () => {
    if (!selectedTimeSlot) {
      setErrorMessage("Please select a time slot.");
    } else {
      setShowConfirmation(true);
      setPopupMessage(
        `Drop Off Slot Confirmed, We will get in touch when the donation is about to arrive!`
      );
      setTimeout(() => {
        setPopupMessage("");
        // Redirect to another page after the popup message disappears
        window.location.href = "/organisation";
      }, 3000);
      setErrorMessage(""); // Clear any error messages
    }
  };

  return (
    <div className="home">
      <div className="popup-overlay">
        <div className="popup-content">
          <h1>Drop Off Time Selection for Donation Drop Off</h1>

          <select
            id="time-slot-select"
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>

          {errorMessage && <p>{errorMessage}</p>}

          {showConfirmation}
          <br />
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
          <div className="footer_clothesPopup">
            <Link to="/organisationHospital">
              {/*al 3amel organization yeghayarha lel howa 3ayzo*/}
              <button className="detailButton_clothesPopup">Back</button>
            </Link>
            <button
              onClick={handleConfirmation}
              className="detailButton_clothesPopup"
            >
              Confirm Pickup Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropoffSelection;
