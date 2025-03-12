// interface TimelineItem {
//     date: string;
//     time: string;
//     description: string;
//     icon?: string;
//     badge?: string;
//     badgeColor?: string;
//   }
  
//   interface TimelineSection {
//     month: string;
//     year: string;
//     items: TimelineItem[];
//   }
  
//   const Timeline: React.FC<{ sections: TimelineSection[] }> = ({ sections }) => {
//     return (
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4">
//         {sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="mb-4">
//             {/* Month & Year Header */}
//             <div className="text-gray-600 font-semibold py-2 border-b">{section.month} {section.year}</div>
            
//             {section.items.map((item, index) => (
//               <div key={index} className="flex items-start gap-3 py-2 border-b last:border-none">
//                 {/* Date & Time */}
//                 <div className="text-center px-2">
//                   <div className="text-gray-900 font-semibold">{item.date}</div>
//                   <div className="text-xs text-gray-500">{item.time}</div>
//                 </div>
  
//                 {/* Icon (Optional) */}
//                 {item.icon && <div className="text-gray-500">{item.icon}</div>}
  
//                 {/* Description */}
//                 <div className="flex-1 text-gray-800">{item.description}</div>
  
//                 {/* Badge (Optional) */}
//                 {item.badge && (
//                   <div
//                     className={`px-2 py-1 text-sm rounded-full text-white ${item.badgeColor}`}
//                   >
//                     {item.badge}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Timeline;

  
//   import Timeline from "./Timeline";

// const App = () => {
//   const timelineData = [
//     {
//       month: "Feb",
//       year: "2025",
//       items: [
//         { date: "10", time: "12:12 PM", description: "👁 Viewed Landing Page, and spent 1 second.", badge: "+12", badgeColor: "bg-blue-500" },
//         { date: "15", time: "04:15 PM", description: "Lead Owner changed from Nilesh Patel, Intelliclick to Prashant Singh Intelliclick." },
//       ],
//     },
//     {
//       month: "Jan",
//       year: "2025",
//       items: [
//         { date: "15", time: "12:00 PM", description: "📞 Call to Abhishek Kumar (abhishek@azuyo.com)" },
//         { date: "18", time: "04:15 PM", description: "📌 Follow Up Call: Ishank Ahuja - UPSC CSE\nLearner has selected UPSC CSE-6 months\nOwner: Utkarsh Rai Created By: Iash Rai on 16 Jul 2020 12:11 PM" },
//         { date: "25", time: "10:15 PM", description: "📄 Document Collection Added by Venda Singh.", badge: "+20", badgeColor: "bg-yellow-500" },
//         { date: "26", time: "11:15 PM", description: "🎓 Education Application Added by ir Singh.", badge: "+25", badgeColor: "bg-orange-500" },
//       ],
//     },
//     {
//       month: "Dec",
//       year: "2024",
//       items: [
//         { date: "10", time: "12:12 PM", description: "📧 Email received from client to start class Added by Sandeep Purushothaman." },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
//       <Timeline sections={timelineData} />
//     </div>
//   );
// };

// export default App;


import React from 'react';

interface TimelineItem {
  date: string;
  time: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

interface TimelineSection {
  month: string;
  year: string;
  items: TimelineItem[];
}

const Timeline: React.FC<{ sections: TimelineSection[] }> = ({ sections }) => {
  // Get the appropriate icon based on the description content
  const getIcon = (description: string) => {
    if (description.includes('Viewed Landing Page')) {
      return '👁';
    } else if (description.includes('Call to')) {
      return '📞';
    } else if (description.includes('Follow Up Call')) {
      return '📌';
    } else if (description.includes('Document Collection')) {
      return '📄';
    } else if (description.includes('Education Application')) {
      return '🎓';
    } else if (description.includes('Email received')) {
      return '📧';
    } 
    return '•';
  };

  // Process description to remove emoji prefix if present
  const processDescription = (description: string) => {
    const emojis = ['👁', '📞', '📌', '📄', '🎓', '📧'];
    for (const emoji of emojis) {
      if (description.startsWith(emoji)) {
        return description.substring(emoji.length).trim();
      }
    }
    return description;
  };

  // Background color for month headers and date/time columns
  const bgColor = "bg-[#E9EDF5]";

  return (
    <div className="relative p-4  min-h-[200px]">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-0 relative">
          {/* Month & Year Header */}
          <div className={`${bgColor} text-black py-3 px-4 border-[1px] border-solid border-[#B9B9B9]`}>
            {section.month} {section.year}
          </div>
          
          {/* Timeline Items */}
          <div className="relative">
            {/* Vertical timeline line - runs through the entire section */}
            <div className="absolute left-[69px] top-0 bottom-0 w-[1px] ml-16 bg-[#FFFFFF] z-0 border-t border-r-0 border-b border-l border-solid border-[#B9B9B9]"></div>
            
            {section.items.map((item, itemIndex) => {
              const icon = getIcon(item.description);
              const cleanDescription = processDescription(item.description);
              const isLastItem = itemIndex === section.items.length - 1 && 
                                 sectionIndex === sections.length - 1;
              
              return (
                <div 
                  key={itemIndex} 
                  className="flex items-center relative border-solid border-[#B9B9B9] border-b-[1px] border-l-[1px]"
                >
                  {/* Date & Time Column with matching background color */}
                  <div className="text-center w-[135px] h-[50px] mr-2 bg-[#E9EDF5] p-2 inline-block border-r-[1px]  border-solid border-[#B9B9B9]">

                    <div className="text-[#000000] font-medium">{item.date}</div>
                    <div className="text-[#000000] text-sm">{item.time}</div>
                  </div>

                  {/* Icon Column with background to cover the line */}
                  <div className="mx-6 mt-1 w-6 text-center z-10 bg-white rounded-full relative">
                    <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white"></div>
                    <span className="relative z-10">{icon}</span>
                  </div>

                  {/* Description Column without emoji prefix */}
                  <div className="flex-1 text-gray-800 text-sm leading-relaxed">
                    {cleanDescription}
                  </div>

                  {/* Badge Column */}
                  {item.badge && (
                    <div 
                      className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                        item.badge.includes('+20') || item.badge.includes('+25') 
                          ? 'bg-[#FEF3C7] text-[#92400E]' 
                          : item.badge.includes('+12') || item.badge.includes('+5')
                          ? 'bg-[#E4EDFA] text-[#184574]'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.badge}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
