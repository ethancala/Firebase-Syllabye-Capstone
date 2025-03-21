import React from 'react';
import { Form } from 'react-bootstrap';

function CourseInfo({ formData, handleChange }) {
    return (
        <div className="section">
            <h4>Course Information</h4>
            <Form.Group controlId="courseName">
                <Form.Label>Course</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the name of the course"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="courseSectionNumber">
                <Form.Label>Course Abbreviation, Number, and Section</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Format Ex: CPSC-20000-002"
                    name="courseSectionNumber"
                    value={formData.courseSectionNumber}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="creditHours">
                <Form.Label>Credit Hours</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the amount of credit hours the course is worth"
                    name="creditHours"
                    value={formData.creditHours}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="courseDescription">
                <Form.Label> Course Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter a brief course description"
                    name="courseDescription"
                    value={formData.courseDescription}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="prerequisites">
                <Form.Label>Prerequisuites</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the preqreuisites that must be taken"
                    name="prerequisites"
                    value={formData.prerequisites}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="courseTimes">
                <Form.Label>Course Meeting Days/Times</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Example: MWF 10-1050AM"
                    name="courseTimes"
                    value={formData.courseTimes}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="courseDates">
                <Form.Label>Course Meeting Dates</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the start and end date of the course"
                    name="courseDates"
                    value={formData.courseDates}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="meetingLocation">
                <Form.Label>Meeting Location</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Example: Arts and Sciences (AS) 104A & Zoom"
                    name="meetingLocation"
                    value={formData.meetingLocation}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="finalDate">
                <Form.Label>Course Final</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the date of the final for the course"
                    name="finalDate"
                    value={formData.finalDate}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="learningOutcomes">
                <Form.Label>Student Learning Outcomes</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter what the student learning outcomes should be for the course"
                    name="learningOutcomes"
                    value={formData.learningOutcomes}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="bacCharactersitics">
                <Form.Label>Baccalaureate Characteristics</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter the baccalaureate characteristics for the course"
                    name="bacCharactersitics"
                    value={formData.bacCharactersitics}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="modalityInstruction">
                <Form.Label>Modality of Instruction</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the modality of instruction for the course"
                    name="modalityInstruction"
                    value={formData.modalityInstruction}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="uMission">
                <Form.Label>University Mission</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter how this course connects to the university mission"
                    name="uMission"
                    value={formData.uMission}
                    onChange={handleChange}
                />
            </Form.Group>

        </div>
    );
}

export default CourseInfo;
