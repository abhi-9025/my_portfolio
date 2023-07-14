import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description: "lkwnhfahskjdgfivcsgdf",
    imaUrl: images.about01,
  },
  {
    title: "Android Development",
    description: "lkwnhfahskjdgfivcsgdf",
    imaUrl: images.about02,
  },
  {
    title: "Backend Development Development",
    description: "lkwnhfahskjdgfivcsgdf",
    imaUrl: images.about03,
  },
  {
    title: "full-stack Development",
    description: "lkwnhfahskjdgfivcsgdf",
    imaUrl: images.about04,
  },
];
const About = () => {
  return (
    <div className="app__about">
      <h2 className="head-text">
        Good Designs, <span style={{color:'black'}}>greate UI </span>
        <br />  <span> Better Apps</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile_item"
              key={about.title + index}
            >
              <img src={about.imaUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
