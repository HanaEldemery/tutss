import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./List";
import Details from "./Details2";

function Search() {
  const [search, setSearch] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null); // Track the selected item ID

  const handleDetailsClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div>
      <Container>
        <h1 className="text-center mt-4">Search</h1>
        <Form>
          <InputGroup className="my-3">
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type search..."
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Halla test</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.type.toLowerCase().includes(search.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <button onClick={() => handleDetailsClick(item.id)}>
                    DETAILS
                  </button>
                  {selectedItemId === item.id && <Details theKey={item.id} />}
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Search;
