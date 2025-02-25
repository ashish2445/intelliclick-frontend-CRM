'use client';
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox: React.FC = () => {
  const [searchString, setSearchString] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="flex items-center justify-center border-l border-r border-b border-gray-300 rounded-lg text-gray-500 h-14 width-80 text-base font-normal gap-2 text-center px-2">
      <IoIosSearch size={20} />
      <input
        type="text"
        name="search-leads"
        placeholder="Search"
        value={searchString}
        onChange={handleSearchChange}
        className="outline-none bg-transparent w-full"
      />
    </div>
  );
};

export default SearchBox;