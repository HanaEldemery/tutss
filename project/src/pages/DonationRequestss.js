import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import ClothesPopup from "../popups/ClothesPopup";
import BloodPopup from "../popups/BloodPopup";
import { ClothesList } from "../helpers/ClothesList";
import Popup from "../popups/Popup";
import FoodPopup from "../popups/FoodPopup";
import MedicalSuppliesPopup from "../popups/MedicalSuppliesPopup";
import ToysPopup from "../popups/ToysPopup";
import { SchoolSupList } from "../helpers/SchoolSupList";
import { BloodList } from "../lists/BloodList";
import { MedicalData } from "../Data/MedicalData";
import { TeachingData } from "../Data/Teachingdata";
import { ToysList } from "../lists/ToysList";
import { FoodList } from "../lists/FoodList";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";
 
function DonationRequestss() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [clickedId1, setClickedId1] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const [showPopup2, setShowPopup2] = useState(false);
  const [clickedId2, setClickedId2] = useState("");

  const [showPopup3, setShowPopup3] = useState(false);
  const [clickedId3, setClickedId3] = useState("");

  const [showPopup4, setShowPopup4] = useState(false);
  const [clickedId4, setClickedId4] = useState("");

  const [showPopup5, setShowPopup5] = useState(false);
  const [clickedId5, setClickedId5] = useState("");

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
  const viewDetails1 = (schoolsupItem) => {
    setShowPopup1(true);
    setClickedId1(schoolsupItem);
  };

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
const viewDetails4 = (FoodItem) => {
  setShowPopup4(true);
  setClickedId4(FoodItem);
};
const viewDetails5 = (medicalSupplyItem) => {
  setShowPopup5(true);
  setClickedId5(medicalSupplyItem);
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

  const viewDetails = (clothesItem) => {
    setShowPopup(true);
    setClickedId(clothesItem);
  };
  const viewDetails2 = (bloodItem) => {
    setShowPopup2(true);
    setClickedId2(bloodItem);
  };
  const viewDetails3 = (toyItem) => {
    setShowPopup3(true);
    setClickedId3(toyItem);
  };
  return (
      <div>

    <div>
    <Link to="/SchoolSuppliesDonations">
        <button> View All School Supplies Requests </button>
      </Link>
      <Link to="/ClothingRequests">
        <button> View All Clothing Requests </button>
      </Link>
    <Link to="/toysRequests">
        <button> View All Toy Requests </button>
      </Link>
      <Link to="/foodRequests">
        <button> View All Food Requests </button>
      </Link>
      <Link to="/medicalSuppliesRequests">
        <button> View All Medical Supplies Requests </button>
      </Link>
      <Link to="/bloodRequests">
        <button> View All Blood Requests </button>
      </Link>
      <Link to="/TeachingPosts">
        <button>Go to Teaching Posts</button>
      </Link>
      <Link to="/MedicalCases">
        <button>Go to Medical Cases</button>
      </Link>
      <br/>
      <input
                type="text"
                placeholder="Search by Type "
                value={searchTerm}
                onChange={handleChange}
                style={{ marginBottom: '20px' }}
            />
      <h1>Clothes Requests</h1>
          {showPopup ? (
            <ClothesPopup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="clothes-list">
              {ClothesList.map((clothesItem) => (
                <div key={clothesItem.id} className="clothes-item">
                  {clothesItem.id}- {clothesItem.name}
                  <button
                    onClick={() => viewDetails(clothesItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
          <h1>School Supplies Requests</h1>
          {showPopup1 ? (
          <Popup closePopup={setShowPopup1} theKey={clickedId1} />
        ) : (
          <div className="schoolsup-list">
            {SchoolSupList.map((SchoolSupItem) => (
              <div key={SchoolSupItem.id} className="schoolsup-item">
                {SchoolSupItem.id}- {SchoolSupItem.name}
                <button
                  onClick={() => viewDetails1(SchoolSupItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
         
         <h1>Toys Requests</h1>
        {showPopup3 ? (
          <ToysPopup closePopup={setShowPopup3} theKey={clickedId3} />
        ) : (
          <div className="toys-list">
            {ToysList.map((toyItem) => (
              <div key={toyItem.id} className="toy-item">
                {toyItem.id}- {toyItem.name}
                <button
                  onClick={() => viewDetails3(toyItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
                 <h1>Food Requests</h1>
        {showPopup4 ? (
          <FoodPopup closePopup={setShowPopup4} theKey={clickedId4} />
        ) : (
          <div className="food-list">
            {FoodList.map((foodItem) => (
              <div key={foodItem.id} className="food-item">
                {foodItem.id}- {foodItem.name}
                <button
                  onClick={() => viewDetails4(foodItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
           <h1>Medical Supplies Requests</h1>
           {showPopup5 ? (
          <MedicalSuppliesPopup closePopup={setShowPopup5} theKey={clickedId5} />
        ) : (
          <div className="medical-supplies-list">
            {MedicalSuppliesList.map((medicalSupplyItem) => (
              <div key={medicalSupplyItem.id} className="medical-supply-item">
                {medicalSupplyItem.id}- {medicalSupplyItem.name}
                <button
                  onClick={() => viewDetails5(medicalSupplyItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
        <h1>Blood Requests</h1>
         {showPopup2 ? (
          <BloodPopup closePopup={setShowPopup2} theKey={clickedId2} />
        ) : (
          <div className="blood-list">
            {BloodList.map((bloodItem) => (
              <div key={bloodItem.id} className="blood-item">
                {bloodItem.id}- {bloodItem.name}
                <button
                  onClick={() => viewDetails2(bloodItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
          </div>
        )}
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
                            {item.Location_Google_Marker} && <p> {item.Location_Google_Marker}</p>

          
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
        </div>
        
     


  );
}

export default DonationRequestss


  