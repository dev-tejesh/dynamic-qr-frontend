import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const DashboardPage = () => {
  // Update document title
  React.useEffect(() => {
    document.title = "Dashboard | QRforge";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 min-h-screen">
          <DashboardHeader />
          <main className="md:ml-64 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
