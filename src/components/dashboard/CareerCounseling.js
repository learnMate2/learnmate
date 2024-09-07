import React from 'react';
import SideBar from './Sidebar'; // Adjust the path as needed
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import DashboardNavbar from './DashboardNavbar'
import "../../styles/styles.css"
import Footer from '../layout/Footer'
import image1 from '../../images/counselor_1.jpg'
import image2 from '../../images/counselor_2.jpg'
import image3 from '../../images/counselor_3.jpg'
import image4 from '../../images/counselor_4.jpg'
import image5 from '../../images/counselor_5.jpg'
import image6 from '../../images/counselor_6.jpg'
const CareerCounseling = () => {
  const data = [
    {
      img: image1,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    },
    {
      img: image2,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    },
    {
      img: image3,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    },
    {
      img: image4,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    },
    {
      img: image5,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    },
    {
      img:image6,
      name: "John Snow",
      profession: "software engineer",
      rating: '4.5'
    }
  ]
  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex' }}>

        <SideBar />
        <Container fluid >
          <h3 style={{padding:"30px 20px"}}>Here are some counselors profiles you can choose from</h3>
          <Row className="m-2">
            {data.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                <Card style={{border: "2px solid #6b21a8", padding: "20px 10px",marginTop:"30px" }} className='d-flex justify-content-center align-items-center career_card'>
                  <Card.Img variant="top" src={item.img} style={{width:"130px",height:"130px",borderRadius:"50%"}}/>
                  <Card.Body className='text-center'>
                    <Card.Title style={{fontSize:"29px"}}>
                      {item.name}
                    </Card.Title>
                    <Card.Text> 
                      {item.profession}
                    </Card.Text>
                    <Card.Text>
                      Rating {item.rating}
                    </Card.Text>
                    <Button style={{padding:"10px 20px",background:"#6b21a8",border:"none"}}>Contact me</Button>
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