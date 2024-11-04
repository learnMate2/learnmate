import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import profile from '../../../images/profile.png';
import '../../../styles/styles.css';
import logo2 from '../../../images/logo2.png';
import Dropdown from 'react-bootstrap/Dropdown';

export default function CounsellorNavbar() {
  return (
    <Navbar className="bg-body-tertiary" id="dashboardNav">
      <Container fluid style={{padding:"0 20px 0 80px"}}>
        <Navbar.Brand href="/dashboard/home">
          <img
            src={logo2}
            width="120px"
            className="d-inline-block align-top"
            alt="learnMate"
          />
        </Navbar.Brand>
        <Navbar.Toggle /> 
        <Navbar.Collapse className="justify-content-end">
          <Dropdown >
            <Dropdown.Toggle id="dropdown-basic" style={{ background: "#6b21a8", border: "none" }}>
              <Navbar.Brand href="#home">
                <img
                  src={profile}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Profile"
                />
              </Navbar.Brand>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ position:"absolute",right:"80px" }}>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
            </Dropdown.Menu>
            
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
