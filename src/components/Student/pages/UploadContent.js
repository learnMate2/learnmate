import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import custom_axios from "../../connection/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../styles/styles.css";
import StudentNavbar from '../layout/StudentNavbar';
import StudentSideBar from '../layout/StudentSidebar';
import { useNavigate } from 'react-router-dom';

const UploadContent = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('documentFile', selectedFile);
    formdata.append('title', title);
    formdata.append('course', course);
    formdata.append('price', price);
    formdata.append('documentType', documentType);

    try {
      const response = await custom_axios.post('/api/v1/student/upload', formdata);
      toast.success(response.data.message || 'Successfully uploaded document!');
      navigate("/student/youruploadcontent")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <StudentNavbar />
      <div style={{ display: "flex", padding: "0 20px 0 70px" }}>
        <StudentSideBar />
        <Container fluid style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          <div className="upload-content-container" style={{ padding: '2rem' }}>
            <Form onSubmit={handleSubmit} style={{ padding: '2rem', backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <h3 className="text-center mb-4 text-dark">Upload Your Document</h3>

              {/* Title Field */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '5px' }}
                />
              </Form.Group>

              {/* Course Field */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Course</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '5px' }}
                />
              </Form.Group>

              {/* Document Type Field */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Document Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '5px' }}
                >
                  <option>Select document type</option>
                  <option value="book">Book</option>
                  <option value="notes">Notes</option>
                </Form.Select>
              </Form.Group>

              {/* Price Field */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '5px' }}
                />
              </Form.Group>
             
              {/* File Upload */}
              <Form.Group className="mb-4">
                <Row className="upload-area" style={{ padding: '1.5rem', backgroundColor: '#fafafa', borderRadius: '8px', border: '2px dashed #d1d5db', textAlign: 'center' }}>
                  <Col>
                    <i className="bi bi-cloud-arrow-up-fill text-primary fs-2 mb-2"></i>
                    <p style={{ margin: 0 }}>Drag & Drop Files Here</p>
                    <Form.Control
                      type="file"
                      onChange={handleFileChange}
                      name="documentFile"
                      style={{
                        background: "#f3f4f6",
                        border: "none",
                        padding: "20px",
                        width: "100%",
                        cursor: "pointer",
                        textAlign: "center",
                        marginTop: "10px"
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>

              {/* Submit Button */}
              <div className="d-grid">
                <Button type="submit" className="py-3" style={{ background: "#6b21a8" }}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default UploadContent;
