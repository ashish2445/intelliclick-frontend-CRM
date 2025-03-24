'use client';
import React, { useEffect, useState } from "react";
import StatisticsContainer from "@/containers/statisticsContainer";
import { IOpenTaskData, ITableFields } from "@/interfaces";
import { handleError } from "@/utils/helpers";
import { AxiosError } from "axios";
import { FilterInstance } from "@/services/tableFilter.service";
import { QueryState } from "@/interfaces/tableFilterTypes";

// const data:IOpenTaskData[]= [
//   {
//     "StudentName": "John Doe",
//     "Class": "10th Grade",
//     "PhoneNumber": "123-456-7890",
//     "Status": "Active",
//     "CreatedBy": "Admin",
//     "CreatedAt": "2025-02-24",
//   },
//   {
//     "StudentName": "Jane Smith",
//     "Class": "9th Grade",
//     "PhoneNumber": "987-654-3210",
//     "Status": "Inactive",
//     "CreatedBy": "Teacher B",
//     "CreatedAt": "2025-02-23",
//   },
// ];

const Home: React.FC = () => {

  const [tableData,setTableData] = useState<ITableFields[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [query, setQuery] = useState<QueryState>({
    filters:[],
    logic: "AND",
    pagination: {
      page: currentPage,
      limit: rowsPerPage
    }
  });

    const filterData = async () => {
    try {
      const filterResponse = await FilterInstance.getFilterResponse(query); // Await the response
      setTableData(filterResponse?.leads);
    } catch (error) {
      handleError(error as AxiosError,false);
    }
  };

  useEffect(() => {
    // if (isInitialRender.current) {
    //   isInitialRender.current = false;
    //   return; // Prevents the first execution
    // }
    filterData();
  }, [query, currentPage, rowsPerPage]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <StatisticsContainer data={tableData} title={'My open Task'} />
      <StatisticsContainer data={tableData} title={'My Meeting'} />
      <StatisticsContainer data={tableData} title={'Today Leads'} />
      <StatisticsContainer title={'My Deals Closing This Month'} />
    </div>
  );
};

export default Home;
