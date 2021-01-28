import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import fire from "../images/fire.png";
import ThemeToggle from "./themeToggle";

const Header = () => (
  <header className="header">
    <div
      style={{
        margin: `0 auto 0 2rem`,
        maxWidth: 960,
        padding: `.45rem 1.0875rem`,
      }}
    >
      <div className="logo">
        <img src={fire} />
      </div>
    </div>
    <div className="header-links">
      <h4>
        <a>Home</a>
      </h4>
      <h4>
        <a>About</a>
      </h4>
      <h4>
        <a>Projects</a>
      </h4>
      <h4>
        <a>Contact</a>
      </h4>
      <ThemeToggle />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
