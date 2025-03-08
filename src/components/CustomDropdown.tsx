// 'use client';
// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";

// interface Option {
//   label: string;
//   value: string;
// }

// interface DropdownProps {
//   options: Option[];
//   selectedOption?: string;
//   onSelect: (value: string) => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const handleSelect = (value: string) => {
//     onSelect(value);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="dropdown-btn flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md w-40 bg-white shadow-sm"
//       >
//         {selectedOption ? options.find((opt) => opt.value === selectedOption)?.label : "Select an option"}
//         <FaChevronDown className="ml-2" />
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(option.value)}
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


// 'use client';
// import Dropdown from "@/components/CustomDropdown";
// import { useState } from "react";

// const DropdownExample: React.FC = () => {
//   const [selected, setSelected] = useState<string>("");
  
//   return (
//     <div className="p-4">
//       <h2 className="mb-2">Select an Option:</h2>
//       <Dropdown
//         options={[
//           { label: "Option 1", value: "option1" },
//           { label: "Option 2", value: "option2" },
//           { label: "Option 3", value: "option3" }
//         ]}
//         selectedOption={selected}
//         onSelect={setSelected}
//       />
//       <p className="mt-2">Selected: {selected || "None"}</p>
//     </div>
//   );
// };

// export default DropdownExample;

'use client';
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption?: string;
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn flex items-center justify-between w-40 bg-white shadow-sm"
        style={{ color: "#64748B", padding: "0px 10px", border: "1px solid #d6d2d2", borderRadius: "8px", height: "40px", fontSize: "14px", fontWeight: "400", gap: "8px" }}
      >
        {selectedOption ? options.find((opt) => opt.value === selectedOption)?.label : "Select an option"}
        <span className="ml-2">
          <FaChevronDown className="down-arrow" style={{ cursor: "pointer", color: "#64748B", width: "10px", fontSize: "16px" }} />
        </span>
      </button>

      {isOpen && (
        <ul className="style-list absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className="each-status px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option.value)}
              style={{ padding: "10px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}
            >
              <IoMdPerson />{option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
