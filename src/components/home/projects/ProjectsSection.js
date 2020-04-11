import React from "react"
import Link from "gatsby-link"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { motion, useViewportScroll } from "framer-motion"

export default () => {
  const data = useStaticQuery(graphql`
    query ProjectImages {
      number1: file(relativePath: { eq: "images/hand-brush/01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      number2: file(relativePath: { eq: "images/hand-brush/02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      number3: file(relativePath: { eq: "images/hand-brush/03.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      project1BgImg: file(relativePath: { eq: "images/duotone2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      project1BgImg: file(relativePath: { eq: "images/duotone2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      yolkoThumbnail: file(
        relativePath: { eq: "images/yolko/thumbnail-duotone.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      viewnLogo: file(relativePath: { eq: "images/viewn/viewn-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const easing = [0.6, -0.05, 0.01, 0.99]

  const containerStagger = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const fadeUpItem = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  }

  return (
    <section>
      <motion.div
        className="home-project-card-container"
        id="work"
        variants={containerStagger}
      >
        <Link to="/projects/design-system/" className="project-link">
          <BackgroundImage
            fluid={data.project1BgImg.childImageSharp.fluid}
            className="home-project-card"
          >
            <Img
              className="number"
              fluid={data.number1.childImageSharp.fluid}
              alt="number 1"
            />
            <div className="home-project-card-title-container">
              <motion.span
                className="og-text-style-overline"
                variants={fadeUpItem}
              >
                Company work + Personal Project
              </motion.span>
              <motion.h3 className="project-title" variants={fadeUpItem}>
                OSKRHQ Design System
              </motion.h3>
              <motion.span
                className="og-text-style-overline project-card__footer-text"
                variants={fadeUpItem}
              >
                DESIGN SYSTEMS | DEVELOPMENT | CREATIVE DIRECTION AND
                MULTIDISCIPLINARY DESIGN | RESEARCH | SALES
              </motion.span>
            </div>
          </BackgroundImage>
        </Link>
      </motion.div>

      <div className="home-project-card-container">
        <Link to="/projects/client/" className="project-link">
          <BackgroundImage
            fluid={data.viewnLogo.childImageSharp.fluid}
            className="home-project-card"
          >
            <Img
              className="number"
              fluid={data.number2.childImageSharp.fluid}
              alt="number 2"
            />
            <div className="home-project-card-title-container">
              <span className="og-text-style-overline ">Client Work</span>
              <h3 className="project-title">VIEWN</h3>
              <span className="og-text-style-overline project-card__footer-text">
                BRAND IDENTITY | CREATIVE DIRECTION AND MULTIDISCIPLINARY DESIGN
                | UX RESEARCH
              </span>
            </div>
          </BackgroundImage>
        </Link>
      </div>

      <div className="home-project-card-container">
        <Link to="/projects/yolko/" className="project-link">
          <BackgroundImage
            fluid={data.yolkoThumbnail.childImageSharp.fluid}
            className="home-project-card"
          >
            <Img
              className="number"
              fluid={data.number3.childImageSharp.fluid}
              alt="number 3"
            />
            <div className="home-project-card-title-container">
              <span className="og-text-style-overline">Personal Project</span>
              <h3 className="project-title">YOLKO</h3>
              <span className="og-text-style-overline project-card__footer-text">
                PRODUCT, INTERACTION AND EXPERIENCE DESIGN | DEVELOPMENT | UX
                RESEARCH
              </span>
            </div>
          </BackgroundImage>
        </Link>
      </div>
    </section>
  )
}
