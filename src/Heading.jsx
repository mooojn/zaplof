import React from 'react'

const Heading = ({ head = 'heading', end = '', description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum quo, odit dignissimos voluptatibus minus magnam reprehenderit repellat nam quasi?' }) => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "20px", fontFamily: "Consolas", color: "var(--primary)" }}>
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
        <p>{description}</p>
      </div>
    </>
  )
}

export default Heading
