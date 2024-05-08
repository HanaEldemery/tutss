import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { data } from "../Data/regorgname";
import Details from "./Details";
import "../styles/Search.css";
function CommonPagegeneral(closePopup) {
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
      window.location.href = '/role';
    };
  return (
    <div className="all">
    {popupFlag ? null : (
      <Container>
        <h1 className="TEXT">Organisation Names</h1>

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

        <Table className="table">
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                {popupFlag ? null : (
                  <p>
                    {item.organisation}
                    <button
                      onClick={() => handleDetailsClick(item.id)}
                      className="search-button"
                    >
                      DETAILS
                    </button>
                    
                  </p>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={handleRedirect} className="search-button">
      BACK
    </button>
      </Container>
    )}

    {popupFlag && (
      <Details theKey={selectedItemId} closePopup={setPopupFlag} />
    )}

   <br/>
       <Link to="/DonationRequests">
        <button>ViewAllDonationRequests</button>
      </Link>
      <Link to="/">
        <button>Update/Delete Account info</button>
      </Link>
    </div>
  )
}

export default CommonPagegeneral
