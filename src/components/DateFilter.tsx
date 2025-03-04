// import { useState, useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa6";
// import { default as CustomCalendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { FilterState } from "@/interfaces/tableFilterTypes";



//     type ValuePiece = Date | null;
//     type Value = ValuePiece | [ValuePiece, ValuePiece];
    
//     interface DateFilterProps {
//       options: string[];
//       setFilterState: (newState: FilterState | ((prevState: FilterState) => FilterState)) => void;
//       onSelectionChange: (
//         selectedOption: string,
//         startDate?: Date,
//         endDate?: Date
//       ) => void;
//     }
    
//     const DateFilter = ({ options, onSelectionChange,setFilterState }: DateFilterProps) => {
//       const [isOpen, setIsOpen] = useState(false);
//       const [selectedOption, setSelectedOption] = useState<string | null>(null);
//       const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
//       const [startDate, endDate] = dateRange;
    
//       useEffect(() => {
//         if (selectedOption === "Custom Date" && startDate && endDate) {
//           onSelectionChange?.("Custom Date", startDate, endDate);
//           setFilterState((prev) => ({
//             ...prev,
//             dateRange: { startDate, endDate },
//             }));
//         } else if (selectedOption && selectedOption !== "Custom Date") {
//           onSelectionChange?.(selectedOption);
//         }
//       }, [startDate, endDate, selectedOption]);
    
//       const handleOptionChange = (option: string) => {
//         setSelectedOption(option);
//         setIsOpen(option === "Custom Date");
//       };
    
//       const handleDateChange = (update: Value) => {
//         if (Array.isArray(update) && update.length === 2) {
//           setDateRange(update as [Date | null, Date | null]);
//           if (update[0] && update[1]) {
//             onSelectionChange("Custom Date", update[0], update[1]);
//             setFilterState((prev) => ({
//                 ...prev,
//                 dateRange: {
//                 startDate: update[0] ?? undefined,
//                 endDate: update[1] ?? undefined,
//                 },
//             }));
//           }
//         }
//       };
    
//       const handleDropdownToggle = () => {
//         if (selectedOption === "Custom Date" && isOpen) {
//           setSelectedOption(null);
//           setDateRange([null, null]);
//           setFilterState((prev) => ({
//             ...prev,
//             dateRange: { startDate: undefined, endDate: undefined },
//           }));
//           return;
//         }
//         setSelectedOption(null);
//         setIsOpen(!isOpen);
//       };
    
//       return (
//         <div className="relative">
//           <button
//             onClick={handleDropdownToggle}
//             className="flex items-center px-4 py-2 text-gray-600 bg-white border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
//           >
//             {selectedOption
//               ? selectedOption === "Custom Date" && startDate && endDate
//                 ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
//                 : selectedOption
//               : "All"}
//             <FaChevronDown className="ml-2" />
//           </button>
    
//           {isOpen && (
//             <div className="absolute left-0 min-w-[250px] bg-white border border-gray-200 rounded-md shadow-md mt-2 z-20">
//               {selectedOption === "Custom Date" ? (
//                 <div className="p-4">
//                   <CustomCalendar
//                     selectRange
//                     value={dateRange || [null, null]}
//                     onChange={handleDateChange}
//                     className="w-full border rounded-md p-2"
//                   />
//                 </div>
//               ) : (
//                 <ul className="py-2">
//                   {options.map((option, index) => (
//                     <li
//                       key={index}
//                       className="px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white"
//                       onClick={() => handleOptionChange(option)}
//                     >
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       );
//     };
    
//     export default DateFilter;


import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { default as CustomCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FilterState } from "@/interfaces/tableFilterTypes";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DateFilterProps {
  options: string[];
  setFilterState: (newState: FilterState | ((prevState: FilterState) => FilterState)) => void;
  onSelectionChange: (
    selectedOption: string,
    startDate?: Date,
    endDate?: Date
  ) => void;
}

const DateFilter = ({ options, onSelectionChange, setFilterState }: DateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption === "Custom Date" && startDate && endDate) {
      onSelectionChange?.("Custom Date", startDate, endDate);
      setFilterState((prev) => ({
        ...prev,
        dateRange: { startDate, endDate },
      }));
    } else if (selectedOption && selectedOption !== "Custom Date") {
      onSelectionChange?.(selectedOption);
    }
  }, [startDate, endDate, selectedOption]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedOption(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(option === "Custom Date");
  };

  const handleDateChange = (update: Value) => {
    if (Array.isArray(update) && update.length === 2) {
      setDateRange(update as [Date | null, Date | null]);
      if (update[0] && update[1]) {
        onSelectionChange("Custom Date", update[0], update[1]);
        setFilterState((prev) => ({
          ...prev,
          dateRange: {
            startDate: update[0] ?? undefined,
            endDate: update[1] ?? undefined,
          },
        }));
      }
    }
  };

  const handleDropdownToggle = () => {
    if (selectedOption === "Custom Date" && isOpen) {
      setSelectedOption(null);
      setDateRange([null, null]);
      setFilterState((prev) => ({
        ...prev,
        dateRange: { startDate: undefined, endDate: undefined },
      }));
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleDropdownToggle}
        className="flex items-center px-4 py-2 text-gray-600 bg-white border rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {selectedOption
          ? selectedOption === "Custom Date" && startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : selectedOption
          : "All"}
        <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 min-w-[250px] bg-white border border-gray-200 rounded-md shadow-md mt-2 z-50">
          {selectedOption === "Custom Date" ? (
            <div className="p-4 w-full">
              <CustomCalendar
                selectRange
                value={dateRange || [null, null]}
                onChange={handleDateChange}
                className="w-full border rounded-md p-2"
              />
            </div>
          ) : (
            <ul className="py-2">
              {options.map((option, index) => (
                <li
                  key={index}
                  // className="px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white"
                  className="px-4 py-2 cursor-pointer hover:bg-gradient-to-r from-[#D029D8] to-[#519CDF] hover:text-white"
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DateFilter;

