import React,{useEffect,useState} from 'react';
import CounsellorNavbar from '../layout/CounsellorNavbar';
import CounsellorSidebar from '../layout/CounsellorSidebar';
import custom_axios from '../../connection/axios';
import { Container, Row, Col, Card ,Button} from 'react-bootstrap';
const CounsellorHome = () => {
  const [counsellorById, setCounsellorById] = useState(null);
  useEffect(() => {
    const getCounselor = async () => {
      const response = await custom_axios.get(`api/v1/counsellor/current`);
      setCounsellorById(response.data.data);
    };
    getCounselor();
  }, []);
  return (
    <>
      <CounsellorNavbar/>
      <div style={{ display: 'flex',padding:"0 20px 0 70px" }}>
        <CounsellorSidebar/>
        <Container className="mt-4">
          {counsellorById ? (
            <Card className="p-4 shadow-lg" style={{ border: 'none' }}>
              <Card.Body>
                <Row className="mb-4">
                  <Col className="text-center">
                    <h2 style={{ color: '#6b21a8' }}>Counselor Profile</h2>
                    <p className="text-muted">Get to know more about our counselor</p>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} >

                    <img src={counsellorById.profilePic} alt="Counselor Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
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
                <Button href="/counsellor/update" type="submit" style={{ backgroundColor: '#6b21a8', border: 'none' }} className="mt-3 shadow">
              Update
            </Button>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </div>
    </>
  );
}

export default CounsellorHome;
