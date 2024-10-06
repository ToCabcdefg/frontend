"use client";

import { useState } from "react";

export default function Navbar() {
  const [club, setClub] = useState();

  const fetchData = (club_name: string) => {};
  return (
    <div className="navbar">
      <div className="logos">
        <img
          src="/assets/image/Arsenal.svg"
          alt="Arsenal"
          onClick={() => fetchData("arsenal")}
        />
        <img src="/assets/image/AstonVilla.svg" alt="AstonVilla" />
        <img src="/assets/image/Bournemouth.svg" alt="Bournemouth" />
        <img src="/assets/image/Brenford.svg" alt="Brenford" />
        <img src="/assets/image/Brighton.svg" alt="Brighton" />
        <img src="/assets/image/Chelsea.svg" alt="Chelsea" />
        <img src="/assets/image/CrystalP.svg" alt="Crystal Palace" />
        <img src="/assets/image/Everton.svg" alt="Everton" />
        <img src="/assets/image/Fulham.svg" alt="Fulham" />
        <img src="/assets/image/Ipswich.svg" alt="Ipswich" />
        <img src="/assets/image/Leicester.svg" alt="Leicester City" />
        <img src="/assets/image/Liverpool.svg" alt="Liverpool" />
        <img src="/assets/image/ManCity.svg" alt="Manchester City" />
        <img src="/assets/image/ManU.svg" alt="Manchester United" />
        <img src="/assets/image/Newcastle.svg" alt="Newcastle" />
        <img src="/assets/image/Nottm.svg" alt="Nottm Forest" />
        <img src="/assets/image/Southampton.svg" alt="Southampton" />
        <img src="/assets/image/Tottenham.svg" alt="Tottenham" />
        <img src="/assets/image/Westham.svg" alt="Westham" />
        <img src="/assets/image/Wolves.svg" alt="Wolves" />
        <img src="/assets/image/Arsenal.svg" alt="Arsenal" />
        <img src="/assets/image/AstonVilla.svg" alt="AstonVilla" />
        <img src="/assets/image/Bournemouth.svg" alt="Bournemouth" />
        <img src="/assets/image/Brenford.svg" alt="Brenford" />
        <img src="/assets/image/Brighton.svg" alt="Brighton" />
        <img src="/assets/image/Chelsea.svg" alt="Chelsea" />
        <img src="/assets/image/CrystalP.svg" alt="Crystal Palace" />
        <img src="/assets/image/Everton.svg" alt="Everton" />
        <img src="/assets/image/Fulham.svg" alt="Fulham" />
        <img src="/assets/image/Ipswich.svg" alt="Ipswich" />
        <img src="/assets/image/Leicester.svg" alt="Leicester City" />
        <img src="/assets/image/Liverpool.svg" alt="Liverpool" />
        <img src="/assets/image/ManCity.svg" alt="Manchester City" />
      </div>
    </div>
  );
}
