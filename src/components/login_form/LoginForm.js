import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/styles.css";
import signupImage from "../../images/signup.jpg";
import custom_axios from "../../components/connection/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await custom_axios.post('/api/v1/student/login', {
        email,
        password,
      });
      toast.success(response.data.message || 'Successfully logged in!');
      navigate("/student/home");
      
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container className="d-flex bg-white shadow" style={{ maxWidth: "900px", height: "80vh", borderRadius: "10px", overflow: "hidden", padding: 0 }}>
        {/* Left Section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-dark" style={{ width: "100%", padding: "20px" }}>
          <h1 className="text-center" style={{ fontSize: "36px" }}>Login</h1>
          <p className="text-center" style={{ color: "#999999", fontSize: "14px" }}>
            Welcome Back! Please enter your details.
          </p>
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Link to="/forgot-password" className="text-decoration-none" style={{ color: "#6b21a8" }}>
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-100"
              style={{ background: "#6b21a8", border: "none", color: "#fff", padding: "10px" }}
            >
              Login
            </Button>
            <div className="text-center mt-3">
              <p>
                Create a new account?
                <Link to="/signup" className="text-decoration-none" style={{ color: "#6b21a8" }}>
                  Click Here
                </Link>
              </p>
            </div>
          </Form>
        </div>
        {/* Right Section */}
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
          <h2 className="text-center mb-4">Welcome to LearnMate!</h2>
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
    </div>
  );
};

export default LoginForm;
