import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaChevronLeft, FaChevronRight, FaHome, FaQuestionCircle, FaFolder, FaBook, FaBookOpen } from 'react-icons/fa';
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import '../../styles/styles.css';
import sidebarBox from '../../images/sidebar_box.png';
import Profile2 from '../../images/profile_2.png';

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(!open);

  const items = [
    { text: 'Home', icon: <FaHome />, link: '/dashboard/home' },
    { text: 'Books', icon: <FaBookOpen />, link: '/dashboard/books' },
    { text: 'Courses', icon: <FaFolder />, link: '/dashboard/my-course' },
    { text: 'My Earning', icon: <FaCircleDollarToSlot />, link: '/dashboard/earning' },
    { text: 'Request a career counseling', icon: <GrUserManager />, link: '/dashboard/careercounseling' },
    { text: 'Ask AI', icon: <FaQuestionCircle />, link: '/dashboard/ask-questions' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Navbar style={{ borderRight: "2px solid #6b21a8",backgroundColor: 'white' }} variant="light" expand="lg" className="flex-column">
        <Container fluid>
          <Button variant="outline-dark" onClick={handleToggle} style={{ marginBottom: '1rem' }}>
            {open ? <FaChevronLeft /> : <FaChevronRight />}
          </Button>
        </Container>
        <Nav className="flex-column mt-3" style={{ width: open ? '300px' : 'auto', fontSize: "20px" }}>
          {open && (
            <div style={{ position: "relative", marginLeft: "10px", marginBottom: "10px" }}>
              <img src={sidebarBox} alt="sidebar Profile" style={{ width: "280px" }} />
              <div style={{ position: "absolute", top: "10px", fontSize: "20px", display: "flex" }}>
                <img src={Profile2} alt="profile" style={{ height: "60px", width: "60px", margin: "0 10px" }} />
                <div className="pt-2">
                  <h4 style={{ fontSize: "20px", textAlign: "center" }}>Ahsan Amjad Awan <br />
                    <span style={{ fontSize: "15px", color: "#6b21a8" }}>University of the Punjab</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
          {items.map((item, index) => (
            <LinkContainer key={index} to={item.link}>
              <Nav.Link className="d-flex align-items-center text-dark">
                <span style={{fontSize:"30px"}}>
                {item.icon}
                </span>
                {open && <span style={{ marginLeft: '10px',paddingTop:"8px" }}>{item.text}</span>}
              </Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};

export default SideBar;
