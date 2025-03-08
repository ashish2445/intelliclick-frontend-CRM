'use client';
import { Filter, FilterState, QueryState } from "@/interfaces/tableFilterTypes";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBoxProps<T> {
  // data: T[];
  // filterFunction: (item: T, query: string) => boolean;
  // onFilter: (filteredData: T[]) => void;
  placeholder?: string;
  setFilter:(query: QueryState | ((prev: QueryState) => QueryState)) => void;
  iconSize?: number;
  iconColor?: string;
  height?: string | number;
  width?: string | number;
}

const SearchBox = <T,>({
  // data,
  // filterFunction,
  // onFilter,
  setFilter,
  placeholder,
  iconSize,
  iconColor,
  height,
  width,
}: SearchBoxProps<T>) => {
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const filteredData = data?.filter((item) => filterFunction(item, query));
  //   // onFilter(filteredData);
  // }, [query, data, filterFunction]);

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      setFilter((prev) => {
        return {
          ...prev,
          filters: [
            ...prev.filters, // Keep existing filters
            {
              operator: "CONTAINS",
              value: [query],
            },
          ],
        };
      });
       
    }
  };

  return (
    // <div className="flex items-center justify-center border-l border-r border-b border-gray-300 rounded-lg text-gray-500 h-16 width-[800px] text-base font-normal gap-2 text-center px-2">
    // <div className="flex items-center justify-center border-l border-r border-b border-[#C6CCE0] rounded-lg text-[#C6CCE0] h-10 w-full text-base font-normal gap-2 text-center p-4">  
    <div className={`flex flex-wrap  sm:flex-nowrap items-center w-full mr-4 gap-[5.42px] p-[7px] rounded-[5.42px] border-[0.68px] border-[#C6CCE0]`}>
      <IoIosSearch size={iconSize} color={iconColor} />
      <input
        type="text"
        name="search-leads"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        // className="outline-none bg-transparent w-full"
        className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
      />
    </div>
  );
};

export default SearchBox;