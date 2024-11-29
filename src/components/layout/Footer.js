
import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube,FaLongArrowAltRight } from 'react-icons/fa';
import '../../styles/styles.css';
const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <Container fluid className="footer" style={{ backgroundColor: '#6b21a8', padding: "0 20px 0 70px" }}>
      <Row className="py-5">
        <Col xs={12} md={3} className="text-white">
          <h3>LearnMate</h3>
          <p>Learnmate is a platform that enables students to buy and sell academic notes securely. Students can add their favorite courses and books, ask AI-driven career questions, and schedule meetings with personal career counselors.</p>
        </Col>
        <Col xs={12} md={3} className="text-white">
          <h3>Quick Links</h3>
          <div className="quick_link">
            <Link to='/' className='quick_links'><FaLongArrowAltRight style={{marginRight:"5px"}}/> Home</Link>
            <Link to='/about' className='quick_links'><FaLongArrowAltRight style={{marginRight:"5px"}}/> About</Link>
            <Link to='/contact' className='quick_links'><FaLongArrowAltRight style={{marginRight:"5px"}}/> Contact</Link>
            <Link to='#' className='quick_links'><FaLongArrowAltRight style={{marginRight:"5px"}}/> privacy policy</Link>
            <Link to='#' className='quick_links'><FaLongArrowAltRight style={{marginRight:"5px"}}/> Terms & Conditions</Link>
          </div>
        </Col>
        <Col xs={12} md={3} className="text-white">
          <h3>Send a newsletter</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="email"
              placeholder="Newsletter"
              className="mb-3"
              style={{ borderRadius: '50px', background: 'white',padding:"10px 20px",
                margin: "30px 0"}}
            />
            <Button type="submit" className="w-100" style={{ background: '#fff', color: '#000', borderRadius: '50px',padding:"10px 20px",margin: "10px 0" }}>
              Send
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={3} className="text-white">
          <h3>Connect With Us</h3>
          <div className="social_icons">
            <Link to="#" className="footer_social_links"><FaFacebookF /></Link>
            <Link to="#" className="footer_social_links"><FaLinkedinIn /></Link>
            <Link to="#" className="footer_social_links"><FaInstagram /></Link>
            <Link to="#" className="footer_social_links"><FaTwitter /></Link>
            <Link to="#" className="footer_social_links"><FaYoutube /></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
