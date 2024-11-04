import React, { useEffect, useState } from 'react';
import CounsellorSidebar from '../layout/CounsellorSidebar';
import CounsellorNavbar from '../layout/CounsellorNavbar'
import custom_axios from "../../connection/axios"
import { Container, Card, Col, Row } from 'react-bootstrap';

const CounsellorRequestedMeeting = () => {
  const [counsellorRequestedMeeting, setCounsellorRequestedMeeting] = useState([])
  useEffect(() => {
    const getRequestedMeeting = async () => {
      try {
        const response = await custom_axios.get("/api/v1/counsellor/allMeetingRequests");
        setCounsellorRequestedMeeting(response.data.data)
        console.log(response.data.data, "CounsellorRequestedMeeting")
      } catch (error) {
        console.log(`error occur ${error}`)
      }
    }
    getRequestedMeeting();
  }, [])
  return (
    <>
      <CounsellorNavbar />
      <div style={{ display: 'flex',padding:"0 20px 0 70px"}}>

        <CounsellorSidebar />
        <Container fluid >
          <h1>Counsellor Requested Meeting</h1>
          <Row className="m-2">
            {
              counsellorRequestedMeeting.map((item, index) => (
                <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                  <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px" }} className='d-flex justify-content-center align-items-center career_card'>
                    <Card.Body className='text-center'>
                      <Card.Title style={{ fontSize: "29px" }}>
                        {item.student}
                      </Card.Title>
                      <Card.Text>
                        {item.proposedTime}
                      </Card.Text>
                      <Card.Text>
                        {item.createdAt}
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

export default CounsellorRequestedMeeting;