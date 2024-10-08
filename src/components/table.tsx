"use client";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  Column,
  TableInstance,
} from "react-table";
import { useRouter } from "next/navigation";
import React from "react";
import SearchBar from "./search-bar";
import Image from "next/image";
import { useState } from "react";
import { PlayerData } from "@/modules/home/page";

const columns: Column<PlayerData>[] = [
  {
    Header: "NAME",
    columns: [{ Header: "NAME", accessor: "name" }],
  },
  {
    Header: "Personal Details", // Group header
    columns: [
      { Header: "NATIONALITY", accessor: "nationalities" },
      { Header: "DATE OF BIRTH", accessor: "DOB" },
      { Header: "HEIGHT (CM)", accessor: "height" },
    ],
  },
  {
    Header: "Player Details", // Group header
    columns: [
      { Header: "CLUB", accessor: "club" },
      { Header: "POSITION", accessor: "position" },
      { Header: "NUMBER", accessor: "number" },
      { Header: "CLUB HISTORY", accessor: "club_history" },
      { Header: "AWARDS", accessor: "awards" },
    ],
  },
  {
    Header: "Stats", // Group header
    columns: [
      { Header: "APPEARANCES", accessor: "appearances" },
      { Header: "GOALS / CLEAN SHEETS", accessor: "goals" },
      { Header: "MINUTES PLAYED", accessor: "minutes_played" },
    ],
  },
];

interface MyTableProps {
  data: PlayerData[];
  showSearch?: boolean;
}

const Table: React.FC<MyTableProps> = ({ data, showSearch = false }) => {
  const router = useRouter();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable<PlayerData>(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  ) as TableInstance<PlayerData> & {
    setGlobalFilter: (filterValue: string) => void;
  };

  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState<string>("");

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSearchClick = () => {
    setGlobalFilter(search); // Trigger search when button is clicked
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
    <div className=" w-full">
      {showSearch && (
        <div className="flex items-center gap-3 max-w-full w-4/5 h-[36px] mb-40">
          <div className="flex items-center bg-white h-full w-38 gap-3 px-[16px]">
            <button className="font-bebas h-full text-black tracking-wider">
              DOWNLOAD CSV
            </button>
            <Image
              src="/assets/image/Download.svg"
              alt="download"
              width={18}
              height={18}
            />
          </div>
          <div className="flex justify-between gap-[10px] h-full">
            <SearchBar value={search} onChange={(value) => setSearch(value)} />
            <button
              className="font-bebas bg-custom-green w-[95px] h-[36px] text-black tracking-wider"
              onClick={handleSearchClick}
            >
              SEARCH
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto no-scrollbar h-[700px] overflow-y-auto">
        <table
          {...getTableProps()}
          className="table-auto bg-black"
          style={{ tableLayout: "auto", minWidth: "2000px" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`min-w-[240px] pl-4 text-left text-custom-green font-bayon tracking-wider text-xl font-normal whitespace-nowrap sticky top-0 z-10 bg-black ${
                      column.Header === "NAME"
                        ? "sticky left-0 z-20 bg-black"
                        : ""
                    }`}
                    key={column.id}
                    colSpan={column.columns ? column.columns.length : 0}
                  >
                    {column.columns ? (
                      <span
                        className={`text-custom-green text-[32px] h-[50px] tracking-wider font-normal flex justify-center`}
                      >
                        {column.Header !== "NAME" ? column.Header : ""}
                      </span>
                    ) : (
                      <div className="flex items-center justify-between w-full mr-4 gap-4">
                        <span>{column.render("Header")}</span>
                        <Image
                          src="/assets/icon/sort-icon.svg"
                          alt="sort icon"
                          width={20}
                          height={20}
                          className="pb-1"
                        />
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <>
                      {Array.isArray(cell.value) ? (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 py-4 font-bayon tracking-wider text-xl font-normal align-top whitespace-nowrap"
                        >
                          {cell.value.map((item: string, index: number) => (
                            <div key={index}>{item}</div>
                          ))}
                        </td>
                      ) : cell.column.Header === "CLUB" ? (
                        <td
                          onClick={() =>
                            router.replace(`/club/${cell.value.club_name}`)
                          }
                          className="align-top"
                        >
                          <div className="whitespace-nowrap flex gap-2 py-4 hover:text-custom-pink hover:cursor-pointer bg-black items-center">
                            {cell.value.club_name}
                            <Image
                              src={cell.value.club_logo}
                              width={30}
                              height={30}
                              alt="club-logo"
                            />
                          </div>
                        </td>
                      ) : (
                        <td
                          {...cell.getCellProps()}
                          className={`px-4 py-4 font-bayon tracking-wider text-xl align-top whitespace-nowrap ${
                            cell.column.Header === "NAME"
                              ? "hover:text-custom-pink sticky hover:cursor-pointer left-0 z-10 bg-black"
                              : cell.column.Header === "APPEARANCES" ||
                                cell.column.Header === "GOALS / CLEAN SHEETS" ||
                                cell.column.Header === "MINUTES PLAYED"
                              ? "text-center"
                              : ""
                          }`}
                          key={cell.value}
                          onClick={
                            cell.column.Header === "NAME"
                              ? () => router.push(`/profile/${cell.value}`)
                              : // : cell.column.Header === "CLUB"
                                // ? () => console.log('club')
                                () => console.log(cell.column.Header)
                          }
                        >
                          {cell.render("Cell")}
                        </td>
                      )}
                    </>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
