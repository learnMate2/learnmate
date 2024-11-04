
import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar'
const Notes = () => {
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex',padding:"0 20px 0 70px"}}>

      <SideBar />
      <Container fluid >
        {/* Your dashboard content goes here */}
        <h1>Notes Content</h1>
      </Container>
    </div>
    </>
  );
};

export default Notes;