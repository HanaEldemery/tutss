import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ViewAllOrganisations from "../pages/ViewAllOrganisations";

function AdminHomePage() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Welcome Back Admin!</h1>
        <div>
          <Link to="/AdminDonReq">
            <button>View Pending Donor Requests</button>
          </Link>
          <Link to="/AdminOrgReq">
            <button>View Pending Organization Requests</button>
          </Link>
          <Link to="/ViewAllOrganisations">
            <button>View All Registered Organizations</button>
          </Link>
          <Link to="/ViewAllDonors">
            <button>View All Registered Donors</button>
          </Link>
          <Link to="/Adminchangepass">
            <button>Change your Password</button>
          </Link>
          <br />
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AdminHomePage;
