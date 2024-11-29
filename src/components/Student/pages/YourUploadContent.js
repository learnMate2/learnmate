import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import custom_axios from "../../connection/axios"
import { Row, Col, Card, Button } from 'react-bootstrap';
import StudentNavbar from '../layout/StudentNavbar';
import StudentSideBar from '../layout/StudentSidebar';
import { toast } from 'react-toastify';
import DocumentModal from '../../modals/DocumentModal';
import Loader from '../../loader/Loader';

const YourUploadContent = () => {
  const [notes, setNotes] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await custom_axios.get("/api/v1/documents/");
        setNotes(response.data.data)
      } catch (error) {
        toast.error(error.response.data.message);
      }finally {
        setLoading(false); 
      }
    }
    getNotes();
  }, [])

  const handleRating = (documentId) => {
    setModalShow(true); 
    setSelectedDocumentId(documentId); 
  };
  return (
    <>
      <StudentNavbar />
      <div style={{ display: 'flex', padding: "0 20px 0 70px" }}>
        <StudentSideBar />
        <Container fluid>
      <Row className="m-2">
        {loading ? (
          <Loader />
        ) : notes.length > 0 ? (
          notes.map((item, index) => (
            <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card
                style={{
                  border: "2px solid #6b21a8",
                  padding: "20px 10px",
                  marginTop: "30px",
                }}
                className="d-flex justify-content-center align-items-center career_card"
              >
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.course}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>Rating {item.rating.average}</Card.Text>
                  <a
                    href={item.documentUrl}
                    style={{
                      padding: "10px 20px",
                      background: "#6b21a8",
                      border: "none",
                      textDecoration: "none",
                      color: "#fff",
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                  >
                    Read More
                  </a>

                  <Button
                    variant="primary"
                    onClick={() => handleRating(item._id)}
                    style={{
                      padding: "7px 20px",
                      background: "#6b21a8",
                      border: "none",
                      textDecoration: "none",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    Give Rating
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "20px", paddingTop: "20px" }}>
            No notes available
          </p>
        )}
      </Row>
    </Container>
    <DocumentModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      documentId={selectedDocumentId} 
    />
      </div>
    </>
  );
};

export default YourUploadContent;
