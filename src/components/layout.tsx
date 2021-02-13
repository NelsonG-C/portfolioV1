/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

import ThemeToggle from "./themeToggle";

import { Link, animateScroll as scroll } from "react-scroll";

import "./layout.css";

// TEST
import { slide as Menu } from "react-burger-menu";

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Menu className="menu">
        <Link
          className="menu-item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
        >
          <h4>Home</h4>
        </Link>
        <Link
          className="menu-item"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          <h4>About</h4>
        </Link>
        <Link
          className="menu-item"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
        >
          <h4>Projects</h4>
        </Link>
        <Link
          className="menu-item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
        >
          <h4>Contact</h4>
        </Link>
        <ThemeToggle />
      </Menu>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>
          <div className="page-container">{children}</div>
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
