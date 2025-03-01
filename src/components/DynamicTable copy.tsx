// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback } from "react";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DraggableHeader: React.FC<{
//   column: string;
//   index: number;
//   moveColumn: (dragIndex: number, hoverIndex: number) => void;
// }> = ({ column, index, moveColumn }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: "COLUMN",
//     item: { index },
//     canDrag: !fixedStartColumns.includes(column) && column !== fixedEndColumn, // Prevent dragging fixed columns
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "COLUMN",
//     hover: (item: { index: number }) => {
//       if (item.index !== index) {
//         moveColumn(item.index, index);
//         item.index = index;
//       }
//     },
//   });

//   return (
//     <th
//       ref={(node) => drag(drop(node))}
//       className={`p-3 border-r border-gray-300 min-w-[150px] ${
//         isDragging ? "opacity-50" : ""
//       } ${fixedStartColumns.includes(column) ? "sticky left-0 bg-gray-200 z-10" : ""}
//       ${column === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//     >
//       {column}
//     </th>
//   );
// };

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);

//   const moveColumn = useCallback((dragIndex: number, hoverIndex: number) => {
//     const updatedColumns = [...columnOrder];
//     const [movedColumn] = updatedColumns.splice(dragIndex, 1);
//     updatedColumns.splice(hoverIndex, 0, movedColumn);
//     setColumnOrder(updatedColumns);
//   }, [columnOrder]);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//               {columnOrder.map((col, index) => (
//                 <DraggableHeader key={col} column={col} index={index} moveColumn={moveColumn} />
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//                 {columnOrder.map((col) => (
//                   <td
//                     key={col}
//                     className={`p-3 border-r border-gray-300 min-w-[150px] ${
//                       fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
//                     } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
//                   >
//                     {row[col] || "-"}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DndProvider>
//   );
// };

// export default DynamicTable2;


// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"]; // Fixed columns on the left
// const fixedEndColumn = "CreatedAt"; // Fixed column on the right

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       // Prevent moving fixed columns
//       if (
//         fixedStartColumns.includes(newColumns[index]) ||
//         fixedEndColumn === newColumns[index] ||
//         targetIndex < 0 ||
//         targetIndex >= newColumns.length ||
//         fixedStartColumns.includes(newColumns[targetIndex]) ||
//         fixedEndColumn === newColumns[targetIndex]
//       ) {
//         return prevColumns;
//       }

//       // Swap columns
//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   return (
//     <div className="overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {columnOrder.map((col, index) => (
//               <th
//                 key={col}
//                 className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                   fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                 } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//               >
//                 <div className="flex justify-between items-center">
//                   <span>{col}</span>
//                   <div className="flex gap-1">
//                     {/* Left Arrow Button */}
//                     {index > 0 && !fixedStartColumns.includes(col) && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     {/* Right Arrow Button */}
//                     {index < columnOrder.length - 1 && col !== fixedEndColumn && (
//                       <button
//                         onClick={() => moveColumn(index, "right")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowRight />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </th>
//             ))}
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
// import React, { useState, useCallback } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"]; // Fixed columns on the left
// const fixedEndColumn = "CreatedAt"; // Fixed column on the right

// const DynamicTable: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       // Prevent moving fixed columns and out-of-bounds swapping
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

//       // Swap columns
//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   return (
//     <div className="overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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
//                   <div className="flex justify-between items-center">
//                     <span>{col}</span>
//                     {/* Show arrows only for non-fixed columns */}
//                     {!isFixed && (
//                       <div className="flex gap-1">
//                         {index > 0 && (
//                           <button
//                             onClick={() => moveColumn(index, "left")}
//                             className="p-1 text-gray-600 hover:text-gray-900"
//                           >
//                             <FaArrowLeft />
//                           </button>
//                         )}
//                         {index < columnOrder.length - 1 && (
//                           <button
//                             onClick={() => moveColumn(index, "right")}
//                             className="p-1 text-gray-600 hover:text-gray-900"
//                           >
//                             <FaArrowRight />
//                           </button>
//                         )}
//                       </div>
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

// export default DynamicTable;


// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"]; // Fixed columns on the left
// const fixedEndColumn = "CreatedAt"; // Fixed column on the right

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);
//   console.log("new",columnOrder);

//   useEffect(() => {
//     console.log("Updated columns received:", columns);
//     setColumnOrder(columns);
//   }, [columns]);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       // Prevent moving fixed columns and out-of-bounds swapping
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

//       // Swap columns
//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   return (
//     <div className="overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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
//                     {/* Left Arrow (Extreme Left) */}
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     {/* Column Label (Centered) */}
//                     <span className="flex-grow text-center">{col}</span>
//                     {/* Right Arrow (Extreme Right) */}
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
// import React, { useState, useCallback, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";


// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"]; // Fixed columns on the left
// const fixedEndColumn = "CreatedAt"; // Fixed column on the right

// const DynamicTable2: React.FC<TableProps> = ({ data, columns }) => {
//   const [columnOrder, setColumnOrder] = useState(columns);
//   console.log("new", columnOrder);

//   useEffect(() => {
//     console.log("Updated columns received:", columns);
//     setColumnOrder(columns);
//   }, [columns]);

//   const moveColumn = useCallback((index: number, direction: "left" | "right") => {
//     setColumnOrder((prevColumns) => {
//       const newColumns = [...prevColumns];
//       const targetIndex = direction === "left" ? index - 1 : index + 1;

//       // Prevent moving fixed columns and out-of-bounds swapping
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

//       // Swap columns
//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   }, []);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//       {/* 3 Dots Icon for Options */}
//       <div className="absolute top-2 right-2 cursor-pointer z-30">
//         <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
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
//                     {/* Left Arrow (Extreme Left) */}
//                     {!isFixed && index > 0 && (
//                       <button
//                         onClick={() => moveColumn(index, "left")}
//                         className="p-1 text-gray-600 hover:text-gray-900"
//                       >
//                         <FaArrowLeft />
//                       </button>
//                     )}
//                     {/* Column Label (Centered) */}
//                     <span className="flex-grow text-center">{col}</span>
//                     {/* Right Arrow (Extreme Right) */}
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
  const [columnOrder, setColumnOrder] = useState(columns);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setColumnOrder(columns);
  }, [columns]);

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

  // Close dropdown when clicking outside
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
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
            </ul>
          </div>
        )}
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
            {columnOrder.map((col, index) => {
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
              {columnOrder.map((col) => (
                <td
                  key={col}
                  className={`p-3 border-r border-gray-300 min-w-[150px] ${
                    fixedStartColumns.includes(col) ? "sticky left-0 bg-white z-10" : ""
                  } ${col === fixedEndColumn ? "sticky right-0 bg-white z-10" : ""}`}
                >
                  {row[col] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable2;










