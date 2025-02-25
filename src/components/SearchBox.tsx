'use client';
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox: React.FC = () => {
  const [searchString, setSearchString] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    // <div className="flex items-center justify-center border-l border-r border-b border-gray-300 rounded-lg text-gray-500 h-16 width-[800px] text-base font-normal gap-2 text-center px-2">
    <div className="flex items-center justify-center border-l border-r border-b border-[#C6CCE0] rounded-lg text-[#C6CCE0] h-10 w-full text-base font-normal gap-2 text-center p-4">  
      <IoIosSearch size={32} color="#0D2167" />
      <input
        type="text"
        name="search-leads"
        placeholder="Search"
        value={searchString}
        onChange={handleSearchChange}
        // className="outline-none bg-transparent w-full"
        className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
      />
    </div>
  );
};

export default SearchBox;