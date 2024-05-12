import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeachingList({ postsList }) {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [showDonateOptions, setShowDonateOptions] = useState(null); // To manage showing donation options
  const navigate = useNavigate();

  const togglePostDetail = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
    setShowDonateOptions(null); // Reset the donation options state when toggling details
  };

  const handleDonate = (id) => {
    setShowDonateOptions(id);
  };

  const handleTransportation = () => {
    navigate("/TransportationSelection");
  };

  const handleDonationSuccess = () => {
    navigate("/DonationSuccessful");
  };

  return (
    <div className="PostsList">
      {postsList.map((item) => (
        <div key={item.id}>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            Teaching Donation Request {item.id}
          </h3>
          {expandedPostId === item.id && (
            <div>
              <p>Subject: {item.Subject}</p>
              <p>Area: {item.area}</p>
              <p>Governorate: {item.Governorate}</p>
              <p>No. of Students: {item.No_of_students}</p>
              <p>Address: {item.address}</p>
              {showDonateOptions === item.id ? (
                <div>
                  <button
                    onClick={handleTransportation}
                    style={{ margin: "10px", padding: "5px 20px" }}
                  >
                    Would you like a ride?
                  </button>
                  <button
                    onClick={handleDonationSuccess}
                    style={{ margin: "10px", padding: "5px 20px" }}
                  >
                    No, I have a ride
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleDonate(item.id)}
                  style={{ margin: "10px 0", padding: "5px 20px" }}
                >
                  Donate
                </button>
              )}
            </div>
          )}
          <button onClick={() => togglePostDetail(item.id)}>
            {expandedPostId === item.id ? "Less Details" : "View Details"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TeachingList;
