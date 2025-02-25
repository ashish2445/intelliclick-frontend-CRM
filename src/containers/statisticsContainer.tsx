// import React from "react";
// import DynamicTable from "@/components/DynamicTable";
// import { columns } from "@/utils/constants";
// import SearchBox from "@/components/SearchBox";
// import { IoSettingsOutline } from "react-icons/io5";
// import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Image from "next/image";

// const StatisticsContainer: React.FC = () => {
//   return (
//     <div
//       className="border border-black border-r p-4 rounded-lg dark:invert w-full overflow-hidden"
//       style={{ height: "400px" }} // Increased height to fit content better
//     >
//       <h1 className="text-2xl mb-4">My Meeting</h1>
//       <div className="flex flex-col h-full">
//         {data.length > 0 ? (
//           <>
//             {/* Search and pagination container, only shown when data is available */}
//             <div className="flex justify-between items-center gap-10 p-2">
//               <SearchBox />
//               <div className="flex items-center gap-3">
//                 <MdKeyboardArrowLeft size={24} color="#0D2167" />
//                 {1}
//                 <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
//               </div>
//               <IoSettingsOutline size={24} color="#0D2167" />
//             </div>
//             {/* Table wrapper to prevent overflow */}
//             <div className="overflow-auto flex-grow">
//               <DynamicTable columns={columns} data={data} />
//             </div>
//           </>
//         ) : (
//           // Show image when there is no data
//           <div className="flex justify-center items-center h-full">
//             <Image src="/EmptyImg.svg" alt="No data available" priority width={200} height={200} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default StatisticsContainer;


import React from "react";
import DynamicTable from "@/components/DynamicTable";
import { columns } from "@/utils/constants";
import SearchBox from "@/components/SearchBox";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { IOpenTaskData } from "@/interfaces";



interface StatisticsContainerProps {
  data: IOpenTaskData[];
  title:string;
}

const StatisticsContainer: React.FC<StatisticsContainerProps> = ({ data,title }) => {
  return (
    <div
      className="border border-black border-r p-4 rounded-lg dark:invert w-full overflow-hidden"
      style={{ height: "400px" }} // Increased height to fit content better
    >
      <h1 className="text-2xl mb-4">{title}</h1>
      <div className="flex flex-col h-full">
        {data?.length > 0 ? (
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

