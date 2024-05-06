import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { data } from "../Data/regdonor";
import DetailsDonor from "./DetailsDonor";
import "../styles/Search.css";

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

  return (
    <div className="all">
      {popupFlag ? null : (
        <Container>
          <h1 className="TEXT">DONORS</h1>

          <Table className="table">
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  {popupFlag ? null : (
                    <p>
                      {item.patientName}
                      <button
                        onClick={() => handleDetailsClick(item.id)}
                        className="search-button"
                      >
                        DETAILS
                      </button>
                      <button
                        onClick={() => handleOnDelete(item.id)}
                        className="search-button"
                      >
                        DELETE
                      </button>
                    </p>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
          <button onClick={() => closePopup(false)} className="search-button">
            {" "}
            BACK{" "}
          </button>
        </Container>
      )}

      {popupFlag && (
        <DetailsDonor theKey={selectedItemId} closePopup={setPopupFlag} />
      )}
    </div>
  );
}

export default Search;
