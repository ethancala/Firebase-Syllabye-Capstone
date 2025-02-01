/* eslint-disable no-unused-vars */
import React from "react";
import "./Services.css"; // Ensure styles are imported

const servicesData = [
  {
    icon: "fa-laptop",
    title: "Stuff We Do 1",
    description: "The flibberjab was in full swing, and the snorklewhack had just begun. Everyone in the village gathered around the bumblefluff tree, where the annual zizzlepop festival was taking place. The mayor, a rather eccentric womblydoodle, stood on a quibberknack and declared, 'Let the fizzlewump commence!'",
  },
  {
    icon: "fa-cogs",
    title: "Stuff We Do 2",
    description: "Meanwhile, in the nearby snargleblast forest, a group of jibberjangle enthusiasts were busy practicing their wobblefritz routines. They claimed it was the key to unlocking the secrets of the zorpalicious universe, though most people just thought they were making it up.",
  },
  {
    icon: "fa-pencil-square",
    title: "Stuff We Do 3",
    description: "The quizzlewhomp orchestra started playing, and the crowd erupted into a spontaneous gigglesnort dance. It was a night to remember, filled with blorpadoo and snarglewhiff magic. And as the clock struck zizzlepop, everyone agreed it was the silliest, most wonderful day of the year.",
    },
];

const Services = () => {
    return (
        <section id="services" className="content-block parallax">
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
