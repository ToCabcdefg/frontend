import Image from "next/image";
import SearchFilter from "../searchFilter/searchFilter";
import Table from "../table/table";
import Navbar from "../navbar/Navbar";

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

      {/* <Navbar /> */}

      <div className="flex justify-center">
        <div className="w-[1120px]">
          <SearchFilter />
          <Table />
        </div>
      </div>
    </div>

  );
};

export default HomePage;
