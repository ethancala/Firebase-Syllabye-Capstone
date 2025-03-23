import React from "react";
import "./WhyUse.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const reasons = [
  {
    imgSrc: "/images/student-frustrated.jpg",
    titleKey: "whyUse.reasons.uploadSyllabi.title",
    descKey: "whyUse.reasons.uploadSyllabi.desc",
    link: "/browse", 
  },
  {
    imgSrc: "/images/lightbulbs.jpeg",
    titleKey: "whyUse.reasons.createNewSyllabi.title",
    descKey: "whyUse.reasons.createNewSyllabi.desc",
    link: "/create", 
  },
  {
    imgSrc: "/images/laptop-board.jpg",
    titleKey: "whyUse.reasons.viewDownloadSyllabi.title",
    descKey: "whyUse.reasons.viewDownloadSyllabi.desc",
    link: "/browse",
  },
];

const WhyUse = () => {
  const { t } = useTranslation(); // get the translation function

  return (
    <section id="blog" className="content-block">
      <div className="container">
        <header className="block-heading">
          {/* Use translation keys for the title and button text */}
          <h1>{t("whyUse.title")}</h1>
          <a href="#" className="btn btn-o btn-lg learn-more">
            {t("whyUse.learnMore")}
          </a>
        </header>

        <section className="block-body">
          <div className="row">
            {reasons.map((reason, index) => (
              <div key={index} className="col-sm-4 blog-post">
                <img src={reason.imgSrc} alt={t(reason.titleKey)} />
                <Link to={reason.link}>
                  <h2>{t(reason.titleKey)}</h2>
                </Link>
                <p>{t(reason.descKey)}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyUse;

