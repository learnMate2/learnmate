import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import SideBar from './StudentSidebar'; 
import DashboardNavbar from './StudentNavbar';
import UploadArea from './dashboardContent/UploadArea'; 


const Dashboard = () => {
  
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex',padding:"0 20px 0 70px"   }}>
        <SideBar />
        <Container fluid style={{ paddingLeft: '0', paddingRight: '0', paddingTop: "20px" }}>
          <Row className="mt-3">
            <input type="text" placeholder='Search Notes, Books and Course...' className='search_inpt' style={{ width:"90%",padding:"10px 30px",margin: "0 auto", border: "2px solid #6b21a8",borderRadius: "22px"}} />
          </Row>
          <Row className="mt-2" style={{ padding: "0 40px" }}>
            <Col>
              <UploadArea />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
