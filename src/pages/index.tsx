import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { SVGTest } from "../test";
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
      <h1 onMouseEnter={handleEnter} onMouseLeave={handleExit}>
        Hi people
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <SVGTest />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  );
};

export default IndexPage;
