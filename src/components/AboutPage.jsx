import React from "react";
import "./AboutPage.css";
import { useTranslation } from 'react-i18next'; // Import the translation hook

const currentTeamMembers = [
  {
    imgSrc: "/images/irving.png",
    name: "irving", // Use the key for translation
  },
  {
    imgSrc: "/images/nick.png",
    name: "nick", // Use the key for translation
  },
  {
    imgSrc: "/images/jaiden.png",
    name: "jaiden", // Use the key for translation
  },
  {
    imgSrc: "/images/bryan.png",
    name: "bryan", // Use the key for translation
  },
];

const previousTeamMembers = [
  {
    imgSrc: "/images/josh.png",
    name: "josh", // Use the key for translation
  },
  {
    imgSrc: "/images/kevin.png",
    name: "kevin", // Use the key for translation
  },
  {
    imgSrc: "/images/logan.png",
    name: "logan", // Use the key for translation
  },
  {
    imgSrc: "/images/olivia-1.png",
    name: "olivia", // Use the key for translation
  },
  {
    imgSrc: "/images/other-kevin.png",
    name: "emilio", // Use the key for translation
  },
  {
    imgSrc: "/images/vykle.jpg",
    name: "vy", // Use the key for translation
  },
  {
    imgSrc: "/images/Emilio.png",
    name: "kevinZ", // Use the key for translation
  },
];

const newTeamMembers = [
  {
    imgSrc: "/images/ethan.png",
    name: "ethan", // Use the key for translation
  },
  {
    name: "yash", // Use the key for translation
  },
  {
    name: "joshua", // Use the key for translation
  },
];

const About = () => {
  const { t, i18n } = useTranslation(); // Use the translation hook and i18n instance

  // Function to switch language
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="about-page">
      {/* Language toggle buttons (similar to Header.jsx) */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 1000, // Ensure buttons are above other content
        }}
      >
        <button 
          onClick={() => switchLanguage('en')}
          style={{ marginRight: "0.5rem" }}
        >
          English
        </button>
        <button onClick={() => switchLanguage('es')}>Español</button>
      </div>

      <div className="about-container">
        {/* About Section */}
        <div className="about-text-container">
          <h1 className="about-title">{t('about.title')}</h1>
          <p className="about-description">
            {t('about.description')}
          </p>

          <h2 className="about-subtitle">{t('about.howToUse')}</h2>

          <h2 className="about-subtitle">{t('about.professors')}</h2>
          <p className="about-description">
            {t('about.professorsDesc1')}
          </p>
          <p className="about-description">
            {t('about.professorsDesc2')}
          </p>

          <h2 className="about-subtitle">{t('about.students')}</h2>
          <p className="about-description">
            {t('about.studentsDesc')}
          </p>  
        </div>
      </div>
      
      {/* Capstone Team Section */}
      <div className="about-team">
        <h2 className="about-subtitle">{t('about.meetOurTeam')}</h2>
        <h2 className="about-subtitle">{t('about.chairForceOne')}</h2>

        <div className="team-boxes">
          {currentTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{t(`team.members.${member.name}.name`)}</h3>
              <p>{t(`team.members.${member.name}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2024 Fall Capstone Team Section */}
      <div className="about-team">
        <h2 className="about-subtitle">{t('about.theKrabbyPatties')}</h2>
        <div className="team-boxes">
          {previousTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{t(`team.members.${member.name}.name`)}</h3>
              <p>{t(`team.members.${member.name}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2025 Software Engineering Team */}
      <div className="about-team">
        <h2 className="about-subtitle">{t('about.theDevDen')}</h2>
        <div className="team-boxes">
          {newTeamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{t(`team.members.${member.name}.name`)}</h3>
              <p>{t(`team.members.${member.name}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
