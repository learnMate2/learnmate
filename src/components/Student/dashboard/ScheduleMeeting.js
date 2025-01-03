import React, { useEffect, useState } from 'react';
import SideBar from './StudentSidebar';
import DashboardNavbar from './StudentNavbar';
import custom_axios from "../../connection/axios";
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Loader from '../../loader/Loader'; // Import the Loader component

const ScheduleMeeting = () => {
  const [scheduleMeeting, setScheduleMeeting] = useState([]);
  const [show, setShow] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getScheduleMeeting = async () => {
      setLoading(true); // Start loading
      try {
        const response = await custom_axios.get("/api/v1/meeting/allScheduledMeetings");
        setScheduleMeeting(response.data.data);
      } catch (error) {
        console.log(`Error occurred: ${error}`);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getScheduleMeeting();
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = (link) => {
    setCurrentLink(link);
    setShow(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentLink);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex', padding: "0 20px 0 70px" }}>
        <SideBar />
        <Container fluid>
          <h1>My Schedule Meeting</h1>
          <Row className="m-2">
            {loading ? (
              <Loader /> // Show the loader while loading
            ) : scheduleMeeting.length > 0 ? (
              scheduleMeeting.map((item, index) => (
                <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                  <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px" }} className="d-flex justify-content-center align-items-center career_card">
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "29px" }}>
                        {item.counsellor.fullName}
                      </Card.Title>
                      <Card.Text>{item.scheduledAt}</Card.Text>
                      <Button style={{ padding: "10px 20px", background: "#6b21a8", border: "none" }} onClick={() => handleShow(item.joinUrl)}>
                        Get link
                      </Button>
                    </Card.Body>
                  </Card>
                  {/* Modal */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Meeting Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{currentLink}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleCopyLink}>
                        Copy Link
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              ))
            ) : (
              <p style={{ textAlign: "center", fontSize: "20px", paddingTop: "20px" }}>
                No Scheduled meetings available
              </p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ScheduleMeeting;
