import React from 'react';
import { Container, Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    <div className="hero_section">
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row className="text-center" style={{ width: "700px" }}>
          <Col>
            <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
              LearnMate, where Students
            </h1>
            <h1>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Download Notes', 'Sell Notes', 'Career Counseling', 'Ask AI Asisstance']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={90}
                />
              </span>
            </h1>
            <h3 style={{ marginBottom: '20px', fontSize: '15px' }}>
              Find top-rated study notes from students taking the same courses as you.
            </h3>
            <InputGroup className="mb-3" style={{ maxWidth: '705px', margin: '0 auto' }}>
              <FormControl
                placeholder="Search Here..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                style={{ borderRadius: '50px', background: 'white', padding: '20px' }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroSection;