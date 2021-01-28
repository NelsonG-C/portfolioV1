import React from "react";

const About = () => {
  return (
    <div className="container">
      
      <div className="row">
      <svg
        className="blob-svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M61.2,-15.9C70.3,8.1,62.4,41.5,42.3,55.6C22.1,69.6,-10.3,64.2,-34.2,46.8C-58.1,29.5,-73.6,0.3,-66.4,-20.9C-59.3,-42.2,-29.7,-55.5,-1.8,-54.9C26.1,-54.3,52.2,-39.9,61.2,-15.9Z"
          transform="translate(100 100)"
        />
      </svg>
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
