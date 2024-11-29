import React, { useState, useEffect } from 'react';
import AdminNavbar from '../layout/AdminNavbar';
import AdminSideBar from '../layout/AdminSidebar';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import custom_axios from '../../connection/axios';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

const AdminManageStudent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await custom_axios.get('/api/v1/admin/allStudents');
        setStudents(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getStudents();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex", padding: "0 20px 0 70px" }}>
        <AdminSideBar />
        <Container fluid>
          <h2 className="text-center my-4" style={{ color: "#6b21a8" }}>Manage Students</h2>
          <Row className="mt-4">
            {loading ? (
              <Loader />
            ) : students.length > 0 ? (
              students.map((student) => (
                <Col xs={12} sm={6} md={4} lg={3} key={student._id} className="mb-4 d-flex justify-content-center">
                  <Card
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      width: "100%",
                      maxWidth: "300px",
                      minHeight: "350px",
                      border: "none",
                    }}
                  >
                    <Card.Body>
                      <Card.Title><strong>Full Name:</strong> {student.fullName}</Card.Title>
                      <Card.Text>
                        <strong>Email:</strong> {student.email}
                      </Card.Text>
                      <Card.Text>
                        <strong>Role:</strong> {student.role}
                      </Card.Text>
                      <Card.Text>
                        <strong>Created:</strong> {new Date(student.createdAt).toLocaleDateString()}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p style={{ textAlign: "center", fontSize: "20px", paddingTop: "20px" }}>
                No students available
              </p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AdminManageStudent;
