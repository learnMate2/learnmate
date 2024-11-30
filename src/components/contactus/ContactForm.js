import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactUs() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

   
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    console.log(mailtoUrl,"0000000");

 
    const mailtoLink = document.createElement("a");
    mailtoLink.href = mailtoUrl;
    mailtoLink.target = "_blank";
    mailtoLink.click();

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setErrorMessage(""); 
};

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div
            className="contact-form-container"
            style={{
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <h2 className="text-center mb-4">Contact Us</h2>

            {/* Show error message if validation fails */}
            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  padding: "10px",
                  borderRadius: "4px",
                  marginBottom: "20px",
                }}
              >
                {errorMessage}
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="custom-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="custom-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mt-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject of your message"
                  className="custom-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-3 w-100 custom-button"
                style={{
                  backgroundColor: "#6b21a8",
                  borderRadius: "4px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
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
