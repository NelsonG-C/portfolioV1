import React from "react";
import Reveal from "react-reveal/Reveal";
import Fade from 'react-reveal/Fade';
import "../styles/style.css"

const About = () => {
  return (
    <div className="container about-container">
    <div className="about-grid">
    <svg className="blob-svg" viewBox="-200 -400 800 800" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF7F50" d="M70.3,-22.6C79.3,5,66.8,39.8,41.8,58.2C16.8,76.5,-20.7,78.3,-45.4,60.8C-70.1,43.3,-81.9,6.4,-72.2,-22.1C-62.5,-50.5,-31.3,-70.6,-0.3,-70.5C30.6,-70.4,61.3,-50.1,70.3,-22.6Z" transform="translate(100 100)" />
</svg> 
      <Reveal effect="fadeUp">
        <div className="about-writing">
            <h2 className="about-heading col">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              asperiores eos aliquam. Nihil, commodi laborum. Quo totam
              dignissimos aliquam debitis.
            </p>
        </div>
        </Reveal>
        <Fade>
          <div className="about-words">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>AWS</li>
              <li>NodeJS</li>
              <li>Agile</li>
            </ul>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
