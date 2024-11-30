import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import custom_axios from '../connection/axios';
import { toast } from 'react-toastify';

const DocumentModal = ({ show, onHide, documentId }) => {
  const [value, setValue] = useState("");

  const submitRating = async (e) => {
    e.preventDefault();
    try {
      const response = await custom_axios.patch(`/api/v1/documents/review/${documentId}`, {
        value,
      });
      toast.success("Rating submitted successfully!");     
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Give Rating for the Document</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitRating}>
          <Form.Group className="mb-4">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ padding: '0.8rem', borderRadius: '5px' }}
            >
              <option>Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            disabled={!value} 
            type='submit'
            style={{backgroundColor:"#6b21a8"}}
          >
            Submit Rating
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DocumentModal;
  