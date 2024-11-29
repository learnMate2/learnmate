import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import custom_axios from "../connection/axios";

export default function StripeSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await custom_axios.post(
          "/api/v1/stripe/verifyCheckout",
          { sessionId }
        );
      } catch (error) {}
    };
    fetch();
  }, [sessionId]);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card
        className="text-center p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <FaCheckCircle size={64} className="text-success mx-auto mb-3" />
        <Card.Title className="text-success">Payment Succeded</Card.Title>
        <Card.Text className="text-muted">
          Your payment was succeded Successfully , Go back to your dashboard!
        </Card.Text>
        <Link to="/dashboard">
          <Button variant="success" className="mt-3">
            Torna indietro
          </Button>
        </Link>
      </Card>
    </Container>
  );
}
