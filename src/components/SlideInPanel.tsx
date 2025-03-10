// import React, { useState, ReactNode } from "react";

// type SlideInPanelProps = {
//   children: ReactNode;
// };

// const SlideInPanel: React.FC<SlideInPanelProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       {/* Button to open the panel */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md"
//       >
//         Open Panel
//       </button>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}

//       {/* Sliding Panel */}
//       <div
//         className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-2 left-2 p-2 text-gray-600 hover:text-black"
//         >
//           ✖
//         </button>

//         {/* Panel Content */}
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default SlideInPanel;

import React, { ReactNode } from "react";

type SlideInPanelProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};

const SlideInPanel: React.FC<SlideInPanelProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 left-2 p-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        {/* Panel Content */}
        <div className="p-8">{children}</div>
      </div>
    </>
  );
};

export default SlideInPanel;

