import React from 'react';
import AdminNavbar from '../layout/AdminNavbar';
import AdminSideBar from '../layout/AdminSidebar';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminSetting = () => {
    const navigate = useNavigate()
  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex", background: "#f8f9fa", minHeight: "100vh",padding: "0 20px 0 70px"  }}>
        <AdminSideBar />
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            margin: "30px 0",
            padding: "30px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            flex: 1,
            maxWidth: "1000px",
          }}
        >
          <h3
            style={{
              color: "#6b21a8",
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Admin Settings
          </h3>

          <p style={{ color: "#6b21a8", fontSize: "16px", textAlign: "center", marginBottom: "30px" }}>
            Manage administrative settings and register a new admin to help oversee the platform.
          </p>

          <Button
            style={{
              backgroundColor: "#6b21a8",
              color: "#fff",
              padding: "12px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => navigate('/admin/register')}
          >
            Register New Admin
          </Button>
        </Container>
      </div>
    </>
  );
};

export default AdminSetting;
