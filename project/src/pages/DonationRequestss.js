//DOCTOR DONATION REQUESTS

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import ClothesPopup from "../Popups/ClothesPopup";
import BloodPopup from "../Popups/BloodPopup";
import { ClothesList } from "../helpers/ClothesList";
import Popup from "../Popups/Popup";
import FoodPopup from "../Popups/FoodPopup";
import MedicalSuppliesPopup from "../Popups/MedicalSuppliesPopup";
import ToysPopup from "../Popups/ToysPopup";
import { SchoolSupList } from "../helpers/SchoolSupList";
import { BloodList } from "../lists/BloodList";
import { MedicalData } from "../Data/MedicalData";
import { ToysList } from "../lists/ToysList";
import { FoodList } from "../lists/FoodList";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";
import MedicalPopup from "../Popups/MedicalPopup";
 
function DonationRequestss() {
  const [showMedicalPopup, setShowMedicalPopup] = useState(false);
  const [clickedMedicalId, setClickedMedicalId] = useState(null);

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

  const [data, setData] = useState([ ...MedicalData]);
  const [filteredData, setFilteredData] = useState([ ...MedicalData]);
  const [expandedId, setExpandedId] = useState(null);
  const [showDonateOptions, setShowDonateOptions] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchTerm(search);
  };

  const filterList = (list) => {
    return list.filter(item => item.xyz.toLowerCase().includes(searchTerm));
  };

  const filteredClothesList = searchTerm ? filterList(ClothesList) : ClothesList;
  const filteredSchoolSupList = searchTerm ? filterList(SchoolSupList) : SchoolSupList;
  const filteredToysList = searchTerm ? filterList(ToysList) : ToysList;
  const filteredFoodList = searchTerm ? filterList(FoodList) : FoodList;
  const filteredMedicalSuppliesList = searchTerm ? filterList(MedicalSuppliesList) : MedicalSuppliesList;
  const filteredBloodList = searchTerm ? filterList(BloodList) : BloodList;
  const filteredMedicalList = searchTerm ? filterList(MedicalData) : MedicalData;


  const viewMedicalDetails = (id) => {
    setShowMedicalPopup(true);
    setClickedMedicalId(id);
  };


  const viewDetails1 = (schoolsupItem) => {
    setShowPopup1(true);
    setClickedId1(schoolsupItem);
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
        navigate('/TransportationSelection'); // Redirect using navigate
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

  
  //whattttttt theeeee hecckkkkkkkjkkjk
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
          {showPopup ? (
            <ClothesPopup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="clothes-list">
              {filteredClothesList.map((clothesItem) => (
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
          {showPopup1 ? (
          <Popup closePopup={setShowPopup1} theKey={clickedId1} />
        ) : (
          <div className="schoolsup-list">
            {filteredSchoolSupList.map((SchoolSupItem) => (
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
         
        {showPopup3 ? (
          <ToysPopup closePopup={setShowPopup3} theKey={clickedId3} />
        ) : (
          <div className="toys-list">
            {filteredToysList.map((toyItem) =>  (
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
        {showPopup4 ? (
          <FoodPopup closePopup={setShowPopup4} theKey={clickedId4} />
        ) : (
          <div className="food-list">
           {filteredFoodList.map((foodItem) =>(
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
           {showPopup5 ? (
          <MedicalSuppliesPopup closePopup={setShowPopup5} theKey={clickedId5} />
        ) : (
          <div className="medical-supplies-list">
           {filteredMedicalSuppliesList.map((medicalSupplyItem) => (
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
         {showPopup2 ? (
          <BloodPopup closePopup={setShowPopup2} theKey={clickedId2} />
        ) : (
          <div className="blood-list">
              {filteredBloodList.map((bloodItem) => (
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
{showMedicalPopup ? (
 <MedicalPopup
  closePopup={() => setShowMedicalPopup(false)}
  theKey={clickedMedicalId}
  showDonateOptions={showDonateOptions}
  setShowDonateOptions={setShowDonateOptions}
  handleDonate={handleDonate}
  handleViewLess={handleViewLess}
/>
) : (
  <div className="medical-list">
    {filteredMedicalList.map((medicalItem) =>  (
      <div key={medicalItem.id} className="medical-item">
        {medicalItem.id} - {medicalItem.Patient_Name} 

        <button onClick={() => viewMedicalDetails(medicalItem.id)} className="button-used">
          View Details
        </button>
      </div>
    ))}
  </div>
)}
     
                        </div>
        </div>
        
     


  );
}

export default DonationRequestss


  