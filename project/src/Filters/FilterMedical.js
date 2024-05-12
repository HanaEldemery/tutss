import React from "react";

const FilterMedical = ({ filters, onFilterChange }) => {
  const medicalSpecialties = [
    "Cardiology",
    "Orthopedics",
    "Neurology",
    "Dermatology",
    "Psychiatry",
  ];

  const organizationNames = [
    "Cairo Medical Center",
    "Nile Hospital",
    "Lotus Medical Center",
    "Giza General Hospital",
    "El Zahraa Medical Center",
    "Althuria Hospital",
    "Mokattam Specialized Hospital",
    "Andalusia Hospital",
    "Masr Medical Clinic",
  ];

  const areas = ["Maadi", "Zamalek", "Dokki", "Tagamoa"];

  const governorates = ["Cairo", "Giza"];

  return (
    <div className="filter-container">
      <p>
        {/* Medical Specialties Dropdown */}
        <select
          onChange={(e) => onFilterChange("Medical_Specialty", e.target.value)}
          value={filters["Medical_Specialty"] || "default"}
        >
         
          <option value="all">All Medical Speciality</option>
          {medicalSpecialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        {/* Organization Names Dropdown */}
        <select
          onChange={(e) => onFilterChange("Organization_Name", e.target.value)}
          value={filters["Organization_Name"] || "default"}
        >
        
          <option value="all">All Organization</option>
          {organizationNames.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>

        {/* Areas Dropdown */}
        <select
          onChange={(e) => onFilterChange("Area", e.target.value)}
          value={filters["Area"] || "default"}
        >
      
          <option value="all">All Area</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        {/* Governorates Dropdown */}
        <select
          onChange={(e) => onFilterChange("Governorate", e.target.value)}
          value={filters["Governorate"] || "default"}
        >
          <option value="all">All Governorate</option>
          {governorates.map((gov) => (
            <option key={gov} value={gov}>
              {gov}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};

export default FilterMedical;
