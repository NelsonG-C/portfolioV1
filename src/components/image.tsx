import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

interface ImageProps {
  name: string;
}

const Image = (props: ImageProps) => {
  const { name } = props;
  const data = useStaticQuery(graphql`
    query {
      headshotImage: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data) {
    return <div>Picture not found</div>;
  } else if (name == "headshot") {
    return <Img fluid={data.headshotImage.childImageSharp.fluid} />;
  } else if (name == "test") {
    return <Img fluid={data.testImage.childImageSharp.fluid} />;
  } else {
    return <Img fluid={data.testImage.childImageSharp.fluid} />;
  }
};

export default Image;
