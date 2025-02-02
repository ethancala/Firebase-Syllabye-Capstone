/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TechStack.css"; // Ensure styles are imported

const techLogos = [
  { src: "/images/vs.png", alt: "Visual Studio" },
  { src: "/images/vscode.png", alt: "VS Code" },
  { src: "/images/css.png", alt: "CSS3" },
  { src: "/images/html.png", alt: "HTML5" },
  { src: "/images/js.png", alt: "JavaScript" },
  { src: "/images/bootstrap.png", alt: "Bootstrap" },
  { src: "/images/nodejs.png", alt: "Node.js" },
  { src: "/images/react.png", alt: "React" },
  { src: "/images/github.png", alt: "GitHub" },
  { src: "/images/git.png", alt: "Git" },
  { src: "/images/firebase.png", alt: "Firebase" },
];

const TechStack = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:5, // Adjust to fit properly
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Adjusted for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjusted for tablets
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjusted for smaller screens
        },
      },
    ],
  };
  
 

    return (
        <section id="tech-stack" className="content-block">
            <div className="container" style={{ marginBottom: "-16%", paddingBottom: "0px" }}>
                <header className="block-headge">
                    <h1>Tech Stack</h1>
                    <a href="https://github.com/your-github-repo" className="btn btn-o btn-lg github-button">
                        GitHub Repo
                    </a>
                </header>

                <strong><p className="tech-subtitle">
                    Take a look at the languages, frameworks, and development tools we used.
                </p></strong>
                <div className="slider-container">
                    <Slider {...settings}>
                        {techLogos.map((logo, index) => (
                            <div key={index} className="slide">
                                <img src={logo.src} alt={logo.alt} height="100" width="100" />
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
