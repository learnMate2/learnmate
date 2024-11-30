import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import profile from '../../../images/profile.png';
import '../../../styles/styles.css';
import logo2 from '../../../images/logo2.png';
import Dropdown from 'react-bootstrap/Dropdown';
import custom_axios from '../../connection/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function CounsellorNavbar() {
const navigate = useNavigate()
    const getLogout = async() =>{
      try {
        const response = await custom_axios.get('/api/v1/counsellor/logout')
        toast.success(response.data.message || "successfully logout")
        navigate('/counsellor/login')
      } catch (error) {
       toast.error(error.response.data || "error occur")
      }
    }
 
  
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
            <Dropdown.Menu style={{ position:"absolute",left:"-58px",top:"46px" }}>
              <Dropdown.Item onClick={getLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
