// UploadArea.js
import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "../../../styles/styles.css"
const UploadArea = () => {
  return (
    <Container fluid className="upload-area mt-3">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
        <a style={{background:"#6b21a8",padding:"15px 35px",textDecoration:"none",color:"#fff",borderRadius:"10px"}} href="/dashboard/uploadcontent">Upload Content</a>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadArea;
