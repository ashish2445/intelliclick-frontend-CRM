import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange, rowsPerPage, onRowsPerPageChange }: PaginationProps) {
  const adjustedTotalPages = Math.max(1, Math.ceil(totalPages));
  const pages = Array.from({ length: adjustedTotalPages }, (_, index) => index + 1);
  const rowsOptions = [10, 25, 50, 100];

  return (
    <div className="flex justify-between items-center dark:invert bg-gray-200 px-4 py-2 rounded-b-lg w-full sticky top-0 left-0">
      {/* Rows Per Page */}
      <div className="flex items-center space-x-2 text-sm font-light">
        <label htmlFor="rows-per-page" className="text-sm font-light">Leads:</label>
        <select
          id="rows-per-page"
          className="bg-transparent outline-none border-none pr-2"
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        >
          {rowsOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p className="text-sm font-light">
          {totalPages > 0
            ? `${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, totalPages * rowsPerPage)}`
            : "0-0"} of {totalPages > 0 ? totalPages * rowsPerPage : 0}
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <label htmlFor="current-page">
          <select
            id="current-page"
            className="bg-transparent outline-none border-none"
            value={currentPage}
            onChange={(e) => onPageChange(Number(e.target.value))}
          >
            {pages.map((page) => (
              <option key={page} value={page}>{page.toString().padStart(2, "0")}</option>
            ))}
          </select>
        </label>
        <p className="text-sm font-light ml-2">of {Math.ceil(totalPages) || 0} pages</p>

        {/* Navigation Buttons */}
        <FaChevronLeft
          className={`cursor-pointer text-lg px-2 border-l border-r border-gray-300 ml-6 ${currentPage === 1 ? 'text-gray-300 pointer-events-none' : ''}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          size={24}
        />
        <FaChevronRight
          className={`cursor-pointer text-lg px-2 ${currentPage === Math.max(1, totalPages) ? 'text-gray-300 pointer-events-none' : ''}`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          size={22}
        />
      </div>
    </div>
  );
}

export default Pagination;
