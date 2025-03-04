import LeadContentDetails from "@/components/LeadContent";
import LeadDetails from "@/components/LeadSidebar";
import React from "react";

type LayoutProps = {
  sideContent: React.ReactNode;
  mainContent: React.ReactNode;
};

const SideMainLayout: React.FC<LayoutProps> = ({ sideContent, mainContent }) => {
  return (
    <div className="flex h-screen w-full">
      {/* Side Content - 1/3 width */}
      <aside className="w-1/3 bg-gray-200 p-4">
        <LeadDetails />
      </aside>
      
      {/* Main Content - 2/3 width */}
      <main className="w-2/3 bg-white p-4">
        <LeadContentDetails />
      </main>
    </div>
  );
};

export default SideMainLayout;



