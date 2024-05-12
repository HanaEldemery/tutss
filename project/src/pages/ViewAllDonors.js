import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { data } from "../Data/regdonor";
import DetailsDonor from "./DetailsDonor";

function Search({ closePopup }) {
  const [search, setSearch] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [popupFlag, setPopupFlag] = useState(false);
  const [areaFilter, setAreaFilter] = useState("");
  const [governorateFilter, setGovernorateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleDetailsClick = (itemId) => {
    setSelectedItemId(itemId);
    setPopupFlag(true);
  };

  const handleOnDelete = (id) => {
    const updatedData = filteredData.filter((item) => item.id !== id);
    setFilteredData(updatedData);
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        (search.toLowerCase() === "" ||
          item.organisation.toLowerCase().includes(search.toLowerCase())) &&
        (areaFilter === "" ||
          item.area.toLowerCase() === areaFilter.toLowerCase()) &&
        (governorateFilter === "" ||
          item.governorate.toLowerCase() === governorateFilter.toLowerCase()) &&
        (typeFilter === "" ||
          item.type.toLowerCase() === typeFilter.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, areaFilter, governorateFilter, typeFilter]);

  const handleRedirect = () => {
    window.location.href = "/AdminHomePage";
  };

  return (
    <div className="home">
      <h1>Donors</h1>
      <div className="menu">
        {popupFlag ? null : (
          <Container>
            <Table className="table">
              <div className="menuList">
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="menuItem"
                    onClick={() => handleDetailsClick(item.id)}
                  >
                    <div classNam="item-container">
                      <div
                        className="menuImage"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />
                      <p style={{ textAlign: "center" }}>{item.patientName}</p>

                      <button
                        onClick={() => handleOnDelete(item.id)}
                        className="donate-button"
                        style={{
                          display: "block",
                          margin: " auto",
                          marginBottom: "5px",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Table>
          </Container>
        )}

        {popupFlag && (
          <DetailsDonor theKey={selectedItemId} closePopup={setPopupFlag} />
        )}
      </div>
      <button onClick={handleRedirect} className="donation-button">
        Back
      </button>
    </div>
  );
}

export default Search;
