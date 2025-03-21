import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

function CourseSchedule({ formData, handleChange }) {
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
    React.useEffect(() => {
        handleChange({ target: { name: 'schedule', value: schedule } });
    }, [schedule, handleChange]);

    return (
        <div className="section">
            <h4>Course Schedule</h4>
            
            {/* Schedule Description */}
            <Form.Group controlId="scheduleDesc">
                <Form.Label>Schedule Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter a description for the course schedule"
                    name="scheduleDesc"
                    value={formData.scheduleDesc}
                    onChange={handleChange}
                />
            </Form.Group>

                        {/* Schedule Changes */}
                        <Form.Group controlId="scheduleChanges">
                <Form.Label>Schedule Changes</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter information about potential schedule changes"
                    name="scheduleChanges"
                    value={formData.scheduleChanges}
                    onChange={handleChange}
                />
            </Form.Group>

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
