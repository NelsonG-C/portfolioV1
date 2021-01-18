import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

//import Pages
import Intro from "../pages/intro";
import Projects from "../pages/projects";
import Contacts from "../pages/contact";

import { SVGTest } from "../test";
import "@fontsource/montserrat";
import "../styles/style.css";

const IndexPage = () => {
  const handleEnter = () => {
    document.body.classList.add("lighttheme");
  };

  const handleExit = () => {
    document.body.classList.remove("lighttheme");
  };

  return (
    <Layout>
      <SEO title="Home" />
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
      <Intro />
      <Projects />
      <Contacts />
      <h1 onMouseEnter={handleEnter} onMouseLeave={handleExit}>
        Hi people
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <SVGTest />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image name="headshot" />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  );
};

export default IndexPage;
