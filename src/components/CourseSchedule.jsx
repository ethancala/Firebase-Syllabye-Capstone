import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

function CourseSchedule({ formData, handleChange, onValidation }) {
    const [errors, setErrors] = useState({
        scheduleChanges: '',
        scheduleDesc: ''
    });

    useEffect(() => {
        const validationRules = [
            { name: 'scheduleChanges', label: 'Schedule Changes', value: formData.scheduleChanges },
            { name: 'scheduleDesc', label: 'Schedule Description', value: formData.scheduleDesc },
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
        { label: 'Schedule Description', name: 'scheduleDesc', placeholder: 'Enter a description for the course schedule' },
        { label: 'Schedule Changes', name: 'scheduleChanges', placeholder: 'Enter information about potential schedule changes' },
    ];

    const [schedule, setSchedule] = useState(
        formData.schedule || Array(8).fill(null).map(() => ({ week: '', topics: '', assignments: '' }))
    );

    const handleAddRow = () => {
        setSchedule([
            ...schedule,
            { week: '', topics: '', assignments: '' },
        ]);
    };

    const handleRemoveRow = (index) => {
        const newSchedule = schedule.filter((_, i) => i !== index);
        setSchedule(newSchedule);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchedule = [...schedule]; // Clone the schedule
        updatedSchedule[index] = { ...updatedSchedule[index], [name]: value }; // Update the specific field in the specific row
        setSchedule(updatedSchedule); // Update the state with the new schedule
    };

    // Update parent formData state when schedule changes
    useEffect(() => {
        handleChange({ target: { name: 'schedule', value: schedule } });
    }, [schedule, handleChange]);

    return (
        <div className="section">
            <h4>Course Schedule</h4>
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

            <h4>Week by Week Schedule</h4>
            {/* Table for Course Schedule */}
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Week</th>
                        <th>Topics</th>
                        <th>Assignments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="week"
                                    value={row.week}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="topics"
                                    value={row.topics}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="assignments"
                                    value={row.assignments}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemoveRow(index)}
                                    disabled={schedule.length === 1} // Disable Remove button when there's only 1 row
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="success" onClick={handleAddRow}>
                Add Row
            </Button>

        </div>
    );
}

export default CourseSchedule;
