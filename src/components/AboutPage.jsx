import React from "react";
import "./AboutPage.css";

const currentTeamMembers = [
  {
    imgSrc: "/images/irving.png",
    name: "Irving Sanchez",
    role: "Irving is a senior pursuing a major in computer science with a minor in math and thereafter pursuing his masters in computer engineering. In his free time he enjoys playing with his dogs Groot and Peter, reading comic books, and invites anyone to play a game of chess or Magic: The Gathering with him.",
  },
  {
    imgSrc: "/images/nick.png",
    name: "Nick",
    role: "Nick is a Senior pursuing a major in computer science. Some of his hobbies include cars, camping, and going to the gym.",
  },
  {
    imgSrc: "/images/jaiden.png",
    name: "Jaiden Leonard",
    role: "Jaiden is a senior majoring in computer science with a focus on software engineering and development. He enjoys playing videogames and working on cars.",
  },
  {
    imgSrc: "/images/bryan.png",
    name: "Bryan Avalos",
    role: "Bryan is a senior pursuing a double major in computer science and forensic criminal investigation. In his free time, he enjoys watching baseball, working on cars, playing videogames, and learning about technology.",
  },
];

const previousTeamMembers = [
  {
    imgSrc: "/images/josh.png",
    name: "Josh Brown",
    role: "Joshua is a sophomore pursuing a major in computer science. In his free time, he enjoys playing guitar, reading, and playing video games.",
  },
  {
    imgSrc: "/images/kevin.png",
    name: "Kevin Danowski",
    role: "Kevin is a sophomore pursuing a major in computer science. Outside of computer science, he participates in Lewis University's track and field team and enjoys playing video games.",
  },
  {
    imgSrc: "/images/logan.png",
    name: "Logan Prasczewicz",
    role: "Logan is a junior pursuing a major in computer science and a concentration in artificial intelligence. In his free time, he enjoys going on roadtrips, playing video games, and watching sports.",
  },
  {
    imgSrc: "/images/olivia-1.png",
    name: "Olivia Adamic",
    role: "Olivia Adamic is a junior pursuing a major in computer science, minors in mathematics and data science, and a concentration in mobile computing. Beyond her studies, she enjoys taking voice lessons, knitting and crocheting, gardening, and reading."
  },
  {
    imgSrc: "/images/other-kevin.png",
    name: "Emilio Vichis",
    role: " Emilio is a junior pursuing a major in computer science. He enjoys spending time with family and friends in addition to going bowling and playing video games.",
  },
  {
    imgSrc: "/images/vykle.jpg",
    name: "Vy Le",
    role: "Vy Le is a senior pursuing a major in computer science. Outside of her studies, she enjoys listening to music, watching animes, besides her biggest hobby which is traveling.",
  },
  {
    imgSrc: "/images/Emilio.png",
    name: "Kevin Zamudio",
    role: "Kevin is a junior pursuing a major in computer science. Outside of his studies, he enjoys reading, gaming, and also practicing MMA.",
  },
];
/* New team members can add themselves here when needed */
const newTeamMembers = [

];

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* About Section */}
        <div className="about-text-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Welcome to SyllaBye! Our platform is dedicated to making 
            creating, uploading, storing, and viewing academic syllabi
            easier for everyone. This includes both professors and students!
            Read below to learn how to use SyllaBye and meet our team!
          </p>

          <h2 className="about-subtitle">Wondering How to Use SyllaBye?</h2>

          <h2 className="about-subtitle">Professors:</h2>
          <p className="about-description">
            Professors can upload and create syllabi for students to use before and during the semester. 
            Navigate to the browse tab to upload a PDF version of your course syllabus.
          </p>
          <p className="about-description">
            Coming soon: Create new syllabi with the formatted Lewis University template
            that helps you and students stay more organized!
          </p>

          <h2 className="about-subtitle">Students:</h2>
          <p className="about-description">
            Students can view and download course syllabi all in one place to make learning easier!
            Navigate to the browse tab to view previously uploaded syllabi by professors.
          </p>  
        </div>
      </div>
      
      {/* Capstone Team Section */}
      <div className="about-team">
        <h2 className="about-subtitle">Meet Our Team</h2>
        <h2 className="about-subtitle">ChairForceOne</h2>

        <div className="team-boxes">
          {currentTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2024 Fall Capstone Team Section */}
      <div className="about-team">
        <h2 className="about-subtitle">TheKrabbyPatties</h2>
        <div className="team-boxes">
          {previousTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2025 Sofware Engineering Team */}
      <div className="about-team">
        <h2 className="about-subtitle">TheDevDen (Coming Soon)</h2>
        <div className="team-boxes">
          {newTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
