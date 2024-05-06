import React, { useState } from 'react';
import FilterMedical from '../Filters/FilterMedical';
import MedicalList from '../lists/MedicalList';
import { MedicalData } from '../Data/MedicalData';

function MedicalCases() {
    const [productList, setProductList] = useState(MedicalData);
    const [filteredProductList, setFilteredProductList] = useState(MedicalData);
    const [filters, setFilters] = useState({});

    const handleFilterChange = (category, value) => {
        const newFilters = { ...filters, [category]: value };
        if (value === 'all') {
            delete newFilters[category]; // Remove the filter if 'all' is selected
        }
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (newFilters) => {
        let filteredData = productList;
        Object.keys(newFilters).forEach(key => {
            filteredData = filteredData.filter(item => item[key] === newFilters[key]);
        });
        setFilteredProductList(filteredData);
    };

    return (
        <div>
            <FilterMedical filters={filters} onFilterChange={handleFilterChange} />
            <h2>Hello from MedicalCases</h2>
            <MedicalList postsList={filteredProductList} />
        </div>
    );
}

export default MedicalCases;

