import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaUpload, FaDownload } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import custom_axios from '../../connection/axios';
import AdminNavbar from '../layout/AdminNavbar';
import AdminSideBar from '../layout/AdminSidebar';
import { toast } from 'react-toastify';

const AdminHome = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getSummary = async () => {
            try {
                const response = await custom_axios.get('/api/v1/admin/getSummary');
                setData(response.data.data); 
            } catch (error) {
      toast.error(error.response.data.message);

            }
        };
       
        getSummary();
    }, []);

    // Check if data is loaded
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <AdminNavbar/>
        <div style={{display:"flex",padding: "0 20px 0 70px" }}>
            <AdminSideBar/>
            <Container className="mt-4">
            <Row className="g-4">
                <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
                    <Card style={{ width: '22rem', textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Title style={{ color: "#6b21a8" }}>
                            <FaRegUserCircle size={60} />
                        </Card.Title>
                        <Card.Body>
                            <Card.Title style={{fontSize:"25px",color:"black"}}>{data.studentsCount}</Card.Title>
                            <Card.Text style={{fontSize:"20px"}}>Students Registered</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
                    <Card style={{ width: '22rem', textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Title style={{ color: "#6b21a8" }}>
                            <FaDownload size={60} />
                        </Card.Title>
                        <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}>{data.documentsCount}</Card.Title>
                            <Card.Text style={{fontSize:"20px"}}>Documents</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
                    <Card style={{ width: '22rem', textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Title style={{ color: "#6b21a8" }}>
                            <CiMoneyCheck1 size={60} />
                        </Card.Title>
                        <Card.Body>
                            <Card.Text style={{fontSize:"25px"}}>{data.counsellorsCount}</Card.Text>
                            <Card.Text style={{fontSize:"20px"}}>Total Counsellors</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
};

export default AdminHome;
