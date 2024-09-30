import Image from "next/image";
import SearchFilter from "../searchFilter/searchFilter";

const HomePage = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/image/header.svg"
        alt="home-header"
        width={2000}
        height={1000}
      />

      <div className="absolute top-[20%] left-[10%] flex flex-col text-wrap gap-12 w-[38%]">
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
      <div className="navbar">
        <div className="logos">
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
      
      <SearchFilter
      
      />
    </div>
    
  );
};

export default HomePage;
