import React, { useEffect, useState } from "react";

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Error loading experiences:", err));
  }, []);

  return (
    <div>
      <h2>Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>{exp.company}</h3>
          <p><strong>Period:</strong> {exp.period}</p>
          <p><strong>Role:</strong> {exp.role}</p>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
