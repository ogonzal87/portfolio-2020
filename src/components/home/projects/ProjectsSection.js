import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeUpItem = {
    initial: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
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

  const rotateHoverItem = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      scale: 1.2,
      rotate: 90,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section id="projects">
      <motion.div
        initial="initial"
        className="home-project-card-container"
        whileHover="animate"
      >
        <AniLink
          to="/projects/design-system/"
          paintDrip
          duration={0.75}
          hex="#5900FF"
          className="project-link"
        >
          <BackgroundImage
            fluid={data.project1BgImg.childImageSharp.fluid}
            className="home-project-card"
          >
            <motion.div
              variants={rotateHoverItem}
              className="card-hover-decoration"
            ></motion.div>
            <Img
              className="number"
              fluid={data.number1.childImageSharp.fluid}
              alt="number 1"
            />
            <motion.div
              variants={containerStagger}
              className="home-project-card-title-container"
            >
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
            </motion.div>
          </BackgroundImage>
        </AniLink>
      </motion.div>

      <motion.div
        className="home-project-card-container"
        whileHover="animate"
        initial="initial"
      >
        <AniLink
          to="/projects/client/"
          className="project-link"
          paintDrip
          duration={0.75}
          hex="#5900FF"
        >
          <BackgroundImage
            fluid={data.viewnLogo.childImageSharp.fluid}
            className="home-project-card"
          >
            <motion.div
              variants={rotateHoverItem}
              className="card-hover-decoration"
            ></motion.div>
            <Img
              className="number"
              fluid={data.number2.childImageSharp.fluid}
              alt="number 2"
            />
            <motion.div
              className="home-project-card-title-container"
              variants={containerStagger}
            >
              <motion.span
                className="og-text-style-overline"
                variants={fadeUpItem}
              >
                Client Work
              </motion.span>
              <motion.h3 className="project-title" variants={fadeUpItem}>
                VIEWN
              </motion.h3>
              <motion.span
                className="og-text-style-overline project-card__footer-text"
                variants={fadeUpItem}
              >
                BRAND IDENTITY | CREATIVE DIRECTION AND MULTIDISCIPLINARY DESIGN
                | UX RESEARCH
              </motion.span>
            </motion.div>
          </BackgroundImage>
        </AniLink>
      </motion.div>

      <motion.div
        className="home-project-card-container"
        whileHover="animate"
        initial="initial"
      >
        <AniLink
          to="/projects/yolko/"
          className="project-link"
          paintDrip
          duration={0.75}
          hex="#5900FF"
        >
          <BackgroundImage
            fluid={data.yolkoThumbnail.childImageSharp.fluid}
            className="home-project-card"
          >
            <motion.div
              variants={rotateHoverItem}
              className="card-hover-decoration"
            ></motion.div>
            <Img
              className="number"
              fluid={data.number3.childImageSharp.fluid}
              alt="number 3"
            />
            <motion.div
              className="home-project-card-title-container"
              variants={containerStagger}
            >
              <motion.span
                className="og-text-style-overline"
                variants={fadeUpItem}
              >
                Personal Project
              </motion.span>
              <motion.h3 className="project-title" variants={fadeUpItem}>
                YOLKO
              </motion.h3>
              <motion.span
                className="og-text-style-overline project-card__footer-text"
                variants={fadeUpItem}
              >
                PRODUCT, INTERACTION AND EXPERIENCE DESIGN | DEVELOPMENT | UX
                RESEARCH
              </motion.span>
            </motion.div>
          </BackgroundImage>
        </AniLink>
      </motion.div>
    </section>
  )
}
