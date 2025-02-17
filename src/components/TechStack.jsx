// src/components/TechStack.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TechStack.css";
import { useTranslation } from "react-i18next"; // <-- import the hook

const techLogos = [
  { src: "/images/vs.png", altKey: "vs" },
  { src: "/images/vscode.png", altKey: "vscode" },
  { src: "/images/css.png", altKey: "css" },
  { src: "/images/html.png", altKey: "html" },
  { src: "/images/js.png", altKey: "js" },
  { src: "/images/bootstrap.png", altKey: "bootstrap" },
  { src: "/images/nodejs.png", altKey: "nodejs" },
  { src: "/images/react.png", altKey: "react" },
  { src: "/images/github.png", altKey: "github" },
  { src: "/images/git.png", altKey: "git" },
  { src: "/images/firebase.png", altKey: "firebase" },
];

const TechStack = () => {
  const { t } = useTranslation(); // get the translation function

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 3 } },
      { breakpoint: 480,  settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section id="tech-stack" className="content-block">
      <div className="container" style={{ marginBottom: "-16%", paddingBottom: "0px" }}>
        <header className="block-headge">
          {/* Replace hard-coded text with translated strings */}
          <h1>{t('techStack.title')}</h1>
          <a
            href="https://github.com/your-github-repo"
            className="btn btn-o btn-lg github-button"
          >
            {t('techStack.githubRepo')}
          </a>
        </header>

        <strong>
          <p className="tech-subtitle">
            {t('techStack.subtitle')}
          </p>
        </strong>

        <div className="slider-container">
          <Slider {...settings}>
            {techLogos.map((logo, index) => (
              <div key={index} className="slide">
                <img
                  src={logo.src}
                  // alt text is dynamically loaded based on the altKey 
                  alt={t(`techStack.altText.${logo.altKey}`)}
                  height="100"
                  width="100"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
