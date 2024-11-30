import React, { useEffect, useState } from 'react';
import AdminNavbar from '../layout/AdminNavbar';
import AdminSideBar from '../layout/AdminSidebar';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import custom_axios from '../../connection/axios';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

const AdminCounsellor = () => {
  const [counsellors, setCounsellors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCounsellors = async () => {
      try {
        const response = await custom_axios.get('/api/v1/counsellor/allCounsellors?isVerified=false');
        setCounsellors(response.data.data); 
      } catch (error) {
      toast.error(error.response.data);
      }finally{
        setLoading(false)
      }
    };
    getCounsellors();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex",padding: "0 20px 0 70px"  }}>
        <AdminSideBar />
        <Container fluid>
          <Row className="mt-4">
            {loading ? (<Loader/>):
            counsellors.length > 0 ? (
            counsellors.map((counsellor) => (
              <Col xs={12} sm={6} md={4} lg={3} key={counsellor._id} className="mb-4">
                <Card style={{ textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',width:"300px",border:"none" }}>
                  <Card.Img
                    variant="top"
                    src={counsellor.profilePic}
                    alt={counsellor.fullName}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{counsellor.fullName}</Card.Title>
                    <Card.Text><strong>Profession:</strong> {counsellor.profession}</Card.Text>
                    <Card.Text><strong>Email:</strong> {counsellor.email}</Card.Text>
                    <Card.Text><strong>Role:</strong> {counsellor.role}</Card.Text>
                  </Card.Body>
                <Button style={{background:"#6b21a8",border:"none"}} href={`/admin/approve-counsellor/${counsellor._id}`}>Approve</Button>
                </Card>
              </Col>
            ))
          ):(
              <p style={{ textAlign: "center", fontSize: "20px", paddingTop: "20px" }}>No counsellor available</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AdminCounsellor;
