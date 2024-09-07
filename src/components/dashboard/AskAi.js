
import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar'
const AskAi = () => {
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex' }}>

      <SideBar />
      <Container fluid >` `
        {/* Your dashboard content goes here */}
        <h1>AskAi Content</h1>
      </Container>
    </div>
    </>
  );
};

export default AskAi;