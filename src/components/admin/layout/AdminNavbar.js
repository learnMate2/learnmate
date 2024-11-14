import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import profile from '../../../images/profile.png'
import '../../../styles/styles.css'
import logo2 from '../../../images/logo2.png'
export default function AdminNavbar() {
  return (

    <Navbar className="bg-body-tertiary" id="dashboardNav">
      <Container fluid>
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
          <Navbar.Brand href="#home">
            <img
              src={profile}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Profile"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
