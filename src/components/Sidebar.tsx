import React, { useEffect, useState } from "react";
import { RiSettings2Line } from "react-icons/ri";
import { TbBriefcase, TbClipboardText } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { RxShuffle, RxDashboard } from "react-icons/rx";
import { BiPieChartAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import logo from "@public/logox.svg";
import { useRouter } from "next/navigation";


export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  setProfileOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  setSelectedItem: (value: string) => void;
  isMobile: boolean;
}

function Sidebar({ isOpen, toggleSidebar, setProfileOpen, setSelectedItem, isMobile }: SidebarProps) {
  const [hovered, setHovered] = useState(false);
  const [clickedItem, setClickedItem] = useState("home");
  const [mounted, setMounted] = useState(false);
    const router = useRouter();


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleMouseEnter = () => setTimeout(() => setHovered(true), 100);
  const handleMouseLeave = () => setTimeout(() => setHovered(false), 100);

  const handleItem = (item: string) => {
    router.push(item)
    // setClickedItem(item);
    // setSelectedItem(item);
    if (isMobile) toggleSidebar();
  };

  return (
    <div
      className={`${isMobile ? "fixed top-0 left-0 h-full z-50" : "h-[calc(100vh-90px)]"} transition-all duration-300 overflow-hidden border-r border-gray-300 bg-white shadow-lg
        ${isMobile ? (isOpen ? "w-64 block" : "hidden") : hovered || isOpen ? "w-64" : "w-20"} md:block`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Logo and Close Button */}
        {isOpen && (
          <div className="flex items-center justify-between p-4 border-b">
            <Image src="./logo.svg" alt="logo" className="h-10 w-auto" width={100} height={100} />
            {isMobile && <IoClose size={30} onClick={toggleSidebar} className="cursor-pointer" />}
          </div>
        )}

        {/* Main Menu Items */}
        <ul className="flex flex-col flex-1">
          {[
            { icon: <RxDashboard size={30} />, path: "/dashboard/home", label: "Home" },
            { icon: <TbClipboardText size={30} />, path: "/dashboard/uploadQuestion", label: "Leads Management" },
            { icon: <BiPieChartAlt2 size={30} />, path: "/dashboard/invoice", label: "Attendance" },
            { icon: <TbBriefcase size={30} />, path: "stores", label: "Stores" },
            { icon: <BsHeadset size={30} />, path: "providers", label: "Providers" },
            { icon: <RiSettings2Line size={30} />, path: "developers", label: "Developers" },
            { icon: <RxShuffle size={30} />, path: "workflows", label: "Workflows" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleItem(item.path)}
              className={`flex items-center gap-4 min-h-[60px] px-4 cursor-pointer transition-colors duration-300
                ${clickedItem === item.path
                  ? "bg-[#D029D8] text-[#D029D8] font-semibold"
                  : "hover:bg-gradient-to-r from-[#D029D8] to-[#519CDF] hover:text-white"
                }`}
            >
              {item.icon}
              {(hovered || isOpen) && <span className="whitespace-nowrap">{item.label}</span>}
            </li>
          ))}
        </ul>

        {/* Profile and Logout Items */}
        <ul className="flex flex-col border-gray-300">
          {[
            { icon: <AiOutlineUser size={30} />, path: "profile", label: "Profile", onClick: () => setProfileOpen((prev) => !prev) },
            { icon: <FiLogOut size={30} />, path: "signout", label: "Sign Out" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleItem(item.path)}
              className={`flex items-center gap-4 min-h-[60px] px-4 cursor-pointer transition-colors duration-300
                ${clickedItem === item.path
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gradient-to-r from-purple-600 to-blue-500 hover:text-white"
                }`}
            >
              {item.icon}
              {(hovered || isOpen) && <span className="whitespace-nowrap">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;


