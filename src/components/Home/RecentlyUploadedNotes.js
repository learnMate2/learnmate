import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import image1 from "../../images/upload_notes_1.jpg"
import image2 from "../../images/upload_notes_2.jpg"
import image3 from "../../images/upload_notes_3.webp"
const notes = [
  {
    image: image1,
    title: 'Note 1',
    rating: 4.5,
    author: 'Author 1',
  },
  {
    image: image2,
    title: 'Note 2',
    rating: 4.0,
    author: 'Author 2',
  },
  {
    image: image3,
    title: 'Note 3',
    rating: 3.5,
    author: 'Author 3',
  },
  {
    image: image3,
    title: 'Note 4',
    rating: 4.2,
    author: 'Author 4',
  },
  // Add more notes as needed
];

const RecentlyUploadedNotes = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Recently Uploaded Notes</h2>
      <Row>
        {notes.map((note, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img src={note.image} alt={note.title} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                      <strong>Rating:</strong> {note.rating} <FaStar color="gold" />
                    </Card.Text>
                    <Card.Text>
                      <strong>Author:</strong> {note.author}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentlyUploadedNotes;
