import React, { useEffect, useState } from 'react';
import CounsellorSidebar from '../layout/CounsellorSidebar';
import CounsellorNavbar from '../layout/CounsellorNavbar'
import custom_axios from "../../connection/axios"
import { Container, Card, Col, Row,Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

const CounsellorRequestedMeeting = () => {
  const [counsellorRequestedMeeting, setCounsellorRequestedMeeting] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequestedMeeting = async () => {
      try {
        const response = await custom_axios.get("/api/v1/counsellor/allMeetingRequests");
        setCounsellorRequestedMeeting(response.data.data)
      } catch (error) {
        toast.error(error.response.data);
      }finally{
        setLoading(false)
      }
    }
    getRequestedMeeting();
  }, [])
  return (
    <>
      <CounsellorNavbar />
      <div style={{ display: 'flex', padding: "0 20px 0 70px" }}>

        <CounsellorSidebar />
        <Container fluid >
          <h1>Counsellor Requested Meeting</h1>
          <Row className="m-2">
            {loading ? (<Loader/>):
              counsellorRequestedMeeting.length > 0 ? (
                counsellorRequestedMeeting.map((item, index) => (
                  <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                    <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px" }} className='d-flex justify-content-center align-items-center career_card'>
                      <Card.Body className='text-center'>
                        <Card.Title style={{ fontSize: "29px" }}>
                          {/* {item.student.fullName} */}
                        </Card.Title>
                        <Card.Text>
                          {item.proposedTime}
                        </Card.Text>
                        <Card.Text>
                          {item.createdAt}
                        </Card.Text>
                        <Button style={{padding:"10px 20px",background:"#6b21a8",border:"none"}} href={`/counsellor/allMeetingRequests/response/${item._id}`}>Send Response</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p style={{ textAlign: "center", fontSize: "20px", paddingTop: "20px" }}>No requested meetings available</p>
              )
            }
          </Row>

        </Container>
      </div >
    </>
  );
};

export default CounsellorRequestedMeeting;