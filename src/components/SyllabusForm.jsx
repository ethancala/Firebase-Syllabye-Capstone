import React, { useState } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import { PDFViewer } from '@react-pdf/renderer';
import InstructorInfo from './InstructorInfo';
import CourseInfo from './CourseInfo';
import CourseMaterials from './CourseMaterials';
import CourseSchedule from './CourseSchedule';
import CoursePolicy from './CoursePolicy';
import SyllabusPDF from './SyllabusPDF';
import SyllabusUploader from './SyllabusUploader'; // Import upload component
import './SyllabusForm.css';

function SyllabusForm() {
    const [showModal, setShowModal] = useState(false);
    const [showPDF, setShowPDF] = useState(false); // Show PDF preview
    const [currentStep, setCurrentStep] = useState(1); // Track step in form

    const [formData, setFormData] = useState({
        instructorName: '',
        officeHours: '',
        officeLocation: '',
        instructorEmail: '',
        instructorPhone: '',
        zoomLink: '',
        courseName: '',
        courseYear: '',
        courseTerm: '',
        courseNumber: '',
        courseSection: '',
        creditHours: '',
        courseDescription: '',
        prerequisuites: '',
        courseTimes: '',
        courseDates: '',
        meetingLocation: '',
        finalDate: '',
        textbooks: '',
        suppleMats: '',
        softwareHardware: '',
        otherMaterials: '',
        scheduleDesc: '',
        scheduleChanges: '',
        gradingPolicy: '',
        coursePolicy: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const nextStep = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleGenerateSyllabus = () => {
        setShowPDF(true);
    };

    return (
        <Container>
            {!showPDF ? (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Create Syllabus
                    </Button>

                    <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
                        <Modal.Header closeButton>
                            <Modal.Title>Create Syllabus</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                {currentStep === 1 && <InstructorInfo formData={formData} handleChange={handleChange} />}
                                {currentStep === 2 && <CourseInfo formData={formData} handleChange={handleChange} />}
                                {currentStep === 3 && <CourseMaterials formData={formData} handleChange={handleChange} />}
                                {currentStep === 4 && <CourseSchedule formData={formData} handleChange={handleChange} />}
                                {currentStep === 5 && <CoursePolicy formData={formData} handleChange={handleChange} />}
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-between">
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>

                            <div>
                                <Button variant="secondary" onClick={prevStep} disabled={currentStep === 1} className="me-2">
                                    Previous
                                </Button>
                                <Button variant="primary" onClick={nextStep} disabled={currentStep === 5}>
                                    Next
                                </Button>
                            </div>

                            <Button
                                variant="primary"
                                onClick={handleGenerateSyllabus}
                                className={`ms-2 ${currentStep !== 5 ? 'opacity-50' : ''}`}
                                disabled={currentStep !== 5}
                                style={{ transition: 'opacity 0.3s ease' }}
                            >
                                Generate Syllabus
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <h2 className="text-center mt-4">Syllabus Preview</h2>
                    <PDFViewer style={{ width: '100%', height: '500px' }}>
                        <SyllabusPDF formData={formData} />
                    </PDFViewer>

                    {/* Upload button appears after previewing */}
                    <SyllabusUploader formData={formData} />
                </>
            )}
        </Container>
    );
}

export default SyllabusForm;
