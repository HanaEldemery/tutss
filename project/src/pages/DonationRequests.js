//Normal Page

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import ClothesPopup from "../Popups/ClothesPopup";
import BloodPopup from "../Popups/BloodPopup";
import { ClothesList } from "../helpers/ClothesList";
import Popup from "../Popups/Popup";
import FoodPopup from "../Popups/FoodPopup";
import MedicalSuppliesPopup from "../Popups/MedicalSuppliesPopup";
import ToysPopup from "../Popups/ToysPopup";
import { SchoolSupList } from "../helpers/SchoolSupList";
import { BloodList } from "../lists/BloodList";
import { ToysList } from "../lists/ToysList";
import { FoodList } from "../lists/FoodList";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";

function DonationRequests() {
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

  const [expandedId, setExpandedId] = useState(null);
  const [showDonateOptions, setShowDonateOptions] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchTerm(search);
  };

  const filterList = (list) => {
    return list.filter((item) => item.xyz.toLowerCase().includes(searchTerm));
  };

  const filteredClothesList = searchTerm
    ? filterList(ClothesList)
    : ClothesList;
  const filteredSchoolSupList = searchTerm
    ? filterList(SchoolSupList)
    : SchoolSupList;
  const filteredToysList = searchTerm ? filterList(ToysList) : ToysList;
  const filteredFoodList = searchTerm ? filterList(FoodList) : FoodList;
  const filteredMedicalSuppliesList = searchTerm
    ? filterList(MedicalSuppliesList)
    : MedicalSuppliesList;
  const filteredBloodList = searchTerm ? filterList(BloodList) : BloodList;

  const viewDetails1 = (schoolsupItem) => {
    setShowPopup1(true);
    setClickedId1(schoolsupItem);
  };

  const viewDetails4 = (FoodItem) => {
    setShowPopup4(true);
    setClickedId4(FoodItem);
  };
  const viewDetails5 = (medicalSupplyItem) => {
    setShowPopup5(true);
    setClickedId5(medicalSupplyItem);
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
        <br />
        <input
          type="text"
          placeholder="Search by Type "
          value={searchTerm}
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />
        {showPopup ? (
          <ClothesPopup closePopup={setShowPopup} theKey={clickedId} />
        ) : showPopup1 ? (
          <Popup closePopup={setShowPopup1} theKey={clickedId1} />
        ) : showPopup3 ? (
          <ToysPopup closePopup={setShowPopup3} theKey={clickedId3} />
        ) : showPopup4 ? (
          <FoodPopup closePopup={setShowPopup4} theKey={clickedId4} />
        ) : showPopup5 ? (
          <MedicalSuppliesPopup
            closePopup={setShowPopup5}
            theKey={clickedId5}
          />
        ) : showPopup2 ? (
          <BloodPopup closePopup={setShowPopup2} theKey={clickedId2} />
        ) : (
          <div>
            <div className="clothes-list">
              {filteredClothesList.map((clothesItem) => (
                <div key={clothesItem.id} className="clothes-item">
                  {clothesItem.name}
                  <button
                    onClick={() => viewDetails(clothesItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <div className="schoolsup-list">
              {filteredSchoolSupList.map((SchoolSupItem) => (
                <div key={SchoolSupItem.id} className="schoolsup-item">
                  {SchoolSupItem.name}
                  <button
                    onClick={() => viewDetails1(SchoolSupItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <div className="toys-list">
              {filteredToysList.map((toyItem) => (
                <div key={toyItem.id} className="toy-item">
                  {toyItem.name}
                  <button
                    onClick={() => viewDetails3(toyItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <div className="food-list">
              {filteredFoodList.map((foodItem) => (
                <div key={foodItem.id} className="food-item">
                  {foodItem.name}
                  <button
                    onClick={() => viewDetails4(foodItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <div className="medical-supplies-list">
              {filteredMedicalSuppliesList.map((medicalSupplyItem) => (
                <div key={medicalSupplyItem.id} className="medical-supply-item">
                  {medicalSupplyItem.name}
                  <button
                    onClick={() => viewDetails5(medicalSupplyItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <div className="blood-list">
              {filteredBloodList.map((bloodItem) => (
                <div key={bloodItem.id} className="blood-item">
                  {bloodItem.name}
                  <button
                    onClick={() => viewDetails2(bloodItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link to="/Commonpagegeneral">
        <button> Back </button>
      </Link>
    </div>
  );
}

export default DonationRequests;
