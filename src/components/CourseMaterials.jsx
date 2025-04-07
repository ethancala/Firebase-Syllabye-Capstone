import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function CourseMaterials({ formData, handleChange, onValidation }) {
    const [errors, setErrors] = useState({
        textbooks: '',
        suppleMats: '',
        softwareHardware: '',
        otherMaterials: '',
    });

    useEffect(() => {
        const validationRules = [
            { name: 'textbooks', label: 'Textbooks', value: formData.textbooks },
            { name: 'suppleMats', label: 'Supplemental readings, videos, online materials', value: formData.suppleMats },
            { name: 'softwareHardware', label: 'Hardware and Software Requirements', value: formData.softwareHardware },
            { name: 'otherMaterials', label: 'Other required materials or costs', value: formData.otherMaterials },
        ];

        const newErrors = validationRules.reduce((acc, field) => {
            if (!field.value.trim()) {
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
        { label: 'Textbook', name: 'textbooks', placeholder: 'Enter the textbooks or resources for the course' },
        { label: 'Supplemental readings, videos, online materials', name: 'suppleMats', placeholder: 'Enter any information about additional links' },
        { label: 'Hardware and Software Requirements', name: 'softwareHardware', placeholder: 'Enter any information about hardware/software that may be needed' },
        { label: 'Other required materials or costs', name: 'otherMaterials', placeholder: 'Enter any other required materials/costs' }
    ];

    return (
        <div className="section">
            <h4>Course Materials</h4>
            {formFields.map((field) => (
                <Form.Group controlId={field.name} key={field.name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
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

export default CourseMaterials;

