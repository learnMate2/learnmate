import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/styles.css";
import signupImage from "../../images/signup.jpg";
import custom_axios from "../../components/connection/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
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
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container className="d-flex flex-column flex-md-row bg-white shadow" style={{ maxWidth: "900px", borderRadius: "10px", overflow: "hidden", padding: 0 }}>
        {/* Left Section */}
        <div className="d-flex flex-column justify-content-between align-items-center text-dark" style={{ width: "100%", padding: "20px 40px", height: "100%" }}>
          <div className="top-section" >
            <h1 className="text-center" style={{ fontSize: "23px" }}>Create Your Account</h1>
            <p className="text-center" style={{ color: "#999999", fontSize: "11px" }}>
              Welcome! Please enter your details.
            </p>
          </div>
          
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Form.Group controlId="formFullName" className="mb-2">
              <Form.Label style={{ fontSize: "14px" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ fontSize: "14px" }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-2">
              <Form.Label style={{ fontSize: "14px" }}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ fontSize: "14px" }}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-2">
              <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontSize: "14px" }}
              />
            </Form.Group>
            <Form.Group controlId="formUniversityName" className="mb-2">
              <Form.Label style={{ fontSize: "14px" }}>University Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="University Name"
                required
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
                style={{ fontSize: "14px" }}
              />
            </Form.Group>
            <Form.Group controlId="formProfilePic" className="mb-2">
              <Form.Label style={{ fontSize: "14px" }}>Upload Profile Picture</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{ background: "#6b21a8", border: "none", color: "#fff", padding: "8px", fontSize: "14px" }}
            >
              SIGN UP
            </Button>
            <div className="text-center mt-3">
              <p style={{ fontSize: "14px" }}>
                Already have an account?
                <Link to="/login" className="text-decoration-none" style={{ color: "#6b21a8", fontSize: "14px" }}>
                  Click Here
                </Link>
              </p>
            </div>
          </Form>
        </div>

        {/* Right Section (hidden on small devices) */}
        <div
          className="d-none d-md-flex flex-column justify-content-center align-items-center text-white"
          style={{
            width: "100%",
            background: "#6b21a8",
            padding: "20px",
            margin: 0,
            height: "100%",
          }}
        >
          <h2 className="text-center mb-4" style={{ fontSize: "24px" }}>Welcome to LearnMate!</h2>
          <p className="text-center mb-4" style={{ color: "#E0E0E0", fontSize: "14px" }}>
            Learnmate is the ultimate platform designed for students by students. Whether you're
            looking to buy or sell notes, or seek career guidance, Learnmate has got you covered!
          </p>
          <img
            src={signupImage}
            alt="Sign up"
            style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }}
          />
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
