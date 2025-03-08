// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   depth: number;
// }

// interface DropdownProps {
//   users: User[];
// }

// const CustomDropdown: React.FC<DropdownProps> = ({ users }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);

//   return (
//     <div className="relative w-64">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none"
//       >
//         {selectedUser ? (
//           <div className="h-full flex items-center">
//             <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
//               {selectedUser.name.split(" ").map((n) => n[0]).join("")}
//             </div>
//             <span className="ml-2 text-sm text-gray-800 text-[14px]">{selectedUser.name}</span>
            
//           </div>
//         ) : (
//           <span className="flex gap-2 items-center">"Assignee"<FaChevronDown className="ml-2 text-gray-600" /></span>
//         )}
//       </button>

//       {isOpen && (
//         // <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-50">
//         <div className="absolute mt-2 min-w-full w-max bg-white border rounded-md shadow-lg z-50">
//           {users.map((user) => (
//             <div
//               key={user._id}
//               className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => {
//                 setSelectedUser(user);
//                 setIsOpen(false);
//               }}
//             >
//               <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
//                 {user.name.split(" ").map((n) => n[0].toUpperCase()).join("")}
//               </div>
//               <span className="ml-2 text-sm text-gray-800 text-[14px]">{user.name}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;

import { IAssignee, QueryState } from "@/interfaces/tableFilterTypes";
import { DropdownInstance } from "@/services/dropdown.service";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   depth: number;
// }

interface DropdownProps {
  users: IAssignee[];
  selectAssignee:(query: QueryState | ((prev: QueryState) => QueryState)) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ users,selectAssignee }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IAssignee | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserSelection = (user: IAssignee) => {
    setSelectedUser(user);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative w-64">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none"
      >
        {selectedUser ? (
          <div className="h-full flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
              {selectedUser.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="ml-2 text-sm text-gray-800 text-[14px]">{selectedUser.name}</span>
          </div>
        ) : (
          <span className="flex gap-2 items-center"><GoPerson size={20} />
"Assignee"<FaChevronDown className="ml-2 text-gray-600" /></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-2 min-w-full w-max bg-white border rounded-md shadow-lg z-50">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleUserSelection}
            >
              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
                {user.name.split(" ").map((n) => n[0].toUpperCase()).join("")}
              </div>
              <span className="ml-2 text-sm text-gray-800 text-[14px]">{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
