
import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar'; // Adjust the path as needed
import DashboardNavbar from './DashboardNavbar'
import custom_axios from "../../connection/axios"
import { Container, Card,Col,Row } from 'react-bootstrap';

const RequestedMeeting = () => {
  const [requestedmeeting, setRequestedMeeting] = useState([])
  useEffect(() => {
    const getRequestedMeeting = async () => {
      try {
        const response = await custom_axios.get("/api/v1/student/allRequestedMeetings");
        setRequestedMeeting(response.data.data)
        console.log(response.data.data,"====================")
      } catch (error) {
        console.log(`error occur ${error}`)
      }
    }
    getRequestedMeeting();
  }, [])
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex',padding:"0 20px 0 70px"  }}>

        <SideBar />
        <Container fluid >
          <h1>My Requested Meeting</h1>
          <Row className="m-2">
          {
            requestedmeeting.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card style={{border: "2px solid #6b21a8", padding: "20px 10px",marginTop:"30px" }} className='d-flex justify-content-center align-items-center career_card'>
                  <Card.Body className='text-center'>
                    <Card.Title style={{fontSize:"29px"}}>
                      {item.counsellor.fullName}
                    </Card.Title>
                    <Card.Text> 
                      {item.proposedTime}
                    </Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          ))
        }
          </Row>

      </Container>
    </div >
    </>
  );
};

export default RequestedMeeting;