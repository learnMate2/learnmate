import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "../../../styles/styles.css";
import custom_axios from "../../connection/axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import signupImage from "../../../images/signup.jpg"; 

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await custom_axios.post('/api/v1/auth/requestPasswordReset', {
        email,
      });
      toast.success(response.data.message || 'Password reset request sent!');
      navigate("/dashboard/home");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Layout>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container className="d-flex justify-content-center align-items-center bg-white shadow" style={{ maxWidth:"900px",borderRadius: "10px", overflow: "hidden", padding: 0 }}>
          
          {/* Left Section */}
          <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ width: "100%", maxWidth: "500px", height: "100%" }}>
            <div className="top-section">
              <h1 className="text-center" style={{ fontSize: "25px" }}>Forgot Password</h1>
              <p className="text-center" style={{ color: "#999999", fontSize: "14px" }}>
                Welcome Back! Please enter your email to reset your password.
              </p>
            </div>

            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label style={{ fontSize: "14px" }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: "14px" }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{
                  background: "#6b21a8",
                  color: "#fff",
                  padding: "12px",
                  fontSize: "14px",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>

          {/* Right Section */}
          <div
            className="d-none d-md-flex flex-column justify-content-center align-items-center text-white"
            style={{
              width: "100%",
              maxWidth: "450px",
              background: "#6b21a8",
              padding: "30px",
              height: "100%",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Reset Your Password</h2>
            <p style={{ textAlign: "center", color: "#E0E0E0", fontSize: "14px", marginBottom: "20px" }}>
              Forgot your password? No worries! Just enter your email, and we'll send you a link to reset your password.
            </p>
            <img
              src={signupImage} 
              alt="Reset Password"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default Forgot;
