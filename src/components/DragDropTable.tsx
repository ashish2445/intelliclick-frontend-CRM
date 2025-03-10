import { ITableFields } from "@/interfaces";
import React, { useState,useEffect, useRef } from "react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { formatCamelCase } from "@/utils/helpers";

interface TableProps {
  data: ITableFields[];
  columns: string[];
}

const ItemType = "COLUMN";

interface DragItem {
  index: number;
  id: string;
}

const DraggableItem: React.FC<{
  id: string;
  index: number;
  moveItem: (from: number, to: number) => void;
  checked: boolean;
  onCheck: () => void;
}> = ({ id, index, moveItem, checked, onCheck }) => {
  const ref = useRef<HTMLLIElement>(null);

  const [, drag] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: DragItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <li ref={ref} className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b">
      <input type="checkbox" checked={checked} onChange={onCheck} />
      <span className="flex-grow ml-2">{id}</span>
      <span className="cursor-grab text-gray-500">&#x2630;</span>
    </li>
  );
};

const columnStyles: Record<string, string> = {
  class: "bg-[#FEF2F2] text-[#B91C1C]", // Light red background with dark red text
  board:"bg-[#FBE8FF] text-[#8E198F]"
};

const statusStyles: Record<string, string> = {
  prospects: "bg-[#D6BCFA] text-[#6B21A8]",
  qualified: "bg-[#D1FAE5] text-[#065F46]",
  disqualified: "bg-[#FEE2E2] text-[#B91C1C]",
  Active: 'bg-green-100 text-green-800',
      Qualified: 'bg-green-100 text-green-800',
      Interested: 'bg-yellow-100 text-yellow-800',
      Disqualified: 'bg-red-100 text-red-800',
      'Follow Up': 'bg-yellow-100 text-yellow-800',
      'Trial Booked': 'bg-green-100 text-green-800',
      'Trial Completed': 'bg-blue-100 text-blue-800'
};


const DynamicTable3: React.FC<TableProps> = ({ data, columns }) => {
  const [displayColumns, setDisplayColumns] = useState<string[]>([]);
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [checkedRows, setCheckedRows] = useState<boolean[]>(Array(data?.length).fill(false));
  const [checkedRows, setCheckedRows] = useState<boolean[]>([]);
  const [headerChecked, setHeaderChecked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [favoriteRows, setFavoriteRows] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setDisplayColumns(columns);
  }, [columns]);

  useEffect(() => {
    if (data?.length) {
      const tableCols = Array.from(new Set(data.flatMap((row) => Object.keys(row))));
      setColumnOrder(tableCols);
      setCheckedRows(Array(data.length).fill(false));
    }
  }, [data]);

  const handleFavoriteToggle = (rowIndex: number) => {
    setFavoriteRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex], // Toggle only for the clicked row
    }));
  };


  const handleCheckboxChange = (key: string) => {
    setDisplayColumns((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const moveItem = (from: number, to: number) => {
    setColumnOrder((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });
  };

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

  const handleHeaderCheckboxChange = () => {
    const newChecked = !headerChecked;
    setHeaderChecked(newChecked);
    setCheckedRows(Array(data.length).fill(newChecked));
  };

  // const handleRowCheckboxChange = (index: number) => {
  //   const updatedCheckedRows = [...checkedRows];
  //   updatedCheckedRows[index] = !updatedCheckedRows[index];
  //   setCheckedRows(updatedCheckedRows);
  //   setHeaderChecked(updatedCheckedRows.every(Boolean));
  // };

  const handleRowCheckboxChange = (index: number) => {
    const updatedCheckedRows = [...checkedRows];
    updatedCheckedRows[index] = !updatedCheckedRows[index];

    // Only check the header checkbox if all rows are checked
    // const allChecked = updatedCheckedRows.every(Boolean);
    setCheckedRows(updatedCheckedRows);
    // setHeaderChecked(allChecked);
    setHeaderChecked(updatedCheckedRows.every(Boolean));
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative overflow-x-auto w-full dark:invert border-l border-r border-t border-gray-300 rounded-t-lg">
        <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
          <button onClick={() => setDropdownOpen((prev) => !prev)} className="p-2 rounded-full hover:bg-gray-300">
            <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-40 p-2">
              <ul className="text-sm text-gray-700">
                {columnOrder?.map((key, index) => (
                  <DraggableItem
                    key={key}
                    id={key}
                    index={index}
                    moveItem={moveItem}
                    checked={displayColumns.includes(key)}
                    onCheck={() => handleCheckboxChange(key)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
              {columnOrder?.map((col, colIndex) => {
                if (!displayColumns.includes(col)) return null;
                return (
                  <th key={col} className="p-3 border-r text-[12px] font-[400] border-gray-300 min-w-[150px]">
                    {col.includes('name') ? (
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={headerChecked}
                          onChange={handleHeaderCheckboxChange}
                        />
                          <span className="text-[14px]">{formatCamelCase(col)}</span>
                      </div>
                    ) : (
                      <span className="text-[14px]">{formatCamelCase(col)}</span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200 text-sm">
                {columnOrder?.map((col, colIndex) => {
                  if (!displayColumns.includes(col)) return null;
                  return (
                    <td key={col} className={`p-3 border-r border-gray-300`}>
                      {col.toLocaleLowerCase() === 'name' ? (
                        <div className="flex items-center text-[14px] font-[400] gap-2">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={checkedRows[rowIndex] || false}
                            onChange={() => handleRowCheckboxChange(rowIndex)}
                          />
                          {/* <span className="mr-1">⭐</span> */}
                          <span className="text-[14px]">{row[col]?.name || "-"}</span>
                          {/* <span className="ml-1"><FaRegStar /></span> */}
                          <div onClick={() => handleFavoriteToggle(rowIndex)} style={{ cursor: "pointer" }}>
                            {row[col]?.favorite ? <FaStar color="#fcba03" /> : <FaRegStar color="black" />}
                          </div>
                        </div>
                      ):col.toLowerCase() === "phonenumber" ? (
                        <span className="flex gap-3 text-[12px] font-[400] ">
                                                    <span className="text-[14px]">{typeof row[col] === "object" ? row[col]?.[col] ?? "-" : row[col] ?? "-"}</span>
 <span><BsFillTelephoneOutboundFill color='#4287f5' />
                        </span>
                            </span>
                          ) :col.toLowerCase() === 'leadscore'? (
                            <div className="flex justify-center">
                              <div className="px-2 py-1 rounded bg-[#F0FDF4] text-[#15803D] text-[14px] text-sm font-medium">
                                {parseInt(row[col]) > 0 ? `+${parseInt(row[col])}` : parseInt(row[col])}
                              </div>
                            </div>
                          ):col.toLowerCase() === 'assignedowner'? (
                            <div className="h-full flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
                                {typeof row[col] === "object" ? row[col]?.[col] ?? "-" : row[col]?.split(' ').map((n: string) => n[0]).join('')}
                              </div>
                              <span className="ml-2 text-sm text-gray-800 text-[14px]">{typeof row[col] === "object" ? row[col]?.[col] ?? "-" : row[col] ?? "-"}</span>
                            </div>
                          ):
                       (
                        <span
                          className={`p-2 rounded-[8px] text-[14px] font-[400]  `}
                        >
                          <span className="text-[14px]">{row[col] || "-"}</span>
                        </span>
                      )}
                    </td>
                  );
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

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { FaRegStar, FaStar } from "react-icons/fa6";
// import { formatCamelCase } from "@/utils/helpers";

// interface Lead {
//   [key: string]: any; // Allows flexible key-value pairs
// }

// interface TableProps {
//   data: Lead[];
//   columns: string[];
// }

// const ItemType = "COLUMN";

// interface DragItem {
//   index: number;
//   id: string;
// }

// const DraggableItem: React.FC<{
//   id: string;
//   index: number;
//   moveItem: (from: number, to: number) => void;
//   checked: boolean;
//   onCheck: () => void;
// }> = ({ id, index, moveItem, checked, onCheck }) => {
//   const ref = useRef<HTMLLIElement>(null);

//   const [, drag] = useDrag({ type: ItemType, item: { id, index } });
//   const [, drop] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem: DragItem) => {
//       if (draggedItem.index !== index) {
//         moveItem(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   drag(drop(ref));

//   return (
//     <li ref={ref} className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b">
//       <input type="checkbox" checked={checked} onChange={onCheck} />
//       <span className="flex-grow ml-2">{id}</span>
//       <span className="cursor-grab text-gray-500">&#x2630;</span>
//     </li>
//   );
// };

// const DynamicTable3: React.FC<TableProps> = ({ data, columns }) => {
//   const [displayColumns, setDisplayColumns] = useState<string[]>(columns);
//   const [columnOrder, setColumnOrder] = useState<string[]>([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [checkedRows, setCheckedRows] = useState<boolean[]>([]);
//   const [headerChecked, setHeaderChecked] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const [favoriteRows, setFavoriteRows] = useState<Record<number, boolean>>({});

//   useEffect(() => {
//     setDisplayColumns(columns);
//   }, [columns]);

//   useEffect(() => {
//     if (data.length) {
//       setColumnOrder([...new Set(data.flatMap((row) => Object.keys(row)))]);
//       setCheckedRows(Array(data.length).fill(false));
//     }
//   }, [data]);

//   const handleFavoriteToggle = useCallback((rowIndex: number) => {
//     setFavoriteRows((prev) => ({ ...prev, [rowIndex]: !prev[rowIndex] }));
//   }, []);

//   const handleCheckboxChange = useCallback((key: string) => {
//     setDisplayColumns((prev) =>
//       prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
//     );
//   }, []);

//   const moveItem = useCallback((from: number, to: number) => {
//     setColumnOrder((prev) => {
//       const updated = [...prev];
//       const [moved] = updated.splice(from, 1);
//       updated.splice(to, 0, moved);
//       return updated;
//     });
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleHeaderCheckboxChange = () => {
//     const newChecked = !headerChecked;
//     setHeaderChecked(newChecked);
//     setCheckedRows(Array(data.length).fill(newChecked));
//   };

//   const handleRowCheckboxChange = (index: number) => {
//     const updatedCheckedRows = [...checkedRows];
//     updatedCheckedRows[index] = !updatedCheckedRows[index];
//     setCheckedRows(updatedCheckedRows);
//     setHeaderChecked(updatedCheckedRows.every(Boolean));
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="relative overflow-x-auto w-full dark:invert border rounded-t-lg">
//         <div ref={dropdownRef} className="absolute top-2 right-2 cursor-pointer z-30">
//           <button onClick={() => setDropdownOpen((prev) => !prev)} className="p-2 rounded-full hover:bg-gray-300">
//             <PiDotsThreeOutlineVertical size={20} className="text-gray-600 hover:text-gray-900" />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-40 p-2">
//               <ul className="text-sm text-gray-700">
//                 {columnOrder.map((key, index) => (
//                   <DraggableItem key={key} id={key} index={index} moveItem={moveItem} checked={displayColumns.includes(key)} onCheck={() => handleCheckboxChange(key)} />
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200 text-left text-sm font-semibold h-12">
//               {columnOrder.map((col) => displayColumns.includes(col) && (
//                 <th key={col} className="p-3 border-gray-300 min-w-[150px]">
//                   {col.toLowerCase() === "name" ? (
//                     <div className="flex items-center">
//                       <input type="checkbox" checked={headerChecked} onChange={handleHeaderCheckboxChange} className="mr-2" />
//                       <span>{formatCamelCase(col)}</span>
//                     </div>
//                   ) : (
//                     <span>{formatCamelCase(col)}</span>
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex} className="border-b">
//                 {columnOrder.map((col) => displayColumns.includes(col) && (
//                   <td key={col} className="p-3 border-r">
//                     {col.toLowerCase() === "name" ? (
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" checked={checkedRows[rowIndex]} onChange={() => handleRowCheckboxChange(rowIndex)} />
//                         <span>{row[col]?.name || "-"}</span>
//                         <div onClick={() => handleFavoriteToggle(rowIndex)} style={{ cursor: "pointer" }}>
//                           {row[col]?.favorite ? <FaStar color="#fcba03" /> : <FaRegStar color="black" />}
//                         </div>
//                       </div>
//                     ) : (
//                       <span>{typeof row[col] === "object" ? row[col]?.[col] ?? "-" : row[col] ?? "-"}</span>
//                     )}
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

// export default DynamicTable3;







