import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/styles.css";
import signupImage from "../../images/signup.jpg";
import custom_axios from "../../components/connection/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await custom_axios.post('/api/v1/student/register', {
        fullName,
        email,
        universityName,
        password,
        profilePic
      });
      toast.success(response.data.message || 'Successfully registered!');
      navigate("/login");
    } catch (error) {

      toast.error(error.response.data.message);
    }
  };

  return (
    <div style={{ margin: "50px 0" }}>
      <Container className="signup d-flex justify-content-center align-items-center bg-white" style={{ width: "1000px", height: "900px", padding: 0 }}>
        <div className="d-flex justify-content-center align-items-center text-dark" style={{ width: "500px", height: "900px" }}>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <div className="" style={{ borderRadius: '8px', width: "400px" }}>
                <div style={{ paddingBottom: '20px' }}>
                  <Link to="/counsellorsignup" style={{color:"#6b21a8"}}>Register as a Counsellor</Link>
                  <h1 className="text-center" style={{ fontSize: "43px" }}>Create Your Account</h1>
                  <p className="text-center" style={{ color: "#999999", size: "15px", }}>Welcome Back! Please Enter your Details</p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFullName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" required className='form_control' value={fullName} onChange={(e) => { setFullName(e.target.value); }} />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" required className='form_control' value={email} onChange={(e) => { setEmail(e.target.value); }} />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required className='form_control' value={password} onChange={(e) => { setPassword(e.target.value); }} />
                  </Form.Group>
                  <Form.Group controlId="formUniversityName" className="mb-3">
                    <Form.Label>University Name</Form.Label>
                    <Form.Control type="text" placeholder="University Name" required className='form_control' value={universityName} onChange={(e) => { setUniversityName(e.target.value); }} />
                  </Form.Group>
                  <Form.Group controlId="formUniversityName" className="mb-3">
                    <Form.Label>Upload Profile Picture</Form.Label>
                    <Form.Control type="file" placeholder="University Name" required className='form_control' value={profilePic} onChange={(e) => { setProfilePic(e.target.value) }} />
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
                    SIGN UP
                  </Button>
                  <div>
                    <p>Already have an account? <Link to="/login" className='already_account'>Click Here</Link></p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ width: "500px", background: "#6b21a8", height: "900px", margin: "30px 0" }}>
          <div className="signup_text text-white" style={{ margin: "79px 10px 20px 10px", textAlign: "center" }}>
            <h1 style={{ padding: "20px", size: "46.62px" }}>Welcome to LearnMate Join us to help Students all Around the world!</h1>
            <p style={{ color: "#E0E0E0", textAlign: "center", padding: "5px 20px 20px 20px", fontFamily: '"PT Sans Narrow", sans-serif' }}>
              Learnmate is the ultimate platform designed for students by students. Whether you're looking to buy or sell notes, or seek career guidance, Learnmate has got you covered!
            </p>
            <img src={signupImage} alt="sign up" style={{ width: "450px", borderRadius: "10px" }} />
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
