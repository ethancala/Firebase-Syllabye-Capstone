/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";
import { useTranslation } from "react-i18next";

// Only store the image src and a key to look up i18n data
const teamMembers = [
  {
    imgSrc: "/images/irving.png",
    memberKey: "irving"
  },
  {
    imgSrc: "/images/nick.png",
    memberKey: "nick"
  },
  {
    imgSrc: "/images/jaiden.png",
    memberKey: "jaiden"
  },
  {
    imgSrc: "/images/bryan.png",
    memberKey: "bryan"
  }
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="content-block">
      <div className="container">
        <header className="block-heads">
          {/* Replace hard-coded text with translation keys */}
          <h1>{t("team.title")}</h1>
          <strong>
            <p>{t("team.subtitle")}</p>
          </strong>
        </header>

        <section className="block-body">
          <div className="row">
            {teamMembers.map((member, index) => {
              // Build the path to each member's i18n keys
              const baseKey = `team.members.${member.memberKey}`;

              return (
                <div key={index} className="col-md-3 team-member">
                  <div className="testimonial">
                    {/* alt text = translated name */}
                    <img
                      src={member.imgSrc}
                      alt={t(`${baseKey}.name`)}
                    />
                    <p>{t(`${baseKey}.description`)}</p>
                    <strong>{t(`${baseKey}.name`)}</strong>
                    <br />
                    <span>{t(`${baseKey}.title`)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;
