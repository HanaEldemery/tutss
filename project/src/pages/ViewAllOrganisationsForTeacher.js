import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { data } from "../Data/regorgname";
import Details from "./Details";
import { Link } from "react-router-dom";
import "../styles/theStyle.css"; // Import your CSS file

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
    window.location.href = "/CommonPagegeneral";
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1 className="menuTitle">Organization Names</h1>
        <Container>
          <Form className="form">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type search..."
              className="inputForm"
            />
            <Form.Control
              as="select"
              onChange={(e) => setAreaFilter(e.target.value)}
              value={areaFilter}
              className="inputForm"
            >
              <option value="">All Areas</option>
              <option value="Zamalek">Zamalek</option>
              <option value="Maadi">Maadi</option>
              <option value="Shooting club">Shooting club</option>
              <option value="Rehab 2, group 117, building 13, floor 2">
                Rehab 2, group 117, building 13, floor 2
              </option>
              <option value="New Cairo">New Cairo</option>
              <option value="Nasr City">Nasr City</option>
            </Form.Control>
            <Form.Control
              as="select"
              onChange={(e) => setGovernorateFilter(e.target.value)}
              value={governorateFilter}
              className="inputForm"
            >
              <option value="">All Governorates</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
            </Form.Control>
            <Form.Control
              as="select"
              onChange={(e) => setTypeFilter(e.target.value)}
              value={typeFilter}
              className="inputForm"
            >
              <option value="">All Types</option>
              <option value="School">School</option>
              <option value="Vet">Vet</option>
              <option value="Hospital">Hospital</option>
              <option value="Orphanage">Orphanage</option>
            </Form.Control>
          </Form>

          <div className="menuList">
            {filteredData.map((item, index) => (
              <div
                className="menuItem"
                key={index}
                onClick={() => handleDetailsClick(item.id)}
              >
                <div
                  className="menuImage"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
                <div className="menuDetails">
                  <h3>{item.organisation}</h3>
                  <p>Area: {item.area}</p>
                  <p>Governorate: {item.governorate}</p>
                  <p>Type: {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Link to="/CommonPageTeacher">
          <button className="donate-button">Back</button>
        </Link>
      </div>

      {popupFlag && (
        <Details theKey={selectedItemId} closePopup={setPopupFlag} />
      )}
    </div>
  );
}

export default Search;
