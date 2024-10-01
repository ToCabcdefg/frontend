'use client'

import { useTable, useSortBy, useGlobalFilter, Column, TableInstance } from 'react-table';
import { useRouter } from 'next/router';
import React from 'react';

// Define the data type for each row
interface Data {
  id: number;
  name: string;
  age: number;
  country: string;
}

// Mock Data
const data: Data[] = [
  { id: 1, name: 'John Doe', age: 28, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 34, country: 'UK' },
  { id: 3, name: 'Michael Johnson', age: 25, country: 'Canada' },
  { id: 4, name: 'Emily Davis', age: 40, country: 'Australia' },
];

// Define columns
const columns: Column<Data>[] = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Country', accessor: 'country' },
];

export const Table: React.FC = () => {
  // const router = useRouter();
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable<Data>(
    {
      columns,
      data,
    },
    useGlobalFilter, // Enable Global Search
    useSortBy // Enable Sorting
  ) as TableInstance<Data> & { setGlobalFilter: (filterValue: string) => void };

  return (
    <div className="p-4">
      <input
        value={(state as any).globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value || '')}
        placeholder="Search..."
        className="p-2 border rounded mb-4"
      />
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 text-left"
                  key={column.id}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className=" cursor-pointer"
                key={row.id}
                // onClick={() => router.push(`/details/${row.original.id}`)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2" key={cell.value}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};