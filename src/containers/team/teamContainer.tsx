'use client';
import React, { useEffect, useState } from "react";
import DynamicTable3 from "@/components/DragDropTable";
import { RootInstance } from "@/services/root.service";
import { handleError } from "@/utils/helpers";
import { AxiosError } from "axios";
import { columns } from "@/utils/constants";
import TeamFilters from "./teamFilters";

const TeamContainer: React.FC = () => {

    const [team,setTeam] = useState([]);

    const fetchTeam = async () => {
    try {
      const teamResponse = await RootInstance.getTeamMembers(); // Await the response
      setTeam(teamResponse.leads);
    } catch (error) {
      handleError(error as AxiosError,false);
    }
  };
  console.log("team",team);

  useEffect(() => {   
    fetchTeam();
  }, []);
  return (
    <div>
      <TeamFilters />
      <DynamicTable3 data={team} columns={columns} />
    </div>
  );
};

export default TeamContainer;