import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TransportationSelection({ closePopup }) {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState(""); // State for popup notifications

  const vehicles = {
    truck: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
    car: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    motorcycle: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
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
        setPopupMessage("A driver has accepted your order!"); // New notification
        setTimeout(() => {
          setPopupMessage("Estimated Delivery Time: 2 days");
          setTimeout(() => {
            setPopupMessage("Your order has been delivered!");
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
        setPopupMessage("A driver has accepted your order!");
        setTimeout(() => {
          setPopupMessage("Estimated Delivery Time: 2 days");
          setTimeout(() => {
            setPopupMessage("Your order has been delivered!");
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
            zIndex: 1,
          }}
        >
          {popupMessage}
        </div>
      )}
      <h2>Transportation Selection for Donation Pickup</h2>
      <label htmlFor="vehicle-select">Choose a vehicle:</label>
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

      {selectedVehicle && (
        <>
          <label htmlFor="time-slot-select">Choose a time slot:</label>
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
        </>
      )}

      <button onClick={handleConfirmation}>Confirm Pickup Slot</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default TransportationSelection;
