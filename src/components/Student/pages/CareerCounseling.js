import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../../../styles/styles.css";
import Footer from "../../layout/Footer";
import { useEffect, useState } from "react";
import custom_axios from "../../connection/axios";
import StudentNavbar from "../layout/StudentNavbar";
import StudentSideBar from "../layout/StudentSidebar";
import { toast } from "react-toastify";
import CounsellorModal from "../../modals/CounsellorModal";
const CareerCounseling = () => {
  const [counsellor, setCounsellor] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [counsellorById,setCounsellorById]=useState("")
  useEffect(() => {
    try {
      const getCounsolor = async () => {
        const response = await custom_axios.get(
          "api/v1/counsellor/allCounsellors?isVerified=true"
        );
        setCounsellor(response.data.data);
      };
      getCounsolor();
    } catch (error) {
      toast.error(error.response.data);
    }
  }, []);
  const submitFeedback = (documentId) =>{ 
    setModalShow(true);
    setCounsellorById(documentId)
  }
  return (
    <>
      <StudentNavbar />
      <div style={{ display: "flex", padding: "0 20px 0 70px" }}>
        <StudentSideBar />
        <Container fluid>
          <h3 style={{ padding: "30px 20px" }}>
            Here are some counselors profiles you can choose from
          </h3>
          <Row className="m-2">
            {counsellor.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
                <Card
                  style={{
                    border: "2px solid #6b21a8",
                    padding: "20px 10px",
                    marginTop: "30px",
                  }}
                  className="d-flex justify-content-center align-items-center career_card"
                >
                  <Card.Img
                    variant="top"
                    src={item.profilePic}
                    style={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "29px" }}>
                      {item.fullName}
                    </Card.Title>
                    <Card.Text>{item.email}</Card.Text>
                    <Card.Text>{item.profession}</Card.Text>
                    <Card.Text>Rating</Card.Text>
                    <Button
                      style={{
                        padding: "10px 20px",
                        background: "#6b21a8",
                        border: "none",
                        marginRight:"10px",
                        marginTop:"10px"
                       
            
                      }}
                      href={`/student/studentcounsellorprofile/${item._id}`}
                    >
                      Contact me
                    </Button>
                    <Button
                      style={{
                        padding: "10px 20px",
                        background: "#6b21a8",
                        border: "none",
                         marginTop:"10px"
                      }}
                      onClick={()=>submitFeedback(item._id)}
                    >
                      Give Feedback
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <CounsellorModal show={modalShow} onHide={() => setModalShow(false)} documentId={counsellorById}/>
      </div>
      <Footer />
    </>
  );
};

export default CareerCounseling;
