import { Card, Container } from "react-bootstrap";
import "./CreateInstructions.css";

const CreateInstructions = () => {
  return (
    <Container className="create-instructions-container">
      <Card className="instruction-card p-4 shadow-sm">
        <Card.Body>
          <Card.Title className="instruction-title text-center mb-4">
            <h2 className="instruction-heading">Getting Started</h2>
          </Card.Title>
          <ol className="instruction-list">
            <li>
              Click <strong>Create Syllabus</strong> to create your syllabus.
            </li>
            <li>Fill out each form section with your course details.</li>
            <li>
              Click <strong>Next</strong> to move through the steps of creating
              your syllabus.
            </li>
            <li>
              Use <strong>Generate Syllabus</strong> to preview it.
            </li>
            <li>
              Then <strong>Upload</strong> to the site (publicly available) for
              students to use or <strong>Download</strong> to PDF.
            </li>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateInstructions;
