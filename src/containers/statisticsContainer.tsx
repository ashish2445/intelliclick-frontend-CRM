import React from "react";
import DynamicTable from "@/components/DynamicTable";
import { columns } from "@/utils/constants";
import SearchBox from "@/components/SearchBox";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const data = [
  {
    "Student Name": "John Doe",
    "Class": "10th Grade",
    "Phone Number": "123-456-7890",
    "Status": "Active",
    "Created By": "Admin",
    "Created At": "2025-02-24",
  },
  {
    "Student Name": "Jane Smith",
    "Class": "9th Grade",
    "Phone Number": "987-654-3210",
    "Status": "Inactive",
    "Created By": "Teacher B",
    "Created At": "2025-02-23",
  },
];

// const StatisticsContainer: React.FC = () => {
//   return (
//     <div className="border border-black border-r p-4 rounded-lg dark:invert w-full" style={{height: "380px"}}>
//       <h1 className="text-2xl" style={{ width: "140px", height: "19px", fontSize: "20px" }}>My Meeting</h1>
//       <div className="flex flex-col justify-center items-center">
//         {data.length > 0 ? (
//           <>
//             {/* Search and pagination container, only shown when data is available */}
//             <div className="flex justify-center items-center gap-20">
//               <SearchBox />
//               <div className="flex justify-center items-center gap-3">
//                 <MdKeyboardArrowLeft size={24} color="#0D2167" />
//                 {1}
//                 <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
//               </div>
//               <IoSettingsOutline size={24} color="#0D2167" />
//             </div>
//             {/* Table displayed when data is available */}
//             <DynamicTable columns={columns} data={data} />
//           </>
//         ) : (
//           // Show image when there is no data
//           <Image src="/EmptyImg.svg" alt="No data available" priority width={200} height={200} />
//         )}
//       </div>
//     </div>
//   );
// };

const StatisticsContainer: React.FC = () => {
  return (
    <div
      className="border border-black border-r p-4 rounded-lg dark:invert w-full overflow-hidden"
      style={{ height: "400px" }} // Increased height to fit content better
    >
      <h1 className="text-2xl mb-4">My Meeting</h1>
      <div className="flex flex-col h-full">
        {data.length > 0 ? (
          <>
            {/* Search and pagination container, only shown when data is available */}
            <div className="flex justify-between items-center gap-10 p-2">
              <SearchBox />
              <div className="flex items-center gap-3">
                <MdKeyboardArrowLeft size={24} color="#0D2167" />
                {1}
                <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
              </div>
              <IoSettingsOutline size={24} color="#0D2167" />
            </div>
            {/* Table wrapper to prevent overflow */}
            <div className="overflow-auto flex-grow">
              <DynamicTable columns={columns} data={data} />
            </div>
          </>
        ) : (
          // Show image when there is no data
          <div className="flex justify-center items-center h-full">
            <Image src="/EmptyImg.svg" alt="No data available" priority width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  );
};


export default StatisticsContainer;
