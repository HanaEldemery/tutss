import React, { useState } from "react";
import FilterTeaching from "../Filters/FilterTeaching";
import TeachingList from "../lists/TeachingList";
import { TeachingData } from "../Data/Teachingdata";
import { Link } from "react-router-dom";

function TeachingPosts() {
  const [productList, setProductList] = useState(TeachingData);
  const [filteredProductList, setFilteredProductList] = useState(TeachingData);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (category, value) => {
    const newFilters = { ...filters };
    if (value === "all") {
      delete newFilters[category]; // Remove the filter if 'all' is selected
    } else {
      newFilters[category] = value;
    }
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (newFilters) => {
    let filteredData = productList;
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        filteredData = filteredData.filter(
          (item) => item[key] === newFilters[key]
        );
      }
    });
    setFilteredProductList(filteredData);
  };

  return (
    <div>
      <FilterTeaching filters={filters} onFilterChange={handleFilterChange} />
      <h2>Hello from TeachingPosts</h2>
      <TeachingList postsList={filteredProductList} />
      <Link to="/DonationRequest">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TeachingPosts;
