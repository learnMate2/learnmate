import React, { useState, useEffect } from 'react'

import CounsellorNavbar from '../layout/CounsellorNavbar';
import CounsellorSideBar from '../layout/CounsellorSidebar';
import { Container } from 'react-bootstrap';
import custom_axios from '../../connection/axios';

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
                const res = await custom_axios.get(
                    "/api/v1/counsellor/current"
                );

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
        // Append profilePic if updated
        if (formData.profilePic) {
            data.append("profilePic", formData.profilePic);
        }

        try {
            const res = await custom_axios.put(
                "api/v1/counsellor/updateDetails",
                data,

            );
            console.log("User updated successfully:", res.data);
        } catch (err) {
            console.error("Error updating user details:", err);
        } finally {
            setUploading(false);
        }
    };
    return (
        <>
            <CounsellorNavbar />
            <div style={{ display: 'flex', padding: "0 20px 0 70px" }}>
                <CounsellorSideBar />
                <Container className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <h2>Update your details</h2>

                        {/* Profile Picture */}
                        <label>Profile Picture</label>
                        <img src={`${formData.profilePic}`} height={30} width={30} />
                        <input
                            type="file"
                            name="profilePic"
                            onChange={(e) => handleDynamicChange(e, null, "profilePic", null)}
                        />

                        {/* Field */}
                        <label>Field</label>
                        <select
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
                        </select>

                        <label>Profession</label>
                        <input
                            type="text"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            required
                            minLength="5"
                        />

                        {/* About */}
                        <label>About</label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            required
                            minLength="15"
                        />

                        {/* Experiences */}
                        <h3>Experiences</h3>
                        {formData.experiences.map((experience, index) => (
                            <div key={index}>
                                <label>Company</label>
                                <input
                                    type="text"
                                    value={experience.company}
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "company", "experiences")
                                    }
                                    required
                                />
                                <label>Designation</label>
                                <input
                                    type="text"
                                    value={experience.designation}
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "designation", "experiences")
                                    }
                                    required
                                />
                                <label>Duration (in months)</label>
                                <input
                                    type="number"
                                    value={experience.duration}
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "duration", "experiences")
                                    }
                                    required
                                />
                                <button type="button" onClick={() => removeExperience(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addExperience}>
                            Add Experience
                        </button>

                        {/* Degrees */}
                        <h3>Degrees</h3>
                        {formData.degrees.map((degree, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={degree}
                                    onChange={(e) => handleDynamicChange(e, index, "", "degrees")}
                                    required
                                />
                                <button type="button" onClick={() => removeDegree(index)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addDegree}>
                            Add Degree
                        </button>

                        <h3>Reference Documents</h3>
                        {formData.referenceDocuments.map((file, index) => (
                            <div key={index}>
                                <label>
                                    <img
                                        src={file.replace(
                                            "upload",
                                            "upload/c_thumb,h_150,w_150,f_jpg" 
                                        )}
                                        alt="document thumbnail"
                                        width={50}
                                        height={50}
                                    ></img>
                                </label>

                                <button
                                    type="button"
                                    onClick={() => removeOldReferenceDocument(index, file)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {formData.newAddedReferenceDocuments.map((file, index) => (
                            <div key={index}>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "", "newAddedReferenceDocuments")
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => removeNewReferenceDocument(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addReferenceDocument}>
                            Add New File
                        </button>
                        <br></br>
                        {/* availablity */}
                        <h3>Availability</h3>
                        <h4>ActiveDays</h4>
                        <div>
                            {daysOfWeek.map((day) => (
                                <label key={day}>
                                    <input
                                        type="checkbox"
                                        value={day}
                                        checked={formData.activeDays.includes(day)}
                                        onChange={handleDayChange}
                                    />
                                    {day}
                                </label>
                            ))}
                        </div>
                        {formData.availableTimes.map((time, index) => (
                            <div key={index}>
                                <label>from</label>
                                <input
                                    type="time"
                                    value={time.from}
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "from", "availableTimes")
                                    }
                                    required
                                />
                                <label>to</label>
                                <input
                                    type="time"
                                    value={time.to}
                                    onChange={(e) =>
                                        handleDynamicChange(e, index, "to", "availableTimes")
                                    }
                                    required
                                />
                                <button type="button" onClick={() => removeTime(index)}>
                                    remove
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addTime}>
                            +
                        </button>

                        <br></br>
                        <br></br>

                        {/* Submit Button */}
                        <button type="submit" disabled={uploading}>
                            {uploading ? "Updating..." : "Update"}
                        </button>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default CounsellorUpdate