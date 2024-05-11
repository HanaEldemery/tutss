import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Table from "react-bootstrap/Table";

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

  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="home">
          <div className="button-container">
            <Link to="/SchoolSuppliesDonations">
              <button className="donate-button">
                View All School Supplies Requests
              </button>
            </Link>
            <Link to="/ClothingRequests">
              <button className="donate-button">View All Clothing Requests</button>
            </Link>
            <Link to="/toysRequests">
              <button className="donate-button">View All Toy Requests</button>
            </Link>
            <Link to="/foodRequests">
              <button className="donate-button">View All Food Requests</button>
            </Link>
            <Link to="/medicalSuppliesRequests">
              <button className="donate-button">
                View All Medical Supplies Requests
              </button>
            </Link>
            <Link to="/bloodRequests">
              <button className="donate-button">View All Blood Requests</button>
            </Link>
      </div>
      <br />
      <input
        type="text"
        placeholder="Search by Type "
        value={searchTerm}
        onChange={handleChange}
        className="inputForm"
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
      ) : (
        <div className="headerContainer">
          <div className="table-wrapper">
            <div className="item-container">
              <Table className="table">
                <tbody className="containing">
                  {filteredClothesList.map((clothesItem) => (
                    <tr key={clothesItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{clothesItem.name}</p>
                          <button
                            onClick={() => viewDetails(clothesItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredSchoolSupList.map((SchoolSupItem) => (
                    <tr key={SchoolSupItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{SchoolSupItem.name}</p>
                          <button
                            onClick={() => viewDetails1(SchoolSupItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredToysList.map((toyItem) => (
                    <tr key={toyItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{toyItem.name}</p>
                          <button
                            onClick={() => viewDetails3(toyItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredFoodList.map((foodItem) => (
                    <tr key={foodItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{foodItem.name}</p>
                          <button
                            onClick={() => viewDetails4(foodItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredMedicalSuppliesList.map((medicalSupplyItem) => (
                    <tr key={medicalSupplyItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{medicalSupplyItem.name}</p>
                          <button
                            onClick={() => viewDetails5(medicalSupplyItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredBloodList.map((bloodItem) => (
                    <tr key={bloodItem.id}>
                      <td>
                        <div className="item-container">
                          <p>{bloodItem.name}</p>
                          <button
                            onClick={() => viewDetails2(bloodItem.id)}
                            className="detail-button"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <Link to="/Commonpagegeneral">
                          <button className="back-button">Back</button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationRequests;
