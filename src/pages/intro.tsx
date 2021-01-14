import React from "react";

// Images
import Image from "../components/image";

// Styles
import "../styles/style.css";

const Intro = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="headshot">
            <Image name="headshot" />
          </div>
        </div>
        <div className="col">
          <h1>Hi I'm Nelson</h1>
          <h2>Full Stack Developer, based in Australia</h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
