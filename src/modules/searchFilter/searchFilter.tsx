'use client';
import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/search-bar";

export default function SearchFilter() {
  const [search, setSearch] = useState<string>('');
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Player Name,Data\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="flex items-center justify-between max-w-full w-full h-[36px]">
      <div className="flex justify-between gap-[10px] h-full">
        <div className="relative">
          <button className="flex items-center font-bebas text-[16px] bg-white text-black px-[15px] h-full border-none rounded-[20px]" onClick={toggleFilter}>
            FILTERED BY ▼
          </button>
          {filterOpen && (
            <ul className="">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
        <SearchBar search={search} setSearch={setSearch} />
        <button className="font-bebas bg-custom-green w-[95px] h-[36px] text-black tracking-wider">SEARCH</button>
      </div>

      <div className="flex justify-between items-center bg-custom-green h-full w-[163px] px-[16px]">
        <button className="font-bebas h-full text-black tracking-wider">DOWNLOAD CSV</button>
        <Image
          src="/assets/image/Download.svg"
          alt="download"
          width={18}
          height={18}
        />
      </div>
    </div>
    // <div className="flex items-center justify-between p-[10px] max-w-full w-full">
    //   <div className="flex justify-between gap-[5px]">
    //     <div className={styles.filterDropdown}>
    //       <button className="font-bebas text-xl bg-white text-black py-[2px] px-[15px] border-none rounded-[20px]" onClick={toggleFilter}>
    //         FILTERED BY ▼
    //       </button>
    //       {filterOpen && (
    //         <ul className={styles.dropdownMenu}>
    //           <li>Option 1</li>
    //           <li>Option 2</li>
    //           <li>Option 3</li>
    //         </ul>
    //       )}
    //     </div>
    //     <input
    //       type="text"
    //       className="h-[36px]"
    //       placeholder="Find your favorite player..."
    //       value={searchTerm}
    //       onChange={handleSearchChange}
    //     />
    //     <button className="font-bebas text-xl bg-custom-green w-[95px] h-[36px] text-black">SEARCH</button>
    //   </div>

    //   <div className="flex justify-between items-center bg-custom-green h-[36px] w-[163px] px-[16px]">
    //     <button className="font-bebas text-xl text-black">DOWNLOAD CSV</button>
    //     <Image
    //       src="/assets/image/Download.svg"
    //       alt="download"
    //       width={18}
    //       height={18}
    //     />
    //   </div>
    //   {/* <button className={styles.configureColumnsButton}>
    //     CONFIGURE COLUMNS
    //   </button> */}
    // </div>
  );
}
