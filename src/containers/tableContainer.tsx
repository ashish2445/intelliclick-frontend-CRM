'use client';
import DynamicTable3 from "@/components/DragDropTable";
import FilterComponent from "@/components/FilterCondition";
import Pagination from "@/components/Pagination";
import SearchBox from "@/components/SearchBox";
import TableFilters from "@/containers/filtersContainer";
import LeadsFilters from "@/containers/filtersContainer";
import { ITableFields } from "@/interfaces";
import { FilterState,Filter, QueryState } from "@/interfaces/tableFilterTypes";
import { ManagerInstance } from "@/services/manager.service";
import { columns } from "@/utils/constants";
import { getAllKeys, handleError } from "@/utils/helpers";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FilterInstance } from "@/services/tableFilter.service";

// const initialData: IOpenTaskData[] = [
//   {
//     StudentName: "John Doe",
//     Class: "10th Grade",
//     PhoneNumber: "123-456-7890",
//     Status: "Prospects",
//     CreatedBy: "Admin",
//     CreatedAt: "2025-02-24",
//   },
//   {
//     StudentName: "Jane Smith",
//     Class: "9th Grade",
//     PhoneNumber: "987-654-3210",
//     Status: "Qualified",
//     CreatedBy: "Teacher B",
//     CreatedAt: "2025-02-23",
//   },
//   {
//     StudentName: "Alice Johnson",
//     Class: "8th Grade",
//     PhoneNumber: "555-123-6789",
//     Status: "Disqualified",
//     CreatedBy: "Admin",
//     CreatedAt: "2025-02-22",
//   },
//   {
//     StudentName: "Bob Williams",
//     Class: "11th Grade",
//     PhoneNumber: "444-987-6543",
//     Status: "Interested",
//     CreatedBy: "Teacher A",
//     CreatedAt: "2025-02-21",
//   },
//   {
//     StudentName: "Charlie Brown",
//     Class: "7th Grade",
//     PhoneNumber: "333-222-1111",
//     Status: "Inactive",
//     CreatedBy: "Teacher C",
//     CreatedAt: "2025-02-20",
//   },
//   {
//     StudentName: "David Miller",
//     Class: "12th Grade",
//     PhoneNumber: "666-555-4444",
//     Status: "Active",
//     CreatedBy: "Admin",
//     CreatedAt: "2025-02-19",
//   },
//   {
//     StudentName: "Emma Davis",
//     Class: "9th Grade",
//     PhoneNumber: "777-888-9999",
//     Status: "Inactive",
//     CreatedBy: "Teacher B",
//     CreatedAt: "2025-02-18",
//   },
//   {
//     StudentName: "Frank Thomas",
//     Class: "10th Grade",
//     PhoneNumber: "111-222-3333",
//     Status: "Active",
//     CreatedBy: "Teacher A",
//     CreatedAt: "2025-02-17",
//   },
//   {
//     StudentName: "Grace Lee",
//     Class: "11th Grade",
//     PhoneNumber: "999-000-1111",
//     Status: "Active",
//     CreatedBy: "Admin",
//     CreatedAt: "2025-02-16",
//   },
//   {
//     StudentName: "Henry Wilson",
//     Class: "8th Grade",
//     PhoneNumber: "222-333-4444",
//     Status: "Inactive",
//     CreatedBy: "Teacher C",
//     CreatedAt: "2025-02-15",
//   },
//   {
//     StudentName: "Isabella Martinez",
//     Class: "12th Grade",
//     PhoneNumber: "555-666-7777",
//     Status: "Active",
//     CreatedBy: "Teacher A",
//     CreatedAt: "2025-02-14",
//   },
//   {
//     StudentName: "Jack Robinson",
//     Class: "7th Grade",
//     PhoneNumber: "888-777-6666",
//     Status: "Inactive",
//     CreatedBy: "Admin",
//     CreatedAt: "2025-02-13",
//   },
// ];


// const responseObject = {
//   "total": 9,
//   "leads": [
//       {
//           "_id": "67c844c9ce78280e8565ea6b",
//           "name": "John M",
//           "phone": "3300001867",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:34:17.889Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c844bace78280e8565ea62",
//           "name": "John l",
//           "phone": "9900001867",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:34:02.417Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c844b0ce78280e8565ea59",
//           "name": "John K",
//           "phone": "8900001867",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:33:52.549Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c844a1ce78280e8565ea50",
//           "name": "John j",
//           "phone": "8900007867",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:33:37.798Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c84493ce78280e8565ea47",
//           "name": "John i",
//           "phone": "8900007887",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:33:23.334Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c84485ce78280e8565ea3e",
//           "name": "John H",
//           "phone": "3900007887",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:33:09.751Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c84477ce78280e8565ea35",
//           "name": "John G",
//           "phone": "3900007897",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:32:55.312Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c8446bce78280e8565ea2c",
//           "name": "John F",
//           "phone": "3900527897",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:32:43.528Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       },
//       {
//           "_id": "67c84428ce78280e8565ea1a",
//           "name": "John D",
//           "phone": "3914567897",
//           "fields": {
//               "class": "10th Grade",
//               "board": "CBSE",
//               "status": "Active",
//               "leadScore": 85,
//               "address": "123 Main Street",
//               "phoneNumber": "9876543210",
//               "email": "johndoe@example.com",
//               "fatherOccupation": "Engineer",
//               "motherOccupation": "Doctor",
//               "alternativeNumber": "7890123456",
//               "parentName": "Mr. and Mrs. Doe",
//               "schoolName": "ABC High School",
//               "city": "New York",
//               "state": "NY",
//               "percentage": "92%",
//               "interactWith": "Counselor"
//           },
//           "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
//           "region": "67c7df011e3e66164e985253",
//           "createdAt": "2025-03-05T12:31:36.230Z",
//           "updatedAt": "2025-03-05T12:48:04.612Z",
//           "__v": 0,
//           "assignedOwner": {
//               "_id": "67c6dfcdca39a9c9c3c3f84b",
//               "name": "callerD",
//               "email": "callerd@gmail.com",
//               "phone": "9876543210"
//           }
//       }
//   ]
// };

const responseObject = {
  "total": 14,
  "leads": [
      {
          "_id": "67c844c9ce78280e8565ea6b",
          "name": "John M",
          "phone": "3300001867",
          "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
          "region": "67c7df011e3e66164e985253",
          "createdAt": "2025-03-05T12:34:17.889Z",
          "updatedAt": "2025-03-07T16:08:20.109Z",
          "__v": 0,
          "assignedOwner": {
              "_id": "67cb19dd97eb04cf8489c931",
              "name": "caller@gmail.com",
              "email": "caller@gmail.com",
              "phone": "9876543210"
          },
          "class": "10th Grade",
          "board": "CBSE",
          "status": "Active",
          "leadScore": 85,
          "address": "123 Main Street",
          "phoneNumber": "9876543210",
          "email": "johndoe@example.com",
          "fatherOccupation": "Engineer",
          "motherOccupation": "Doctor",
          "alternativeNumber": "7890123456",
          "parentName": "Mr. and Mrs. Doe",
          "schoolName": "ABC High School",
          "city": "New York",
          "state": "NY",
          "percentage": "92%",
          "interactWith": "Counselor"
      },
      {
          "_id": "67c844bace78280e8565ea62",
          "name": "John L",
          "phone": "9900001867",
          "assignedAdmin": "67c6d44eca39a9c9c3c3f82e",
          "region": "67c7df011e3e66164e985253",
          "createdAt": "2025-03-05T12:34:02.417Z",
          "updatedAt": "2025-03-07T16:08:20.109Z",
          "__v": 0,
          "assignedOwner": {
              "_id": "67cb19dd97eb04cf8489c931",
              "name": "caller@gmail.com",
              "email": "caller@gmail.com",
              "phone": "9876543210"
          },
          "class": "10th Grade",
          "board": "CBSE",
          "status": "Active",
          "leadScore": 85,
          "address": "123 Main Street",
          "phoneNumber": "9876543210",
          "email": "johndoe@example.com",
          "fatherOccupation": "Engineer",
          "motherOccupation": "Doctor",
          "alternativeNumber": "7890123456",
          "parentName": "Mr. and Mrs. Doe",
          "schoolName": "ABC High School",
          "city": "New York",
          "state": "NY",
          "percentage": "92%",
          "interactWith": "Counselor"
      }
  ]
}

const TableContainer: React.FC = () => {

  const [tableData,setTableData] = useState<ITableFields[]>([]);
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
  const [totalRows, setTotalRows] = useState<number>(0);
  const [query, setQuery] = useState<QueryState>({
    filters:[],
    logic: "AND",
    pagination: {
      page: currentPage,
      limit: rowsPerPage
    }
  });


  const totalPages = (totalRows/rowsPerPage);
  // const totalPages = 10;

  const fetchTableData = async () => {
    try {
      // const data = await ManagerInstance.getTableData();
      const data = responseObject.leads;
      setTotalRows(responseObject?.total);
      setTableData(data);
    } catch (error) {
      handleError(error as AxiosError,true);
    }
  }

  console.log("filters query",query);

  useEffect(()=>{
    fetchTableData();
  },[]);

  const filterData = async () => {
    try {
      const filterResponse = await FilterInstance.getFilterResponse(query); // Await the response
      setTableData(filterResponse); // Now it's properly assigned
    } catch (error) {
      handleError(error as AxiosError,false);
    }
  };

  useEffect(() => {   
    filterData();
  }, [query,currentPage,rowsPerPage]);

  console.log("filters condition",filters);
  const handleCondition = (key:string) => {
    console.log("label key",key);
    setFilters([...filters,key]);
    setCondition(prev=>!prev);
  }

  const handleCloseFilter = (columnLabel:string) => {
    setFilters(filters.filter((each) => each !== columnLabel));
    setQuery((prevQuery) => ({
    ...prevQuery,
    filters: prevQuery.filters.filter((filter) => filter.field !== columnLabel),
  }));
  };

  return (
    <div>
      <div className="p-6 rounded-[22px] border border-black w-full dark-invert">
        {/* Header */}
        {/* <div className="flex justify-between items-center pb-2 mb-4">
          <div className="flex space-x-4">
            <span className="border-b-2 border-blue-600 text-blue-600 pb-1">Current View</span>
            <span>Previous View</span>
          </div>            
        </div> */}
        <div className="flex justify-between w-full">
          <span className="text-[17px] font-[700] text-[#0D2167]">All Leads</span>
          <button className="bg-[#0D2167] text-white px-4 py-2 rounded-md" onClick={()=>setCondition(prev=>!prev)}>+ Add a Condition</button>
        </div>

        <div className="flex justify-between items-center gap-10 p-2">
          <SearchBox iconSize={32} placeholder='Search' iconColor="#0D2167" />
          <div className="flex items-center gap-3">
            <MdKeyboardArrowLeft size={24} color="#0D2167" />
              {1}
            <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
          </div>
          <IoSettingsOutline size={24} color="#0D2167" />
        </div>
        {addCondition && <div>
          <ul className="m-3 mt-0 p-3 pt-0">
            {getAllKeys(tableData).map((key) => (
              <li
                key={key}
                onClick={() => handleCondition(key)} // Pass the key if needed
                style={{ cursor: "pointer", padding: "5px" }}
                className="dark:invert"
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
                label={filter}
                setFiltering={setQuery}
                onClose={() => handleCloseFilter(filter)}
              />
            ))}
          </div>
        )}
      </div>
        <div className="flex flex-wrap gap-6 m-5 ml-0 mb-0 dark:invert">
          <button className="relative w-[119px] h-[44px] rounded-full bg-white text-black font-medium">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FF2CF7] via-[#FB047BCB] via-[#FF7EBCCF] via-[#FFFFFF00] via-[#49FFE9A6] to-[#130EFF]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
              Today Leads
            </div>
          </div>
        </button>
          <button className="w-[130px] h-[44px] rounded-full border-2 border-black bg-white text-black font-medium flex items-center justify-center shadow-md">
          <span className="text-sm">Yesterday Leads</span>
        </button>
        </div>
        <TableFilters setFilter={setFilterState} setQuery={setQuery} filterState={filterState} />
        <DndProvider backend={HTML5Backend}>
        <DynamicTable3 data={tableData} columns={columns} /></DndProvider>
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