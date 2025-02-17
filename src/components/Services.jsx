// Services.jsx
import React from "react";
import "./Services.css";
import typewriter from "/images/typewriter.jpeg";
import { useTranslation } from "react-i18next";

const servicesData = [
    {
        icon: "fa-laptop",
        titleKey: "services.bootstrapReactTitle",   // references i18n key
        descKey: "services.bootstrapReactDesc"      // references i18n key
    },
    {
        icon: "fa-cogs",
        titleKey: "services.firebaseTitle",
        descKey: "services.firebaseDesc"
    },
    {
        icon: "fa-pencil-square",
        titleKey: "services.nodejsTitle",
        descKey: "services.nodejsDesc"
    }
];

const Services = () => {
    const { t } = useTranslation(); // get the t() function

    return (
        <section
            id="services"
            className="parallax"
            style={{
                backgroundImage: `url(${typewriter})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="container text-center">
                <header className="block-head">
                    {/* Use translation keys for headings */}
                    <h1>{t("services.title")}</h1>
                    <strong><p>{t("services.subtitle")}</p></strong>
                </header>

                <section className="block-body">
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-md-4">
                                <div className="service">
                                    <i className={`fa ${service.icon}`}></i>
                                    {/* Render the translated text via t(...) */}
                                    <h2>{t(service.titleKey)}</h2>
                                    <p>{t(service.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Services;
