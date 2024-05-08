import React from "react";
import { donationTypes } from "../helpers/donationTypes";
import Donation from "../components/Donation";

function DonationTypes() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> DONATE NOW </h1>
      <div className="menuList">
        {donationTypes.map((item, key) => {
          return (
            <Donation
              key={key}
              image={item.image}
              organisation={item.name}
              type={item.other}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}

export default DonationTypes;
