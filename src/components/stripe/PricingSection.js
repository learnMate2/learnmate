import React from "react";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";
import StudentNavbar from "../Student/layout/StudentNavbar";
import StudentSideBar from "../Student/layout/StudentSidebar";
import { toast } from "react-toastify";
import custom_axios from "../connection/axios";

const PricingSection = () => {
  const handleSubmit=async(e)=>{
    const plan=e.target.value
    try {
        const responce = await custom_axios.post('/api/v1/stripe/createSession',{plan})
        window.location.href=`${responce.data.data.checkOutUrl}`
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
    }
  }

  return (
    <>
    <StudentNavbar/>
    <div style={{ display: 'flex', padding: "0 20px 0 70px" }}></div>
    <StudentSideBar/>
    <div className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Plans and Pricing</h2>
          <p className="text-muted">
            Choose the plan that best suits your needs
          </p>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Card className="border-light shadow">
              <Card.Body>
                <Card.Title className="fw-bold fs-4">Monthly</Card.Title>
                <div>
                  <span className="fs-1 fw-bold text-dark">Rs 1000</span>
                  <span className="fs-6 text-muted">/month</span>
                </div>
                <ul className="mt-4 list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <span>Unlimited Access To All Uploaded Documents</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <span>Explore Counsellors Profiles And Book Meeting With Them</span>
                  </li>
                </ul>
                <Button
                value='monthly'
                  onClick={handleSubmit}
                  variant="primary"
                  className="w-100 mt-4"
                >
                  Subscribe
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-light shadow">
              <Card.Body>
                <Card.Title className="fw-bold fs-4">Yearly</Card.Title>
                <div>
                  <span className="fs-1 fw-bold text-dark">Rs 7000</span>
                  <span className="fs-6 text-muted">/year</span>
                </div>
                <ul className="mt-4 list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <span>Unlimited Access To All Uploaded Documents</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <span>Explore Counsellors Profiles And Book Meeting With Them</span>
                  </li>
                </ul>
                <Button
                value='yearly'
                  onClick={handleSubmit}
                  variant="primary"
                  className="w-100 mt-4"
                >
                  Subscribe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default PricingSection;
