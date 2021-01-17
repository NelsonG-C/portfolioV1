import React from "react";

import Image from "../components/image";
// Project Data
import data from "../data/projects";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="project-img">
            <Image name="headshot" />
          </div>
        </div>
        <div className="col">
          <div className="project-card">
            <h3 className="project-title">Test Title</h3>
            <h4 className="project-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
              facilis quos harum beatae natus illo quod delectus perspiciatis
              eaque.
            </h4>
            <h4 className="project-tags"></h4>
            <div className="project-btns">
              <button className="btn-project">Github</button>
              <button className="btn-project">Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
