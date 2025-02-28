// 'use client';
// import MultiSelectDropdown from "@/components/MultiSelectDropDown";
// import { useState } from "react";

// const options = [
//   { label: "Option 1", value: "opt1" },
//   { label: "Option 2", value: "opt2" },
//   { label: "Option 3", value: "opt3" },
// ];

// const MyComponent = () => {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//   return (
//     <div>
//       <MultiSelectDropdown
//         options={options}
//         selectedOptions={selectedOptions}
//         onSelect={setSelectedOptions}
//       />

//       {/* Display selected options here */}
//       {selectedOptions.length > 0 && (
//         <div className="mt-2">
//           <strong>Selected:</strong> {selectedOptions.map((opt) => options.find(o => o.value === opt)?.label).join(", ")}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyComponent;

// "use client";
// import React, { useState } from "react";
// import MultiSelectDropdown from "@/components/MultiSelectDropDown";
// import DynamicTable from "@/components/DynamicTable";
// import { IOpenTaskData } from "@/interfaces";
// import { columns } from "@/utils/constants";

// const allOptions = [
//   { label: "Subject", value: "subject" },
//   { label: "Grade", value: "grade" },
//   { label: "Status", value: "status" },
// ];

// const initialData: IOpenTaskData[] = [
//   {
//     "StudentName": "John Doe",
//     "Class": "10th Grade",
//     "PhoneNumber": "123-456-7890",
//     "Status": "Active",
//     "CreatedBy": "Admin",
//     "CreatedAt": "2025-02-24",
//   },
//   {
//     "StudentName": "Jane Smith",
//     "Class": "9th Grade",
//     "PhoneNumber": "987-654-3210",
//     "Status": "Inactive",
//     "CreatedBy": "Teacher B",
//     "CreatedAt": "2025-02-23",
//   },
// ];

// const Page = () => {
//   const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  
//   // Always include "Student Name" as a default column
//   const newColumns = [...columns, ...selectedColumns];

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Dynamic Table with MultiSelect Dropdown</h2>
      
//       {/* MultiSelectDropdown to Select Columns */}
//       <MultiSelectDropdown 
//         options={allOptions} 
//         selectedOptions={selectedColumns} 
//         onSelect={setSelectedColumns} 
//       />

//       {/* Dynamic Table */}
//       <div className="mt-4">
//         <DynamicTable data={initialData} columns={newColumns} />
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import MultiSelectDropdown from "@/components/MultiSelectDropDown";
import DynamicTable from "@/components/DynamicTable";
import { IOpenTaskData } from "@/interfaces";
import { columns } from "@/utils/constants";

const allOptions = [
  { label: "Subject", color: "subject" },
  { label: "Grade", color: "grade" },
  { label: "Status", color: "status" },
];

const initialData: IOpenTaskData[] = [
  {
    StudentName: "John Doe",
    Class: "10th Grade",
    PhoneNumber: "123-456-7890",
    Status: "Active",
    CreatedBy: "Admin",
    CreatedAt: "2025-02-24",
  },
  {
    StudentName: "Jane Smith",
    Class: "9th Grade",
    PhoneNumber: "987-654-3210",
    Status: "Inactive",
    CreatedBy: "Teacher B",
    CreatedAt: "2025-02-23",
  },
];

const Page = () => {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  // Always include "Student Name" as a default column
  const baseColumns = [...columns];

  // Find index of "Class" column
  const classIndex = baseColumns.indexOf("Class");

  // Insert selected columns after "Class"
  let newColumns = [...baseColumns];
  if (classIndex !== -1) {
    newColumns = [
      ...baseColumns.slice(0, classIndex + 1), // Keep columns before and including "Class"
      ...selectedColumns, // Insert new selected columns here
      ...baseColumns.slice(classIndex + 1), // Keep remaining columns after "Class"
    ];
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Dynamic Table with MultiSelect Dropdown</h2>

      {/* MultiSelectDropdown to Select Columns */}
      <MultiSelectDropdown
        options={allOptions}
        selectedOptions={selectedColumns}
        onSelect={setSelectedColumns}
      />

      {/* Dynamic Table */}
      <div className="mt-4">
        <DynamicTable data={initialData} columns={newColumns} />
      </div>
    </div>
  );
};

export default Page;







