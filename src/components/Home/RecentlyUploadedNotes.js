import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import custom_axios from "../connection/axios"
import { toast } from 'react-toastify';

  


const RecentlyUploadedNotes = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await custom_axios.get("/api/v1/documents/");
        setNotes(response.data.data)
      } catch (error) {
        toast.error(`error occur ${error}`)
      }
    }
    getNotes();
  }, [])
  return (
    <Container className="my-5">
      <h2 className="mb-4">Recently Uploaded Notes</h2>
      <Row>
      {notes.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px" }} className='d-flex justify-content-center align-items-center career_card'>
                  <Card.Img variant="top" src={item.thumbnail} style={{ width: "130px", height: "130px", borderRadius: "50%" }} />
                  <Card.Body className='text-center'>
                    <Card.Title >
                      {item.title}
                    </Card.Title>
                    <Card.Text>
                      {item.course}
                    </Card.Text>
                    <Card.Text>
                      {item.price}
                    </Card.Text>
                    <Card.Text>
                      Rating {item.rating.average}
                    </Card.Text>
                    <a href={item.documentUrl} style={{ padding: "10px 20px", background: "#6b21a8", border: "none",textDecoration:"none",color:"#fff",borderRadius:"10px" }}>Read More</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default RecentlyUploadedNotes;
