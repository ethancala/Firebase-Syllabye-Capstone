import React, { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

function CoursePolicyCont({ formData, handleChange, onValidation }) {
    const [gradeBreakdown, setGradeBreakdown] = useState(formData.gradeBreakdown || [
        { assignment: '', points: '', number: '', totalPoints: '', percent: '' },
    ]);

    const handleGradeBreakdownChange = (e, index) => {
        const { name, value } = e.target;
        const updatedGradeBreakdown = [...gradeBreakdown];
        updatedGradeBreakdown[index][name] = value;
        setGradeBreakdown(updatedGradeBreakdown);
    };

    const handleAddRow = () => {
        setGradeBreakdown([
            ...gradeBreakdown,
            { assignment: '', points: '', number: '', totalPoints: '', percent: '' },
        ]);
    };

    const handleRemoveRow = (index) => {
        const updatedGradeBreakdown = gradeBreakdown.filter((_, i) => i !== index);
        setGradeBreakdown(updatedGradeBreakdown);
    };

    // Calculate totals for #, totalPoints, and percent
    const calculateTotals = () => {
        let totalNumber = 0;
        let totalPoints = 0;
        let totalPercent = 0;

        gradeBreakdown.forEach(row => {
            totalNumber += parseFloat(row.number) || 0;
            totalPoints += parseFloat(row.totalPoints) || 0;
            totalPercent += parseFloat(row.percent) || 0;
        });

        return {
            totalNumber,
            totalPoints,
            totalPercent,
        };
    };

    const totals = calculateTotals();

    React.useEffect(() => {
        handleChange({ target: { name: 'gradeBreakdown', value: gradeBreakdown } });
    }, [gradeBreakdown, handleChange]);

    return (
        <div className="section">
            <h4>Grading/Course Policies Continued</h4>

            <h4>Grade Breakdown</h4>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Assignment</th>
                        <th>Points</th>
                        <th>#</th>
                        <th>Total Points</th>
                        <th>% of Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {gradeBreakdown.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="assignment"
                                    value={row.assignment}
                                    onChange={(e) => handleGradeBreakdownChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="points"
                                    value={row.points}
                                    onChange={(e) => handleGradeBreakdownChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="number"
                                    value={row.number}
                                    onChange={(e) => handleGradeBreakdownChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="totalPoints"
                                    value={row.totalPoints}
                                    onChange={(e) => handleGradeBreakdownChange(e, index)}
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="percent"
                                    value={row.percent}
                                    onChange={(e) => handleGradeBreakdownChange(e, index)}
                                />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemoveRow(index)}
                                    disabled={gradeBreakdown.length === 1} // Disable Remove button when there's only 1 row
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                    {/* Totals row */}
                    <tr>
                        <td><strong>Total</strong></td>
                        <td></td>
                        <td>{totals.totalNumber}</td>
                        <td>{totals.totalPoints}</td>
                        <td>{totals.totalPercent}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            <Button variant="success" onClick={handleAddRow}>
                Add Row
            </Button>
        </div>
    );
}

export default CoursePolicyCont;


