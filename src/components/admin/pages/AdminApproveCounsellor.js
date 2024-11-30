import AdminNavbar from '../layout/AdminNavbar';
import AdminSideBar from '../layout/AdminSidebar';
import React, { useEffect, useState } from 'react';
import custom_axios from '../../connection/axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import pdf from "../../../images/pdf.png"
import { toast } from 'react-toastify';
const AdminApproveCounsellor = () => {
  const { id } = useParams();
  const [counsellorById, setCounsellorById] = useState(null);
  const [profileReviewMessage, setProfileReviewMessage] = useState("")

  useEffect(() => {
    try {
      const getCounselor = async () => {
        const response = await custom_axios.get(`api/v1/counsellor/counsellorById/${id}`);
        setCounsellorById(response.data.data);
      };
      getCounselor();
    } catch (error) {
      toast.error(error.response.data);
    }

  }, [id]);
  const handleApproveCounsellor = async () => {
    try {
      const response = await custom_axios.post(`/api/v1/admin/verifyCounsellor/${id}`)
      toast.success(response.data.message || 'Successfully Approved!');
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  const handleResponseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await custom_axios.post(`/api/v1/admin/sendCounsellorReview/${id}`,{profileReviewMessage})
      setProfileReviewMessage(response.data)

    toast.success(response.data.message || 'Successfully Submit Response!');

    } catch (error) {
      toast.error(error.response.data);

    }
  }
  return (
    <>
      <AdminNavbar />
      <div style={{ display: "flex",padding: "0 20px 0 70px"  }}>
        <AdminSideBar />
        <Container fluid>
          {counsellorById ? (
            <>
              <Card className="p-4 shadow-lg" style={{ border: 'none' }}>
                <Card.Body>
                  <Row className="mb-4">
                    <Col className="text-center">
                      <h2 style={{ color: '#6b21a8' }}>Counselor Profile</h2>
                      <p className="text-muted">Get to know more about our counselor</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <img
                        src={counsellorById.profilePic}
                        alt="Counselor Profile"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px' }}
                      />
                      <h3 style={{ color: '#6b21a8' }}>{counsellorById.fullName}</h3>
                      <p><strong>Profession:</strong> {counsellorById.profession}</p>
                      <p><strong>Field:</strong> {counsellorById.feild}</p>
                      <p><strong>Verified:</strong> {counsellorById.isVerified ? 'Yes' : 'No'}</p>
                    </Col>

                    <Col md={8}>
                      <h4 style={{ color: '#6b21a8' }}>About</h4>
                      <p>{counsellorById.about}</p>
                      <p><strong>Email:</strong> {counsellorById.email}</p>
                      <p><strong>Active Days:</strong> {counsellorById.activeDays.join(', ')}</p>
                      <p><strong>Degrees:</strong> {counsellorById.degrees.join(', ')}</p>
                      <p><strong>Updated At:</strong> {new Date(counsellorById.updatedAt).toLocaleString()}</p>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col>
                      <h4 style={{ color: '#6b21a8' }}>Experiences</h4>
                      {counsellorById.experiences && counsellorById.experiences.map((exp, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <p><strong>Company:</strong> {exp.company}</p>
                            <p><strong>Designation:</strong> {exp.designation}</p>
                            <p><strong>Duration:</strong> {exp.duration}</p>
                          </Card.Body>
                        </Card>
                      ))}
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                    
                      <h4 style={{ color: '#6b21a8' }}>Reference Documents</h4>

                      {counsellorById.referenceDocuments.map((doc, index) => (
                        <li key={index} style={{ marginBottom: '10px', listStyle: "none" }}>
                          <a href={doc} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <img
                              src={pdf}
                              alt="Document Icon"
                              style={{ width: '30px', height: '30px', marginRight: '10px' }}
                            />
                            Document {index + 1}
                          </a>
                        </li>
                      ))}
                    </Col>
                  </Row>
                </Card.Body>
                <Container>
                  <Row className="mt-4">
                    <Col xs={12}>
                      <Button
                        style={{ backgroundColor: '#6b21a8', border: 'none', padding: '10px 20px', marginBottom: '20px' }} onClick={handleApproveCounsellor}
                      >
                        Approve Counsellor
                      </Button>
                    </Col>
                  </Row>
                  <div style={{ paddingBottom: "15px" }}>OR</div>
                  <Row>
                    <Col xs={12}>
                      <Form onSubmit={handleResponseSubmit}>
                        <Form.Group controlId="formResponse">
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Response"
                            style={{ border: '2px solid #6b21a8', marginBottom: '15px' }}
                            onChange={(e) => setProfileReviewMessage(e.target.value)}
                            value={profileReviewMessage}
                          />
                        </Form.Group>
                        <Button
                          type="submit"
                          style={{ backgroundColor: '#6b21a8', border: 'none', padding: '10px 20px' }}
                        >
                          Send Response
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </div >
    </>
  );
};

export default AdminApproveCounsellor;
