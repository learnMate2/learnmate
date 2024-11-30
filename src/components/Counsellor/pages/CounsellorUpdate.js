import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import CounsellorNavbar from "../layout/CounsellorNavbar";


import custom_axios from "../../connection/axios";
import { toast } from "react-toastify";
import CounsellorSideBar from "../layout/CounsellorSidebar";

const CounsellorUpdate = () => {
  const [formData, setFormData] = useState({
    field: "",
    profession: "",
    about: "",
    experiences: [{ company: "", designation: "", duration: "" }],
    degrees: [""],
    referenceDocuments: [],
    newAddedReferenceDocuments: [],
    profilePic: null,
    availableTimes: [{ from: "", to: "" }],
    activeDays: [""],
    deletedReferenceDocuments: [],
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await custom_axios.get("/api/v1/counsellor/current");

        const user = res.data.data;

        setFormData({
          field: user.field || "",
          profession: user.profession || "",
          about: user.about || "",
          experiences:
            user.experiences.length > 0
              ? user.experiences
              : [{ company: "", designation: "", duration: "" }],
          degrees: user.degrees.length > 0 ? user.degrees : [""],
          referenceDocuments: user.referenceDocuments || [],
          availableTimes:
            user.availableTimes.length > 0
              ? user.availableTimes
              : [{ from: "", to: "" }],
          activeDays: user.activeDays.length > 0 ? user.activeDays : [""],
          profilePic: user.profilePic || null,
          newAddedReferenceDocuments: [],
          deletedReferenceDocuments: [],
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { company: "", designation: "", duration: "" },
      ],
    });
  };

  const addDegree = () => {
    setFormData({
      ...formData,
      degrees: [...formData.degrees, ""],
    });
  };

  const addReferenceDocument = () => {
    setFormData({
      ...formData,
      newAddedReferenceDocuments: [
        ...formData.newAddedReferenceDocuments,
        null,
      ],
    });
  };
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleDayChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData({ ...formData, activeDays: [...formData.activeDays, value] });
    } else {
      setFormData({
        ...formData,
        activeDays: formData.activeDays.filter((day) => day !== value),
      });
    }
  };
  const addTime = () => {
    setFormData({
      ...formData,
      availableTimes: [
        ...formData.availableTimes,
        { from: "00:00", to: "00:00" },
      ],
    });
  };

  const removeOldReferenceDocument = (index, fileUrl) => {
    const updatedDocuments = formData.referenceDocuments.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      referenceDocuments: updatedDocuments,
      deletedReferenceDocuments: [
        ...formData.deletedReferenceDocuments,
        fileUrl,
      ],
    });
  };

  const removeTime = (index) => {
    const updatedTimes = formData.availableTimes.filter((_, i) => i !== index);
    setFormData({ ...formData, availableTimes: updatedTimes });
  };

  const removeNewReferenceDocument = (index) => {
    const updatedDocuments = formData.newAddedReferenceDocuments.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      newAddedReferenceDocuments: updatedDocuments,
    });
  };
  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const removeDegree = (index) => {
    const updatedDegrees = formData.degrees.filter((_, i) => i !== index);
    setFormData({ ...formData, degrees: updatedDegrees });
  };
  const handleDynamicChange = (e, index, field, arrayName) => {
    if (field === "profilePic") {
      setFormData({
        ...formData,
        profilePic: e.target.files[0],
      });
    } else if (arrayName === "degrees") {
      const updatedArray = [...formData.degrees];
      updatedArray[index] = e.target.value;
      setFormData({
        ...formData,
        degrees: updatedArray,
      });
    } else if (arrayName === "newAddedReferenceDocuments") {
      const updatedArray = [...formData.newAddedReferenceDocuments];
      updatedArray[index] = e.target.files[0];
      setFormData({
        ...formData,
        newAddedReferenceDocuments: updatedArray,
      });
    } else {
      const updatedArray = [...formData[arrayName]];
      updatedArray[index][field] = e.target.value;
      setFormData({
        ...formData,
        [arrayName]: updatedArray,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const data = new FormData();
    data.append("field", formData.field);
    data.append("profession", formData.profession);
    data.append("about", formData.about);
    formData.experiences.forEach((exp, idx) => {
      data.append(`experiences[${idx}][company]`, exp.company);
      data.append(`experiences[${idx}][designation]`, exp.designation);
      data.append(`experiences[${idx}][duration]`, exp.duration);
    });
    formData.availableTimes.forEach((time, idx) => {
      data.append(`availableTimes[${idx}][from]`, time.from);
      data.append(`availableTimes[${idx}][to]`, time.to);
    });
    formData.activeDays.forEach((day, idx) => {
      data.append(`activeDays[${idx}]`, day);
    });
    formData.degrees.forEach((degree, idx) => {
      data.append(`degrees[${idx}]`, degree);
    });

    formData.newAddedReferenceDocuments.forEach((file) => {
      if (file) {
        data.append("documents", file);
      }
    });
    formData.deletedReferenceDocuments.forEach((url, idx) => {
      data.append(`deletedReferenceDocuments[${idx}]`, url);
    });
  
    if (formData.profilePic) {
      data.append("profilePic", formData.profilePic);
    }

    try {
      const res = await custom_axios.put(
        "api/v1/counsellor/updateDetails",
        data
      );
      toast.success(res.data.message || "Successfully User Updated!");
    } catch (err) {
      toast.error(err.response.data);
    } finally {
      setUploading(false);
    }
  };
  return (
    <>
      <CounsellorNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 20px 0 70px",
        }}
      >
        <CounsellorSideBar />
        <Container fluid className="py-4 px-3">
          <h2 className="text-center mb-4" style={{ color: "#6b21a8" }}>
            Update Your Details
          </h2>
          <Form onSubmit={handleSubmit}>
            {/* Profile Picture */}
            <Row className="mb-4">
              <Col xs={12}>
                <h3 style={{ color: "#6b21a8" }}>Profile Picture</h3>
                <img
                  src={`${formData.profilePic}`}
                  alt="Profile"
                  height={30}
                  width={30}
                  className="mb-2"
                />
                <Form.Group>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      handleDynamicChange(e, null, "profilePic", null)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Field */}
            <Row className="mb-4">
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Field</Form.Label>
                  <Form.Select
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Field</option>
                    {[
                      "Computer Science",
                      "Information Technology",
                      "Engineering",
                      "Medical",
                      "Law",
                      "Business & Management",
                      "Finance & Accounting",
                      "Arts & Humanities",
                      "Social Sciences",
                      "Education",
                      "Health Sciences",
                      "Media & Communications",
                      "Design & Architecture",
                      "Natural Sciences",
                    ].map((option, idx) => (
                      <option key={idx} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Profession */}
            <Row className="mb-4">
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Profession</Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    minLength="5"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* About */}
            <Row className="mb-4">
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>About</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    required
                    minLength="15"
                    rows={3}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Experiences */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>
              Experiences
            </h3>
            {formData.experiences.map((experience, index) => (
              <Card key={index} className="p-3 mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.company}
                    onChange={(e) =>
                      handleDynamicChange(e, index, "company", "experiences")
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.designation}
                    onChange={(e) =>
                      handleDynamicChange(
                        e,
                        index,
                        "designation",
                        "experiences"
                      )
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Duration (in months)</Form.Label>
                  <Form.Control
                    type="number"
                    value={experience.duration}
                    onChange={(e) =>
                      handleDynamicChange(e, index, "duration", "experiences")
                    }
                    required
                  />
                </Form.Group>
                <Button
                  variant="danger"
                  onClick={() => removeExperience(index)}
                >
                  Remove
                </Button>
              </Card>
            ))}
            <Button
              variant="outline-primary"
              onClick={addExperience}
              className="mb-4"
            >
              Add Experience
            </Button>

            {/* Degrees */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>
              Degrees
            </h3>
            {formData.degrees.map((degree, index) => (
              <Row key={index} className="d-flex align-items-center mb-3">
                <Col xs={9}>
                  <Form.Control
                    type="text"
                    value={degree}
                    onChange={(e) =>
                      handleDynamicChange(e, index, "", "degrees")
                    }
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Button variant="danger" onClick={() => removeDegree(index)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            <Button
              variant="outline-primary"
              onClick={addDegree}
              className="mb-4"
            >
              Add Degree
            </Button>

            {/* Reference Documents */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>
              Reference Documents
            </h3>
            {formData.referenceDocuments.map((file, index) => (
              <Row key={index} className="d-flex align-items-center mb-3">
                <Col xs={9}>
                  <Form.Label>
                    <img
                      src={file.replace(
                        "upload",
                        "upload/c_thumb,h_150,w_150,f_jpg"
                      )}
                      alt="document thumbnail"
                      width={50}
                      height={50}
                    />
                  </Form.Label>
                </Col>
                <Col xs={3}>
                  <Button
                    variant="danger"
                    onClick={() => removeOldReferenceDocument(index)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            {formData.newAddedReferenceDocuments.map((file, index) => (
              <Row key={index} className="d-flex align-items-center mb-3">
                <Col xs={9}>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      handleDynamicChange(
                        e,
                        index,
                        "",
                        "newAddedReferenceDocuments"
                      )
                    }
                  />
                </Col>
                <Col xs={3}>
                  <Button
                    variant="danger"
                    onClick={() => removeNewReferenceDocument(index)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
            <Button
              variant="outline-primary"
              onClick={addReferenceDocument}
              className="mb-4"
            >
              Add New File
            </Button>

            {/* Availability */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>
              Availability
            </h3>
            <Row className="mb-3">
              <Col xs={12}>
                <h4>Active Days</h4>
                <Form.Group>
                  {daysOfWeek.map((day) => (
                    <Form.Check
                      inline
                      type="checkbox"
                      key={day}
                      label={day}
                      value={day}
                      checked={formData.activeDays.includes(day)}
                      onChange={handleDayChange}
                    />
                  ))}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={12}>
                <h4>Available Times</h4>
              </Col>
              {formData.availableTimes.map((time, index) => (
                <Row key={index} className="align-items-center mb-3">
                  <Col xs={4} sm={3}>
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="time"
                      value={time.from}
                      onChange={(e) =>
                        handleDynamicChange(e, index, "from", "availableTimes")
                      }
                      required
                    />
                  </Col>
                  <Col xs={4} sm={3}>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="time"
                      value={time.to}
                      onChange={(e) =>
                        handleDynamicChange(e, index, "to", "availableTimes")
                      }
                      required
                    />
                  </Col>
                  <Col xs={4} sm={2}>
                    <Button variant="danger" onClick={() => removeTime(index)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
            </Row>
            <Button
              variant="outline-primary"
              onClick={addTime}
              className="mb-4"
            >
              +
            </Button>

            {/* Submit Button */}
            <Row>
              <Col className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  style={{ background: "#6b21a8", border: "none" }}
                  disabled={uploading}
                >
                  {uploading ? "Updating..." : "Update"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CounsellorUpdate;
