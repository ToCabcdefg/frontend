"use client";

import Image from "next/image";
import SearchFilter from "../searchFilter/searchFilter";
import Table from "@/components/table";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     "https://toc-backend.codespacebar.com/api/teams"
  //   );

  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // });
  const players = [
    {
      name: "Lionel Messi",
      nationality: "Argentinian",
      date_of_birth: "1987-06-24",
      height: 170,
      club: "Inter Miami CF",
      position: "Forward",
      number: 10,
      salary: "$50 million",
      club_history: ["Barcelona", "Paris Saint-Germain", "Inter Miami CF"],
      awards: [
        "Ballon d'Or (7x)",
        "FIFA World Cup Winner",
        "UEFA Champions League Winner (4x)",
      ],
      appearances: 1045,
      goals_cleansheets: 804,
      minute_played: 721,
    },
    {
      name: "Cristiano Ronaldo",
      nationality: "Portuguese",
      date_of_birth: "1985-02-05",
      height: 187,
      club: "Al Nassr",
      position: "Forward",
      number: 7,
      salary: "$60 million",
      club_history: [
        "Sporting CP",
        "Manchester United",
        "Real Madrid",
        "Juventus",
        "Al Nassr",
      ],
      awards: [
        "Ballon d'Or (5x)",
        "UEFA Champions League Winner (5x)",
        "UEFA Euro Winner",
      ],
      appearances: 1145,
      goals_cleansheets: 847,
      minute_played: 743,
    },
    {
      name: "Neymar Jr.",
      nationality: "Brazilian",
      date_of_birth: "1992-02-05",
      height: 175,
      club: "Al Hilal",
      position: "Forward",
      number: 10,
      salary: "$45 million",
      club_history: ["Santos", "Barcelona", "Paris Saint-Germain", "Al Hilal"],
      awards: [
        "FIFA Puskás Award",
        "Olympic Gold Medal",
        "Copa Libertadores Winner",
      ],
      appearances: 615,
      goals_cleansheets: 420,
      minute_played: 422,
    },
    {
      name: "Kylian Mbappé",
      nationality: "French",
      date_of_birth: "1998-12-20",
      height: 178,
      club: "Paris Saint-Germain",
      position: "Forward",
      number: 7,
      salary: "$72 million",
      club_history: ["AS Monaco", "Paris Saint-Germain"],
      awards: [
        "FIFA World Cup Winner",
        "Ligue 1 Player of the Year (4x)",
        "UEFA Champions League Runner-up",
      ],
      appearances: 351,
      goals_cleansheets: 274,
      minute_played: 257,
    },
    {
      name: "Kevin De Bruyne",
      nationality: "Belgian",
      date_of_birth: "1991-06-28",
      height: 181,
      club: "Manchester City",
      position: "Midfielder",
      number: 17,
      salary: "$25 million",
      club_history: ["Genk", "Chelsea", "Wolfsburg", "Manchester City"],
      awards: [
        "Premier League Player of the Season (2x)",
        "UEFA Champions League Winner",
        "FIFA FIFPro World XI",
      ],
      appearances: 600,
      goals_cleansheets: 125,
      minute_played: 420,
    },
    {
      name: "Virgil van Dijk",
      nationality: "Dutch",
      date_of_birth: "1991-07-08",
      height: 193,
      club: "Liverpool",
      position: "Defender",
      number: 4,
      salary: "$15 million",
      club_history: ["Groningen", "Celtic", "Southampton", "Liverpool"],
      awards: [
        "UEFA Men's Player of the Year",
        "Premier League Player of the Season",
        "UEFA Champions League Winner",
      ],
      appearances: 487,
      goals_cleansheets: 49,
      minute_played: 312,
    },
    {
      name: "Robert Lewandowski",
      nationality: "Polish",
      date_of_birth: "1988-08-21",
      height: 185,
      club: "Barcelona",
      position: "Forward",
      number: 9,
      salary: "$35 million",
      club_history: [
        "Lech Poznań",
        "Borussia Dortmund",
        "Bayern Munich",
        "Barcelona",
      ],
      awards: [
        "FIFA Best Men's Player",
        "European Golden Shoe (2x)",
        "UEFA Champions League Winner",
      ],
      appearances: 773,
      goals_cleansheets: 621,
      minute_played: 510,
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <Image
        src="/assets/image/header.svg"
        alt="home-header"
        width={2000}
        height={500}
      />

      <div className="absolute top-60 left-[10%] flex flex-col text-wrap gap-12 w-[38%]">
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

        <button className="font-bebas text-xl bg-custom-green w-24 h-9 text-black">
          START
        </button>
      </div>

      <Navbar />

      <div className="flex justify-center p-20">
        <Table data={players} showSearch />
      </div>
    </div>
  );
};

export default HomePage;
