import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
// import logox from '@public/logox.svg';
// import Ellipse from '@public/Ellipse.svg';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

export interface IProfileHeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  incentive: number | undefined;
  setProfileOpen: (updater: (prev: boolean) => boolean) => void;
  setSelectedItem: (item: string) => void;
}

function Header({ isOpen, toggleSidebar, setProfileOpen, setSelectedItem, incentive }: IProfileHeaderProps) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
    toggleSidebar();
  };

  const handleProfileClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      
      <div className="hidden md:flex w-60 justify-center items-center">
        <Image src="/logox.svg" alt="logo" priority width={200} height={200} />
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4 text-lg font-medium">
          <IoMenu size={30} onClick={handleMobileMenuClick} className="cursor-pointer md:hidden" />
          <p>Incentive</p>
          {incentive === undefined ? (
            <ClipLoader />
          ) : (
            <span className="text-xl text-purple-700">INR {incentive}</span>
          )}
        </div>
        <div className="relative flex items-center space-x-4">
          <Image src="./Ellipse.svg" alt="profile-image" width={100} height={100} className="cursor-pointer h-12 w-12 rounded-full" onClick={handleProfileClick} />
          {isMenuVisible && (
            <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 w-40">
              <div className="p-2 cursor-pointer text-gray-800 hover:bg-gray-100" onClick={() => setSelectedItem('profile')}>
                Profile
              </div>
              <div className="p-2 cursor-pointer text-gray-800 hover:bg-gray-100" onClick={() => setSelectedItem('logout')}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;





