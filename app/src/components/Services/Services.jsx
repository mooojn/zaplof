import React from "react";
import Heading from "../../Heading.jsx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { services } from "../../data/data.jsx";

import "./Services.css";

const Services = () => {
  const bgColors = ["var(--primary)", "var(--secondary)"];
  const fontColors = ["var(--secondary)", "var(--primary)"];

  return (
    <>
    <div className="serivces-wrap">
    <div className="services-grid">
      {services.map((service, i) => {
        const bg = bgColors[i % bgColors.length];
        const color = fontColors[i % fontColors.length];
        return (
          <div
          key={i}
          className="service-card"
            style={{ background: bg, color: color }}
          >
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <div className="card-footer">
                <button className="learn-more">
                  <FaArrowUpRightFromSquare /> Learn more
                </button>
              </div>
            </div>

            <div className="service-icon">
              <img src={service.img} alt={service.title} />
            </div>
          </div>
        );
      })}
    </div>
          </div>
        </>
  );
}

export default Services
