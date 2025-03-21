import React from 'react';
import { Form } from 'react-bootstrap';

function InstructorInfo({ formData, handleChange }) {
    return (
        <div className="section">
            <h4>Instructor Information</h4>
            <Form.Group controlId="instructorName">
                <Form.Label>Instructor's Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="officeHours">
                <Form.Label>Office Hours</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter when your office hours occur"
                    name="officeHours"
                    value={formData.officeHours}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="officeLocation">
                <Form.Label>Lewis Office Location</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter where your office is located at Lewis Univserity"
                    name="officeLocation"
                    value={formData.officeLocation}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="instructorEmail">
                <Form.Label>Lewis Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your  Lewis email"
                    name="instructorEmail"
                    value={formData.instructorEmail}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="instructorPhone">
                <Form.Label>Lewis Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="instructorPhone"
                    value={formData.instructorPhone}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="zoomLink">
                <Form.Label>Zoom Link</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter the link to your zoom classroom if needed"
                    name="zoomLink"
                    value={formData.zoomLink}
                    onChange={handleChange}
                />
            </Form.Group>
        </div>
    );
}

export default InstructorInfo;
