import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Sidebar'; 
import DashboardNavbar from './DashboardNavbar'
const Books = () => {
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex' }}>

      <SideBar />
      <Container fluid >
        {/* Your dashboard content goes here */}
        <h1>Books Content</h1>
      </Container>
    </div>
    </>
  );
};

export default Books;