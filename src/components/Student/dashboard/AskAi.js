
import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar'
import AiTextarea from "../dashboard/dashboardAi/AiTextarea"
import AiText from './dashboardAi/AiText';
const AskAi = () => {
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex',backgroundColor:"#F6F7FB",padding:"0 20px 0 70px" }}>

      <SideBar />
      <Container fluid className='p-4'>
        <h1>Ask AI</h1>
        <p style={{color:"#9EA9BB"}}>Ask a career question and get an answer in seconds.</p>
        <div>
          <AiTextarea/>
          <AiText/>
        </div>
      </Container>
    </div>
    </>
  );
};

export default AskAi;