import React, { useState } from "react";
import ContactCard from "./contactCard";
import LeadDetails from "./detailCard";
import ButtonContainer from "./buttonContainer";
import Timeline from "./timeline";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SearchBox from "@/components/SearchBox";
import AddTask from "./addTask";

  const leadData = {
    "Lead Source": "Webinar",
    "Lead Age": "35 Days",
    "Lead Owner": "Nilesh Patel",
    "Bord": "CBSE",
    "Assignee": "Prashant Kumar",
    "Address": "Nawada",
    "Created by": "Mother",
    "Class": "6th",
    "Mother Occupation": "Teacher",
    "Father Occupation": "Accountant",
    "Created on": "20-Jan-2025",
    "Modified on": "17-Jan-2025",
    "Alternative no": "India3216290798",
    "Parents name": "Alexandra Atkins",
    "School name": "Delhi Public School, R.K. Puram",
    "Interact with": "Mother",
    "City": "Mumbai",
    "State": "Maharashtra",
    "Percentage": "71%",
    "Tags": "",
  };

    const timelineData = [
    {
      month: "Feb",
      year: "2025",
      items: [
        { date: "10", time: "12:12 PM", description: "👁 Viewed Landing Page, and spent 1 second.", badge: "+12", badgeColor: "bg-blue-500" },
        { date: "15", time: "04:15 PM", description: "Lead Owner changed from Nilesh Patel, Intelliclick to Prashant Singh Intelliclick." },
      ],
    },
    {
      month: "Jan",
      year: "2025",
      items: [
        { date: "15", time: "12:00 PM", description: "📞 Call to Abhishek Kumar (abhishek@azuyo.com)" },
        { date: "18", time: "04:15 PM", description: "📌 Follow Up Call: Ishank Ahuja - UPSC CSE\nLearner has selected UPSC CSE-6 months\nOwner: Utkarsh Rai Created By: Iash Rai on 16 Jul 2020 12:11 PM" },
        { date: "25", time: "10:15 PM", description: "📄 Document Collection Added by Venda Singh.", badge: "+20", badgeColor: "bg-yellow-500" },
        { date: "26", time: "11:15 PM", description: "🎓 Education Application Added by ir Singh.", badge: "+25", badgeColor: "bg-orange-500" },
      ],
    },
    {
      month: "Dec",
      year: "2024",
      items: [
        { date: "10", time: "12:12 PM", description: "📧 Email received from client to start class Added by Sandeep Purushothaman." },
      ],
    },
  ];

const DetailedPage: React.FC = () => {

  const [btnClicked,setBtnClicked] = useState<string>('');

  const handleTaskSubmit = () => {
    console.log("submitted");
  }

  const handleCancelTask = () => {
    setBtnClicked('');
  }
  return (
    <div className="flex w-full">
      <div className="border border-black rounded-[22px]">
        <ContactCard
        name="Nilesh Patel"
        status="Enroll"
        phone="India2521160180"
        email="nileshpatel2@gmail.com"
        location="Nawada"
        rating={12}
        />
        <LeadDetails details={leadData} />
      </div>
      <div className="w-2/3 p-5">
        <ButtonContainer setBtn={setBtnClicked} />
        {btnClicked ==='CreateTask' && 
          <div className="p-4">
            <AddTask onSubmit={handleTaskSubmit} onCancel={handleCancelTask} />
          </div>}
        <div className="p-6 rounded-[22px] border border-black w-full dark-invert">
        {/* Header */}
        {/* <div className="flex justify-between items-center pb-2 mb-4">
          <div className="flex space-x-4">
            <span className="border-b-2 border-blue-600 text-blue-600 pb-1">Current View</span>
            <span>Previous View</span>
          </div>            
        </div> */}
        <div className="flex justify-between w-full">
          <span className="text-[17px] font-[700] text-[#0D2167]">All Leads</span>
          <button className="bg-[#0D2167] text-white px-4 py-2 rounded-md">+ Add a Condition</button>
        </div>

        <div className="flex justify-between items-center gap-10 p-2">
          <SearchBox iconSize={32} placeholder='Search' iconColor="#0D2167" />
          <div className="flex items-center gap-3">
            <MdKeyboardArrowLeft size={24} color="#0D2167" />
              {1}
            <MdOutlineKeyboardArrowRight size={24} color="#0D2167" />
          </div>
          <IoSettingsOutline size={24} color="#0D2167" />
        </div>
      </div>
        <Timeline sections={timelineData} />
      </div>
    </div>
  );
};

export default DetailedPage;

