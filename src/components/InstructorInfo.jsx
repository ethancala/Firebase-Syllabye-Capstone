import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function InstructorInfo({ formData, handleChange, onValidation }) {
    const [errors, setErrors] = useState({
        instructorName: '',
        officeHours: '',
        officeLocation: '',
        instructorEmail: '',
        instructorPhone: '',
        zoomLink: '',
    });

    useEffect(() => {
        const validationRules = [
            { name: 'instructorName', label: "Instructor name", value: formData.instructorName },
            { name: 'officeHours', label: "Office hours", value: formData.officeHours },
            { name: 'officeLocation', label: "Office location", value: formData.officeLocation },
            { name: 'instructorEmail', label: "Instructor email", value: formData.instructorEmail },
            { name: 'instructorPhone', label: "Instructor phone", value: formData.instructorPhone },
            { name: 'zoomLink', label: "Zoom link", value: formData.zoomLink },
        ];

        const newErrors = validationRules.reduce((acc, field) => {
            if (field.name !== 'zoomLink' && !field.value.trim()) {
                acc[field.name] = `${field.label} is required`;
            } else {
                acc[field.name] = '';
            }
            return acc;
        }, {});

        setErrors(newErrors);
        onValidation(newErrors); // Notify SyllabusForm with errors for this step
    }, [formData, onValidation]);

    const formFields = [
        { label: "Instructor's Name", name: 'instructorName', placeholder: "Enter your name", required: true },
        { label: "Office Hours", name: 'officeHours', placeholder: "Enter when your office hours occur", required: true },
        { label: "Lewis Office Location", name: 'officeLocation', placeholder: "Enter where your office is located at Lewis University", required: true },
        { label: "Lewis Email", name: 'instructorEmail', placeholder: "Enter your Lewis email", required: true },
        { label: "Lewis Phone Number", name: 'instructorPhone', placeholder: "Enter your phone number", required: false },
        { label: "Zoom Link", name: 'zoomLink', placeholder: "Enter the link to your Zoom classroom if needed", required: false }
    ];

    return (
        <div className="section">
            <h4>Instructor Information</h4>
            {formFields.map((field) => (
                <Form.Group controlId={field.name} key={field.name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        required={field.required}
                        type="text"
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        isInvalid={!!errors[field.name]}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors[field.name]}
                    </Form.Control.Feedback>
                </Form.Group>
            ))}
        </div>
    );
}

export default InstructorInfo;

