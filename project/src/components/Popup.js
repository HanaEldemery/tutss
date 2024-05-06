import React, { useState } from "react";
import "../styles/Popup.css";
//var data = require("../data/regorgname.json");

function Popup({ closePopup }) {
  const [flag, setFlag] = useState(false);

  const handleSearch = (event) => {
    {
      event.target.value === "apple" ? setFlag(true) : setFlag(false);
    }
  };

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>ORGANISATIONS</h1>
        </div>
        <div className="searchbar">
          <div className="search-icon">
            <p>SEARCH</p>
          </div>
          <div className="input1">
            <input type="searchbar" onChange={handleSearch} />
          </div>
        </div>
        <div className="box">
          {flag
            ? "apple"
            : "not apple widjaisdajwda, wdisdawdasm wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> CANCEL </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
