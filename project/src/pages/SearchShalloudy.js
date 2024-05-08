import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
//import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "../Data/regorgname";
import Details from "./Details";

function Search() {
  const [search, setSearch] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [popupFlag, setPopupFlag] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const handleDetailsClick = (itemId) => {
    setSelectedItemId(itemId);
    setPopupFlag(true);
  };

  const handleOnDelete = (id) => {
    if (id === 2) {
      setOnDelete(true);
    }
  };

  return (
    <div className="all">
      {popupFlag ? null : (
        <Container>
          <h1 className="TEXT">Organization Names</h1>

          <Form className="form">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type search..."
              className="inputForm"
            />
          </Form>

          <Table className="table">
            <tbody>
              {onDelete
                ? data
                    .filter((item) => item.id !== 2)
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.organisation
                            .toLowerCase()
                            .includes(search.toLowerCase());
                    })
                    .map((item, index) => (
                      <tr key={index}>
                        {popupFlag ? null : (
                          <p>
                            {item.organisation}
                            <button
                              onClick={() => handleDetailsClick(item.id)}
                              className="search-button"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => {
                                handleOnDelete(item.id);
                              }}
                              className="search-button"
                            >
                              Delete
                            </button>
                          </p>
                        )}
                      </tr>
                    ))
                : data
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.organisation
                            .toLowerCase()
                            .includes(search.toLowerCase());
                    })
                    .map((item, index) => (
                      <tr key={index}>
                        {popupFlag ? null : (
                          <p>
                            {item.organisation}
                            <button
                              onClick={() => handleDetailsClick(item.id)}
                              className="search-button"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => {
                                handleOnDelete(item.id);
                              }}
                              className="search-button"
                            >
                              Delete
                            </button>
                          </p>
                        )}
                      </tr>
                    ))}
            </tbody>
          </Table>
        </Container>
      )}
      {popupFlag && (
        <Details theKey={selectedItemId} closePopup={setPopupFlag} />
      )}
    </div>
  );
}

export default Search;
