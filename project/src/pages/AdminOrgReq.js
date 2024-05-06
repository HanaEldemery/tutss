import React, { useState } from "react";
import Box from '@mui/material/Box';
import Org from "../outerfiles/org.pdf";

function AdminOrgReq() {
  const [careAndShareAccepted, setCareAndShareAccepted] = useState(false);
  const [helpingHandsAccepted, setHelpingHandsAccepted] = useState(false);
  const [careAndShareRejected, setCareAndShareRejected] = useState(false);
  const [helpingHandsRejected, setHelpingHandsRejected] = useState(false);
  const [elhamdAccepted, setelhamdAccepted] = useState(false);
  const [elhamdRejected, setelhamdRejected] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAccept = (organization) => {
    setPopupMessage(`${organization}'s request has been accepted.`);
    if (organization === "Care and Share Foundation") {
      setCareAndShareAccepted(true);
    } else if (organization === "Helping Hands Foundation") {
      setHelpingHandsAccepted(true);
    } else if (organization === "El Hamd Mosque") {
      setelhamdAccepted(true);
    }
    
    setTimeout(() => setPopupMessage(""), 1500); // Hide popup after 1.5 seconds
  };

  const handleReject = (organization) => {
    setPopupMessage(`${organization}'s request has been rejected.`);
    if (organization === "Care and Share Foundation") {
      setCareAndShareRejected(true);
    } else if (organization === "Helping Hands Foundation") {
      setHelpingHandsRejected(true);
    }
    else if (organization === "El Hamd Mosque") {
      setelhamdRejected(true);
    }
    setTimeout(() => setPopupMessage(""), 1500); // Hide popup after 1.5 seconds
  };


  return (
    <div>
      {popupMessage && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black', borderRadius: '5px' }}>
          {popupMessage}
        </div>
      )}
      <h1>Pending Requesting Organizations</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Care and Share Box */}
        {!careAndShareAccepted &&  !careAndShareRejected &&  (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Care and Share Foundation</h2>
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
              <button onClick={() => handleAccept("Care and Share Foundation")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Care and Share Foundation")}>Reject</button>
            </div>
            {/* Download link */}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
        {/* Helping Hands Box */}
        {!helpingHandsAccepted && !helpingHandsRejected && (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>Helping Hands Foundation</h2>
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
              <button onClick={() => handleAccept("Helping Hands Foundation")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("Helping Hands Foundation")}>Reject</button>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <a href={Org} download>Download PDF</a>
            </div>
          </Box>
        )}
                {/*El Hamd Mosque*/}
                {!elhamdAccepted && !elhamdRejected && (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width: '400px', height: '600px', margin: '10px' }}>
            <h2>El Hamd Mosque</h2>
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
              <button onClick={() => handleAccept("El Hamd Mosque")} style={{ marginRight: '10px' }}>Accept</button>
              <button onClick={() => handleReject("El Hamd Mosque")}>Reject</button>
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

export default AdminOrgReq;
