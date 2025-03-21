// CourseMaterials.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

function CourseMaterials({ formData, handleChange }) {
    return (
        <div className="section">
            <h4>Course Materials</h4>
            <Form.Group controlId="textbooks">
                <Form.Label>Textbook</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter the textbooks or resources for the course"
                    name="textbooks"
                    value={formData.textbooks}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="suppleMats">
                <Form.Label>Supplemental readings, videos, online materials</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any information about additional links"
                    name="suppleMats"
                    value={formData.suppleMats}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="softwareHardware">
                <Form.Label>Hardware and Software Requirements</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any information about hardware/software that may be needed"
                    name="softwareHardware"
                    value={formData.softwareHardware}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="otherMaterials">
                <Form.Label>Other required materials or costs</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter any other required materials/costs"
                    name="otherMaterials"
                    value={formData.otherMaterials}
                    onChange={handleChange}
                />
            </Form.Group>
        </div>
    );
}

export default CourseMaterials;
