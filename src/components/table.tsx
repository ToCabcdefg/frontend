"use client";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  Column,
  TableInstance,
} from "react-table";
import { useRouter } from "next/router";
import React from "react";
import SearchBar from "./search-bar";
import Image from "next/image";

interface Data {
  name: string;
  nationality: string;
  date_of_birth: string;
  height: number;
  club: string;
  position: string;

  number: number;
  salary: string;
  club_history: string[];
  awards: string[];
  appearances: number;
  goals: number;
  wins: number;
  losses: number;
}

const columns: Column<Data>[] = [
  { Header: "NAME", accessor: "name" },
  { Header: "NATIONALITY", accessor: "nationality" },
  { Header: "DATE OF BIRTH", accessor: "date_of_birth" },
  { Header: "HEIGHT (CM)", accessor: "height" },
  { Header: "CLUB", accessor: "club" },
  { Header: "POSITION", accessor: "position" },

  { Header: "NUMBER", accessor: "number" },
  { Header: "SALARY", accessor: "salary" },
  { Header: "CLUB HISTORY", accessor: "club_history" },
  { Header: "AWARDS", accessor: "awards" },
  { Header: "APPEARANCES", accessor: "appearances" },
  { Header: "GOALS", accessor: "goals" },
  { Header: "WINS", accessor: "wins" },
  { Header: "LOSSES", accessor: "losses" },
];

interface MyTableProps {
  data: Data[];
  showSearch?: boolean;
}

const Table: React.FC<MyTableProps> = ({ data, showSearch = true }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    // setGlobalFilter,
  } = useTable<Data>(
    {
      columns,
      data,
    },
    // useGlobalFilter,
    useSortBy
  ) as TableInstance<Data> & { setGlobalFilter: (filterValue: string) => void };

  return (
    <div className="p-4 w-full">
      {/* {showSearch && (
        <SearchBar
          search={(state as any).globalFilter}
          setSearch={setGlobalFilter}
        />
      )} */}

      <div className="overflow-x-auto  no-scrollbar">
        <table
          {...getTableProps()}
          className="table-auto bg-black"
          style={{ minWidth: "1000px" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`pl-4 py-2 text-left text-custom-green font-bayon tracking-widest text-xl whitespace-nowrap ${
                      column.Header === "NAME"
                        ? "sticky left-0 z-10 bg-black"
                        : ""
                    } ${
                      column.Header === "CLUB HISTORY" ||
                      column.Header === "AWARDS"
                        ? ""
                        : ""
                    }`}
                    key={column.id}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{column.render("Header")}</span>
                      <Image
                        src="/assets/icon/sort-icon.svg"
                        alt="sort icon"
                        width={20}
                        height={20}
                      />
                    </div>
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
                          className="px-4 py-2 font-bayon tracking-widest text-xl align-top whitespace-nowrap"
                        >
                          {cell.value.map((item: string, index: number) => (
                            <div key={index}>{item}</div>
                          ))}
                        </td>
                      ) : (
                        <td
                          {...cell.getCellProps()}
                          className={`px-4 py-2 font-bayon tracking-widest text-xl align-top whitespace-nowrap ${
                            cell.column.Header === "NAME"
                              ? "hover:text-custom-pink sticky hover:cursor-pointer left-0 z-10 bg-black"
                              : ""
                          } ${
                            cell.column.Header === "HEIGHT (CM)" ||
                            cell.column.Header === "APPEARANCES"
                              ? "pr-32"
                              : "pr-20"
                          }`}
                          key={cell.value}
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
