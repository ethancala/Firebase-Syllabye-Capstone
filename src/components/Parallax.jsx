/* eslint-disable no-unused-vars */
import React from "react";
import "./Parallax.css"; // Ensure styles are imported
import studentBooks from "/src/assets/images/student-books.jpg"; // ✅ Import the image

const Parallax = () => {
  return (

    <section
      id="parallax"
      className="content-block parallax"
      style={{
        backgroundImage: `url(${studentBooks})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container text-center">
        <h1>
          Dynamic Syllabus Customization. Student-Friendly Features.
          Collaboration Tools. Accessibility and Inclusivity. Advance Export
          Options. Employer Friendly Features. Future Scalability.
        </h1>
        <a href="#" className="btn btn-o-white btn-lg">
          Start Creating Your Syllabus
        </a>
      </div>
    </section>
  );
};

export default Parallax;
