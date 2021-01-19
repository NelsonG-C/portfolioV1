import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="about-col">
          <div className="about-content">
            <h2 className="about-heading col">About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              asperiores eos aliquam. Nihil, commodi laborum. Quo totam
              dignissimos aliquam debitis.
            </p>
          </div>
        </div>
        <div className="about-col-2">
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
    </div>
  );
};

export default About;
