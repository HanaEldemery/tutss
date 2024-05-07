import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropoffSelection() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(""); // Clear any error messages
    }
  };

  return (
    <div>
      <h2>Drop Off Time Selection for Donation Drop Off</h2>

      <label htmlFor="time-slot-select">Choose a time slot:</label>
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

      <button onClick={handleConfirmation}>Confirm Pickup Slot</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {showConfirmation && (
        <div className="confirm">
          <div className="confirm_message">
            <p>
              Drop Off Slot Confirmed, We will get in touch when the donation is
              about to arrive
            </p>
            <Link to="/organisation">
              {" "}
              {/*al 3amel organization yeghayarha lel howa 3ayzo*/}
              <button>Go Back To Main Page</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropoffSelection;
