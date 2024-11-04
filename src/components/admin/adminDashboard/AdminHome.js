import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import { FaDownload } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const AdminHome = () => {
    const data = [
        {
            icon: <FaRegUserCircle size={60} />,
            title: "70",
            detail: "Students Registered"
        },
        {
            icon: <FaDownload size={60}/>,
            title: "400",
            detail: "Notes Downloaded"
        },
        {
            icon: <CiMoneyCheck1 size={60}/>,
            title: "70$",
            detail: "Total Revenue"
        },
        {
            icon: <FaUpload />,
            title: "1700",
            detail: "Total Notes Uploaded"
        }

    ]
    return (
        <Container className="mt-4">
            <Row className="g-4">
                {data.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
                        <Card style={{ width: '22rem', textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            <Card.Title style={{ color: "#6b21a8" }}>
                                {item.icon}
                            </Card.Title>
                            <Card.Body>
                                <Card.Title style={{fontSize:"25px"}}>{item.title}</Card.Title>
                                <Card.Text style={{fontSize:"20px"}}>
                                    {item.detail}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AdminHome;
