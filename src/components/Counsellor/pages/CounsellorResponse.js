import React from 'react';
import { useParams } from 'react-router-dom';
import CounsellorNavbar from '../layout/CounsellorNavbar';
import CounsellorSideBar from '../layout/CounsellorSidebar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import custom_axios from '../../connection/axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const CounsellorResponse = () => {
    const { id } = useParams();
    const [counsellorResponse,setCounsellorResponse]=useState("")
    const handleAcceptMeeting = async() =>{
        try {
            const response  = await custom_axios.put(`/api/v1/counsellor/acceptRequest/${id}`)
      toast.success(response.data.message || 'Successfully Request Accepted!');

        } catch (error) {
            toast.error(error,"occur occur")
        } 
    }
    const handleResponseSubmit = async() =>{
        try {
            const response =await custom_axios.put(`/api/v1/counsellor/respondToMeeting/${id}`)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <CounsellorNavbar />
            <div style={{ display: 'flex', padding: "0 20px 0 70px" }}>
                <CounsellorSideBar />
                <Container>
                    <Row className="mt-4">
                        <Col xs={12}>
                            <Button 
                                style={{ backgroundColor: '#6b21a8', border: 'none', padding: '10px 20px', marginBottom: '20px' }} onClick={handleAcceptMeeting}
                            >
                                Accept Meeting
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Form onSubmit={handleResponseSubmit}>
                                <Form.Group controlId="formResponse">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Your Response" 
                                        style={{ border: '2px solid #6b21a8', marginBottom: '15px' }}
                                        onChange={(e)=>setCounsellorResponse(e.target.value)}
                                        value={counsellorResponse}
                                    />
                                </Form.Group>
                                <Button 
                                    type="submit" 
                                    style={{ backgroundColor: '#6b21a8', border: 'none', padding: '10px 20px' }}
                                >
                                    Send Response
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CounsellorResponse;
