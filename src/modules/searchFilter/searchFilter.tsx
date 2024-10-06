"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./SearchFilter.module.css"; // Import the CSS module

type ClubData = {
  club_name: string;
  club_logo: string;
};

type PlayerData = {
  name: string;
  nationality: string;
  date_of_birth: string;
  height: number;
  club: ClubData;
  position: string;

  number: number;
  salary: string;
  club_history: string[];
  awards: string[];
  appearances: number;
  goals_cleansheets: number;
  minute_played: number;
};
type Props = {
  setFilterPlayers: Dispatch<SetStateAction<PlayerData[] | null>>;
};

export default function SearchFilter({ setFilterPlayers }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const players = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr",
    "Kylian Mbappé",
    "Kevin De Bruyne",
    "Mohamed Salah",
    "Virgil van Dijk",
  ];

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

  const filteredPlayers = players
    .filter((player) => player.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className={styles.searchFilterContainer}>
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
      <div>
        {/* {filteredPlayers.length > 0 ? (
          <ul>
            {filteredPlayers.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        ) : (
          <p>No players found.</p>
        )} */}
      </div>

      {/* <button className={styles.configureColumnsButton}>
        CONFIGURE COLUMNS
      </button> */}
    </div>
  );
}
