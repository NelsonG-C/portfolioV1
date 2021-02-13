import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

//import Pages
import Intro from "../pages/intro";
import Projects from "../pages/projects";
import Contacts from "../pages/contact";
import About from "../pages/about";

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
      <Intro />
      <About />
      <Projects />
      <Contacts />
    </Layout>
  );
};

export default IndexPage;
