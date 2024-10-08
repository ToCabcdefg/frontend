"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [clubDetail, setClubDetail] = useState();

  const handleOnClick = async (club_name: string) => {
    router.push(`/club/${club_name}`);
  };
  return (
    <div className="navbar">
      <div className="logos">
        <img
          src="/assets/image/Arsenal.svg"
          alt="Arsenal"
          onClick={() => handleOnClick("Arsenal FC")}
        />
        <img
          src="/assets/image/AstonVilla.svg"
          alt="AstonVilla"
          onClick={() => handleOnClick("Aston Villa")}
        />
        <img
          src="/assets/image/Bournemouth.svg"
          alt="Bournemouth"
          onClick={() => handleOnClick("AFC Bournemouth")}
        />
        <img
          src="/assets/image/Brenford.svg"
          alt="Brenford"
          onClick={() => handleOnClick("Brentford FC")}
        />
        <img
          src="/assets/image/Brighton.svg"
          alt="Brighton"
          onClick={() => handleOnClick("Brighton & Hove Albion")}
        />
        <img
          src="/assets/image/Chelsea.svg"
          alt="Chelsea"
          onClick={() => handleOnClick("Chelsea FC")}
        />
        <img
          src="/assets/image/CrystalP.svg"
          alt="Crystal Palace"
          onClick={() => handleOnClick("Crystal Palace")}
        />
        <img
          src="/assets/image/Everton.svg"
          alt="Everton"
          onClick={() => handleOnClick("Everton FC")}
        />
        <img
          src="/assets/image/Fulham.svg"
          alt="Fulham"
          onClick={() => handleOnClick("Fulham FC")}
        />
        <img
          src="/assets/image/Ipswich.svg"
          alt="Ipswich"
          onClick={() => handleOnClick("Ipswich Town")}
        />
        <img
          src="/assets/image/Leicester.svg"
          alt="Leicester City"
          onClick={() => handleOnClick("Leicester City")}
        />
        <img
          src="/assets/image/Liverpool.svg"
          alt="Liverpool"
          onClick={() => handleOnClick("Liverpool FC")}
        />
        <img
          src="/assets/image/ManCity.svg"
          alt="Manchester City"
          onClick={() => handleOnClick("Manchester City")}
        />
        <img
          src="/assets/image/ManU.svg"
          alt="Manchester United"
          onClick={() => handleOnClick("Manchester United")}
        />
        <img
          src="/assets/image/Newcastle.svg"
          alt="Newcastle"
          onClick={() => handleOnClick("Newcastle United")}
        />
        <img
          src="/assets/image/Nottm.svg"
          alt="Nottm Forest"
          onClick={() => handleOnClick("Nottingham Forest")}
        />
        <img
          src="/assets/image/Southampton.svg"
          alt="Southampton"
          onClick={() => handleOnClick("Southampton FC")}
        />
        <img
          src="/assets/image/Tottenham.svg"
          alt="Tottenham"
          onClick={() => handleOnClick("Tottenham Hotspur")}
        />
        <img
          src="/assets/image/Westham.svg"
          alt="Westham"
          onClick={() => handleOnClick("West Ham United")}
        />
        <img
          src="/assets/image/Wolves.svg"
          alt="Wolves"
          onClick={() => handleOnClick("Wolverhampton Wanderers")}
        />
        <img
          src="/assets/image/Arsenal.svg"
          alt="Arsenal"
          onClick={() => handleOnClick("Arsenal FC")}
        />
        <img
          src="/assets/image/AstonVilla.svg"
          alt="AstonVilla"
          onClick={() => handleOnClick("Aston Villa")}
        />
        <img
          src="/assets/image/Bournemouth.svg"
          alt="Bournemouth"
          onClick={() => handleOnClick("AFC Bournemouth")}
        />
        <img
          src="/assets/image/Brenford.svg"
          alt="Brenford"
          onClick={() => handleOnClick("Brentford FC")}
        />
        <img
          src="/assets/image/Brighton.svg"
          alt="Brighton"
          onClick={() => handleOnClick("Brighton & Hove Albion")}
        />
        <img
          src="/assets/image/Chelsea.svg"
          alt="Chelsea"
          onClick={() => handleOnClick("Chelsea FC")}
        />
        <img
          src="/assets/image/CrystalP.svg"
          alt="Crystal Palace"
          onClick={() => handleOnClick("Crystal Palace")}
        />
        <img
          src="/assets/image/Everton.svg"
          alt="Everton"
          onClick={() => handleOnClick("Everton FC")}
        />
        <img
          src="/assets/image/Fulham.svg"
          alt="Fulham"
          onClick={() => handleOnClick("Fulham FC")}
        />
        <img
          src="/assets/image/Ipswich.svg"
          alt="Ipswich"
          onClick={() => handleOnClick("Ipswich Town")}
        />
        <img
          src="/assets/image/Leicester.svg"
          alt="Leicester City"
          onClick={() => handleOnClick("Leicester City")}
        />
        <img
          src="/assets/image/Liverpool.svg"
          alt="Liverpool"
          onClick={() => handleOnClick("Liverpool FC")}
        />
        <img
          src="/assets/image/ManCity.svg"
          alt="Manchester City"
          onClick={() => handleOnClick("Manchester City")}
        />
      </div>
    </div>
  );
}
