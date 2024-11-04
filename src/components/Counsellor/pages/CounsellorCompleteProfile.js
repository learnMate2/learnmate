import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import CounsellorNavbar from '../layout/CounsellorNavbar';
import CounsellorSidebar from '../layout/CounsellorSidebar';
import custom_axios from '../../connection/axios';
const CounsellorCompleteProfile = () => {
  const [formData, setFormData] = useState({
    field: "",
    profession: "",
    about: "",
    experiences: [{ company: "", designation: "", duration: "" }],
    availableTimes: [{ from: "00:00", to: "00:00" }],
    degrees: [""],
    referenceDocuments: [],
    activeDays: [],
    profilePic: null,
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
console.log(e.target.name,'----')
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter(
      (_, i) => i !== index,
    );
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const removeTime = (index) => {
    const updatedTimes = formData.availableTimes.filter((_, i) => i !== index);
    setFormData({ ...formData, availableTimes: updatedTimes });
  };

  const removeDegree = (index) => {
    const updatedDegrees = formData.degrees.filter((_, i) => i !== index);
    setFormData({ ...formData, degrees: updatedDegrees });
  };

  const removeReferenceDocument = (index) => {
    const updatedDocuments = formData.referenceDocuments.filter(
      (_, i) => i !== index,
    );
    setFormData({
      ...formData,
      referenceDocuments: updatedDocuments,
    });
  };

  const handleDynamicChange = (e, index, field, arrayName) => {
    if (field === "profilePic") {
      setFormData({
        ...formData,
        profilePic: e.target.files[0], // Directly set the file
      });
    } else if (arrayName === "degrees") {
      const updatedArray = [...formData.degrees];
      updatedArray[index] = e.target.value;
      setFormData({
        ...formData,
        degrees: updatedArray,
      });
    } else if (arrayName === "referenceDocuments") {
      const updatedArray = [...formData.referenceDocuments];
      updatedArray[index] = e.target.files[0];
      setFormData({
        ...formData,
        referenceDocuments: updatedArray,
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

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { company: "", designation: "", duration: "" },
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
  const addDegree = () => {
    setFormData({
      ...formData,
      degrees: [...formData.degrees, ""],
    });
  };

  const addReferenceDocument = () => {
    setFormData({
      ...formData,
      referenceDocuments: [...formData.referenceDocuments, null],
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData,"formdata")
    e.preventDefault();
    setUploading(true);

    const data = new FormData();
    data.append("field", formData.field);
    data.append("profession", formData.profession);
    data.append("about", formData.about);
    data.append("activeDays", formData.activeDays);
    formData.experiences.forEach((exp, idx) => {
      data.append(`experiences[${idx}][company]`, exp.company);
      data.append(`experiences[${idx}][designation]`, exp.designation);
      data.append(`experiences[${idx}][duration]`, exp.duration);
    });

    formData.availableTimes.forEach((time, idx) => {
      data.append(`availableTimes[${idx}][from]`, time.from);
      data.append(`availableTimes[${idx}][to]`, time.to);
    });

    formData.degrees.forEach((degree, idx) => {
      data.append(`degrees[${idx}]`, degree);
    });

    formData.activeDays.forEach((day, idx) => {
      data.append(`activeDays[${idx}]`, day);
    });

    formData.referenceDocuments.forEach((file) => {
      if (file) {
        data.append("documents", file);
      }
    });

    // Append profilePic
    if (formData.profilePic) {
      data.append("profilePic", formData.profilePic);
    }

    try {
      const res = await custom_axios.post(
        "http://localhost:8000/api/v1/counsellor/postDetails",
        data,
      );
     
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

   
  return (
    <>
      <CounsellorNavbar />
      <div style={{ display: 'flex', flexDirection: 'column',padding:"0 20px 0 70px"}}>
        <CounsellorSidebar />
        <Container fluid className="py-4 px-3">
          <h2 className="text-center mb-4" style={{ color: "#6b21a8" }}>
            Complete Your Details
          </h2>
          <Form onSubmit={handleSubmit}>
            {/* Profile Picture */}
            <Row className="mb-4">
              <Col xs={12}>
                <h3 style={{ color: "#6b21a8" }}>Profile Picture</h3>
                <Form.Group>
                  <Form.Control type="file" onChange={(e) => handleDynamicChange(e, null, "profilePic", null)} />
                </Form.Group>
              </Col>
            </Row>

            {/* Field */}
            <Row className="mb-4">
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Field</Form.Label>
                  <Form.Select name="field" value={formData.field} onChange={handleChange} required>
                    <option value="">Select Field</option>
                    {[
                      "Computer Science", "Information Technology", "Engineering", "Medical", "Law", "Business & Management",
                      "Finance & Accounting", "Arts & Humanities", "Social Sciences", "Education", "Health Sciences",
                      "Media & Communications", "Design & Architecture", "Natural Sciences"
                    ].map((option, idx) => (
                      <option key={idx} value={option.toLowerCase()}>{option}</option>
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
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>Experiences</h3>
            {formData.experiences.map((experience, index) => (
              <Card key={index} className="p-3 mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.company}
                    onChange={(e) => handleDynamicChange(e, index, "company", "experiences")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={experience.designation}
                    onChange={(e) => handleDynamicChange(e, index, "designation", "experiences")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Duration (in months)</Form.Label>
                  <Form.Control
                    type="number"
                    value={experience.duration}
                    onChange={(e) => handleDynamicChange(e, index, "duration", "experiences")}
                    required
                  />
                </Form.Group>
                <Button variant="danger" onClick={() => removeExperience(index)}>Remove</Button>
              </Card>
            ))}
            <Button variant="outline-primary" onClick={addExperience} className="mb-4">Add Experience</Button>

            {/* Degrees */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>Degrees</h3>
            {formData.degrees.map((degree, index) => (
              <Row key={index} className="d-flex align-items-center mb-3">
                <Col xs={9}>
                  <Form.Control
                    type="text"
                    value={degree}
                    onChange={(e) => handleDynamicChange(e, index, "", "degrees")}
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Button variant="danger" onClick={() => removeDegree(index)}>Remove</Button>
                </Col>
              </Row>
            ))}
            <Button variant="outline-primary" onClick={addDegree} className="mb-4">Add Degree</Button>

            {/* Reference Documents */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>Reference Documents</h3>
            {formData.referenceDocuments.map((file, index) => (
              <Row key={index} className="d-flex align-items-center mb-3">
                <Col xs={9}>
                  <Form.Control
                    type="file"
                    onChange={(e) => handleDynamicChange(e, index, "", "referenceDocuments")}
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Button variant="danger" onClick={() => removeReferenceDocument(index)}>Remove</Button>
                </Col>
              </Row>
            ))}
            <Button variant="outline-primary" onClick={addReferenceDocument} className="mb-4">Add New File</Button>

            {/* Availability */}
            <h3 className="mb-3" style={{ color: "#6b21a8" }}>Availability</h3>
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
                      onChange={(e) => handleDynamicChange(e, index, "from", "availableTimes")}
                      required
                    />
                  </Col>
                  <Col xs={4} sm={3}>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="time"
                      value={time.to}
                      onChange={(e) => handleDynamicChange(e, index, "to", "availableTimes")}
                      required
                    />
                  </Col>
                  <Col xs={4} sm={2}>
                    <Button variant="danger" onClick={() => removeTime(index)}>Remove</Button>
                  </Col>
                </Row>
              ))}
            </Row>
            <Button variant="outline-primary" onClick={addTime} className="mb-4">+</Button>

            {/* Submit Button */}
            <Row>
              <Col className="text-center">
                <Button type="submit" variant="primary" style={{ background: "#6b21a8", border: "none" }} disabled={uploading}>
                  {uploading ? "Uploading..." : "Submit"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default CounsellorCompleteProfile;

// admin

// home
// counsellor request   -> send respose | accept

// setting ->password change

