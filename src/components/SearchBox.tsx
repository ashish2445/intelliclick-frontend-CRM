'use client';
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBoxProps<T> {
  data: T[];
  filterFunction: (item: T, query: string) => boolean;
  onFilter: (filteredData: T[]) => void;
  placeholder?: string;
}

const SearchBox = <T,>({
  data,
  filterFunction,
  // onFilter,
  placeholder = "Search...",
}: SearchBoxProps<T>) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filteredData = data?.filter((item) => filterFunction(item, query));
    // onFilter(filteredData);
  }, [query, data, filterFunction]);

  return (
    // <div className="flex items-center justify-center border-l border-r border-b border-gray-300 rounded-lg text-gray-500 h-16 width-[800px] text-base font-normal gap-2 text-center px-2">
    <div className="flex items-center justify-center border-l border-r border-b border-[#C6CCE0] rounded-lg text-[#C6CCE0] h-10 w-full text-base font-normal gap-2 text-center p-4">  
      <IoIosSearch size={32} color="#0D2167" />
      <input
        type="text"
        name="search-leads"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // className="outline-none bg-transparent w-full"
        className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
      />
    </div>
  );
};

export default SearchBox;