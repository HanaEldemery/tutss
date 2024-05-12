import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TransportationSelection({ closePopup }) {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState(""); // State for popup notifications

  const vehicles = {
    Truck: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    Car: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    Motorcycle: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
  };

  const handleVehicleChange = (event) => {
    const vehicle = event.target.value;
    setSelectedVehicle(vehicle);
    setSelectedTimeSlot("");
    setErrorMessage("");
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
    setErrorMessage("");
  };

  const handleConfirmation = () => {
    if (!selectedVehicle || !selectedTimeSlot) {
      setErrorMessage("Please select both a vehicle and a time slot.");
    } else {
      setShowConfirmation(true);
      setErrorMessage("");

      // Show notifications sequentially
      setTimeout(() => {
        setPopupMessage("A driver has accepted your request"); // New notification
        setTimeout(() => {
          setPopupMessage("Estimated Arrival Time: 7 mins");
          setTimeout(() => {
            setPopupMessage("Your driver has arrived!");
            setTimeout(() => {
              closePopup(false);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 1000);
    }
  };

  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setPopupMessage("A driver has accepted your request");
        setTimeout(() => {
          setPopupMessage("Estimated Arrival Time: 7 mins");
          setTimeout(() => {
            setPopupMessage("Your driver has arrived!");
            setTimeout(() => {
              closePopup(false);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 1000);
    }
  }, [showConfirmation, closePopup]);

  return (
    <div>
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
            Index: 1,
          }}
        >
          {popupMessage}
        </div>
      )}
      <h2>Transportation Selection for Donation Pickup</h2>
      <div className="dropdown-container">
        <label htmlFor="vehicle-select">
          Choose a vehicle:
          <br />
        </label>
        <select
          id="vehicle-select"
          value={selectedVehicle}
          onChange={handleVehicleChange}
        >
          <option value="">Select a vehicle</option>
          {Object.keys(vehicles).map((vehicle) => (
            <option key={vehicle} value={vehicle}>
              {vehicle}
            </option>
          ))}
        </select>
      </div>

      {selectedVehicle && (
        <div className="dropdown-container">
          <label htmlFor="time-slot-select">
            Choose a time slot:
            <br />
          </label>
          <select
            id="time-slot-select"
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
          >
            <option value="">Select a time slot</option>
            {vehicles[selectedVehicle].map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="donate-button" onClick={handleConfirmation}>
        Confirm Pickup Slot
      </button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default TransportationSelection;
