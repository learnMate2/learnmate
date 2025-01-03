import {  FaFolder, FaBookOpen } from 'react-icons/fa';
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaChevronLeft, FaChevronRight, FaHome} from 'react-icons/fa';
import '../../../styles/styles.css';
import sidebarBox from '../../../images/sidebar_box.png';
import custom_axios from "../../connection/axios";
import { toast } from 'react-toastify';

const AdminSideBar = () => {
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await custom_axios.get("/api/v1/student/currentStudentProfile");
        setProfile(response.data.data);
      } catch (error) {
        toast.error(error.response.data)
      }
    };
    getProfileData();
  }, []);

  const handleToggle = () => setOpen(!open);

  const items = [
    { text: 'Home', icon: <FaHome />, link: '/admin/home' },
    { text: 'Manage Students', icon: <FaBookOpen />, link: '/admin/manage-student' },
    { text: 'Counsellor Requests', icon: <FaFolder />, link: '/admin/counsellorsrequests' },
    { text: 'All Counsellors', icon: <FaFolder />, link: '/admin/allcounsellors' },
    { text: 'Total Earning', icon: <FaCircleDollarToSlot />, link: '/dashboard/earning' },
    { text: 'Setting', icon: <GrUserManager />, link: '/admin/setting' },
  ];
  return (
    <div>
      {/* Overlay effect */}
      <div className={`sidebar-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)}></div>

      <Navbar
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100%',
          backgroundColor: '#6b21a8',
          width: open ? '300px' : '60px',
          zIndex: 1000,
          transition: 'width 0.3s ease',
          borderRight: '2px solid #6b21a8',
        }}
        variant="light"
        className="flex-column"
      >
        <Button
          variant="outline-light"
          onClick={handleToggle}
          style={{
            position: 'absolute',
            top: '20px',
            right: '-20px',
            zIndex: 1100,
            borderRadius: '50%',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {open ? <FaChevronLeft size={18} /> : <FaChevronRight size={18} />}
        </Button>

        <Nav className="flex-column mt-5" style={{ fontSize: "20px" }}>
        {open && profile && (
            <div style={{ position: "relative", marginLeft: "10px", marginBottom: "10px" }}>
              <img src={sidebarBox} alt="sidebar Profile" style={{ width: "280px" }} />
              <div style={{ position: "absolute", top: "10px", fontSize: "20px", display: "flex" }}>
                <img src={profile.profilePic} alt="profile" style={{ height: "60px", width: "60px", margin: "0 10px" }} />
                <div className="pt-2">
                  <h4 style={{ fontSize: "20px", textAlign: "center" }}>{profile.fullName} <br />
                    <span style={{ fontSize: "15px", color: "#6b21a8" }}>{profile.universityName}</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
          {open && profile && (
            <div style={{ position: "relative", marginLeft: "10px", marginBottom: "10px" }}>
              <img src={sidebarBox} alt="sidebar Profile" style={{ width: "280px" }} />
              <div style={{ position: "absolute", top: "10px", fontSize: "20px", display: "flex" }}>
                <img src={profile.profilePic} alt="profile" style={{ height: "60px", width: "60px", margin: "0 10px" }} />
                <div className="pt-2">
                  <h4 style={{ fontSize: "20px", textAlign: "center" }}>{profile.fullName} <br />
                    <span style={{ fontSize: "15px", color: "#6b21a8" }}>{profile.universityName}</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
          {items.map((item, index) => (
            <LinkContainer key={index} to={item.link}>
              <Nav.Link className="d-flex align-items-center text-dark">
                <span style={{ fontSize: "30px",color:"#fff"  }}>
                  {item.icon}
                </span>
                {open && <span style={{ marginLeft: '10px', paddingTop: "8px",color:"#fff"  }}>{item.text}</span>}
              </Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar>

      {/* Sidebar Overlay */}
      <style>{`
        .sidebar-overlay {
          display: ${open ? 'block' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999; 
        }
        .sidebar-overlay.open {
          pointer-events: auto; 
        }
        .main-content {
          margin-left: ${open ? '300px' : '60px'};
          transition: margin-left 0.3s ease; 
        }
      `}</style>
    </div>
  );
};

export default AdminSideBar;
