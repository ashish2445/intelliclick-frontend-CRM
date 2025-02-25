// import React from "react";
// import DynamicTable from "@/components/DynamicTable";
// import { columns } from "@/utils/constants";
// import SearchBox from "@/components/SearchBox";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Image from 'next/image';


// const data = [
//   {
//     "Student Name": "John Doe",
//     "Class": "10th Grade",
//     "Phone Number": "123-456-7890",
//     "Status": "Active",
//     "Created By": "Admin",
//     "Created At": "2025-02-24",
//   },
//   {
//     "Student Name": "Jane Smith",
//     "Class": "9th Grade",
//     "Phone Number": "987-654-3210",
//     "Status": "Inactive",
//     "Created By": "Teacher B",
//     "Created At": "2025-02-23",
//   },
// ];

// const TablesContainer: React.FC = () => {
//   return (
//     <div className="border border-black border-r p-4 rounded-lg dark:invert">
//       <h1 className="text-2xl">My Meeting</h1>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex justify-center items-center gap-20">
//           <SearchBox />
//           <div className="flex justify-center items-center gap-3">
//             <MdKeyboardArrowLeft />
//             {1}
//             <MdOutlineKeyboardArrowRight />
//           </div>
//           <IoSettingsOutline />
//         </div>
//         <DynamicTable columns={columns} data={data} />
//         <Image src="/EmptyImg.svg" alt="logo" priority width={200} height={200} />
//       </div>
      
//     </div>
//   );
// };

// export default TablesContainer;

// import React from "react";
// import DynamicTable from "@/components/DynamicTable";
// import { columns } from "@/utils/constants";
// import SearchBox from "@/components/SearchBox";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Image from "next/image";

// const data = [
//   {
//     "Student Name": "John Doe",
//     "Class": "10th Grade",
//     "Phone Number": "123-456-7890",
//     "Status": "Active",
//     "Created By": "Admin",
//     "Created At": "2025-02-24",
//   },
//   {
//     "Student Name": "Jane Smith",
//     "Class": "9th Grade",
//     "Phone Number": "987-654-3210",
//     "Status": "Inactive",
//     "Created By": "Teacher B",
//     "Created At": "2025-02-23",
//   },
// ];

// const TablesContainer: React.FC = () => {
//   return (
//     <div className="border border-black border-r p-4 rounded-lg dark:invert">
//       <h1 className="text-2xl">My Meeting</h1>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex justify-center items-center gap-20">
//           <SearchBox />
//           <div className="flex justify-center items-center gap-3">
//             <MdKeyboardArrowLeft />
//             {1}
//             <MdOutlineKeyboardArrowRight />
//           </div>
//           <IoSettingsOutline />
//         </div>

//         {/* Conditionally render the table if data is not empty, else show Image */}
//         {data.length > 0 ? (
//           <DynamicTable columns={columns} data={data} />
//         ) : (
//           <Image src="/EmptyImg.svg" alt="No data available" priority width={200} height={200} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TablesContainer;


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

const TablesContainer: React.FC = () => {
  return (
    <div className="border border-black border-r p-4 rounded-lg dark:invert">
      <h1 className="text-2xl">My Meeting</h1>
      <div className="flex flex-col justify-center items-center">
        {data.length > 0 ? (
          <>
            {/* Search and pagination container, only shown when data is available */}
            <div className="flex justify-center items-center gap-20">
              <SearchBox />
              <div className="flex justify-center items-center gap-3">
                <MdKeyboardArrowLeft />
                {1}
                <MdOutlineKeyboardArrowRight />
              </div>
              <IoSettingsOutline />
            </div>
            {/* Table displayed when data is available */}
            <DynamicTable columns={columns} data={data} />
          </>
        ) : (
          // Show image when there is no data
          <Image src="/EmptyImg.svg" alt="No data available" priority width={200} height={200} />
        )}
      </div>
    </div>
  );
};

export default TablesContainer;



