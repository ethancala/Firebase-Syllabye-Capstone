import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function CourseInfo({ formData, handleChange, onValidation }) {
    const [errors, setErrors] = useState({
        courseName: '',
        courseSectionNumber: '',
        courseYear: '',
        courseTerm: '',
        creditHours: '',
        courseDescription: '',
        prerequisites: '',
        courseTimes: '',
        courseDates: '',
        meetingLocation: '',
        finalDate: '',
        learningOutcomes: '',
        bacCharactersitics: '',
        modalityInstruction: '',
        uMission: '',
    });

    // Regex for courseSectionNumber (Ex: CPSC-20000-02)
    const courseSectionRegex = /^[A-Z]{4}-\d{5}-\d{2}$/;
    // Ensure user enters this for naming convention
    const validTerms = ['Spring', 'Fall', 'Summer'];
    // Regex for courseYear (ensures it is a year for naming convention)
    const courseYearRegex = /^\d{4}$/;

    useEffect(() => {
        const validationRules = [
            { name: 'courseName', label: 'Course Name', value: formData.courseName },
            { name: 'courseSectionNumber', label: 'Course Abbreviation, Number, and Section', value: formData.courseSectionNumber, regex: courseSectionRegex },
            { name: 'courseYear', label: 'Course Year', value: formData.courseYear, regex: courseYearRegex },
            { name: 'courseTerm', label: 'Course Term', value: formData.courseTerm, validTerms: validTerms },
            { name: 'creditHours', label: 'Credit Hours', value: formData.creditHours },
            { name: 'courseDescription', label: 'Course Description', value: formData.courseDescription },
            { name: 'prerequisites', label: 'Prerequisites', value: formData.prerequisites },
            { name: 'courseTimes', label: 'Course Meeting Days/Times', value: formData.courseTimes },
            { name: 'courseDates', label: 'Course Meeting Dates', value: formData.courseDates },
            { name: 'meetingLocation', label: 'Meeting Location', value: formData.meetingLocation },
            { name: 'finalDate', label: 'Course Final', value: formData.finalDate },
            { name: 'learningOutcomes', label: 'Student Learning Outcomes', value: formData.learningOutcomes },
            { name: 'bacCharactersitics', label: 'Baccalaureate Characteristics', value: formData.bacCharactersitics },
            { name: 'modalityInstruction', label: 'Modality of Instruction', value: formData.modalityInstruction },
            { name: 'uMission', label: 'University Mission', value: formData.uMission },
        ];

        const newErrors = validationRules.reduce((acc, field) => {
            if (!field.value || field.value.trim() === '') {
                acc[field.name] = `${field.label} is required`;
            } else if (field.regex && !field.regex.test(field.value)) {
                // Custom validation for regex fields
                if (field.name === 'courseYear') {
                    acc[field.name] = `${field.label} must be a valid four-digit year`;
                } else {
                    acc[field.name] = `${field.label} is not in the correct format`;
                }
            } else if (field.validTerms && !field.validTerms.includes(field.value)) {
                acc[field.name] = `${field.label} must be one of the following: ${field.validTerms.join(', ')}`;
            } else {
                acc[field.name] = '';
            }
            return acc;
        }, {});

        setErrors(newErrors);
        onValidation(newErrors); // Notify SyllabusForm with errors for this step
    }, [formData, onValidation]);

    // Sorry for this being sloppy
    const formFields = [
        { label: 'Course Name', name: 'courseName', placeholder: 'Enter the name of the course' },
        { label: 'Course Abbreviation, Number, and Section', name: 'courseSectionNumber', placeholder: 'Format Ex: CPSC-20000-002' },
        { label: 'Course Year', name: 'courseYear', placeholder: 'Format Ex: 2025' },
        { label: 'Course Term', name: 'courseTerm', placeholder: '"Spring", "Fall", "Summer"' },
        { label: 'Credit Hours', name: 'creditHours', placeholder: 'Enter the amount of credit hours the course is worth' },
        { label: 'Course Description', name: 'courseDescription', placeholder: 'Enter a brief course description', isTextArea: true },
        { label: 'Prerequisites', name: 'prerequisites', placeholder: 'Enter the prerequisites that must be taken' },
        { label: 'Course Meeting Days/Times', name: 'courseTimes', placeholder: 'Example: MWF 10-1050AM' },
        { label: 'Course Meeting Dates', name: 'courseDates', placeholder: 'Enter the start and end date of the course' },
        { label: 'Meeting Location', name: 'meetingLocation', placeholder: 'Example: Arts and Sciences (AS) 104A & Zoom' },
        { label: 'Course Final', name: 'finalDate', placeholder: 'Enter the date of the final for the course' },
        { label: 'Student Learning Outcomes', name: 'learningOutcomes', placeholder: 'Enter what the student learning outcomes should be for the course', isTextArea: true },
        { label: 'Baccalaureate Characteristics', name: 'bacCharactersitics', placeholder: 'Enter the baccalaureate characteristics for the course', isTextArea: true },
        { label: 'Modality of Instruction', name: 'modalityInstruction', placeholder: 'Enter the modality of instruction for the course' },
        { label: 'University Mission', name: 'uMission', placeholder: 'Enter how this course connects to the university mission', isTextArea: true },
    ];

    return (
        <div className="section">
            <h4>Course Information</h4>
            {formFields.map((field) => (
                <Form.Group controlId={field.name} key={field.name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        as={field.isTextArea ? 'textarea' : 'input'}
                        rows={field.isTextArea ? 3 : undefined}
                        type={field.isTextArea ? undefined : 'text'}
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name] || ''} 
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

export default CourseInfo;
