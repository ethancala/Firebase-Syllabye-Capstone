import React from "react";
import { Card, Container } from "react-bootstrap";

const CreateInstructions = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ maxWidth: "600px", width: "100%" }} className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h2>Getting Started</h2>
          </Card.Title>
          <ol className="text-center px-3" style={{ lineHeight: "1.8" }}>
            <li> Click <strong>Create Syllabus</strong> to create your syllabus.</li>
            <li>Fill out each form section with your course details.</li>
            <li>Click <strong>Next</strong> to move through the steps of creating your syllabus.</li>
            <li>Use <strong>Generate Syllabus</strong> to preview it.</li>
            <li>Then <strong>Upload</strong> to the site (publicly available) for students to use or <strong>Download</strong> to PDF.</li>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateInstructions;
