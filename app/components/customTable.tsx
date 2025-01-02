"use client";
import React, { useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";

type Column = {
  field: string; // Key for accessing the data field
  headerName: string; // Display name for the header
  sortable?: boolean; // Whether this column is sortable
};

type TableProps = {
  columns?: Column[];
  data?: Record<string, any>[];
  success?: boolean;
  error?: string;
};

const CustomTable: React.FC<TableProps> = ({ columns = [], data = [] }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  // Handle sorting
  const sortedData = React.useMemo(() => {
    // console.log("data before", data);

    if (!sortConfig) return data;
    // console.log("data after", data);

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  // Paginate the data
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    // console.log({ startIndex, rowsPerPage, sortedData, currentPage }, "index");

    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);
  // console.log(paginatedData, "pdata");

  // Handle sort on column header click
  const handleSort = (key: string) => {
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  // Handle page navigation
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden my-2">
        {columns.length === 0 || data.length === 0 ? (
          <div className="p-4 text-center text-gray-600">
            No data available to display
          </div>
        ) : (
          <>
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-100">
                  {columns.map((column) => (
                    <th
                      key={column.field}
                      onClick={() =>
                        column.sortable && handleSort(column.field)
                      }
                      className={`px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ${
                        column.sortable ? "cursor-pointer" : ""
                      }`}
                    >
                      <span className="flex">
                        {column.headerName}
                        {column.sortable && (
                          <span className="ml-2 text-gray-400">
                            {sortConfig?.key === column.field ? (
                              sortConfig.direction === "asc" ? (
                                <BiSolidArrowToTop size={15} />
                              ) : (
                                <BiSolidArrowToBottom size={15} />
                              )
                            ) : (
                              <CgArrowsExchangeAltV size={15} />
                            )}
                          </span>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, rowIndex) => {
                  // if (!row) return <div key={rowIndex}> </div>;

                  return (
                    <tr
                      key={rowIndex}
                      className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      {columns.map((column) => (
                        <td
                          className="px-4 py-4 border-b border-gray-200 bg-white text-sm"
                          key={column.field}
                        >
                          {row[column.field]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                {/*  */}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <div>
                <label
                  htmlFor="rows-per-page"
                  className="text-sm font-medium text-gray-700"
                >
                  Rows per page:
                </label>
                <select
                  id="rows-per-page"
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  className="ml-2 border border-gray-300 rounded p-1 text-sm"
                >
                  {[5, 10, 20, 50].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border rounded ${
                    currentPage === 1
                      ? "text-gray-400 border-gray-300"
                      : "text-indigo-600 border-indigo-400"
                  }`}
                >
                  Previous
                </button>
                <span className="mx-2 text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 border rounded ${
                    currentPage === totalPages
                      ? "text-gray-400 border-gray-300"
                      : "text-indigo-600 border-indigo-400"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomTable;
