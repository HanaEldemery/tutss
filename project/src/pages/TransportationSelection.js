import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TransportationSelection() {
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Vehicles and their available time slots
    const vehicles = {
        truck: ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM'],
        car: ['10:00 AM - 12:00 PM', '2:00 PM - 4:00 PM'],
        motorcycle: ['11:00 AM - 1:00 PM', '3:00 PM - 5:00 PM']
    };

    const handleVehicleChange = (event) => {
        const vehicle = event.target.value;
        setSelectedVehicle(vehicle);
        setSelectedTimeSlot(''); // Reset time slot when vehicle changes
        setErrorMessage(''); // Clear error message law al user ekhtar both
    };

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
        setErrorMessage(''); // Clear error message law al user ekhtar both
    };

    const handleConfirmation = () => {
        if (!selectedVehicle || !selectedTimeSlot) {
            // Check if both vehicle and time slot are selected
            setErrorMessage('Please select both a vehicle and a time slot.');
        } else {
            setShowConfirmation(true);
            setErrorMessage(''); // Clear any error messages
        }
    };

    return (
        <div>
            <h2>Transportation Selection for Donation Pickup</h2>
            <label htmlFor="vehicle-select">Choose a vehicle:</label>
            <select id="vehicle-select" value={selectedVehicle} onChange={handleVehicleChange}>
                <option value="">Select a vehicle</option>
                {Object.keys(vehicles).map(vehicle => (
                    <option key={vehicle} value={vehicle}>{vehicle}</option>
                ))}
            </select>

            {selectedVehicle && (
                <>
                    <label htmlFor="time-slot-select">Choose a time slot:</label>
                    <select id="time-slot-select" value={selectedTimeSlot} onChange={handleTimeSlotChange}>
                        <option value="">Select a time slot</option>
                        {vehicles[selectedVehicle].map(timeSlot => (
                            <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                        ))}
                    </select>
                </>
            )}

            <button onClick={handleConfirmation}>Confirm Pickup Slot</button>

            {errorMessage && (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            )}

            {showConfirmation && (
                <div className="confirm">
                    <div className="confirm_message">
                        <p>Pickup Slot Confirmed, Thank You for Your Donation</p>
                        <Link to="/donationRequests">
                            <button>Go Back To Main Page</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TransportationSelection;
