import React from "react";
import "./AboutSection.css"; // Move all CSS into AboutSection.css
import heroImage from "../../assets/zaplof-about.png"; // Adjust path accordingly

const AboutSection = () => {
  return (
    <div className="about-wrapper">

    <section className="about-wrap" aria-labelledby="about-heading">
      <div className="content">
        <span className="eyebrow">About Us</span>
        <h1 id="about-heading">
          A premium digital studio crafting bold product experiences
        </h1>
        <p className="lead">
          We design and build digital products — brand strategies, web
          platforms, and growth experiences — for ambitious companies that
          demand clarity, speed, and measurable results. Small team. Big
          outcomes.
        </p>

        <div className="metrics" role="list">
          <div className="metric" role="listitem">
            <div>
              <div className="num">500+</div>
              <div className="label">Projects Completed</div>
            </div>
          </div>

          <div className="metric" role="listitem">
            <div>
              <div className="num">20 yrs</div>
              <div className="label">Years Experience</div>
            </div>
          </div>

          <div className="metric" role="listitem">
            <div>
              <div className="num">200+</div>
              <div className="label">International Clients</div>
            </div>
          </div>

          <div className="metric" role="listitem">
            <div>
              <div className="num">98%</div>
              <div className="label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="card-cta">
          <a className="btn" href="#contact">
            Work with us
          </a>
          <a className="btn--ghost" href="#case-studies">
            See case studies
          </a>
        </div>
      </div>

      <div className="visual" aria-hidden="true">
        <div className="art">
          <img src={heroImage} alt="Abstract hero" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutSection;
