import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col ,Row} from 'react-bootstrap';
import custom_axios from "../../../components/connection/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UploadContent = () => {

  const [title,setTitle] =useState("");
  const [course,setCourse] =useState("");
  const [price,setPrice] =useState("");
  const [documentType,setDocumentType] =useState("");
  const [selectedFile,setSelectedFile] =useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Capture the selected file
  };
 const handleSubmit = async(e) =>{
  e.preventDefault();

  const formdata = new FormData();
  formdata.append('documentFile',selectedFile);
  formdata.append('title',title);
  formdata.append('course',course);
  formdata.append('price',price);
  formdata.append('documentType',documentType);
  try {
    const response = await custom_axios.post('/api/v1/student/upload',formdata );
    console.log(response.data.message);

    // Display a success toast
    toast.success(response.data.message || 'Successfully upload document!');
    console.log()
  } catch (error) {
    toast.error(error.response.data.message);
  }
 }
  return (
    <div className='p-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Course</Form.Label>
          <Form.Control type="text" placeholder="Enter Course" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
        </Form.Group>
        <Form.Select aria-label="Default select example " value={documentType} onChange={(e)=>{setDocumentType(e.target.value)}}>
          <option>Select document type</option>
          <option value="book">Book</option>
          <option value="notes">Notes</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Prize" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className='upload-area mt-3'>         
           <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="upload-text mb-3">Drag & Drop Files Here</div>
            <Form.Control  type="file"
                style={{ background: "#6b21a8", border: "none", padding: "10px 20px", width: "300px", textAlign: "center" }}
                onChange={handleFileChange} // Handle file selection
                name="documentFile"/>
          </Col>
          </Row>

        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadContent;
