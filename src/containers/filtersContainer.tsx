'use client';
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import MultiSelectDropdown from "@/components/MultiSelectDropDown";
import { FilterState, IAssignee, IStatus, QueryState } from "@/interfaces/tableFilterTypes";
import DateFilter from "@/components/DateFilter";
import { TIME_RANGE } from "@/utils/constants/timeRanges";
import CustomDropdown from "@/components/Dropdown2";

interface TableFiltersProps {
  filterState:FilterState
  setFilter: (newState: (prev: FilterState) => FilterState) => void;
  setQuery:(query: QueryState | ((prev: QueryState) => QueryState)) => void;
  assignee: IAssignee[];
  statusInfo :IStatus[];
}

const TableFilters:React.FC<TableFiltersProps> = ({filterState,setFilter,setQuery,assignee,statusInfo}) => {

  return (
    <div className="flex items-center justify-between dark:invert mb-2">
      <h2 className="font-semibold text-[20px] font-[300]">
        Leads <span className="text-gray-500">(All)</span>
      </h2>
      <div className="flex items-center">
        <div className="flex space-x-6">
          <SearchBox placeholder="Type and Press Enter" setFilter={setQuery} iconSize={24} responsive
              iconColor="#0D2167"
          />
          <CustomDropdown users={assignee} selectAssignee={setQuery} />
          <DateFilter options={[...TIME_RANGE]} setDate={setQuery} />
        
        <MultiSelectDropdown options={statusInfo} selectedOptions={filterState.status} onSelect={(values: string[]) => {
          setFilter(prev => ({
            ...prev,
            status: values,
          }));
        }} />
      </div>
      
      </div>
    </div>
  );
};

export default TableFilters;
