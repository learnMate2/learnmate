import React, { useEffect, useState } from "react";
import custom_axios from "../../connection/axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import StudentNavbar from "../layout/StudentNavbar";
import StudentSideBar from "../layout/StudentSidebar";

const StudentCounselorProfile = () => {
  const { id } = useParams();
  const [counsellorById, setCounsellorById] = useState(null);

  useEffect(() => {
    try {
      const getCounselor = async () => {
        const response = await custom_axios.get(
          `api/v1/counsellor/counsellorById/${id}`
        );
        setCounsellorById(response.data.data);
      };
      getCounselor();
    } catch (error) {
      toast.error(error.response.data);
    }
  }, [id]);
  const [proposedTime, setProposedTime] = useState("");
  const handleChange = (e) => {
    setProposedTime(e.target.value);
  };

  const meetingSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await custom_axios.post(
        `api/v1/student/requestForMeeting/${id}`,
        { proposedTime }
      );
      toast.success(res.data.message || "Successfully Requested For Meeting");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <StudentNavbar />
      <div style={{ display: "flex" }}>
        <StudentSideBar />
        <Container className="mt-4">
          {counsellorById ? (
            <Card className="p-4 shadow-lg" style={{ border: "none" }}>
              <Card.Body>
                <Row className="mb-4">
                  <Col className="text-center">
                    <h2 style={{ color: "#6b21a8" }}>Counselor Profile</h2>
                    <p className="text-muted">
                      Get to know more about our counselor
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <img
                      src={counsellorById.profilePic}
                      alt="Counselor Profile"
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <h3 style={{ color: "#6b21a8" }}>
                      {counsellorById.fullName}
                    </h3>
                    <p>
                      <strong>Profession:</strong> {counsellorById.profession}
                    </p>
                    <p>
                      <strong>Field:</strong> {counsellorById.feild}
                    </p>
                    <p>
                      <strong>Verified:</strong>{" "}
                      {counsellorById.isVerified ? "Yes" : "No"}
                    </p>
                  </Col>

                  <Col md={8}>
                    <h4 style={{ color: "#6b21a8" }}>About</h4>
                    <p>{counsellorById.about}</p>
                    <p>
                      <strong>Email:</strong> {counsellorById.email}
                    </p>
                    <p>
                      <strong>Active Days:</strong>{" "}
                      {counsellorById.activeDays.join(", ")}
                    </p>
                    <p>
                      <strong>Degrees:</strong>{" "}
                      {counsellorById.degrees.join(", ")}
                    </p>
                    <p>
                      <strong>Updated At:</strong>{" "}
                      {new Date(counsellorById.updatedAt).toLocaleString()}
                    </p>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <h4 style={{ color: "#6b21a8" }}>Experiences</h4>
                    {counsellorById.experiences &&
                      counsellorById.experiences.map((exp, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <p>
                              <strong>Company:</strong> {exp.company}
                            </p>
                            <p>
                              <strong>Designation:</strong> {exp.designation}
                            </p>
                            <p>
                              <strong>Duration:</strong> {exp.duration}
                            </p>
                          </Card.Body>
                        </Card>
                      ))}
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <h4 style={{ color: "#6b21a8" }}>Available Times</h4>
                    {counsellorById.availableTimes &&
                      counsellorById.availableTimes.map((time, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <p>
                              <strong>From:</strong> {time.from}
                            </p>
                            <p>
                              <strong>To:</strong> {time.to}
                            </p>
                          </Card.Body>
                        </Card>
                      ))}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <h4 style={{ color: "#6b21a8" }}>Ratings and Reviews</h4>
                    {counsellorById.rating.ratingDetails.map(
                      (review, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm">
                          <Card.Body>
                            <p>
                              <strong>Rating:</strong> {review.ratingValue}
                            </p>
                            <p>
                              <strong>Message:</strong> {review.ratingMessage}
                            </p>
                          </Card.Body>
                        </Card>
                      )
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading...</p>
          )}

          <Form onSubmit={meetingSubmit} className="mt-4">
            <Form.Group controlId="proposedTime">
              <Form.Label style={{ color: "#6b21a8" }}>
                Propose a Meeting Time
              </Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={handleChange}
                value={proposedTime}
                className="border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa" }}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ backgroundColor: "#6b21a8", border: "none" }}
              className="mt-3 shadow"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default StudentCounselorProfile;
