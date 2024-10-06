"use client";

import Image from "next/image";
import Table from "../../components/table";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

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

type ClubDetail = {
  club_name: string;
  team_logo: string;
  players: PlayerData[];
};

type Props = {
  club_name: string;
};

const ClubPage = ({ club_name }: Props) => {
  const router = useRouter();
  const [clubDetail, setClubDetail] = useState<ClubDetail>();
  const fetchData = async (club_name: string) => {
    const { data } = await axios.get(
      `https://toc-backend.codespacebar.com/api/club/${club_name}`
    );
    console.log(data);
    setClubDetail(data);
  };

  useEffect(() => {
    fetchData(club_name);
  }, []);

  return (
    <>
      {clubDetail && (
        <div className="relative">
          <Image
            src="/assets/image/club-header.svg"
            alt="club-bg"
            width={2000}
            height={300}
          />
          <div className="flex gap-8 absolute top-48 left-[10%]">
            <div>
              <Image
                src="/assets/image/green-back.svg"
                alt="back"
                width="50"
                height="50"
                className="cursor-pointer relative top-1/3"
                onClick={() => router.back()}
              />
            </div>
            <div>
              <Image
                src={clubDetail.team_logo ? clubDetail.team_logo : ""}
                height={140}
                width={140}
                alt="club-header"
              />
            </div>
            <div className="font-racing text-[64px] ">
              <p>{clubDetail.club_name ? clubDetail.club_name : ""}</p>
              <p className="text-transparent text-stroke-2-white absolute top-12">
                Players
              </p>
            </div>
          </div>
          {/* <div className="pr-10 pl-10">
        {clubDetail && <Table data={clubDetail.players} />}
      </div> */}
        </div>
      )}
    </>
  );
};

export default ClubPage;
