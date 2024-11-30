import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const AboutContent = () => {
  return (
      <div
        style={{
          backgroundColor: '#f8f9fa',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card
                className="p-4"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <h2 className="text-center mb-4" style={{ color: '#6b21a8' }}>
                  Welcome to Student Pay Student!
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#495057' }}>
                  At Student Pay Student, we believe in empowering students through knowledge sharing and collaboration. Our platform is designed to create a community where IT students can seamlessly exchange academic resources, earn money, and enhance their learning experience.
                </p>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  Our Mission
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>Access Quality Notes:</strong> Download high-quality notes and study materials curated by fellow students.</li>
                  <li><strong>Share Knowledge:</strong> Upload and share your own notes to earn money while helping others succeed.</li>
                  <li><strong>Hire Academic Assistance:</strong> Hire verified student freelancers for writing notes, assignments, and providing lectures.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  Why Choose Us?
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  <li><strong>Student-Centric:</strong> Our platform is designed by students, for students. We understand the challenges and needs of student life.</li>
                  <li><strong>Secure Transactions:</strong> We ensure all transactions are secure and reliable, providing a safe marketplace for buying and selling academic resources.</li>
                  <li><strong>Verified Community:</strong> We verify all freelancers through student cards and university certificates, ensuring that only genuine students participate.</li>
                  <li><strong>Continuous Improvement:</strong> We are committed to continuously improving our platform based on user feedback and the latest technological advancements.</li>
                </ul>

                <h4 className="mt-4" style={{ color: '#6b21a8' }}>
                  Join Us
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#495057' }}>
                  Become a part of our growing community and start benefiting from the collective knowledge of students around the world. Whether you’re looking to share your notes, find quality study materials, or hire academic assistance, Student Pay Student is here to support you every step of the way.
                </p>

                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    href="/signup"
                    style={{
                      padding: '10px 30px',
                      fontSize: '16px',
                      backgroundColor: '#6b21a8',
                      borderRadius: '50px',
                      borderColor: '#6b21a8',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Join Us Now
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default AboutContent;
