
import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar'
const MyCourses = () => {
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex' }}>

      <SideBar />
      <Container fluid >
        {/* Your dashboard content goes here */}
        <h1>MyCourses Content</h1>
      </Container>
    </div>
    </>
  );
};

export default MyCourses;