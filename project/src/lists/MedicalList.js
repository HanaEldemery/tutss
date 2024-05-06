import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function MedicalList({ postsList }) {
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [showDonateOptions, setShowDonateOptions] = useState(null);
    const navigate = useNavigate();

    const togglePostDetail = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
        setShowDonateOptions(null); // Reset the donation options state
    };

    const handleDonate = (id) => {
        setShowDonateOptions(id);
    };

    const handleTransportation = () => {
        navigate('/TransportationSelection'); 
    };

    const handleDonationSuccess = () => {
        navigate('/DonationSuccessful'); 
    };

    return (
        <div className='MedicalList'>
            {postsList.map((item) => (
                <div key={item.id}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                        Medical Case ID: {item.id}
                    </h3>
                    {expandedPostId === item.id && (
                        <div>
                            <p>Medical Specialty: {item.Medical_Specialty}</p>
                            <p>Organization Name: {item.Organization_Name}</p>
                            <p>Area: {item.Area}</p>
                            <p>Governorate: {item.Governorate}</p>
                            <p>Patient Name: {item.Patient_Name}</p>
                            <p>Age: {item.Age}</p>
                            <p>Gender: {item.Gender}</p>
                            <p>Weight: {item.Weight}</p>
                            <p>Location: {item.Location_Google_Marker}</p>
                            <p>Address: {item.Address}</p>
                            <p>Case Description: {item.Case_Description}</p>
                            {showDonateOptions === item.id ? (
                                <div>
                                    <button onClick={handleTransportation} style={{ margin: '10px', padding: '5px 20px' }}>
                                        Would you like a ride?
                                    </button>
                                    <button onClick={handleDonationSuccess} style={{ margin: '10px', padding: '5px 20px' }}>
                                        No, I have a ride
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => handleDonate(item.id)} style={{ margin: '10px 0', padding: '5px 20px' }}>
                                    Donate
                                </button>
                            )}
                        </div>
                    )}
                    <button onClick={() => togglePostDetail(item.id)}>
                        {expandedPostId === item.id ? 'Less Details' : 'View Details'}
                    </button>
                </div>
            ))}
        </div>
    );
}
export default MedicalList;
