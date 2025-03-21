import React, { useState } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

function CoursePolicy({ formData, handleChange }) {
    const [gradingScale, setGradingScale] = useState(formData.gradingScale || [
        { score: '93-100%', letterGrade: 'A' },
        { score: '90-92.9%', letterGrade: 'A-' },
        { score: '87-89.9%', letterGrade: 'B+' },
        { score: '83-86.9%', letterGrade: 'B' },
        { score: '80-82.9%', letterGrade: 'B-' },
        { score: '77-79.9%', letterGrade: 'C+' },
        { score: '73-76.9%', letterGrade: 'C' },
        { score: '70-72.9%', letterGrade: 'C-' },
        { score: '67-69.9%', letterGrade: 'D+' },
        { score: '63-66.9%', letterGrade: 'D' },
        { score: '60-62.9%', letterGrade: 'D-' },
        { score: '0-59.9%', letterGrade: 'F' },
    ]);

    const handleGradingScaleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedGradingScale = [...gradingScale];
        updatedGradingScale[index][name] = value;
        setGradingScale(updatedGradingScale);
    };

    const handleAddRow = () => {
        setGradingScale([
            ...gradingScale,
            { score: '', letterGrade: '' },
        ]);
    };

    const handleRemoveRow = (index) => {
        const updatedGradingScale = gradingScale.filter((_, i) => i !== index);
        setGradingScale(updatedGradingScale);
    };

    React.useEffect(() => {
        handleChange({ target: { name: 'gradingScale', value: gradingScale } });
    }, [gradingScale, handleChange]);

    return (
        <div className="section">
            <h4>Grading/Course Policies</h4>

            {/* Grading Policies Text Area */}
            <Form.Group controlId="gradingPolicy">
                <Form.Label>Grading Policies</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your grading policy here. (ex: late policy)"
                    name="gradingPolicy"
                    value={formData.gradingPolicy}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Course Policies Text Area */}
            <Form.Group controlId="coursePolicy">
                <Form.Label>Course Policies</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your course policies here. (ex: attendance & technology use)"
                    name="coursePolicy"
                    value={formData.coursePolicy}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="assignmentAndGradeChanges">
                <Form.Label>Schedule Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter how changes to assignments/grades will be communicated"
                    name="assignmentAndGradeChanges"
                    value={formData.assignmentAndGradeChanges}
                    onChange={handleChange}
                />
            </Form.Group>            

            {/* Grading Scale Table */}
            <h4>Grading Scale</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Score Range</th>
                        <th>Letter Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {gradingScale.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="score"
                                    value={row.score}
                                    onChange={(e) => handleGradingScaleChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="letterGrade"
                                    value={row.letterGrade}
                                    onChange={(e) => handleGradingScaleChange(e, index)}
                                />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemoveRow(index)}
                                    disabled={gradingScale.length === 1} // Disable Remove button when there's only 1 row
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

export default CoursePolicy;
