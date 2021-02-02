import React from "react";

// Images
import Image from "../components/image";

// Styles
import "../styles/style.css";

const Intro = () => {
  return (
    <div className="intro-block">
      <div className="container">
        <div className="row">
          <div className="headshot-col col">
            <div className="headshot">
              <Image name="headshot" />
            </div>
          </div>
          <div className="intro-desc col">
            <h1>Hi, I'm Nelson</h1>
            <h2>Full Stack Developer, based in Australia</h2>
            <p className="intro-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique totam reprehenderit perferendis optio, expedita magni
              nemo quisquam atque incidunt nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
