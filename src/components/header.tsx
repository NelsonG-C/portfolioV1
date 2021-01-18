import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import fire from "../images/fire.png";

const Header = () => (
  <header className="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.45rem 1.0875rem`,
      }}
    >
      <div className="logo">
        <img src={fire} />
      </div>
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
