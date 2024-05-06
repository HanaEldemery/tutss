import React, { useState } from "react";
import Box from '@mui/material/Box';
import Org from "../outerfiles/Applicant.pdf";

function AdminDonReq() {
  const [careAndShareAccepted, setCareAndShareAccepted] = useState(false);
  const [helpingHandsAccepted, setHelpingHandsAccepted] = useState(false);
  const [careAndShareRejected, setCareAndShareRejected] = useState(false);
  const [helpingHandsRejected, setHelpingHandsRejected] = useState(false);
  const [elhamdAccepted, setelhamdAccepted] = useState(false);
  const [elhamdRejected, setelhamdRejected] = useState(false);
  const [hallaaccepted, sethallaaccepted] = useState(false);
  const [hallarejected, sethallarejected] = useState(false);
  const [adhamaccepted, setadhamaccepted] = useState(false);
  const [adhamrejected, setadhamrejected] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAccept = (organization) => {
    setPopupMessage(`${organization}'s request has been accepted.`);
    if (organization === "Doctor Omar Ayman") {
      setCareAndShareAccepted(true);
    } else if (organization === "Professor Seif Selim") {
      setHelpingHandsAccepted(true);
    } else if (organization === "Doctor Hana El Demery") {
      setelhamdAccepted(true);
    }
    else if (organization === "Professor Adham Sameh") {
        setadhamaccepted(true);
      }
      else if (organization === "Doctor Halla Tarek") {
        sethallaaccepted(true);
      }

    
    setTimeout(() => setPopupMessage(""), 1500); 
  };

  const handleReject = (organization) => {
    setPopupMessage(`${organization}'s request has been rejected.`);
    if (organization === "Doctor Omar Ayman") {
        setCareAndShareRejected(true);
      } else if (organization === "Professor Seif Selim") {
        setHelpingHandsRejected(true);
      } else if (organization === "Doctor Hana El Demery") {
        setelhamdRejected(true);
      }
      else if (organization === "Professor Adham Sameh") {
          setadhamrejected(true);
        }
        else if (organization === "Doctor Halla Tarek") {
          sethallarejected(true);
        }
    setTimeout(() => setPopupMessage(""), 1500); 
  };



  return (
    <div>
      {popupMessage && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black', borderRadius: '5px' }}>
          {popupMessage}
        </div>
      )}
      <h1>Pending Requesting Donors</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Doctor Omar Ayman*/}
        {!careAndShareAccepted &&  !careAndShareRejected &&  (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Doctor Omar Ayman</h2>
            <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
              <iframe
                title="PDF Viewer"
                src={Org}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button onClick={() => handleAccept("Doctor Omar Ayman")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Doctor Omar Ayman")}>Reject</button>
            </div>
            {/* Download link */}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
        {/* Doctor Halla Tarek*/}
        {!hallaaccepted &&  !hallarejected &&  (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Doctor Halla Tarek</h2>
            <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
              <iframe
                title="PDF Viewer"
                src={Org}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button onClick={() => handleAccept("Doctor Halla Tarek")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Doctor Halla Tarek")}>Reject</button>
            </div>
            {/* Download link */}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
        {/*Professor Adham Sameh*/}
        {!adhamaccepted &&  !adhamrejected &&  (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Professor Adham Sameh</h2>
            <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
              <iframe
                title="PDF Viewer"
                src={Org}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button onClick={() => handleAccept("Professor Adham Sameh")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Professor Adham Sameh")}>Reject</button>
            </div>
            {/* Download link */}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
        {/* Helping Hands Box */}
        {!elhamdAccepted && !elhamdRejected && (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Doctor Hana El Demery</h2>
            <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
              <iframe
                title="PDF Viewer"
                src={Org}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button onClick={() => handleAccept("Doctor Hana El Demery")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Doctor Hana El Demery")}>Reject</button>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
                {/*Seif Selim*/}
                {!helpingHandsAccepted && !helpingHandsRejected  && (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Professor Seif Selim</h2>
            <div style={{ width: '100%', height: '400px', overflow: 'auto' }}>
              <iframe
                title="PDF Viewer"
                src={Org}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <button onClick={() => handleAccept("Professor Seif Selim")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Professor Seif Selim")}>Reject</button>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
      </div>
      
      
    </div>
  );
}

export default AdminDonReq;
