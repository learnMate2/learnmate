import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
  Modal,
  Card,
} from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import custom_axios from "../connection/axios";

const HeroSection = () => {
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
    <div className="hero_section">
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row className="text-center" style={{ width: "700px" }}>
          <Col>
            <h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
              LearnMate, where Students
            </h1>
            <h1>
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                <Typewriter
                  words={["Download Notes", "Sell Notes", "Career Counseling"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={90}
                />
              </span>
            </h1>
            <h3 style={{ marginBottom: "20px", fontSize: "15px" }}>
              Find top-rated study notes from students taking the same courses
              as you.
            </h3>
            <Form onSubmit={SearchData}>
              <InputGroup
                className="mb-3"
                style={{ maxWidth: "705px", margin: "0 auto" }}
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
                  }}
                  value={searchQuery}
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modal for Search Results */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchResults.length > 0 ? (
            <Row>
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
                        <strong>Course: </strong>{note.course}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rating: </strong>{note.rating.average} / 5
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
            </Row>
          ) : (
            <p>No results found for your search.</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeroSection;
