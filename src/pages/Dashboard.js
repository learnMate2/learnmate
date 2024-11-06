
import React from 'react';
import SideBar from '../components/dashboard/Sidebar'; 
import DashboardNavbar from '../components/dashboard/DashboardNavbar'
const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex' }}>
        <SideBar />
      </div>
    </>
  );
};

export default Dashboard;

