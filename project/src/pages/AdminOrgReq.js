import React, { useState } from "react";
import Box from "@mui/material/Box";
import Org from "../outerfiles/org.pdf";
import { Link } from "react-router-dom";

function AdminOrgReq() {
  const [donors, setDonors] = useState([
    {
      organization: "Helping Hands Foundation",
      firstName: "Ahmed",
      lastName: "Ibrahim",
      gender: "Male",
      organizationname: "Helping Hands Foundation",
      organizationtype: "Orphanage",
      email: "ahmed@example.com",
      contactNumber: "01012345678",
      password: "password123",
      address: "15th May Bridge Street",
      area: "Zamalek",
      governorate: "Cairo",
      accepted: false,
      rejected: false,
    },
    {
      organization: "El Hamd Hospital",
      firstName: "Fatma",
      lastName: "Mahmoud",
      gender: "Female",
      organizationname: "El Hamd Hospital",
      organizationtype: "Hospital",
      email: "fatma@example.com",
      contactNumber: "01098765432",
      password: "hospital456",
      address: "Tahrir Square",
      area: "Downtown",
      governorate: "Giza",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Care and Love Association",
      firstName: "Mohamed",
      lastName: "Ali",
      gender: "Male",
      organizationname: "Care and Love Association",
      organizationtype: "Orphanage",
      email: "mohamed@example.com",
      contactNumber: "01045678901",
      password: "lovecharity",
      address: "Nile Corniche",
      area: "Maadi",
      governorate: "Cairo",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Generous Hearts Foundation",
      firstName: "Hanan",
      lastName: "Said",
      gender: "Female",
      organizationname: "Generous Hearts Foundation",
      organizationtype: "Vet",
      email: "hanan@example.com",
      contactNumber: "01023456789",
      password: "generous123",
      address: "Alexandria Desert Road",
      area: "6th of October City",
      governorate: "Giza",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Unity for All",
      firstName: "Ahmed",
      lastName: "Khalil",
      gender: "Male",
      organizationname: "Unity for All",
      organizationtype: "School",
      email: "ahmed@example.com",
      contactNumber: "01034567890",
      password: "unityforall",
      address: "Shobra Street",
      area: "Shobra",
      governorate: "Cairo",
      accepted: false,
      rejected: false,
    },
  ]);

  const [popupMessage, setPopupMessage] = useState("");

  const handleAccept = (donor) => {
    setPopupMessage(`${donor.organization}'s request has been accepted.`);
    const updatedDonors = donors.map((d) => {
      if (d.organization === donor.organization) {
        return { ...d, accepted: true };
      }
      return d;
    });
    setDonors(updatedDonors);
    setTimeout(() => setPopupMessage(""), 3000);
  };
  const handleReject = (donor) => {
    setPopupMessage(`${donor.organization}'s request has been rejected.`);
    const updatedDonors = donors.map((d) => {
      if (d.organization === donor.organization) {
        return { ...d, rejected: true };
      }
      return d;
    });
    setDonors(updatedDonors);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  return (
    <div className="admin-don-req-container">
      <h1 className="admin-don-req-heading">Pending Requesting Organizations</h1>
      <div className="donors-list">
        {donors.map(
          (donor, index) =>
            !donor.accepted &&
            !donor.rejected && (
              <Box
                key={index}
                component="section"
                sx={{
                  p: 4, // Increase padding to 4
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              >
                <h2>{donor.organization}</h2>
                <p>
                  <strong>Name:</strong> {donor.firstName} {donor.lastName}
                </p>
                <p>
                  <strong>Gender:</strong> {donor.gender}
                </p>
                <p>
                  <strong>Organization Name:</strong> {donor.organizationname}
                </p>
                <p>
                  <strong>Organization Type:</strong> {donor.organizationtype}
                </p>
                <p>
                  <strong>Email:</strong> {donor.email}
                </p>
                <p>
                  <strong>Contact Number:</strong> {donor.contactNumber}
                </p>
                <p>
                  <strong>Password:</strong> {donor.password}
                </p>
                <p>
                  <strong>Address:</strong> {donor.address}
                </p>
                <p>
                  <strong>Area:</strong> {donor.area}
                </p>
                <p>
                  <strong>Governorate:</strong> {donor.governorate}
                </p>
                <div className="pdf-viewer">
                  <iframe
                    title="PDF Viewer"
                    src={Org}
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                  />
                </div>
                <div className="action-buttons">
                  <button
                    onClick={() => handleAccept(donor)}
                    className="accept-button"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(donor)}
                    className="reject-button"
                  >
                    Reject
                  </button>
                </div>
                <div className="download-certificate">
                  <a
                    href={Org}
                    download
                    className="certificate-button"
                  >
                    Download Certificate
                  </a>
                </div>
              </Box>
            )
        )}
      </div>
      <Link to="/AdminHomePage" className="back-link">
        <button className="donation-button">Back</button>
      </Link>
      {popupMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "5px",
            zIndex: 1,
            
          }}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
}

export default AdminOrgReq;
