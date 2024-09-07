import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../../styles/styles.css';
import logo2 from '../../images/logo2.png'

function HomeNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#6b21a8',padding:"20px 30px" }}>
      <Container fluid stye={{margin:'0 60px'}}>
      
      <Navbar.Brand href="/home">
            <img
              src={logo2}
              width="120px"
              className="d-inline-block align-top"
              alt="learnMate"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: '#fff' }}>About</Nav.Link>
            <Nav.Link href="/contact" style={{ color: '#fff' }}>Contact</Nav.Link>
            <Nav.Link href="/hire" style={{ color: '#fff'}} id='Counselor'>Looking for Counselor?</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" href="/login" className="me-2 " style={{ padding: "8px 22px",borderRadius: "36px"}}>Login</Button>
            <Button variant="light" href="/signup" className="me-2" style={{ padding: "8px 22px",borderRadius: "36px"}}>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
