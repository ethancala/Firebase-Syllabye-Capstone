/* eslint-disable no-unused-vars */
import React from "react";
import "./Parallax.css"; // Ensure styles are imported
import studentBooks from "/src/assets/images/student-books.jpg";
import { useTranslation } from "react-i18next"; // <-- import the hook

const Parallax = () => {
  const { t } = useTranslation(); // get the translation function

  return (
    <section
      id="parallax"
      className="content-block parallax"
      style={{
        backgroundImage: `url(${studentBooks})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container text-center">
        {/* Replace hard-coded text with translation keys */}
        <h1>
          {t("parallax.heading")}
        </h1>
        <a href="#" className="btn btn-o-white btn-lg">
          {t("parallax.buttonText")}
        </a>
      </div>
    </section>
  );
};

export default Parallax;
