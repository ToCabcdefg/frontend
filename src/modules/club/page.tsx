"use client";

import Image from "next/image";
import Table from "../../components/table";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { PlayerData } from "../home/page";

type ClubDetail = {
  name: string;
  logo: string;
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

          <div className="flex justify-center items-center gap-8 absolute top-48 left-[10%]">
            <div>
              <Image
                src="/assets/image/green-back.svg"
                alt="back"
                width="50"
                height="50"
                className="cursor-pointer relative top-1/3"
                onClick={() => router.push("/")}
              />
            </div>
            <div>
              <Image
                src={clubDetail.logo ? clubDetail.logo : ""}
                height={140}
                width={140}
                alt="club-header"
              />
            </div>

            <div className="font-racing text-[64px] leading-none">
              <p className="m-0">{clubDetail.name ? clubDetail.name : ""}</p>
              <p className="text-transparent text-stroke-2-white m-0">
                Players
              </p>
            </div>
          </div>
          <div className="pr-10 pl-10">
            {clubDetail && <Table data={clubDetail.players} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ClubPage;
