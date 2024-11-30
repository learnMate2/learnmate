
import React, { useEffect, useState } from 'react';
import custom_axios from "../../connection/axios"
import { Container, Card,Col,Row } from 'react-bootstrap';
import StudentNavbar from '../layout/StudentNavbar';
import StudentSideBar from '../layout/StudentSidebar';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

const RequestedMeeting = () => {
  const [requestedmeeting, setRequestedMeeting] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequestedMeeting = async () => {
      try {
        const response = await custom_axios.get("/api/v1/student/allRequestedMeetings");
        setRequestedMeeting(response.data.data)
      } catch (error) {
        toast.error(error.response.data);
      }finally {
        setLoading(false); 
      }
    }
    getRequestedMeeting();
  }, [])
  return (
    <>
      <StudentNavbar />
      <div style={{ display: 'flex',padding:"0 20px 0 70px"  }}>

        <StudentSideBar />
        <Container fluid >
          <h1>My Requested Meeting</h1>
          <Row className="m-2">
          {loading ? (
            <Loader/>
          ):
            requestedmeeting.length>0?(
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
        ):(
          <p style={{textAlign:"center",fontSize:"20px",paddingTop:"20px"}}>No requested meetings available</p>
        )
        }
          </Row>

      </Container>
    </div >
    </>
  );
};

export default RequestedMeeting;