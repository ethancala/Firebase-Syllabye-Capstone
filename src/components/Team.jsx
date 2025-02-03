/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css"; // Ensure styles are imported

const teamMembers = [
  {
    imgSrc: "/images/irving.png",
    name: "Irving Sanchez",
    description:
      "Irving is a senior pursuing a major in computer science with a minor in math and thereafter pursuing his masters in computer engineering. On his free time he enjoys playing with with his dogs groot and peter, reading comic books and invites anybody to play a game of chess or magic the gathering with him. ",
    title: "IrvingFSanchez@lewisu.edu",
  },
  {
    imgSrc: "/images/nick.png",
    name: "Nick Krzysiak",
    description:
      "Nick is a Senior pursuing a major in computer science. Some of his hobbies include cars, camping, and going to the gym. ",
    title: "nicholasakrzysiak@lewisu.edu",
  },
  {
    imgSrc: "/images/jaiden.png",
    name: "Jaiden Leonard",
    description:
      "Jaiden is a senior majoring in Computer science with a focus on software engineering and development. He enjoys playing videogames and working on cars.",
    title: "jaidentleonard@lewisu.edu",
  },
  {
    imgSrc: "/images/bryan.png", // Add your new team member's image
    name: "Bryan Avalos",
    description:
      "Bryan is a senior pursuing a double major in computer science and forensic crimimal investigation. In his free time, he enjoys watching baseball, working on cars, playing videogames, and learning about technology.",
    title: "bryanhavalos@lewisu.edu",
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
