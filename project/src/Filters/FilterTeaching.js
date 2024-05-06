import React from 'react';

const FilterTeaching = ({ filters, onFilterChange, onReset }) => {
    return (
        <div>
            {/* Subject Dropdown */}
            <div>
                <select id="subject-select" onChange={e => onFilterChange('Subject', e.target.value)} value={filters.Subject || 'default'}>
                    <option value="all">All Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                </select>
            </div>

            {/* Area Dropdown */}
            <div>
                <select id="area-select" onChange={e => onFilterChange('area', e.target.value)} value={filters.area || 'default'}>
                    <option value="all">All Area</option>
                    <option value="Maadi">Maadi</option>
                    <option value="Mokattam">Mokattam</option>
                    <option value="Zamalek">Zamalek</option>
                    <option value="Dokki">Dokki</option>
                    <option value="Tagamoa">Tagamoa</option>
                </select>
            </div>

            {/* Governorate Dropdown */}
            <div>
                <select id="governorate-select" onChange={e => onFilterChange('Governorate', e.target.value)} value={filters.Governorate || 'default'}>
                    <option value="all">All Governorate</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                </select>
            </div>
        </div>
    );
};

export default FilterTeaching;
