// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {

//   const [columnOrder, setColumnOrder] = useState(columns);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setColumnOrder(columns);
//   }, [columns]);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       if (
//         targetIndex < 0 ||
//         targetIndex >= newColumns.length ||
//         fixedStartColumns.includes(newColumns[index]) ||
//         fixedStartColumns.includes(newColumns[targetIndex]) ||
//         newColumns[index] === fixedEndColumn ||
//         newColumns[targetIndex] === fixedEndColumn
//       ) {
//         return prevColumns;
//       }

//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }

//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       {/* Three-Dots Icon (Toggle Dropdown) */}
//       <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//         <button
//           onClick={() => setDropdownOpen((prev) => !prev)}
//           className="p-2 rounded-full hover:bg-gray-300"
//         >
//           <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//         </button>

//         {/* Dropdown Items */}
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//             <ul className="text-sm text-gray-700">
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
//             </ul>
//           </div>
//         )}
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {columnOrder.map((col, index) => {
//               const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
//               return (
//                 <th
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//                 >
//                   <div className="flex items-center justify-between">
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     <span className="flex-grow text-center">{col}</span>
//                     {!isFixed && index < columnOrder.length - 1 && (
//                       <button
//                         onClick={() => moveColumn(index, "right")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowRight />
//                       </button>
//                     )}
//                   </div>
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//               {columnOrder.map((col) => (
//                 <td
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
//                 >
//                   {row[col] || "-"}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable2;

// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

//   console.log("selekeys",selectedKeys);

//   useEffect(() => {
//     setColumnOrder(columns);
//   }, [columns]);

//   const getAllKeys = () => {
//     const keysSet = new Set<string>();
//     data.forEach((row) => {
//       Object.keys(row).forEach((key) => keysSet.add(key));
//     });
//     return Array.from(keysSet);
//   };

//   const handleCheckboxChange = (key: string) => {
//     setSelectedKeys((prev) =>
//       prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
//     );
//   };

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       if (
//         targetIndex < 0 ||
//         targetIndex >= newColumns.length ||
//         fixedStartColumns.includes(newColumns[index]) ||
//         fixedStartColumns.includes(newColumns[targetIndex]) ||
//         newColumns[index] === fixedEndColumn ||
//         newColumns[targetIndex] === fixedEndColumn
//       ) {
//         return prevColumns;
//       }

//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }

//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       {/* Three-Dots Icon (Toggle Dropdown) */}
//       <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//         <button
//           onClick={() => setDropdownOpen((prev) => !prev)}
//           className="p-2 rounded-full hover:bg-gray-300"
//         >
//           <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//         </button>

//         {/* Dropdown Items */}
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//             <ul className="text-sm text-gray-700">
//               {getAllKeys().map((key) => (
//                 <li
//                   key={key}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   onClick={() => handleCheckboxChange(key)}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedKeys.includes(key)}
//                     onChange={() => handleCheckboxChange(key)}
//                     className="cursor-pointer"
//                   />
//                   {key}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {columnOrder.map((col, index) => {
//               const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
//               return (
//                 <th
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//                 >
//                   <div className="flex items-center justify-between">
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     <span className="flex-grow text-center">{col}</span>
//                     {!isFixed && index < columnOrder.length - 1 && (
//                       <button
//                         onClick={() => moveColumn(index, "right")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowRight />
//                       </button>
//                     )}
//                   </div>
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//               {columnOrder.map((col) => (
//                 <td
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
//                 >
//                   {row[col] || "-"}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable2;


// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [selectedKeys, setSelectedKeys] = useState<string[]>(columns);
//   const [columnOrder, setColumnOrder] = useState<string[]>(columns);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setSelectedKeys(columns);
//     setColumnOrder(columns);
//   }, [columns]);

//   const handleCheckboxChange = (key: string) => {
//     setSelectedKeys((prev) =>
//       prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
//     );
//   };

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       if (
//         targetIndex < 0 ||
//         targetIndex >= newColumns.length ||
//         fixedStartColumns.includes(newColumns[index]) ||
//         fixedStartColumns.includes(newColumns[targetIndex]) ||
//         newColumns[index] === fixedEndColumn ||
//         newColumns[targetIndex] === fixedEndColumn
//       ) {
//         return prevColumns;
//       }

//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }

//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       {/* Three-Dots Icon (Toggle Dropdown) */}
//       <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//         <button
//           onClick={() => setDropdownOpen((prev) => !prev)}
//           className="p-2 rounded-full hover:bg-gray-300"
//         >
//           <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//         </button>

//         {/* Dropdown Items */}
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//             <ul className="text-sm text-gray-700">
//               {columns.map((key) => (
//                 <li
//                   key={key}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   onClick={() => handleCheckboxChange(key)}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedKeys.includes(key)}
//                     onChange={() => handleCheckboxChange(key)}
//                     className="cursor-pointer"
//                   />
//                   {key}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {columnOrder.map((col, index) => {
//               if (!selectedKeys.includes(col)) return null;
//               const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
//               return (
//                 <th
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//                 >
//                   <div className="flex items-center justify-between">
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     <span className="flex-grow text-center">{col}</span>
//                     {!isFixed && index < columnOrder.length - 1 && (
//                       <button
//                         onClick={() => moveColumn(index, "right")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowRight />
//                       </button>
//                     )}
//                   </div>
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//               {columnOrder.map((col) => {
//                 if (!selectedKeys.includes(col)) return null;
//                 return (
//                   <td
//                     key={col}
//                     className={`p-3 border-r border-gray-300 min-w-[150px] ${
//                       fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                     } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
//                   >
//                     {row[col] || "-"}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable2;


// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row)))); // Get all keys from data
//   const [selectedKeys, setSelectedKeys] = useState<string[]>(columns); // Initially show only provided columns
//   const [columnOrder, setColumnOrder] = useState<string[]>(columns);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   console.log("selkeyssss",selectedKeys);

//   useEffect(() => {
//     setSelectedKeys(columns);
//     setColumnOrder(columns);
//   }, [columns]);

//   const handleCheckboxChange = (key: string) => {
//     setSelectedKeys((prev) =>
//       prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
//     );
//   };

//   console.log("colsOrder",columnOrder);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       if (
//         targetIndex < 0 ||
//         targetIndex >= newColumns.length ||
//         fixedStartColumns.includes(newColumns[index]) ||
//         fixedStartColumns.includes(newColumns[targetIndex]) ||
//         newColumns[index] === fixedEndColumn ||
//         newColumns[targetIndex] === fixedEndColumn
//       ) {
//         return prevColumns;
//       }

//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }

//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       {/* Three-Dots Icon (Toggle Dropdown) */}
//       <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//         <button
//           onClick={() => setDropdownOpen((prev) => !prev)}
//           className="p-2 rounded-full hover:bg-gray-300"
//         >
//           <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//         </button>

//         {/* Dropdown Items */}
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//             <ul className="text-sm text-gray-700">
//               {allKeys.map((key) => (
//                 <li
//                   key={key}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   onClick={() => handleCheckboxChange(key)}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedKeys.includes(key)}
//                     onChange={() => handleCheckboxChange(key)}
//                     className="cursor-pointer"
//                   />
//                   {key}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {columnOrder.map((col, index) => {
//               if (!selectedKeys.includes(col)) return null;
//               const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
//               return (
//                 <th
//                   key={col}
//                   className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                     fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                   } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//                 >
//                   <div className="flex items-center justify-between">
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     <span className="flex-grow text-center">{col}</span>
//                     {!isFixed && index < columnOrder.length - 1 && (
//                       <button
//                         onClick={() => moveColumn(index, "right")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowRight />
//                       </button>
//                     )}
//                   </div>
//                 </th>
//               );
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//               {columnOrder.map((col) => {
//                 if (!selectedKeys.includes(col)) return null;
//                 return (
//                   <td
//                     key={col}
//                     className={`p-3 border-r border-gray-300 min-w-[150px] ${
//                       fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                     } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
//                   >
//                     {row[col] || "-"}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable2;

import { IOpenTaskData } from "@/interfaces";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

interface TableProps {
  data: IOpenTaskData[];
  columns: string[];
}

const fixedStartColumns = ["StudentName", "Class"];
const fixedEndColumn = "CreatedAt";

const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
  const [displayColumns, setDisplayColumns] = useState<string[]>(columns); // Controls visibility
  const [columnOrder, setColumnOrder] = useState<string[]>(Array.from(new Set(data.flatMap((row) => Object.keys(row))))); // Controls column order
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDisplayColumns(columns);
    // setColumnOrder(columns);
  }, [columns]);

  const handleCheckboxChange = (key: string) => {
    setDisplayColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const allKeys = Array.from(new Set(data.flatMap((row) => Object.keys(row)))); // Get all keys from data

  console.log("dispcols",displayColumns);


  const moveColumn = useCallback((index: number, direction: "left" | "right") => {
    setColumnOrder((prevColumns) => {
      const newColumns = [...prevColumns];
      const targetIndex = direction === "left" ? index - 1 : index + 1;

      if (
        targetIndex < 0 ||
        targetIndex >= newColumns.length ||
        fixedStartColumns.includes(newColumns[index]) ||
        fixedStartColumns.includes(newColumns[targetIndex]) ||
        newColumns[index] === fixedEndColumn ||
        newColumns[targetIndex] === fixedEndColumn
      ) {
        return prevColumns;
      }

      [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
      return newColumns;
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Three-Dots Icon (Toggle Dropdown) */}
      <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-300"
        >
          <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
        </button>

        {/* Dropdown Items */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
            <ul className="text-sm text-gray-700">
              {allKeys.map((key) => (
                <li
                  key={key}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={() => handleCheckboxChange(key)}
                >
                  <input
                    type="checkbox"
                    checked={displayColumns.includes(key)}
                    onChange={() => handleCheckboxChange(key)}
                    className="cursor-pointer"
                  />
                  {key}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
            {columnOrder.map((col, index) => {
              if (!displayColumns.includes(col)) return null;
              const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
              return (
                <th
                  key={col}
                  className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
                    fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
                  } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    {!isFixed && index > 0 && (
                      <button
                        onClick={() => moveColumn(index, "left")}
                        className="p-1 text-gray-600 hover:text-gray-900"
                      >
                        <FaArrowLeft />
                      </button>
                    )}
                    <span className="flex-grow text-center">{col}</span>
                    {!isFixed && index < columnOrder.length - 1 && (
                      <button
                        onClick={() => moveColumn(index, "right")}
                        className="p-1 text-gray-600 hover:text-gray-900"
                      >
                        <FaArrowRight />
                      </button>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200 text-sm">
              {columnOrder.map((col) => {
                if (!displayColumns.includes(col)) return null;
                return (
                  <td
                    key={col}
                    className={`p-3 border-r border-gray-300 min-w-[150px] ${
                      fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
                    } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
                  >
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

export default DynamicTable2;














