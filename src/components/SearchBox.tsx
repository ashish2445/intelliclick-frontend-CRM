// 'use client';
// import { QueryState } from "@/interfaces/tableFilterTypes";
// import React, { useState } from "react";
// import { IoIosSearch } from "react-icons/io";

// interface SearchBoxProps<T> {
//   placeholder?: string;
//   setFilter:(query: QueryState | ((prev: QueryState) => QueryState)) => void;
//   iconSize?: number;
//   iconColor?: string;
//   height?: string | number;
//   width?: string | number;
// }

// const SearchBox = <T,>({
//   setFilter,
//   placeholder,
//   iconSize,
//   iconColor,
//   height,
//   width,
// }: SearchBoxProps<T>) => {
//   const [query, setQuery] = useState("");

//    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && query.trim() !== "") {
//       setFilter((prev) => {
//         return {
//           ...prev,
//           filters: [
//             ...prev.filters, // Keep existing filters
//             {
//               operator: "CONTAINS",
//               value: query,
//             },
//           ],
//         };
//       });
       
//     }
//   };


//   return (
//   <div
//     className={`flex flex-wrap sm:flex-nowrap items-center w-full gap-[5.42px] p-[7px] rounded-[5.42px] border-[0.68px] border-[#C6CCE0]`}
//   >
//     <IoIosSearch size={iconSize} color={iconColor} />
    
//       <input
//         type="text"
//         name="search-leads"
//         placeholder={placeholder}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
//       />
    
//   </div>
// );

// };

// export default SearchBox;

// 'use client';
// import { QueryState } from "@/interfaces/tableFilterTypes";
// import React, { useState, useEffect } from "react";
// import { IoIosSearch } from "react-icons/io";

// interface SearchBoxProps<T> {
//   placeholder?: string;
//   setFilter: (query: QueryState | ((prev: QueryState) => QueryState)) => void;
//   iconSize?: number;
//   iconColor?: string;
// }

// const SearchBox = <T,>({
//   setFilter,
//   placeholder = "Search...",
//   iconSize = 20,
//   iconColor = "#5A6793",
// }: SearchBoxProps<T>) => {
//   const [query, setQuery] = useState("");
//   const [isWideScreen, setIsWideScreen] = useState<boolean>(true);

//   useEffect(() => {
//     const checkScreenWidth = () => setIsWideScreen(window.innerWidth > 900);
//     checkScreenWidth(); // Check on mount
//     window.addEventListener("resize", checkScreenWidth);
//     return () => window.removeEventListener("resize", checkScreenWidth);
//   }, []);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && query.trim() !== "") {
//       setFilter((prev) => ({
//         ...prev,
//         filters: [...prev.filters, { operator: "CONTAINS", value: query }],
//       }));
//     }
//   };

//   return (
//     <div
//       className={`flex items-center ${
//         isWideScreen ? "gap-2 border rounded-md border-[#C6CCE0]" : ""
//       }`}
//     >
//       <IoIosSearch size={iconSize} color={iconColor} />
//       {isWideScreen && (
//         <input
//           type="text"
//           name="search-leads"
//           placeholder={placeholder}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
//         />
//       )}
//     </div>
//   );
// };

// export default SearchBox;

// 'use client';
// import { QueryState } from "@/interfaces/tableFilterTypes";
// import React, { useState, useEffect } from "react";
// import { IoIosSearch } from "react-icons/io";

// interface SearchBoxProps<T> {
//   placeholder?: string;
//   setFilter: (query: QueryState | ((prev: QueryState) => QueryState)) => void;
//   iconSize?: number;
//   iconColor?: string;
//   height?: string | number;
//   width?: string | number;
//   responsive?: boolean; // New prop to enable responsiveness
// }

// const SearchBox = <T,>({
//   setFilter,
//   placeholder,
//   iconSize,
//   iconColor,
//   height,
//   width,
//   responsive = false,
// }: SearchBoxProps<T>) => {
//   const [query, setQuery] = useState("");
//   const [showInput, setShowInput] = useState(true);

//   useEffect(() => {
//     if (responsive) {
//       const handleResize = () => {
//         setShowInput(window.innerWidth > 900);
//       };

//       handleResize(); // Initial check
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, [responsive]);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && query.trim() !== "") {
//       setFilter((prev) => ({
//         ...prev,
//         filters: [
//           ...prev.filters, // Keep existing filters
//           {
//             operator: "CONTAINS",
//             value: query,
//           },
//         ],
//       }));
//     }
//   };

//   return (
//     <div
//       className={`flex items-center ${
//         showInput ? `w-full gap-2 ${!responsive? 'p-2' : ''} border border-[#C6CCE0] rounded-md` : ""
//       }`}
//     >
//         <IoIosSearch size={iconSize} color={iconColor} />
//       {showInput && (
//         <input
//           type="text"
//           name="search-leads"
//           placeholder={placeholder}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={handleKeyDown}
//           className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
//         />
//       )}
//     </div>
//   );
// };

// export default SearchBox;

'use client';
import { QueryState } from "@/interfaces/tableFilterTypes";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBoxProps<T> {
  placeholder?: string;
  setFilter: (query: QueryState | ((prev: QueryState) => QueryState)) => void;
  iconSize?: number;
  iconColor?: string;
  height?: string | number;
  width?: string | number;
  responsive?: boolean; // New prop to enable responsiveness
}

const SearchBox = <T,>({
  setFilter,
  placeholder,
  iconSize,
  iconColor,
  height,
  width,
  responsive = false,
}: SearchBoxProps<T>) => {
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    if (responsive) {
      const handleResize = () => {
        setShowInput(window.innerWidth > 900);
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [responsive]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      setFilter((prev) => ({
        ...prev,
        filters: [
          ...prev.filters, // Keep existing filters
          {
            operator: "CONTAINS",
            value: query,
          },
        ],
      }));
    }
  };

  return (
    <div
      className={`flex items-center w-full gap-2 border border-[#C6CCE0] rounded-md ${showInput ? 'p-2' : ''}`}
    >
      <IoIosSearch size={iconSize} color={iconColor} />
      {showInput && (
        <input
          type="text"
          name="search-leads"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="outline-none bg-transparent w-full text-[#5A6793] placeholder-[#5A6793]"
        />
      )}
    </div>
  );
};

export default SearchBox;


