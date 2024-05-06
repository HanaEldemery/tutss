import React from "react";
import { Link } from "react-router-dom";

function SchoolSupList({ name, description, destination }) {
  return (
    <div className="schoolsupItem">
      <h1> {name} </h1>
      <p> {description} </p>
      <Link to={destination}>
        <button> View Details </button>
      </Link>
     
    </div>
  
  );
}

export default SchoolSupList;