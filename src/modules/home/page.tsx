"use client";

import Image from "next/image";
import SearchFilter from "../searchFilter/searchFilter";
import Table from "@/components/table";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./home.module.css";

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

const HomePage = () => {
  const [players, setPlayers] = useState<PlayerData[] | null>(null);
  const [filterPlayers, setFilterPlayers] = useState<PlayerData[] | null>(null);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://toc-backend.codespacebar.com/api/players"
    );
    setPlayers(data);

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Image
        src="/assets/image/header.svg"
        alt="home-header"
        width={2000}
        height={500}
      />

      <div className="absolute top-60 left-[10%] flex flex-col text-wrap gap-12 w-[760px]">
        <div className="font-racing text-[64px] relative">
          <p>Premier League Players</p>
          <p className="text-transparent text-stroke-2-white absolute top-12">
            Premier League Players
          </p>
        </div>

        <p className="font-bayon text-xl">
          Explore in-depth profiles of Premier League players with stats, teams,
          awards, and more. Stay updated on your favorite stars, all in one
          place!
        </p>

        <a className={Style.startButton} href="#navbar">
          START
        </a>
      </div>

      <div id="navbar">
        <Navbar />
      </div>

      <SearchFilter setPlayers={setPlayers} />

      <div className="flex justify-center p-20">
        {players && <Table data={players} />}
      </div>
    </div>
  );
};

export default HomePage;
