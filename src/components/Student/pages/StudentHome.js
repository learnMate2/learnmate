import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UploadArea from "./UploadArea";
import StudentNavbar from "../layout/StudentNavbar";
import StudentSideBar from "../layout/StudentSidebar";
import { FormControl, InputGroup, Form, Modal, Card } from "react-bootstrap";
import custom_axios from "../../connection/axios";

const StudentHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const SearchData = async (e) => {
    e.preventDefault();
    try {
      const response = await custom_axios.get(
        `api/v1/documents/searchDocuments?q=${searchQuery}`
      );
      setSearchResults(response.data.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setSearchResults([]);
  };

  return (
    <>
      <StudentNavbar />
      <div style={{ display: "flex", padding: "0 20px 0 70px" }}>
        <StudentSideBar />
        <Container
          fluid
          style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "20px" }}
        >
          <Form onSubmit={SearchData}>
            <InputGroup
              className="mb-3"
              style={{ width: "100%", margin: "0 auto" }}
            >
              <FormControl
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Here..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                style={{
                  borderRadius: "50px",
                  background: "white",
                  padding: "20px",
                  border: "2px solid #6b21a8",
                }}
                value={searchQuery}
              />
            </InputGroup>
          </Form>
          <Row className="mt-2" style={{ padding: "0 40px" }}>
            <Col>
              <UploadArea />
            </Col>
          </Row>
          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Search Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {searchResults.length > 0 ? (
                <>
                  {searchResults.map((note, index) => (
                    <Col key={index} md={4} style={{ marginBottom: "20px" }}>
                      <Card className="shadow-sm">
                        <Card.Img
                          variant="top"
                          src={note.thumbnail}
                          style={{ height: "150px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title>{note.title}</Card.Title>
                          <Card.Text>
                            <strong>Course: </strong>
                            {note.course}
                          </Card.Text>
                          <Card.Text>
                            <strong>Rating: </strong>
                            {note.rating.average} / 5
                          </Card.Text>
                          <a
                            href={note.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </>
              ) : (
                <p>No results found for your search.</p>
              )}
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
};

export default StudentHome;
