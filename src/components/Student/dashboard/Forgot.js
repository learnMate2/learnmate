import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../styles/styles.css";
import signupImage from "../../../images/signup.jpg"
import custom_axios from "../../../components/connection/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Forgot = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await custom_axios.post('/api/v1/auth/requestPasswordReset', {
        email,
      });
      console.log(response.data.message);


      toast.success(response.data.message || 'Successfully login!');
      navigate("/dashboard/home")

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div style={{ margin: "50px 0" }}>
      <Container className="signup d-flex justify-content-center align-items-center bg-white" style={{ width: "1000px", height: "900px", padding: 0 }}>
        <div className="d-flex justify-content-center align-items-center text-dark" style={{ width: "500px", height: "900px" }}>
          <Row >
            <Col xs={12} md={6} lg={4}>
              <div className="" style={{ borderRadius: '8px', width: "400px" }}>
                <div style={{ paddingBottom: '50px' }}>
                  <h1 className="text-center" style={{ fontSize: "43px" }}>Forgot Password</h1>
                  <p className="text-center" style={{ color: "#999999", size: "15px", }}>Welcome Back! Please Enter your Details</p>
                </div>
                <Form onSubmit={handleSubmit} >

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" required className='form_control' value={email} onChange={(e) => { setEmail(e.target.value); }} />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="light"
                    className="w-100 mb-3"
                    style={{
                      background: "#6b21a8",
                      color: "#fff",
                      padding: "10px 0",
                      marginTop: "20px",
                      '&:hover': { background: '#fff', color: "#6b21a8" }
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>

        </div>
        <div style={{ width: "500px", background: "#6b21a8", height: "900px", margin: "30px 0" }}>
          <div className="signup_text text-white" style={{ margin: "79px 10px 20px 10px", textAlign: "center" }}>
            <h1 style={{ padding: "20px", size: "46.62px" }}>Welcome to LearnMate Join us to help Student all Around the world !</h1>
            <p style={{ color: "#E0E0E0", textAlign: "center", padding: "5px 20px 20px 20px", fontfamily: '"PT Sans Narrow", sans-serif' }}>Learnmate is the ultimate platform designed for students by students. Whether you're looking to buy or sell notes, or seek career guidance, Learnmate has got you covered!</p>
            <img src={signupImage} alt="sign up" style={{ width: "450px", borderRadius: "10px" }} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Forgot;
