import React from "react";
import { data } from "./List";

function Details2({ theKey }) {
  const matchedItem = data.find((item) => item.id === theKey);
  return (
    <div>
      {matchedItem ? (
        <div>
          <p>Type: {matchedItem.type}</p>
        </div>
      ) : (
        <p>No item found with the provided key.</p>
      )}
    </div>
  );
}

export default Details2;
