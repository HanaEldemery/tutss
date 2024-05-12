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
import { MedicalData } from "../Data/MedicalData";
import { ToysList } from "../lists/ToysList";
import { FoodList } from "../lists/FoodList";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";
import TeacherPopup from "../Popups/TeacherPopup";

function DonationRequestssDoctor() {
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  const [clickedTeacherId, setClickedTeacherId] = useState(null);
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

  const [data, setData] = useState([...MedicalData]);
  const [filteredData, setFilteredData] = useState([...MedicalData]);
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
  const filteredMedicalList = searchTerm
    ? filterList(MedicalData)
    : MedicalData;

  const viewTeacherDetails = (id) => {
    setShowTeacherPopup(true);
    setClickedTeacherId(id);
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
    if (xyz === "Medical" || xyz === "Teaching") {
      setShowDonateOptions(id); // Show donation options for valid items
    } else {
      navigate("/TransportationSelection"); // Redirect using navigate
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
    <div className="home">
      <div className="headerContainer">
        <div className="button-container">
          <Link to="/SchoolSuppliesDonationsTeacher">
            <button className="donate-button">
              View All School Supplies Requests
            </button>
          </Link>
          <Link to="/ClothingRequestsTeacher">
            <button className="donate-button">
              View All Clothing Requests
            </button>
          </Link>
          <Link to="/toysRequestsTeacher">
            <button className="donate-button">View All Toy Requests</button>
          </Link>
          <Link to="/foodRequestsTeacher">
            <button className="donate-button">View All Food Requests</button>
          </Link>
          <Link to="/medicalSuppliesRequestsTeacher">
            <button className="donate-button">
              View All Medical Supplies Requests
            </button>
          </Link>
          <Link to="/bloodRequestsTeacher">
            <button className="donate-button">View All Blood Requests</button>
          </Link>
          <Link to="/MedicalCases">
            <button className="donate-button">View All Medical Posts</button>
          </Link>
        </div>
        <br />
        <input
          type="text"
          placeholder="Search by Type "
          value={searchTerm}
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />
        {showPopup ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <ClothesPopup closePopup={setShowPopup} theKey={clickedId} />
            </div>
          </div>
        ) : showPopup1 ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <Popup closePopup={setShowPopup1} theKey={clickedId1} />
            </div>
          </div>
        ) : showPopup3 ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <ToysPopup closePopup={setShowPopup3} theKey={clickedId3} />
            </div>
          </div>
        ) : showPopup4 ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <FoodPopup closePopup={setShowPopup4} theKey={clickedId4} />
            </div>
          </div>
        ) : showPopup5 ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <MedicalSuppliesPopup
                closePopup={setShowPopup5}
                theKey={clickedId5}
              />
            </div>
          </div>
        ) : showPopup2 ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <BloodPopup closePopup={setShowPopup2} theKey={clickedId2} />
            </div>
          </div>
        ) : showTeacherPopup ? (
          <div className="popup-overlay">
            <div className="popup-content">
              <TeacherPopup
                closePopup={() => setShowTeacherPopup(false)}
                theKey={clickedTeacherId}
                showDonateOptions={showDonateOptions}
                setShowDonateOptions={setShowDonateOptions}
                handleDonate={handleDonate}
                handleViewLess={handleViewLess}
              />
            </div>
          </div>
        ) : (
          <div className="menu">
            <div className="menuList">
              {filteredClothesList.map((clothesItem) => (
                <div
                  key={clothesItem.id}
                  className="menuItem"
                  onClick={() => viewDetails(clothesItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${clothesItem.image})`,
                      }}
                    />
                    <p>{clothesItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredSchoolSupList.map((SchoolSupItem) => (
                <div
                  key={SchoolSupItem.id}
                  className="menuItem"
                  onClick={() => viewDetails1(SchoolSupItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${SchoolSupItem.image})`,
                      }}
                    />
                    <p>{SchoolSupItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredToysList.map((toyItem) => (
                <div
                  key={toyItem.id}
                  className="menuItem"
                  onClick={() => viewDetails3(toyItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${toyItem.image})`,
                      }}
                    />
                    <p>{toyItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredFoodList.map((foodItem) => (
                <div
                  key={foodItem.id}
                  className="menuItem"
                  onClick={() => viewDetails4(foodItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${foodItem.image})`,
                      }}
                    />
                    <p>{foodItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredMedicalSuppliesList.map((medicalSupplyItem) => (
                <div
                  key={medicalSupplyItem.id}
                  className="menuItem"
                  onClick={() => viewDetails5(medicalSupplyItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${medicalSupplyItem.image})`,
                      }}
                    />
                    <p>{medicalSupplyItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredBloodList.map((bloodItem) => (
                <div
                  key={bloodItem.id}
                  className="menuItem"
                  onClick={() => viewDetails2(bloodItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${bloodItem.image})`,
                      }}
                    />
                    <p>{bloodItem.name}</p>
                  </div>
                </div>
              ))}
              {filteredMedicalList.map((MedicalItem) => (
                <div
                  key={MedicalItem.id}
                  className="menuItem"
                  onClick={() => viewTeacherDetails(MedicalItem.id)}
                >
                  <div className="item-container">
                    <div
                      className="menuImage"
                      style={{
                        backgroundImage: `url(${MedicalItem.image})`,
                      }}
                    />
                    <p> {MedicalItem.Medical_Specialty} </p>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <Link to="/CommonPageTeacher">
            <button className="donate-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DonationRequestssDoctor;
