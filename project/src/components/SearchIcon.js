import React from "react";

function SearchIcon({ image, organisation }) {
  return (
    <div className="SearchIcon1">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {organisation} </h1>
    </div>
  );
}

export default SearchIcon;
