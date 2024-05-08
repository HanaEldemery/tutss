import React, { useState } from "react";
import Box from "@mui/material/Box";
import Org from "../outerfiles/Applicant.pdf";
import { Link } from "react-router-dom";

function AdminDonReq() {
  const [donors, setDonors] = useState([
    {
      organization: "Doctor Omar Ayman",
      firstName: "Omar",
      lastName: "Ayman",
      gender: "Male",
      email: "omarayman40@gmail.com",
      contactNumber: "01013422290",
      password: "omar2003",
      address: "Building 117",
      area: "Rehab",
      governorate: "Cairo",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Doctor Halla Tarek",
      firstName: "Halla",
      lastName: "Tarek",
      gender: "Female",
      email: "hallatarek@gmail.com",
      contactNumber: "01016662910",
      password: "halla2003",
      address: "Building 38",
      area: "Agouza",
      governorate: "Giza",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Professor Adham Sameh",
      firstName: "Adham",
      lastName: "Sameh",
      gender: "Sigma Male",
      email: "adham.sameh35@yahoo.com",
      contactNumber: "01110077288",
      password: "adham2003",
      address: "Building 26",
      area: "Maadi",
      governorate: "Cairo",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Doctor Hana El Demery",
      firstName: "Hana",
      lastName: "El Demery",
      gender: "Female",
      email: "hanaeldemery2002@gmail.com",
      contactNumber: "01091191960",
      password: "hana2002",
      address: "Building 10",
      area: "Zamalek",
      governorate: "Giza",
      accepted: false,
      rejected: false,
    },
    {
      organization: "Professor Seif Selim",
      firstName: "Seif",
      lastName: "Selim",
      gender: "Male",
      email: "seifeddin.walid@gmail.com",
      contactNumber: "01115566574",
      password: "seif2003",
      address: "Building 5/1",
      area: "Maadi",
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
        Pending Requesting Donors
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

export default AdminDonReq;
