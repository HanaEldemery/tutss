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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
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
      <h1 style={{ gridColumn: "1/-1", textAlign: "center" }}>
        Pending Requesting Organizations
      </h1>
      {donors.map(
        (donor, index) =>
          !donor.accepted &&
          !donor.rejected && (
            <Box
              key={index}
              component="section"
              sx={{
                p: 2,
                border: "1px dashed grey",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
              <div style={{ width: "100%", height: "200px", overflow: "auto" }}>
                <iframe
                  title="PDF Viewer"
                  src={Org}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button
                  onClick={() => handleAccept(donor)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(donor)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Reject
                </button>
              </div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <a
                  href={Org}
                  download
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#008CBA",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Download Certificate
                </a>
              </div>
            </Box>
          )
      )}
      <Link to="/AdminHomePage">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default AdminOrgReq;
