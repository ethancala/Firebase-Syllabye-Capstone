import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const TeamCarousel = ({ teamMembers }) => {
  const marqueeRef = useRef(null);
  const animation = useRef(null);
  const clones = useRef([]);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let ctx = gsap.context(() => {
      // Clear clones
      clones.current.forEach((clone) => clone.remove());
      clones.current = [];

      // Original items
      const items = gsap.utils.toArray(".marquee-item", marquee);
      if (!items.length) return;

      // Clone items once
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
        clones.current.push(clone);
      });

      const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);

      // Animate the marquee's x value infinitely
      animation.current = gsap.to(marquee, {
        x: `-=${totalWidth * 2}`,
        duration: 60,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const wrapped = x % totalWidth;
            return wrapped;
          }),
        },
      });

      marquee.addEventListener("mouseenter", () => animation.current.pause());
      marquee.addEventListener("mouseleave", () => animation.current.resume());
    }, marquee);

    const onResize = () => {
      ctx.revert();
      ctx.init();
    };

    window.addEventListener("resize", onResize);
    return () => {
      ctx.revert();
      window.removeEventListener("resize", onResize);
    };
  }, [teamMembers]);

  const navigate = (direction) => {
    if (!animation.current) return;

    const progress = animation.current.progress();
    const snapPoint = gsap.utils.snap(
      1 / teamMembers.length,
      direction === "next"
        ? progress + 1 / teamMembers.length
        : progress - 1 / teamMembers.length
    );

    gsap.to(animation.current, {
      progress: snapPoint,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee" ref={marqueeRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className="marquee-item">
              <article className="member">
                <a
                  className="member-link"
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="member-img-wrapper">
                    <img
                      className="member-img"
                      src={member.imgSrc}
                      alt={member.name}
                      loading="lazy"
                    />
                  </figure>
                  <figcaption className="member-details">
                    <h3 className="member-title">{member.name}</h3>
                    <p className="member-subtitle">{member.role}</p>
                  </figcaption>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="marquee-arrow arrow-prev"
        onClick={() => navigate("prev")}
        aria-label="Previous team member"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      </button>
      <button
        className="marquee-arrow arrow-next"
        onClick={() => navigate("next")}
        aria-label="Next team member"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </button>
    </div>
  );
};

TeamCarousel.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamCarousel;
