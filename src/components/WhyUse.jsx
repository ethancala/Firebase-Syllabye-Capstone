import "./WhyUse.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const reasons = [
  {
    imgSrc: "/images/upload-laptop.jpeg",
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
    <section id="why-use" className="why-use-section content-block">
      <div className="container">
        <header className="block-heading">
          <h2 className="about-subtitle">{t("whyUse.title")}</h2>
        </header>

        <section className="block-body">
          <div className="row">
            {reasons.map((reason, index) => (
              <div key={index} className="col-md-4 col-sm-12 mb-4">
                <div className="blog-post">
                  <img src={reason.imgSrc} alt={t(reason.titleKey)} />
                  <Link to={reason.link}>
                    <h3>{t(reason.titleKey)}</h3>
                  </Link>
                  <p>{t(reason.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyUse;
