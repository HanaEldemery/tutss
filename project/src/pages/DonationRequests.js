import React from "react";
import { Link } from "react-router-dom";

function DonationRequests() {
  return (
    <div>
       <Link to="/TeachingPosts">
        <button>Go to Teaching Posts</button>
      </Link>
      <Link to="/MedicalCases">
        <button>Go to Medical Cases</button>
      </Link>
      <Link to="/toysRequests">
        <button> View All Toy Requests </button>
      </Link>
      <Link to="/foodRequests">
        <button> View All Food Requests </button>
      </Link>
      <Link to="/medicalSuppliesRequests">
        <button> View All Medical Supplies Requests </button>
      </Link>
      <Link to="/bloodRequests">
        <button> View All Blood Requests </button>
      </Link>
    </div>
  );
}

export default DonationRequests;
