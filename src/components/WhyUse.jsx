/* eslint-disable no-unused-vars */
import React from "react";
import "./WhyUse.css"; // Ensure styles are imported

const reasons = [
  {
    imgSrc: "/images/student-frustrated.jpg",
    title: "Upload Syllabi",
    description: "Upload syllabi you may have already created so students can review their course.",
  },
  {
    imgSrc: "/images/lightbulbs.jpeg",
    title: "Create New Syllabi",
    description: "Professors can make their own syllabi so that students can learn and succeed in their classes.",
  },
  {
    imgSrc: "/images/laptop-board.jpg",
    title: "View & Download Syllabi",
    description: "Students can not only see their syllabi, but they can also download them for later use.",
  },
];

const WhyUse = () => {
  return (
    <section id="blog" className="content-block">
      <div className="container">
        <header className="block-heading">
          <h1>Why Use Our Software?</h1>
          <a href="#" className="btn btn-o btn-lg learn-more">Learn More</a>
        </header>

        <section className="block-body">
          <div className="row">
            {reasons.map((reason, index) => (
              <div key={index} className="col-sm-4 blog-post">
                <img src={reason.imgSrc} alt={reason.title} />
                <a href="#"><h2>{reason.title}</h2></a>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyUse;

