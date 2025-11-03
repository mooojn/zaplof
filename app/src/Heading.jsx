import React from 'react'

const Heading = ({ head = '', end = '', description = '' }) => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "20px", fontFamily: "Consolas", color: "var(--primary)", marginBottom: "50px"}}>
        <h1 style={{}}>
          {head}{" "}
          <span
            style={{
              background: "linear-gradient(white, var(--primary), white)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {end}
          </span>
        </h1>
        <p style={{ color: "var(--neutral)", maxWidth: "1000px", textAlign: "center", margin: "0 auto" }}>
          {description}
        </p>
      </div>
    </>
  )
}

export default Heading
