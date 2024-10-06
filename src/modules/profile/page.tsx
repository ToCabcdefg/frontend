"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ClubData = {
  club_name: string;
  club_logo: string;
};

type PlayerData = {
  image_url: string;
  flagImage: string;
  club: ClubData;
  number: number;
  name: string;
  position: string;
  salary: string;
  date_of_birth: string;
  height: number;
  appearances: number;
  goals_cleansheets: number;
  minute_played: number;
  club_history: string[];
  awards: string[];
};

type Props = {
  playerName: string;
};

const ProfilePage = ({ playerName }: Props) => {
  const router = useRouter();
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  const fetchData = async (playerName: string) => {
    const { data } = await axios.get(
      `https://toc-backend.codespacebar.com/api/player/${playerName}`
    );
    console.log(data[0]);
    setPlayerData(data[0]);
  };

  useEffect(() => {
    fetchData(playerName);
  }, [playerName]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-center relative w-full h-auto">
        {/* Header Image */}
        <div className="relative w-full h-[50vh]">
          <Image
            src="/assets/image/profile-header.svg"
            alt="profile-header"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        {/* Shadow Image */}
        <div className="absolute left-0 right-0 bottom-[-30%] w-full">
          <Image
            src="/assets/image/black-shadow.svg"
            alt="profile-shadow"
            layout="responsive"
            width={2000}
            height={1000}
          />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center tracking-wider">
        <div className="flex flex-row justify-between gap-10 items-start p-16 isolate absolute bg-gradient-to-r from-transparent to-gray-300/25 backdrop-blur-md rounded-3xl">
          <div className="absolute w-[47px] h-[47px] left-[24px] top-[35px] flex-none order-1 flex-grow-0 z-1">
            <Image
              src="/assets/image/green-back.svg"
              alt="back"
              width="50"
              height="50"
              className="cursor-pointer"
              onClick={() => router.back()}
            />
          </div>

          {/* Column 1 */}
          <div className="flex flex-col justify-start items-start">
            {/* Player Details */}
            <div className="flex flex-row items-center">
              <div>
                <Image
                  src={playerData.image_url ? playerData.image_url : ""}
                  alt="player"
                  width="315"
                  height="315"
                />
              </div>
              <div className="flex flex-col justify-start items-center gap-3">
                <Image
                  src={playerData.club.club_logo ? playerData.club.club_logo : ""}
                  alt="club"
                  width="150"
                  height="150"
                />
                <Image
                  src={playerData.flagImage ? playerData.flagImage : ""}
                  alt="flag"
                  width="62"
                  height="41"
                />
                <h1 className="font-bayon text-8xl">#{playerData.number}</h1>
              </div>
            </div>
            {/* Player Info */}
            <div className="flex flex-col">
              <h1 className="font-bayon text-7xl mt-5">{playerData.name ? playerData.name : ""}</h1>
              <div className="flex flex-row gap-2 mb-3 items-center">
                <button className="bg-custom-pink h-10 font-bayon text-xl text-white px-2 py-1 justify-center items-center rounded-sm">
                  {playerData.club.club_name ? playerData.club.club_name : ""}
                </button>
                <h1 className="bg-custom-green h-10 font-bayon text-xl text-black px-2 py-1 justify-center items-center rounded-sm">
                  {playerData.position ? playerData.position : ""}
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bayon text-white text-lg">weekly salary:</p>
                <p className="font-bayon text-custom-green text-lg">
                  £ {playerData.salary ? playerData.salary : ""}
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">Date of Birth:</p>
                  <p className="font-bayon text-custom-green text-lg">
                    {playerData.date_of_birth ? playerData.date_of_birth : ""}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="font-bayon text-white text-lg">height:</p>
                  <p className="font-bayon text-custom-green text-lg">
                    {playerData.height ? playerData.height : ""} cm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Player Stats */}
            <div className="flex flex-row gap-10 ">
              {/* Column 1: Appearances */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl">Appearances</h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {playerData.appearances ? playerData.appearances : ""}
                </h3>
              </div>

              {/* Column 2: Goals / Clean Sheets */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl whitespace-nowrap">
                  Goals / Clean Sheets
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {playerData.goals_cleansheets ? playerData.goals_cleansheets : ""}
                </h3>
              </div>

              {/* Column 3: Minutes Played */}
              <div className="flex flex-col gap-5 justify-center items-center">
                <h3 className="font-bayon text-white text-2xl">
                  Minutes Played
                </h3>
                <h3 className="font-bayon text-custom-green text-8xl">
                  {playerData.minute_played ? playerData.minute_played : ""}
                </h3>
              </div>
            </div>

            {/* Club History */}
            <div className="flex flex-col gap-2">
              {playerData.club_history && playerData.club_history.map((club, index) => (
                <div key={index} className="text-2xl font-bayon text-white">
                  {club}
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="flex flex-col gap-3">
              {playerData.awards && playerData.awards.map((award, index) => (
                <div key={index} className="flex flex-row items-center gap-5">
                  <Image
                    src="/assets/image/prize.svg"
                    alt="award"
                    width="40"
                    height="40"
                  />
                  <p className="text-2xl font-bayon text-white">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
