import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <motion.div
        className="hero"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1>
          Empowering brands
          <br />
          with stunning websites
          <br />
          built for growth
        </h1>
        <p>Webflow Design Studio and Certified Partner</p>

        <motion.button
          className="call-to-action"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.3 }}
        >
          LET’S TALK
        </motion.button>
      </motion.div>
    </>
  );
};

export default Hero;
