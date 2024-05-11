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
    <div className="admin-don-req-container">
      <h1 className="admin-don-req-heading">Pending Requesting Donors</h1>
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

export default AdminDonReq;