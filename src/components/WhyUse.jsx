// WhyUse.jsx
import React from "react";
import "./WhyUse.css";
import { useTranslation } from "react-i18next";

const reasons = [
  {
    imgSrc: "/images/student-frustrated.jpg",
    titleKey: "whyUse.reasons.uploadSyllabi.title",
    descKey: "whyUse.reasons.uploadSyllabi.desc",
  },
  {
    imgSrc: "/images/lightbulbs.jpeg",
    titleKey: "whyUse.reasons.createNewSyllabi.title",
    descKey: "whyUse.reasons.createNewSyllabi.desc",
  },
  {
    imgSrc: "/images/laptop-board.jpg",
    titleKey: "whyUse.reasons.viewDownloadSyllabi.title",
    descKey: "whyUse.reasons.viewDownloadSyllabi.desc",
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
                {/* Translate title and description */}
                <a href="#"><h2>{t(reason.titleKey)}</h2></a>
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
