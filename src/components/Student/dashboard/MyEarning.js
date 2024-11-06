import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SideBar from './Sidebar'; 
import DashboardNavbar from './DashboardNavbar';
import { LuDollarSign } from 'react-icons/lu';
import "../../../styles/styles.css"

const MyEarning = () => {
  const data = [
    {
      earning: "20",
      title: "Current Balance"
    },
    {
      earning: "20",
      title: "Today's Earning"
    },
    {
      earning: "20",
      title: "Last Earning"
    }
  ];

  return (
    <>
      <DashboardNavbar />
      <div style={{ display: 'flex' ,padding:"0 20px 0 70px"}}>
        <SideBar />
        <Container fluid>
          <h1 style={{ padding: "32px 20px" }}>Your Earnings</h1>
          <Row className="m-2">
            {data.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                <Card style={{ border: "2px solid #6b21a8", padding: "20px 10px" }}>
                  <Card.Body>
                    <Card.Title style={{ display: "flex", alignItems: "center" }}>
                      <LuDollarSign />
                      {item.earning}
                    </Card.Title>
                    <Card.Text>
                      {item.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="m-3">
          <Card style={{ width: '100%', border: "2px solid #6b21a8", padding: "20px 10px" }}>
            <Card.Body>
              <Card.Title style={{ display: "flex", alignItems: "center" }}>
                <LuDollarSign />
                50
              </Card.Title>
              <Card.Text>
                Total Earning
              </Card.Text>
              <Button style={{background:"#6b21a8",border:"none"}}>Withdraw</Button>
            </Card.Body>
          </Card>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyEarning;
