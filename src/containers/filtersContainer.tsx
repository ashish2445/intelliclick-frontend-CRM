'use client';
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Dropdown from "@/components/CustomDropdown";
import MultiSelectDropdown from "@/components/MultiSelectDropDown";
import { FilterState } from "@/interfaces/tableFilterTypes";
import { DATA_STATUS } from "@/utils/constants";
import DateFilter from "@/components/DateFilter";
import { TIME_RANGE } from "@/utils/constants/timeRanges";
import { FaPlus } from "react-icons/fa6";
import Modal from "@/components/Modal";
import CreateForm from "@/components/Form";

interface TableFiltersProps {
  filterState:FilterState
  setFilter: (newState: (prev: FilterState) => FilterState) => void;
}

const TableFilters:React.FC<TableFiltersProps> = ({filterState,setFilter}) => {
  const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState("Status");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 dark:invert shadow-md rounded-md">
      <h2 className="text-lg font-semibold">
        Leads <span className="text-gray-500">(All)</span>
      </h2>
      <div className="flex items-center space-x-3">        
        <SearchBox placeholder="Type and Press Enter" setFilter={setFilter} iconSize={28} placeholder='type and Enter'
  iconColor="#0D2167"
  height="10px"
  width="400px"/>        
        <DateFilter options={[...TIME_RANGE]} setFilterState={setFilter} />      
        <MultiSelectDropdown options={[...DATA_STATUS]} selectedOptions={filterState.status} onSelect={(values: string[]) => {
          setFilter(prev => ({
            ...prev,
            status: values,
          }));
        }} />
       {/* <button className="px-4 py-2 border border-[1px] border-black rounded-[20px]" style={{  border: "1px solid #d6d2d2", borderRadius: "8px", height: "40px",width:"280px", fontSize: "14px", fontWeight: "400", gap: "8px" }}
>
         + Create leads
       </button> */}
       <div className="p-4">
     
      <button
        onClick={() => setModalOpen(true)}
        className="w-[130px] h-[40px] rounded-full border-2 border-black bg-white text-black font-medium flex items-center justify-center shadow-md"
      >
        <span className="text-sm">
        + Create leads</span>
      </button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <CreateForm />
      </Modal>
    </div>
      </div>
    </div>
  );
};

export default TableFilters;
