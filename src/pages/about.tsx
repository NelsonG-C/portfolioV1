import React from "react";

const About = () => {
  return (
    <div className="container">
    <div className="about-grid">
      <svg className="blob-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF7F50" d="M39.7,-69.3C52.7,-61.3,65.2,-53.1,72.3,-41.5C79.3,-29.9,80.9,-15,81.2,0.2C81.5,15.3,80.5,30.6,74.6,44.2C68.7,57.7,57.8,69.5,44.5,73.1C31.3,76.8,15.6,72.3,2.6,67.8C-10.5,63.3,-20.9,58.8,-35.3,55.9C-49.8,52.9,-68.1,51.4,-77.3,42.4C-86.5,33.3,-86.5,16.7,-82,2.6C-77.4,-11.4,-68.4,-22.8,-60.6,-34.3C-52.7,-45.7,-46.1,-57.1,-36.3,-66.9C-26.4,-76.6,-13.2,-84.7,0.1,-84.9C13.4,-85.1,26.8,-77.3,39.7,-69.3Z" transform="translate(100 100)" />
</svg>
        <div className="about-writing">
            <h2 className="about-heading col">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              asperiores eos aliquam. Nihil, commodi laborum. Quo totam
              dignissimos aliquam debitis.
            </p>
        </div>
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
      </div>
    </div>
  );
};

export default About;
