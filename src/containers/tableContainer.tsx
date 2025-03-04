'use client';
import DynamicTable from "@/components/DynamicTable";
import DynamicTable2 from "@/components/DynamicTable copy";
import FilterComponent from "@/components/FilterCondition";
import Pagination from "@/components/Pagination";
import SearchBox from "@/components/SearchBox";
import TableFilters from "@/containers/filtersContainer";
import LeadsFilters from "@/containers/filtersContainer";
import { IOpenTaskData } from "@/interfaces";
import { FilterState } from "@/interfaces/tableFilterTypes";
import { ManagerInstance } from "@/services/manager.service";
import { columns } from "@/utils/constants";
import { getAllKeys, handleError } from "@/utils/helpers";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const initialData: IOpenTaskData[] = [
  {
    StudentName: "John Doe",
    Class: "10th Grade",
    PhoneNumber: "123-456-7890",
    Status: "Active",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-24",
  },
  {
    StudentName: "Jane Smith",
    Class: "9th Grade",
    PhoneNumber: "987-654-3210",
    Status: "Inactive",
    CreatedBy: "Teacher B",
    CreatedAt: "2025-02-23",
  },
  {
    StudentName: "Alice Johnson",
    Class: "8th Grade",
    PhoneNumber: "555-123-6789",
    Status: "Active",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-22",
  },
  {
    StudentName: "Bob Williams",
    Class: "11th Grade",
    PhoneNumber: "444-987-6543",
    Status: "Active",
    CreatedBy: "Teacher A",
    CreatedAt: "2025-02-21",
  },
  {
    StudentName: "Charlie Brown",
    Class: "7th Grade",
    PhoneNumber: "333-222-1111",
    Status: "Inactive",
    CreatedBy: "Teacher C",
    CreatedAt: "2025-02-20",
  },
  {
    StudentName: "David Miller",
    Class: "12th Grade",
    PhoneNumber: "666-555-4444",
    Status: "Active",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-19",
  },
  {
    StudentName: "Emma Davis",
    Class: "9th Grade",
    PhoneNumber: "777-888-9999",
    Status: "Inactive",
    CreatedBy: "Teacher B",
    CreatedAt: "2025-02-18",
  },
  {
    StudentName: "Frank Thomas",
    Class: "10th Grade",
    PhoneNumber: "111-222-3333",
    Status: "Active",
    CreatedBy: "Teacher A",
    CreatedAt: "2025-02-17",
  },
  {
    StudentName: "Grace Lee",
    Class: "11th Grade",
    PhoneNumber: "999-000-1111",
    Status: "Active",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-16",
  },
  {
    StudentName: "Henry Wilson",
    Class: "8th Grade",
    PhoneNumber: "222-333-4444",
    Status: "Inactive",
    CreatedBy: "Teacher C",
    CreatedAt: "2025-02-15",
  },
  {
    StudentName: "Isabella Martinez",
    Class: "12th Grade",
    PhoneNumber: "555-666-7777",
    Status: "Active",
    CreatedBy: "Teacher A",
    CreatedAt: "2025-02-14",
  },
  {
    StudentName: "Jack Robinson",
    Class: "7th Grade",
    PhoneNumber: "888-777-6666",
    Status: "Inactive",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-13",
  },
];


const TableContainer: React.FC = () => {

  const [tableData,setTableData] = useState<IOpenTaskData[]>(initialData);
  const [filterState, setFilterState] = useState<FilterState>({
    status: [],
    searchString: '',
    singleDate: undefined,
    dateRange: { startDate: undefined, endDate: undefined },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addCondition,setCondition] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);

  // const totalPages = (totalLeads/rowsPerPage);
  const totalPages = 10;

  const handleCondition = (key:string) => {
    setFilters([...filters,key]);
    setCondition(prev=>!prev);
  }

  const handleCloseFilter = (filter:string) => {
    setFilters(filters.filter((each) => each !== filter));
  };

  return (
    <div>
      <div className="p-6 rounded-[22px] border border-red-600 w-full dark-invert">
        {/* Header */}
        <div className="flex justify-between items-center pb-2 mb-4">
          <div className="flex space-x-4">
            <span className="border-b-2 border-blue-600 pb-1">Current View</span>
            <span>Previous View</span>
          </div>            
        </div>
        <div className="flex justify-between w-full">
          <span>All Leads</span>
          <button className="bg-blue-700 px-4 py-2 rounded-md" onClick={()=>setCondition(prev=>!prev)}>+ Add a Condition</button>
        </div>

        <div className="flex justify-between items-center gap-10 p-2">
          <SearchBox />
          <div className="flex items-center gap-3">
            <MdKeyboardArrowLeft size={24} color="#0D2167" />
              {1}
            <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
          </div>
          <IoSettingsOutline size={24} color="#0D2167" />
        </div>
        {addCondition && <div>
          <ul>
            {getAllKeys(initialData).map((key) => (
              <li
                key={key}
                onClick={() => handleCondition(key)} // Pass the key if needed
                style={{ cursor: "pointer", padding: "5px" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
        }

        {filters.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <FilterComponent
                key={filter}
                onClose={() => handleCloseFilter(filter)}
              />
            ))}
          </div>
        )}
      </div>
        <div className="flex flex-wrap gap-6 m-5 dark:invert">
          <button className="flex items-center justify-center border border-blue-800 rounded-[25px] px-4 py-2 gap-2 font-semibold text-base mr-5">
            <p>Today Leads</p>
            <span className="bg-blue-800 px-2 py-1 rounded-full text-lg">
              {/* {todayLeads} */}
              {1}
            </span>
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-[25px] px-4 py-2 gap-2 font-semibold text-base">
            <p>Yesterday Leads</p>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-lg">
              {/* {yesterdayLeads} */}
              {2}
            </span>
          </button>
        </div>
        <TableFilters setFilter={setFilterState} filterState={filterState} />
        <DynamicTable2 data={tableData} columns={columns} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          onRowsPerPageChange={(rows) => {
            setRowsPerPage(rows);
            setCurrentPage(1); // Reset to first page when changing rows per page
          }}
        />
    </div>
  );
};

export default TableContainer;