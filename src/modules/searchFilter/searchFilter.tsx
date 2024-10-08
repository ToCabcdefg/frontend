"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./searchFilter.module.css"; // Import the CSS module
import axios from "axios";
import Image from "next/image";
import { PlayerData } from "../home/page";

type Props = {
  setPlayers: Dispatch<SetStateAction<PlayerData[] | null>>;
};

export default function SearchFilter({ setPlayers }: Props) {
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

  // const toggleFilter = () => {
  //   setFilterOpen(!filterOpen);
  // };

  const downloadCSV = async () => {
    // const csvContent = "data:text/csv;charset=utf-8,Player Name,Data\n";
    // const encodedUri = encodeURI(csvContent);
    // const link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    // link.setAttribute("download", "data.csv");
    // document.body.appendChild(link);
    // link.click();

    const { data } = await axios.get(
      `https://toc-backend.codespacebar.com/api/export`
    );
  };

  const filteredPlayers = players
    .filter((player) => player.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  const handleOnClick = async () => {
    console.log(searchTerm);
    const { data } = await axios.get(
      `https://toc-backend.codespacebar.com/api/search/${searchTerm}`
    );
    setPlayers(data.players);
  };

  // useEffect(() => {
  //   console.log(searchTerm);
  // }, [searchTerm]);

  return (
    <div className={styles.searchFilterContainer}>
      <div className="w-full flex justify-between px-20 pt-5">
        <div className="flex w-1/2">
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Find your favorite player..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles.searchButton} onClick={handleOnClick}>
            SEARCH
          </button>
        </div>

        <a href="https://toc-backend.codespacebar.com/api/export">
          <button className={styles.csvButton}>
            DOWNLOAD CSV
            <Image
              width={18}
              height={18}
              src="/assets/icon/download-csv.svg"
              alt="download-csv"
            />
          </button>
        </a>
      </div>
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
