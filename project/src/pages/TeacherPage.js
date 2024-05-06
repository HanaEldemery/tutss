import React, { useState, useEffect } from 'react';
import { TeachingData } from '../Data/Teachingdata';
import { MedicalData } from '../Data/MedicalData';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function TeacherPage() {
    const [data, setData] = useState([...TeachingData, ...MedicalData]);
    const [filteredData, setFilteredData] = useState([...TeachingData, ...MedicalData]);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState(null);
    const [showDonateOptions, setShowDonateOptions] = useState(null);

    const navigate = useNavigate(); // useNavigate instead of useHistory

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredData([...TeachingData, ...MedicalData]);
        } else {
            setFilteredData(data.filter(item => item.xyz && item.xyz.toLowerCase().includes(searchTerm.toLowerCase())));
        }
    }, [searchTerm, data]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleDetails = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
            setShowDonateOptions(null);
        } else {
            setExpandedId(id);
        }
    };

    const handleDonate = (id, xyz) => {
        if (xyz === 'Medical' || xyz === 'Teaching') {
            setShowDonateOptions(id); // Show donation options for valid items
        } else {
            navigate('/DonationSuccessful'); // Redirect using navigate
        }
    };

    const handleViewLess = () => {
        setExpandedId(null);
        setShowDonateOptions(null);
    };

    return (
        <div>
            <h1>Teacher and Medical Cases Page</h1>
            <input
                type="text"
                placeholder="Search by Type (Medical or Teaching)"
                value={searchTerm}
                onChange={handleChange}
                style={{ marginBottom: '20px' }}
            />
            {filteredData.map((item) => (
                <div key={item.id} style={{ margin: '10px', padding: '5px', border: '1px solid gray' }}>
                    <h2 onClick={() => toggleDetails(item.id)}>
                        {item.xyz} Donation Request {item.id}
                    </h2>
                    {expandedId === item.id && (
                        <div>
                            {item.Subject && <p>Subject: {item.Subject}</p>}
                            {item.Patient_Name && <p>Patient Name: {item.Patient_Name}</p>}
                            <p>Area: {item.Area || item.area}</p>
                            <p>Governorate: {item.Governorate}</p>
                            {item.No_of_students && <p>No. of Students: {item.No_of_students}</p>}
                            {item.Medical_Specialty && <p>Medical Specialty: {item.Medical_Specialty}</p>}
                            {item.Address && <p>Address: {item.Address}</p>}
                            {item.Case_Description && <p>Case Description: {item.Case_Description}</p>}
                            {item.Location_Google_Marker && <p>{item.Location_Google_Marker}</p>}
                            {showDonateOptions === item.id && (
                                <> 
                                    <Link to="/TransportationSelection">
                                        <button onClick={() => console.log('Would you like a ride?')} style={{ margin: '10px' }}>
                                            Would you like a ride?
                                        </button>
                                    </Link>
                                    <Link to="/DonationSuccessful">
                                        <button onClick={() => console.log('No thank you')} style={{ margin: '10px' }}>
                                            No thank you
                                        </button>
                                    </Link>
                                </>
                            )}
                            {showDonateOptions !== item.id && (
                                <button onClick={() => handleDonate(item.id, item.xyz)} style={{ margin: '10px' }}>
                                    Donate
                                </button>
                            )}
                            <button onClick={() => handleViewLess()} style={{ margin: '10px' }}>
                                View Less Details
                            </button>
                        </div>
                    )}
                    {expandedId !== item.id && (
                        <button onClick={() => toggleDetails(item.id)} style={{ margin: '10px' }}>
                            View Details
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TeacherPage;

