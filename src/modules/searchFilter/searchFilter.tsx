'use client';
import React, { useState } from "react";
import styles from './SearchFilter.module.css'; // Import the CSS module


export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Player Name,Data\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className={styles.searchFilterContainer}>
      <div className={styles.filterDropdown}>
        <button className={styles.filterButton} onClick={toggleFilter}>
          FILTERED BY ▼
        </button>
        {filterOpen && (
          <ul className={styles.dropdownMenu}>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Find your favorite player..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className={styles.searchButton}>SEARCH</button>
      <button className={styles.csvButton} onClick={downloadCSV}>
        DOWNLOAD CSV
      </button>
      {/* <button className={styles.configureColumnsButton}>
        CONFIGURE COLUMNS
      </button> */}
    </div>
  );
}
