import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const contactUsStyles = `
  .contact-form-container {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-form-container h2 {
    color: #343a40;
  }

  .contact-form-container .custom-input,
  .contact-form-container .custom-textarea {
    border-radius: 8px;
    border: 1px solid #ced4da;
    padding: 0.75rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-form-container .custom-input:focus,
  .contact-form-container .custom-textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
    outline: none;
  }

  .contact-form-container .custom-textarea {
    resize: none;
  }

  .contact-form-container .custom-button {
    background-color: #6b21a8;
    border: none;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 1rem;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-form-container .custom-button:hover {
    background-color: #7c43aa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function ContactUs() {
  return (
    <Container fluid className="p-4">
      <style>{contactUsStyles}</style>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="contact-form-container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mt-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject of your message"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  className="custom-textarea"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-100 custom-button">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
