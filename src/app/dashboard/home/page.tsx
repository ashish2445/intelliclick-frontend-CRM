import React from "react";
import StatisticsContainer from "@/containers/statisticsContainer";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <StatisticsContainer />
      <StatisticsContainer />
      <StatisticsContainer />
      <StatisticsContainer />
    </div>
  );
};

export default Home;
