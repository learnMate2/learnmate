import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import custom_axios from "../../../../components/connection/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../../styles/styles.css"
const UploadContent = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Capture the selected file
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
      console.log(response.data.message);
      toast.success(response.data.message || 'Successfully uploaded document!');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='upload-content-container p-5'>
      <Form onSubmit={handleSubmit} className="upload-form p-4 bg-white shadow rounded">
        <h3 className="text-center mb-4 text-dark">Upload Your Document</h3>
        
        {/* Title Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className="form-control-custom"
          />
        </Form.Group>

        {/* Course Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Course</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => { setCourse(e.target.value) }}
            className="form-control-custom"
          />
        </Form.Group>

        {/* Document Type Field */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Document Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={documentType}
            onChange={(e) => { setDocumentType(e.target.value) }}
            className="form-control-custom"
          >
            <option>Select document type</option>
            <option value="book">Book</option>
            <option value="notes">Notes</option>
          </Form.Select>
        </Form.Group>

        {/* Price Field */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
            className="form-control-custom"
          />
        </Form.Group>

        {/* File Upload */}
        <Form.Group className="mb-4">
          <Row className="upload-area mt-3">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <div className="upload-text mb-3">
                <i className="bi bi-cloud-arrow-up-fill text-primary fs-2"></i>
                <p className="mb-0">Drag & Drop Files Here</p>
              </div>
              <Form.Control
                type="file"
                style={{
                  background: "#f3f4f6",
                  border: "2px dashed #d1d5db",
                  padding: "20px",
                  width: "300px",
                  textAlign: "center",
                  cursor: "pointer"
                }}
                onChange={handleFileChange}
                name="documentFile"
              />
            </Col>
          </Row>
        </Form.Group>

        {/* Submit Button */}
        <div className="d-grid">
          <Button variant="primary" type="submit" className="submit-button py-3">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadContent;
