import React from "react";
import StatisticsContainer from "@/containers/statisticsContainer";
import { IOpenTaskData } from "@/interfaces";

const data:IOpenTaskData[]= [
  {
    "StudentName": "John Doe",
    "Class": "10th Grade",
    "PhoneNumber": "123-456-7890",
    "Status": "Active",
    "CreatedBy": "Admin",
    "CreatedAt": "2025-02-24",
  },
  {
    "StudentName": "Jane Smith",
    "Class": "9th Grade",
    "PhoneNumber": "987-654-3210",
    "Status": "Inactive",
    "CreatedBy": "Teacher B",
    "CreatedAt": "2025-02-23",
  },
];

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <StatisticsContainer data={data} title={'My open Task'} />
      <StatisticsContainer data={data} title={'My Meeting'} />
      <StatisticsContainer data={data} title={'Today Leads'} />
      <StatisticsContainer title={'My Deals Closing This Month'} />
    </div>
  );
};

export default Home;
