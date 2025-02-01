/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css"; // Ensure styles are imported

const teamMembers = [
  {
    imgSrc: "/images/anon.png",
    description:
      "Are you an expert at lounging? Do you have a PhD in Pillow Fluffing? We’re looking for a dedicated individual to test the comfort level of couches worldwide.",
    title: "Lives in Mom's Basement",
  },
  {
    imgSrc: "/images/hacker.png",
    name: "Dude 2",
    description:
      "Do you have a passion for snacks? Can you tell the difference between a stale chip and a perfectly crispy one? We need you to ensure the quality of all snacks in our office.",
    title: "Owns Gold Mines on Mercury",
  },
  {
    imgSrc: "/images/harley.png",
    name: "Dudette 3",
    description:
      "Are you the person who thrives in chaos? Do you have a knack for turning disasters into mildly organized messes? We need you to manage the chaos in our office.",
    title: "Guardian of the Galaxy Member",
  },
  {
    imgSrc: "/images/god.png", // Add your new team member's image
    name: "Dude 4",
    description:
      "Are you the master of spreadsheets? Can you organize chaos into a perfectly structured document? We need you to optimize every aspect of our workflow.",
    title: "Excel Wizard",
  },
];

const Team = () => {
  return (
    <section id="testimonials" className="content-block">
      <div className="container">
        <header className="block-heads">
          <h1>Meet The Team</h1>
          <strong>
            <p>ChairForceOne & TheKrabbyPatties</p>
          </strong>
        </header>

        <section className="block-body">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-3 team-member">
                <div className="testimonial">
                  <img src={member.imgSrc} alt={member.name} />
                  <p>{member.description}</p>
                  <strong>{member.name}</strong>
                  <br />
                  <span>{member.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;
