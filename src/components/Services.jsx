/* eslint-disable no-unused-vars */
import React from "react";
import "./Services.css"; // Ensure styles are imported
import typewriter from "/images/typewriter.jpeg"; // Import from public folder

const servicesData = [
    {
        icon: "fa-laptop",
        title: "Boostrap in React",
        description: "We use the React front-end framework alongside Bootstrap to build a responsive and dynamic user interface.",
    },
    {
        icon: "fa-cogs",
        title: "Google Firebase",
        description: "Firebase provides authentication, cloud storage, and a real-time database, ensuring that each user has a personalized and secure experience with their own SyllaBye.",
    },
    {
        icon: "fa-pencil-square",
        title: "Node.js",
        description: "We use Node.js for its fast, scalable server-side capabilities, allowing us to handle real-time data processing and ensure smooth, efficient performance for our application.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="parallax"  // ✅ Add Parallax Class Here
            style={{
                backgroundImage: `url(${typewriter})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", // ✅ Ensure Parallax Effect
            }}
        >
            <div className="container text-center">
                <header className="block-head">
                    <h1>About our software</h1>
                    <strong><p>A little about what we do</p></strong>
                </header>

                <section className="block-body">
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-md-4">
                                <div className="service">
                                    <i className={`fa ${service.icon}`}></i>
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
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
