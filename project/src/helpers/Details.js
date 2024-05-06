import React from "react";
import { ClothesList } from "../helpers/ClothesList";

function Details({ theKey }) {
  const matchedItem = ClothesList.find((item) => item.id === theKey);
  return (
    <div>
      {matchedItem ? (
        <div>
          <h2>{matchedItem.name}</h2> <p>Type: {matchedItem.type}</p>
        </div>
      ) : (
        <p>No item found with the provided key.</p>
      )}
    </div>
  );
}

export default Details;