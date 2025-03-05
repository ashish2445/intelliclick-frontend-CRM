// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const ItemType = "COLUMN"; // Type for drag-and-drop

// // const DraggableColumn: React.FC<{ col: string; onDrop: (col: string) => void }> = ({ col, onDrop }) => {
// //   const [{ isDragging }, drag] = useDrag(() => ({
// //     type: ItemType,
// //     item: { col },
// //     collect: (monitor) => ({
// //       isDragging: monitor.isDragging(),
// //     }),
// //   }));

// //   return (
// //     <li
// //       ref={drag}
// //       className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${
// //         isDragging ? "opacity-50" : "opacity-100"
// //       }`}
// //     >
// //       {col}
// //     </li>
// //   );
// // };

// const DraggableColumn: React.FC<{ col: string; index: number }> = ({ col, index }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType,
//     item: { col, index }, // Pass column name and its index
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <li
//       ref={drag}
//       className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 ${
//         isDragging ? "opacity-50" : "opacity-100"
//       }`}
//     >
//       {col}
//     </li>
//   );
// };


// const DynamicTable3: React.FC<TableProps> = ({ data, columns }) => {
//   const [displayColumns, setDisplayColumns] = useState<string[]>(columns);
//   const [columnOrder, setColumnOrder] = useState<string[]>(Array.from(new Set(data.flatMap((row) => Object.keys(row)))));
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setDisplayColumns(columns);
//   }, [columns]);

//   const handleCheckboxChange = (key: string) => {
//     setDisplayColumns((prev) =>
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

//   // const handleDrop = (col: string) => {
//   //   if (!displayColumns.includes(col)) {
//   //     setDisplayColumns((prev) => [...prev, col]);
//   //   }
//   // };

//   const handleDrop = (col: string, dropIndex: number) => {
//     console.log("index",dropIndex);
//     setDisplayColumns((prev) => {
//       const filtered = prev.filter((k) => k !== col); // Remove if already exists
//       const newColumns = [...filtered];
//       newColumns.splice(dropIndex, 0, col); // Insert at drop position
//       return newColumns;
//     });
//   };

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType,
//     drop: (item: { col: string }) => handleDrop(item.col),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   }));

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
//     <DndProvider backend={HTML5Backend}>
//       <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg">
//         {/* Three-Dots Icon (Toggle Dropdown) */}
//         <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//           <button
//             onClick={() => setDropdownOpen((prev) => !prev)}
//             className="p-2 rounded-full hover:bg-gray-300"
//           >
//             <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//           </button>

//           {/* Dropdown Items */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//               <ul className="text-sm text-gray-700">
//                 {columnOrder.map((key) => (
//                   <DraggableColumn key={key} col={key} onDrop={handleDrop} />
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <table ref={drop} className={`w-full border-collapse ${isOver ? "bg-gray-100" : ""}`}>
//           <thead>
//             <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//               {columnOrder.map((col, index) => {
//                 if (!displayColumns.includes(col)) return null;
//                 const isFixed = fixedStartColumns.includes(col) || col === fixedEndColumn;
//                 return (
//                   <th
//                     key={col}
//                     className={`p-3 border-r border-gray-300 min-w-[150px] relative ${
//                       fixedStartColumns.includes(col) ? "sticky left-0 bg-gray-200 z-10" : ""
//                     } ${col === fixedEndColumn ? "sticky right-0 bg-gray-200 z-10" : ""}`}
//                   >
//                     <div className="flex items-center justify-between">
//                       {!isFixed && index > 0 && (
//                         <button
//                           onClick={() => moveColumn(index, "left")}
//                           className="p-1 text-gray-600 hover:text-gray-900"
//                         >
//                           <FaArrowLeft />
//                         </button>
//                       )}
//                       <span className="flex-grow text-center">{col}</span>
//                       {!isFixed && index < columnOrder.length - 1 && (
//                         <button
//                           onClick={() => moveColumn(index, "right")}
//                           className="p-1 text-gray-600 hover:text-gray-900"
//                         >
//                           <FaArrowRight />
//                         </button>
//                       )}
//                     </div>
//                   </th>
//                 );
//               })}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//                 {columnOrder.map((col) => {
//                   if (!displayColumns.includes(col)) return null;
//                   return <td key={col} className="p-3 border-r border-gray-300">{row[col] || "-"}</td>;
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DndProvider>
//   );
// };

// export default DynamicTable3;


// import { IOpenTaskData } from "@/interfaces";
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// interface TableProps {
//   data: IOpenTaskData[];
//   columns: string[];
// }

// const fixedStartColumns = ["StudentName", "Class"];
// const fixedEndColumn = "CreatedAt";

// const DynamicTable3: React.FC<TableProps> = ({ data, columns }) => {
//   const defaultSelected = new Set(columns);
//   const allColumns = Array.from(new Set(data.flatMap((row) => Object.keys(row))));
//   const [displayColumns, setDisplayColumns] = useState<string[]>(columns);
//   const [columnOrder, setColumnOrder] = useState<string[]>(columns);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setDisplayColumns(columns);
//     setColumnOrder(columns);
//   }, [columns]);

//   const handleCheckboxChange = (col: string) => {
//     setDisplayColumns((prev) => {
//       if (prev.includes(col)) return prev.filter((k) => k !== col);
//       const classIndex = prev.indexOf("Class");
//       return [...prev.slice(0, classIndex + 1), col, ...prev.slice(classIndex + 1)];
//     });
//   };

//   const moveColumn = (index: number, direction: "up" | "down") => {
//     setDisplayColumns((prev) => {
//       const newColumns = [...prev];
//       const targetIndex = direction === "up" ? index - 1 : index + 1;
//       if (targetIndex < 0 || targetIndex >= newColumns.length) return prev;
//       [newColumns[index], newColumns[targetIndex]] = [newColumns[targetIndex], newColumns[index]];
//       return newColumns;
//     });
//   };

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }
//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="relative overflow-x-auto w-full dark:invert border border-gray-300 rounded-lg">
//       <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//         <button onClick={() => setDropdownOpen((prev) => !prev)} className="p-2 rounded-full hover:bg-gray-300">
//           <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//         </button>

//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-40">
//             <ul className="text-sm text-gray-700 max-h-60 overflow-auto">
//               {displayColumns.map((col, index) => (
//                 <li key={col} className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={displayColumns.includes(col)}
//                       onChange={() => handleCheckboxChange(col)}
//                       disabled={fixedStartColumns.includes(col) || col === fixedEndColumn}
//                     />
//                     {col}
//                   </div>
//                   <div className="flex flex-col">
//                     {index > 0 && (
//                       <button onClick={() => moveColumn(index, "up")} className="text-gray-600 hover:text-gray-900">
//                         <FaArrowUp />
//                       </button>
//                     )}
//                     {index < displayColumns.length - 1 && (
//                       <button onClick={() => moveColumn(index, "down")} className="text-gray-600 hover:text-gray-900">
//                         <FaArrowDown />
//                       </button>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//             {displayColumns.map((col) => (
//               <th key={col} className="p-3 border-r border-gray-300 min-w-[150px]">
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border-b border-gray-200 text-sm">
//               {displayColumns.map((col) => (
//                 <td key={col} className="p-3 border-r border-gray-300">{row[col] || "-"}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DynamicTable3;


import { IOpenTaskData } from "@/interfaces";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface TableProps {
  data: IOpenTaskData[];
  columns: string[];
}

const fixedStartColumns = ["StudentName", "Class"];
const fixedEndColumn = "CreatedAt";

const DynamicTable3: React.FC<TableProps> = ({ data, columns }) => {
  const [displayColumns, setDisplayColumns] = useState<string[]>(columns);
  const [columnOrder, setColumnOrder] = useState<string[]>(Array.from(new Set(data.flatMap((row) => Object.keys(row)))));
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

  const moveColumn = useCallback((index: number, direction: "up" | "down") => {
    setColumnOrder((prevColumns) => {
      const newColumns = [...prevColumns];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= newColumns.length) {
        return prevColumns;
      }

      [newColumns[index], newColumns[targetIndex]] = [
        newColumns[targetIndex],
        newColumns[index],
      ];
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
    <DndProvider backend={HTML5Backend}>
      <div className="relative overflow-x-auto w-full dark:invert border-l border-r border-t border-gray-300 rounded-t-lg">
        <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-300"
          >
            <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-40 p-2">
              <ul className="text-sm text-gray-700">
                {columnOrder.map((key, index) => (
                  <li key={key} className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={displayColumns.includes(key)}
                      onChange={() => handleCheckboxChange(key)}
                    />
                    <span className="flex-grow ml-2">{key}</span>
                    <div className="flex flex-col">
                      {index > 0 && (
                        <button
                          onClick={() => moveColumn(index, "up")}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <FaArrowUp />
                        </button>
                      )}
                      {index < columnOrder.length - 1 && (
                        <button
                          onClick={() => moveColumn(index, "down")}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <FaArrowDown />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
              {columnOrder.map((col) => {
                if (!displayColumns.includes(col)) return null;
                return (
                  <th key={col} className="p-3 border-r border-gray-300 min-w-[150px]">
                    {col}
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
                  return <td key={col} className="p-3 border-r border-gray-300">{row[col] || "-"}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DndProvider>
  );
};

export default DynamicTable3;



