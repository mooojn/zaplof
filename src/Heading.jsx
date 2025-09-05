import React from 'react'

const Heading = () => {
  return (
    <h1 style={{ fontSize: "40px", fontFamily: "Consolas", color: "var(--primary)" }}>
      Recent{" "}
      <span
        style={{
          fontSize: "40px",
          fontFamily: "Consolas",
          background: "linear-gradient(white, var(--primary), white)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Projects
      </span>
    </h1>
  )
}

export default Heading
