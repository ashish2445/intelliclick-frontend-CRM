// import React from "react";

// interface Student {
//   id: string;
//   name: string;
//   className: string;
//   phoneNumber: string;
//   status: string;
//   interactedWith: string;
//   createdBy: string;
//   created: string;
//   details: string;
//   createdAt: string;
// }

// interface TableProps {
//   students: Student[];
// }

// const Table: React.FC<TableProps> = ({ students }) => {
//   return (
//     <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
//       <table className="min-w-[1100px] w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
//             <th className="p-3">Student Name</th>
//             <th className="p-3">Class</th>
//             <th className="p-3">Phone Number</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Interacted With</th>
//             <th className="p-3">Created By</th>
//             <th className="p-3">Created</th>
//             <th className="p-3">Details</th>
//             <th className="p-3">Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students?.map((student) => (
//             <tr key={student.id} className="border-b border-gray-200 text-sm">
//               <td className="p-3">{student.name}</td>
//               <td className="p-3">{student.className}</td>
//               <td className="p-3">{student.phoneNumber}</td>
//               <td className="p-3">{student.status}</td>
//               <td className="p-3">{student.interactedWith}</td>
//               <td className="p-3">{student.createdBy}</td>
//               <td className="p-3">{student.created}</td>
//               <td className="p-3">{student.details}</td>
//               <td className="p-3">{student.createdAt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// import React from "react";

// interface TableProps {
//   data: { [key: string]: string }[];
//   columns: string[];
// }

// const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
//   return (
//     <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
//       <table className="min-w-[1100px] w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
//             {columns.map((col) => (
//               <th key={col} className="p-3">{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className="border-b border-gray-200 text-sm">
//               {columns.map((col) => (
//                 <td key={col} className="p-3">{row[col] || "-"}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable;
// import { IOpenTaskData } from "@/interfaces";
// import React from "react";

// interface TableProps {
//   // data: { [key: string]: string }[];
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedColumns = ["Student Name"]; // Columns to remain fixed

// const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
//   return (
//     <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
//       <table className="min-w-[1100px] w-full border-collapse dark-invert">
//         <thead>
//           <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
//             {columns.map((col) => (
//               <th
//                 key={col}
//                 className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-gray-100 z-10" : ""}`}
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className="border-b border-gray-200 text-sm">
//               {columns.map((col) => (
//                 <td
//                   key={col}
//                   className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""}`}
//                 >
//                   {row[col] || "-"}
//                 </td>
//                 // <td key={col} className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""}`}>
//                 //   {row[col as keyof IOpenTaskData] || "-"}
//                 // </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable;

// import { IOpenTaskData } from "@/interfaces";
// import React from "react";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"]; // Fixed at the start
// const fixedEndColumn = "CreatedAt"; // Fixed at the end

// const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
//   const enableScroll = columns.length > 8; // Enable scrolling if total columns > 8

//   // Determine indexes
//   const startFixedCount = fixedStartColumns.length;
//   const endFixedIndex = columns.indexOf(fixedEndColumn);

//   return (
//     <div className="w-full border border-gray-300 rounded-lg">
//       <div className="relative overflow-x-auto">
//         <table className="min-w-[1100px] w-full border-collapse dark-invert">
//           <thead>
//             <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
//               {columns.map((col, index) => (
//                 <th
//                   key={col}
//                   className={`p-3 whitespace-nowrap ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-100 z-10" : ""
//                   } ${
//                     col === fixedEndColumn ? "sticky right-0 bg-gray-100 z-10" : ""
//                   }`}
//                 >
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index} className="border-b border-gray-200 text-sm">
//                 {columns.map((col, colIndex) => (
//                   <td
//                     key={col}
//                     className={`p-3 whitespace-nowrap ${
//                       fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                     } ${
//                       col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""
//                     }`}
//                   >
//                     {row[col] || "-"}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

import { IOpenTaskData } from "@/interfaces";
import React from "react";

interface TableProps {
  data: IOpenTaskData[];
  columns: string[];
}

const fixedStartColumns = ["Student Name", "Class"]; // Fixed columns on the left
const fixedEndColumn = "CreatedAt"; // Fixed column on the right

const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
  const enableScroll = columns.length > 8; // Enable scrolling when total columns exceed 8

  return (
    <div className="w-full overflow-x-auto border border-gray-300 rounded-lg">
      <table className="min-w-[1100px] w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
            {/* Fixed Start Columns */}
            {columns.map((col, index) => {
              if (col === "StudentName") {
                return (
                  <th
                    key={col}
                    className="p-3 sticky left-0 bg-gray-100 z-10 border-r border-gray-300"
                    style={{ minWidth: "150px" }}
                  >
                    {col}
                  </th>
                );
              } else if (col === "Class") {
                return (
                  <th
                    key={col}
                    className="p-3 sticky left-[150px] bg-gray-100 z-10 border-r border-gray-300"
                    style={{ minWidth: "150px" }}
                  >
                    {col}
                  </th>
                );
              }
              return (
                <th key={col} className="p-3 border-r border-gray-300">
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 text-sm">
              {/* Fixed Start Columns */}
              {columns.map((col) => {
                if (col === "StudentName") {
                  return (
                    <td
                      key={col}
                      className="p-3 sticky left-0 bg-white z-10 border-r border-gray-300"
                      style={{ minWidth: "150px" }}
                    >
                      {row[col] || "-"}
                    </td>
                  );
                } else if (col === "Class") {
                  return (
                    <td
                      key={col}
                      className="p-3 sticky left-[150px] bg-white z-10 border-r border-gray-300"
                      style={{ minWidth: "150px" }}
                    >
                      {row[col] || "-"}
                    </td>
                  );
                }
                return (
                  <td key={col} className="p-3 border-r border-gray-300">
                    {row[col] || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;




