import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../components/layout/Layout';

const Notfound = () => {
  return (
    <Layout>
      <div
        className="not-found-page"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundColor: '#f8f9fa',
          color: '#343a40',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '40px',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h1
                  style={{
                    fontSize: '100px',
                    fontWeight: 'bold',
                    color: '#dc3545',
                    marginBottom: '20px',
                  }}
                >
                  404
                </h1>
                <h3
                  style={{
                    fontSize: '24px',
                    marginBottom: '30px',
                    color: '#495057',
                  }}
                >
                  Oops! The page you're looking for doesn't exist.
                </h3>
                <Button
                  variant="primary"
                  size="lg"
                  href="/"
                  style={{
                    padding: '10px 30px',
                    fontSize: '16px',
                    backgroundColor: '#6b21a8',
                    borderRadius: '50px',
                    borderColor: '#6b21a8',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Back to Home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Notfound;
