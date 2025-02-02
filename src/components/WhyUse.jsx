/* eslint-disable no-unused-vars */
import React from "react";
import "./WhyUse.css"; // Ensure styles are imported

const reasons = [
  {
    imgSrc: "/images/student-frustrated.jpg",
    title: "Reason",
    description: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
  },
  {
    imgSrc: "/images/lightbulbs.jpeg",
    title: "Some other Reason",
    description: "The more of me you take, the more you leave behind. What am I?",
  },
  {
    imgSrc: "/images/laptop-board.jpg",
    title: "More Reasons",
    description: "I’m not alive, but I can grow. I don’t have lungs, but I need air. I don’t have a mouth, but water kills me. What am I?",
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

