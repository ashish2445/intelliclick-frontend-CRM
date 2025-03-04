// import React from "react";
// import { Select, MenuItem, IconButton } from "@mui/material";
// import { CalendarToday, Close, AccessTime } from "@mui/icons-material";

// const FilterComponent: React.FC = () => {
//   const [condition, setCondition] = React.useState("is");
//   const [dateFilter, setDateFilter] = React.useState("any");

//   return (
//     <div className="flex items-center gap-2 bg-red-100 text-gray-800 px-3 py-1.5 rounded-lg">
//       <div className="flex items-center gap-1 text-sm">
//         <CalendarToday fontSize="small" />
//         <span>Created On</span>
//       </div>
//       <Select
//         value={condition}
//         onChange={(e) => setCondition(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1"
//       >
//         <MenuItem value="is">Is</MenuItem>
//         <MenuItem value="before">Before</MenuItem>
//         <MenuItem value="after">After</MenuItem>
//       </Select>
//       <Select
//         value={dateFilter}
//         onChange={(e) => setDateFilter(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1"
//       >
//         <MenuItem value="any">
//           <AccessTime fontSize="small" />
//           Any
//         </MenuItem>
//         <MenuItem value="today">Today</MenuItem>
//         <MenuItem value="yesterday">Yesterday</MenuItem>
//         <MenuItem value="last7days">Last 7 Days</MenuItem>
//       </Select>
//       <IconButton size="small" className="text-gray-600 hover:text-gray-800">
//         <Close fontSize="small" />
//       </IconButton>
//     </div>
//   );
// };

// export default FilterComponent;

// import React from "react";
// import { Select, MenuItem, IconButton } from "@mui/material";
// import { CalendarToday, Close, AccessTime } from "@mui/icons-material";

// interface FilterComponentProps {
//   onClose: () => void;
// }

// const FilterComponent: React.FC<FilterComponentProps> = ({ onClose }) => {
//   const [condition, setCondition] = React.useState("is");
//   const [dateFilter, setDateFilter] = React.useState("any");

//   return (
//     <div className="flex items-center gap-2 bg-red-100 text-gray-800 px-3 py-1.5 rounded-lg">
//       <div className="flex items-center gap-1 text-sm">
//         <CalendarToday fontSize="small" />
//         <span>Created On</span>
//       </div>
//       <Select
//         value={condition}
//         onChange={(e) => setCondition(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1"
//       >
//         <MenuItem value="is">Is</MenuItem>
//         <MenuItem value="before">Before</MenuItem>
//         <MenuItem value="after">After</MenuItem>
//       </Select>
//       <Select
//         value={dateFilter}
//         onChange={(e) => setDateFilter(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1"
//       >
//         <MenuItem value="any">
//           <AccessTime fontSize="small" />
//           Any
//         </MenuItem>
//         <MenuItem value="today">Today</MenuItem>
//         <MenuItem value="yesterday">Yesterday</MenuItem>
//         <MenuItem value="last7days">Last 7 Days</MenuItem>
//       </Select>
//       <IconButton
//         size="small"
//         className="text-gray-600 hover:text-gray-800"
//         onClick={onClose} // Calls the provided onClose function
//       >
//         <Close fontSize="small" />
//       </IconButton>
//     </div>
//   );
// };

// export default FilterComponent;


// import React from "react";
// import { Select, MenuItem, IconButton } from "@mui/material";
// import { CalendarToday, Close, AccessTime } from "@mui/icons-material";

// interface FilterComponentProps {
//   onClose: () => void;
// }

// const FilterComponent: React.FC<FilterComponentProps> = ({ onClose }) => {
//   const [condition, setCondition] = React.useState("is");
//   const [dateFilter, setDateFilter] = React.useState("any");

//   return (
//     <div className="inline-flex items-center gap-2 bg-red-100 text-gray-800 px-3 py-1.5 rounded-lg w-auto">
//       <div className="flex items-center gap-1 text-sm">
//         <CalendarToday fontSize="small" />
//         <span>Created On</span>
//       </div>
//       <Select
//         value={condition}
//         onChange={(e) => setCondition(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1 w-auto"
//       >
//         <MenuItem value="is">Is</MenuItem>
//         <MenuItem value="before">Before</MenuItem>
//         <MenuItem value="after">After</MenuItem>
//       </Select>
//       <Select
//         value={dateFilter}
//         onChange={(e) => setDateFilter(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1 w-auto"
//       >
//         <MenuItem value="any">
//           <AccessTime fontSize="small" />
//           Any
//         </MenuItem>
//         <MenuItem value="today">Today</MenuItem>
//         <MenuItem value="yesterday">Yesterday</MenuItem>
//         <MenuItem value="last7days">Last 7 Days</MenuItem>
//       </Select>
//       <IconButton
//         size="small"
//         className="text-gray-600 hover:text-gray-800"
//         onClick={onClose} // Calls the provided onClose function
//       >
//         <Close fontSize="small" />
//       </IconButton>
//     </div>
//   );
// };

// export default FilterComponent;


// import React from "react";
// import { Select, MenuItem, IconButton } from "@mui/material";
// import { CalendarToday, Close, AccessTime } from "@mui/icons-material";

// interface FilterComponentProps {
//   onClose: () => void;
// }

// const FilterComponent: React.FC<FilterComponentProps> = ({ onClose }) => {
//   const [condition, setCondition] = React.useState("is");
//   const [dateFilter, setDateFilter] = React.useState("any");

//   return (
//     <div className="relative inline-flex items-center gap-2 bg-red-100 text-gray-800 px-4 py-3 rounded-lg w-auto">
//       {/* Close Button (Top Right Corner) */}
//       {/* <div className="absolute top-[-14] right-[-14]">
//       <IconButton
//         size="small"
//         className="text-gray-600 hover:text-gray-800"
//         onClick={onClose}
//       >
//         <Close fontSize="small" />
//       </IconButton></div> */}

//       <div className="absolute top-[-14px] right-[-14px]">
//   <IconButton
//     size="small"
//     className="text-gray-600 hover:text-gray-800"
//     onClick={onClose}
//   >
//     <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300">
//       <Close fontSize="small" />
//     </span>
//   </IconButton>
// </div>


//       {/* Label */}
//       <div className="flex items-center gap-1 text-sm">
//         <CalendarToday fontSize="small" />
//         <span>Created On</span>
//       </div>

//       {/* Condition Select */}
//       <Select
//         value={condition}
//         onChange={(e) => setCondition(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1 w-auto"
//       >
//         <MenuItem value="is">Is</MenuItem>
//         <MenuItem value="before">Before</MenuItem>
//         <MenuItem value="after">After</MenuItem>
//       </Select>

//       {/* Date Filter Select */}
//       <Select
//         value={dateFilter}
//         onChange={(e) => setDateFilter(e.target.value)}
//         className="text-sm bg-white border border-gray-300 rounded px-2 py-1 w-auto"
//       >
//         <MenuItem value="any">
//           <AccessTime fontSize="small" />
//           Any
//         </MenuItem>
//         <MenuItem value="today">Today</MenuItem>
//         <MenuItem value="yesterday">Yesterday</MenuItem>
//         <MenuItem value="last7days">Last 7 Days</MenuItem>
//       </Select>
//     </div>
//   );
// };

// export default FilterComponent;


import React from "react";
import { Select, MenuItem, IconButton } from "@mui/material";
import { CalendarToday, Close, AccessTime } from "@mui/icons-material";

interface FilterComponentProps {
  label: string;
  onClose: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ label, onClose }) => {
  const [condition, setCondition] = React.useState("is");
  const [dateFilter, setDateFilter] = React.useState("any");

  return (
    <div className="relative inline-flex items-center gap-2 bg-gray-100 text-gray-800 rounded-lg w-auto p-3">
      {/* Close Button (Top Right Corner) */}
      <div className="absolute top-[-14px] right-[-14px]">
        <IconButton
          size="small"
          className="text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300">
            <Close fontSize="small" />
          </span>
        </IconButton>
      </div>

      {/* Label */}
      <div className="flex items-center gap-1 text-sm">
        <CalendarToday fontSize="small" />
        <span>{label}</span>
      </div>

      {/* Condition Select */}
      <Select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="text-xs h-8 bg-white border border-gray-300 rounded w-auto"
      >
        <MenuItem value="is">Is</MenuItem>
        <MenuItem value="before">Before</MenuItem>
        <MenuItem value="after">After</MenuItem>
      </Select>

      {/* Date Filter Select */}
      <Select
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        className="text-xs h-8 bg-white border border-gray-300 rounded w-auto"
      >
        <MenuItem value="any">
          <AccessTime fontSize="small" />
          Any
        </MenuItem>
        <MenuItem value="today">Today</MenuItem>
        <MenuItem value="yesterday">Yesterday</MenuItem>
        <MenuItem value="last7days">Last 7 Days</MenuItem>
      </Select>
    </div>
  );
};

export default FilterComponent;






