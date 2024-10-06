"use client";

import axios from "axios";
import { useState } from "react";

export default function Navbar() {
  const [club, setClub] = useState();

  const fetchData = async (club_name: string) => {const { data } = await axios.get(
    `https://toc-backend.codespacebar.com/api/club/${club_name}`
  
  );
  console.log(data)
};
  return (
    <div className="navbar">
      <div className="logos">
        <img
          src="/assets/image/Arsenal.svg"
          alt="Arsenal"
          onClick={() => fetchData("arsenal")}
        />
        <img src="/assets/image/AstonVilla.svg" alt="AstonVilla" onClick={() => fetchData("Aston Villa")} />
        <img src="/assets/image/Bournemouth.svg" alt="Bournemouth"onClick={() => fetchData("AFC Bournemouth")} />
        <img src="/assets/image/Brenford.svg" alt="Brenford"onClick={() => fetchData("Brentford")} />
        <img src="/assets/image/Brighton.svg" alt="Brighton"onClick={() => fetchData("Brighton and Hove Albion")} />
        <img src="/assets/image/Chelsea.svg" alt="Chelsea"onClick={() => fetchData("Chelsea")} />
        <img src="/assets/image/CrystalP.svg" alt="Crystal Palace"onClick={() => fetchData("Crystal Palace")} />
        <img src="/assets/image/Everton.svg" alt="Everton"onClick={() => fetchData("Everton")} />
        <img src="/assets/image/Fulham.svg" alt="Fulham"onClick={() => fetchData("Fulham")} />
        <img src="/assets/image/Ipswich.svg" alt="Ipswich"onClick={() => fetchData("Ipswich Town")} />
        <img src="/assets/image/Leicester.svg" alt="Leicester City"onClick={() => fetchData("Leicester City")} />
        <img src="/assets/image/Liverpool.svg" alt="Liverpool"onClick={() => fetchData("Liverpool")} />
        <img src="/assets/image/ManCity.svg" alt="Manchester City"onClick={() => fetchData("Manchester City")} />
        <img src="/assets/image/ManU.svg" alt="Manchester United"onClick={() => fetchData("Manchester United")} />
        <img src="/assets/image/Newcastle.svg" alt="Newcastle"onClick={() => fetchData("Newcastle United")} />
        <img src="/assets/image/Nottm.svg" alt="Nottm Forest"onClick={() => fetchData("Nottingham Forest")} />
        <img src="/assets/image/Southampton.svg" alt="Southampton"onClick={() => fetchData("Southampton")} />
        <img src="/assets/image/Tottenham.svg" alt="Tottenham"onClick={() => fetchData("Tottenham Hotspur")} />
        <img src="/assets/image/Westham.svg" alt="Westham"onClick={() => fetchData("West Ham United")} />
        <img src="/assets/image/Wolves.svg" alt="Wolves"onClick={() => fetchData("Wolverhampton Wanderers")} />
        <img
          src="/assets/image/Arsenal.svg"
          alt="Arsenal"
          onClick={() => fetchData("arsenal")}
        />
        <img src="/assets/image/AstonVilla.svg" alt="AstonVilla" onClick={() => fetchData("Aston Villa")} />
        <img src="/assets/image/Bournemouth.svg" alt="Bournemouth"onClick={() => fetchData("AFC Bournemouth")} />
        <img src="/assets/image/Brenford.svg" alt="Brenford"onClick={() => fetchData("Brentford")} />
        <img src="/assets/image/Brighton.svg" alt="Brighton"onClick={() => fetchData("Brighton and Hove Albion")} />
        <img src="/assets/image/Chelsea.svg" alt="Chelsea"onClick={() => fetchData("Chelsea")} />
        <img src="/assets/image/CrystalP.svg" alt="Crystal Palace"onClick={() => fetchData("Crystal Palace")} />
        <img src="/assets/image/Everton.svg" alt="Everton"onClick={() => fetchData("Everton")} />
        <img src="/assets/image/Fulham.svg" alt="Fulham"onClick={() => fetchData("Fulham")} />
        <img src="/assets/image/Ipswich.svg" alt="Ipswich"onClick={() => fetchData("Ipswich Town")} />
        <img src="/assets/image/Leicester.svg" alt="Leicester City"onClick={() => fetchData("Leicester City")} />
        <img src="/assets/image/Liverpool.svg" alt="Liverpool"onClick={() => fetchData("Liverpool")} />
        <img src="/assets/image/ManCity.svg" alt="Manchester City"onClick={() => fetchData("Manchester City")} />
      </div>
    </div>
  );
}
