import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "../components/image";
import Img from "gatsby-image";
import "../styles/style.css";
// Project Data
import data from "../data/projects";

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
    <div className="project-container container">
      <h2 className="project-heading">Projects</h2>
      {projects.map((project: any, i: number) => {
        const { frontmatter, html } = project.node;
        console.log(project);
        const { title, photo, date, github, stack, site } = frontmatter;
        return (
          <div className="project-dir">
            <div key={i} className="row">
              <div className="project-image-col col">
                <div className="project-img">
                  <Img
                    fluid={photo.childImageSharp.fluid}
                    className="project-img"
                  />
                </div>
              </div>
              <div className="col">
                <div className="project-card">
                  <h5 className="project-subtitle">Featured Project</h5>
                  <h3 className="project-title">{title}</h3>
                  <div
                    className="project-info"
                    dangerouslySetInnerHTML={{ __html: html }}
                  ></div>
                  <h4 className="project-tags">{stack}</h4>
                  <div className="project-btns">
                    <button className="btn-project">
                      <a href={github}>Github</a>
                    </button>
                    <button className="btn-project">
                      <a href={site}>Website</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
