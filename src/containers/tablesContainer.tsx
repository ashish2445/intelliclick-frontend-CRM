import React from "react";
import DynamicTable from "@/components/DynamicTable";
import { columns } from "@/utils/constants";

const data = [
  {
    "Student Name": "John Doe",
    "Class": "10th Grade",
    "Phone Number": "123-456-7890",
    "Status": "Active",
    "Created By": "Admin",
    "Created At": "2025-02-24",
  },
  {
    "Student Name": "Jane Smith",
    "Class": "9th Grade",
    "Phone Number": "987-654-3210",
    "Status": "Inactive",
    "Created By": "Teacher B",
    "Created At": "2025-02-23",
  },
];

const TablesContainer: React.FC = () => {
  return (
    <div className="border border-r p-4">
      <h1>My Meeting</h1>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default TablesContainer;
