import React from 'react';
import SideBar from './StudentSidebar'; 
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import DashboardNavbar from './StudentNavbar'
import "../../../styles/styles.css"
import Footer from '../../layout/Footer'
import  { useEffect,useState } from 'react';
import custom_axios from '../../connection/axios';
const CareerCounseling = () => {
 
  const [counsellor, setCounsellor] = useState([])

  useEffect(()=>{
    const getCounsolor=async()=>{
        const response = await custom_axios.get('api/v1/counsellor/allCounsellors');
        setCounsellor(response.data.data)
        console.log(response.data.data)
    }
    getCounsolor();
},[])
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex',padding:"0 20px 0 70px" }}>

        <SideBar />
        <Container fluid >
          <h3 style={{padding:"30px 20px"}}>Here are some counselors profiles you can choose from</h3>
          <Row className="m-2">
            {counsellor.map((item, index) => (
             
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                <Card style={{border: "2px solid #6b21a8", padding: "20px 10px",marginTop:"30px" }} className='d-flex justify-content-center align-items-center career_card'>
                  <Card.Img variant="top" src={item.profilePic} style={{width:"130px",height:"130px",borderRadius:"50%"}}/>
                  <Card.Body className='text-center'>
                    <Card.Title style={{fontSize:"29px"}}>
                      {item.fullName}
                    </Card.Title>
                    <Card.Text> 
                      {item.email}
                    </Card.Text>
                    <Card.Text> 
                      {item.profession}
                    </Card.Text>
                    <Card.Text>
                      Rating 
                    </Card.Text>
                    <Button style={{padding:"10px 20px",background:"#6b21a8",border:"none"}} href={`/counselorprofile/${item._id}`}>Contact me</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
            <Footer/>
    </>
  );
};

export default CareerCounseling;