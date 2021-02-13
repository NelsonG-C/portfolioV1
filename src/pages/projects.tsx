import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import "../styles/style.css";

import Reveal from "react-reveal/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// work needed: separate code out for the project component

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              photo {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              date
              github
              stack
              site
            }
            html
          }
        }
      }
    }
  `);
  const projects = data.projects.edges.filter(({ node }: any) => node);
  console.log(projects);

  fetch("https://api.github.com/users/NelsonG-C")
    .then(response => {
      const result = response.json();
      return result;
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));
  return (
    <div id="projects" className="project-container container">
      <h2 className="project-heading">Projects</h2>
      {projects.map((project: any, i: number) => {
        const { frontmatter, html } = project.node;
        console.log(project);
        const { title, photo, date, github, stack, site } = frontmatter;
        return (
          <div className="project-dir">
            <div className="grid-container">
              <div className="item1">
                <div>
                  <Img
                    fluid={photo.childImageSharp.fluid}
                    className="project-img"
                  />
                </div>
              </div>
              <Reveal effect="fade">
                <div className="item2">
                  <div className="project-card">
                    <h5 className="project-subtitle">Featured Project</h5>
                    <h3 className="project-title">{title}</h3>
                    <div
                      className="project-info"
                      dangerouslySetInnerHTML={{ __html: html }}
                    ></div>
                    <h4 className="project-tags">
                      {stack.map((tag: string, index: number) => {
                        return (
                          <p key={index} className="p-tag">
                            {tag}
                          </p>
                        );
                      })}
                    </h4>
                    <div className="project-btns">
                      <button className="contact-btn">
                        <a href={github}>
                          <FaGithub />
                        </a>
                      </button>
                      <button className="contact-btn">
                        <a href={site}>
                          <FaExternalLinkAlt />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
