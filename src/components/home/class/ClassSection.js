import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classHandLetteringImg from "../../../assets/images/hand-brush/classes.png"
import BackgroundImage from "gatsby-background-image"

export default () => {
  const data = useStaticQuery(graphql`
    query ClassImages {
      skillShareClassImg: file(
        relativePath: { eq: "images/skillshare-class1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section>
      <a
        href="https://skl.sh/2yhdemt"
        target="_blank"
        rel="noopener noreferrer"
        className="home-class-section home-page-section"
      >
        <div className="section-title-container">
          <img
            src={classHandLetteringImg}
            alt="number"
            className="home-brush-lettering class"
          />
        </div>
        <BackgroundImage
          fluid={data.skillShareClassImg.childImageSharp.fluid}
          className="class-card"
        >
          <div className="home-project-card-title-container">
            <span className="og-text-style-overline">SkillShare class</span>
            <h3 className="project-title">Should Designers Code?</h3>
            <span className="og-text-style-overline project-card__footer-text">
              A HUMBLE ATTEMPT TO BUILD EMPATHY BETWEEN DESIGNERS AND DEVELOPERS
            </span>
          </div>
        </BackgroundImage>
      </a>
    </section>
  )
}
