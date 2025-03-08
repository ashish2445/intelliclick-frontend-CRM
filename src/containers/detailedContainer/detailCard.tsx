interface LeadDetailsProps {
    details: Record<string, string>;
  }
  
  const LeadDetails: React.FC<LeadDetailsProps> = ({ details }) => {
    return (
      <div className="max-w-2xl w-[524px] h-[491px] mx-auto border border-black shadow-md">
        <table className="w-full border-collapse border border-black">
          <tbody>
            {Object.entries(details).map(([key, value], index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-[12px]`}>
                <td className="border border-black px-4 py-2 font-semibold">{key}:</td>
                <td className="border border-black px-4 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LeadDetails;

//   import LeadDetails from "./LeadDetails";

// const App = () => {
//   const leadData = {
//     "Lead Source": "Webinar",
//     "Lead Age": "35 Days",
//     "Lead Owner": "Nilesh Patel",
//     "Bord": "CBSE",
//     "Assignee": "Prashant Kumar",
//     "Address": "Nawada",
//     "Created by": "Mother",
//     "Class": "6th",
//     "Mother Occupation": "Teacher",
//     "Father Occupation": "Accountant",
//     "Created on": "20-Jan-2025",
//     "Modified on": "17-Jan-2025",
//     "Alternative no": "India3216290798",
//     "Parents name": "Alexandra Atkins",
//     "School name": "Delhi Public School, R.K. Puram",
//     "Interact with": "Mother",
//     "City": "Mumbai",
//     "State": "Maharashtra",
//     "Percentage": "71%",
//     "Tags": "",
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <LeadDetails details={leadData} />
//     </div>
//   );
// };

// export default App;

  