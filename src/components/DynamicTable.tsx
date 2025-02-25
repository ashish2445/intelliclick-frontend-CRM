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
import { IOpenTaskData } from "@/interfaces";
import React from "react";

interface TableProps {
  // data: { [key: string]: string }[];
  data: IOpenTaskData[];
  columns: string[];
}

const fixedColumns = ["Student Name"]; // Columns to remain fixed

const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="w-full overflow-x-auto border border-gray-300 rounded-lg dark:invert">
      <table className="min-w-[1100px] w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-800 text-left text-sm font-semibold h-12">
            {columns.map((col) => (
              <th
                key={col}
                className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-gray-100 z-10" : ""}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 text-sm">
              {columns.map((col) => (
                <td
                  key={col}
                  className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""}`}
                >
                  {row[col] || "-"}
                </td>
                // <td key={col} className={`p-3 ${fixedColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""}`}>
                //   {row[col as keyof IOpenTaskData] || "-"}
                // </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;


