import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import custom_axios from '../../connection/axios';
import "../../../styles/styles.css";
import { toast } from 'react-toastify';

const CounselingHeroSection = () => {
  const [counsellor, setCounsellor] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getCounselor = async () => {
      try {
        const response = await custom_axios.get('api/v1/counsellor/allCounsellors?isVerified=true');
        setCounsellor(response.data.data);
      } catch (error) {
      toast.error(error.response.data);

      }
    };
    getCounselor();
  }, []);

  const handleContactClick = (counselorId) => {
    const isLoggedIn = !!localStorage.getItem('accessToken'); 
    if (isLoggedIn) {
      navigate(`/counselorprofile/${counselorId}`);
    } else {
      navigate('/signup'); 
    }
  };

  return (
    <>
      <div className='counselingHeroSection' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
        <div>
          <h1>Find Career Counselors</h1> 
          <h3>Browse Career Counseling Jobs Online</h3>
          <p>Guru helps you connect with quality Employers to find freelance jobs that match your skills.</p>
        </div>
      </div>
      <Container fluid>
        <h3 style={{ padding: "30px 20px" }}>Here are some counselors profiles you can choose from</h3>
        <Row className="m-2">
          {counsellor.map((item, index) => (
            <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px", marginTop: "30px" }} className='d-flex justify-content-center align-items-center career_card'>
                <Card.Img variant="top" src={item.profilePic} style={{ width: "130px", height: "130px", borderRadius: "50%" }} />
                <Card.Body className='text-center'>
                  <Card.Title style={{ fontSize: "29px" }}>
                    {item.fullName}
                  </Card.Title>
                  <Card.Text>
                    {item.email}
                  </Card.Text>
                  <Card.Text>
                    {item.profession}
                  </Card.Text>
                  <Button 
                    style={{ padding: "10px 20px", background: "#6b21a8", border: "none" }} 
                    onClick={() => handleContactClick(item._id)} 
                  >
                    Contact me
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CounselingHeroSection;
