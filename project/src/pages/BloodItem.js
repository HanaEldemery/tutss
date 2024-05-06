import React, { useState } from "react";
import PopupHana from "../components/PopupHana";
import { BloodList } from "../data/BloodList";

function BloodItem({ key, name, description }) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDetailsClick = (itemId) => {
    setSelectedItemId(itemId);
    setShowPopup(true);
  };

  return (
    <div className="bloodItem">
      {BloodList.map((item, index) =>
        item.name === name ? (
          <tr key={index}>
            <td>{item.name}</td>
            <button onClick={() => handleDetailsClick(item.id)}>
              View Details
            </button>
          </tr>
        ) : null
      )}
      {showPopup && <PopupHana closePopup={setShowPopup} />}
    </div>
  );
}

export default BloodItem;
