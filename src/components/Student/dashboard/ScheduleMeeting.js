import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar'; 
import DashboardNavbar from './DashboardNavbar'
import custom_axios from "../../connection/axios"
import { Container, Card,Col,Row ,Button} from 'react-bootstrap';
const ScheduleMeeting = () => {
  const [scheduleMeeting, setScheduleMeeting] = useState([])
  useEffect(() => {
    const getScheduleMeeting = async () => {
      try {
        const response = await custom_axios.get("/api/v1/meeting/allScheduledMeetings");
        setScheduleMeeting(response.data.data)
        console.log(response.data.data, "-----555-")
      } catch (error) {
        console.log(`error occur ${error}`)
      }
    }
    getScheduleMeeting();
  }, [])
  return (
    <>
      <DashboardNavbar/>
    <div style={{ display: 'flex',padding:"0 20px 0 70px" }}>

      <SideBar />
      <Container fluid >
          <h1>My Schedule Meeting</h1>
          <Row className="m-2">
          {
            scheduleMeeting.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card style={{border: "2px solid #6b21a8", padding: "20px 10px",marginTop:"30px" }} className='d-flex justify-content-center align-items-center career_card'>
                  <Card.Body className='text-center'>
                    <Card.Title style={{fontSize:"29px"}}>
                      {item.counsellor.fullName}
                    </Card.Title>
                    <Card.Text> 
                      {item.scheduledAt}
                    </Card.Text>
                    <Button style={{padding:"10px 20px",background:"#6b21a8",border:"none"}} href={`/counselorprofile/${item._id}`}>Get link</Button>
                  </Card.Body>
              </Card>
            </Col>
          ))
        }
          </Row>

      </Container>
    </div>
    </>
  );
};

export default ScheduleMeeting;