interface TimelineItem {
    date: string;
    time: string;
    description: string;
    icon?: string;
    badge?: string;
    badgeColor?: string;
  }
  
  interface TimelineSection {
    month: string;
    year: string;
    items: TimelineItem[];
  }
  
  const Timeline: React.FC<{ sections: TimelineSection[] }> = ({ sections }) => {
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            {/* Month & Year Header */}
            <div className="text-gray-600 font-semibold py-2 border-b">{section.month} {section.year}</div>
            
            {section.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 py-2 border-b last:border-none">
                {/* Date & Time */}
                <div className="text-center px-2">
                  <div className="text-gray-900 font-semibold">{item.date}</div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
  
                {/* Icon (Optional) */}
                {item.icon && <div className="text-gray-500">{item.icon}</div>}
  
                {/* Description */}
                <div className="flex-1 text-gray-800">{item.description}</div>
  
                {/* Badge (Optional) */}
                {item.badge && (
                  <div
                    className={`px-2 py-1 text-sm rounded-full text-white ${item.badgeColor}`}
                  >
                    {item.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Timeline;

  
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
