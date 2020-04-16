import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import thoughtsImg from "../../../assets/images/hand-brush/thoughts.png"
import { motion } from "framer-motion"

export default () => {
  const data = useStaticQuery(graphql`
    query ThoughtsImages {
      thoughtsImg: file(
        relativePath: { eq: "images/hand-brush/thoughts.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediumPost1Img: file(relativePath: { eq: "images/duotone1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediumPost2Img: file(relativePath: { eq: "images/duotone2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost3Img: file(relativePath: { eq: "images/duotone3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost4Img: file(relativePath: { eq: "images/walle-min.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost5Img: file(relativePath: { eq: "images/oskrhq-ds-min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const easing = [0.6, -0.05, 0.01, 0.99]

  const fadeItem = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: easing,
      },
    },
  }

  const rotateHoverItem1 = {
    initial: {
      opacity: 0,
      rotate: 25,
    },
    animate: {
      opacity: 1,
      rotate: 45,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const rotateHoverItem2 = {
    initial: {
      opacity: 0,
      rotate: -25,
    },
    animate: {
      opacity: 1,
      rotate: -45,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section className="home-page-section home-thoughts-section">
      <div className="section-title-container">
        <img
          src={thoughtsImg}
          alt="title"
          className="home-brush-lettering thoughts"
        />
      </div>
      <motion.ul
        className="home-posts-container"
        animate="animate"
        initial="initial"
      >
        <motion.li>
          <motion.div className="home-post-card">
            <motion.a
              href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="animate"
            >
              <Img
                fluid={data.mediumPost1Img.childImageSharp.fluid}
                alt="article post"
                className="img-thumbnail"
              />
              <motion.div className="cta-overlay" variants={fadeItem}>
                <p className="og-text-style-heading4">Read it =></p>
              </motion.div>
            </motion.a>
          </motion.div>
          <div className="post-text-container">
            <h5 className="og-text-style-heading6">
              The Anatomy of All Digital Interfaces
            </h5>
            <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
          </div>
        </motion.li>

        <motion.li>
          <motion.div className="home-post-card">
            <motion.a
              href="https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="animate"
            >
              <Img
                fluid={data.mediumPost3Img.childImageSharp.fluid}
                alt="article post"
                className="img-thumbnail"
              />
              <motion.div className="cta-overlay" variants={fadeItem}>
                <p className="og-text-style-heading4">Read it =></p>
              </motion.div>
            </motion.a>
          </motion.div>
          <div className="post-text-container">
            <h5 className="og-text-style-heading6">
              Crafting a New Visual Language
            </h5>
            <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
          </div>
        </motion.li>

        <motion.li>
          <motion.div className="home-post-card">
            <motion.a
              href="https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="animate"
            >
              <Img
                fluid={data.mediumPost2Img.childImageSharp.fluid}
                alt="article post"
                className="img-thumbnail"
              />
              <motion.div className="cta-overlay" variants={fadeItem}>
                <p className="og-text-style-heading4">Read it =></p>
              </motion.div>
            </motion.a>
          </motion.div>
          <div className="post-text-container">
            <h5 className="og-text-style-heading6">
              A Dictionary for a Design Language
            </h5>
            <span className="ds-overlay-text-style">MEDIUM, PROTOTYPR</span>
          </div>
        </motion.li>

        <motion.li>
          <motion.div className="home-post-card">
            <motion.a
              href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="animate"
            >
              <Img
                fluid={data.mediumPost4Img.childImageSharp.fluid}
                alt="article post"
                className="img-thumbnail"
              />
              <motion.div className="cta-overlay" variants={fadeItem}>
                <p className="og-text-style-heading4">Read it =></p>
              </motion.div>
            </motion.a>
          </motion.div>
          <div className="post-text-container">
            <h5 className="og-text-style-heading6">
              Homosapien-ing Interfaces
            </h5>
            <span className="ds-overlay-text-style">MEDIUM, UX Collective</span>
          </div>
        </motion.li>

        <motion.li>
          <motion.div className="home-post-card">
            <motion.a
              href="https://medium.com/@ogonzal87/how-i-made-a-themeable-design-system-for-my-professional-brand-oskrhq-ds-1c10f5b87587"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="animate"
            >
              <Img
                fluid={data.mediumPost5Img.childImageSharp.fluid}
                alt="article post"
                className="img-thumbnail"
              />
              <motion.div className="cta-overlay" variants={fadeItem}>
                <p className="og-text-style-heading4">Read it =></p>
              </motion.div>
            </motion.a>
          </motion.div>

          <div className="post-text-container">
            <h5 className="og-text-style-heading6">
              How I made a themeable Design System for my Professional Brand
            </h5>

            <span className="ds-overlay-text-style">MEDIUM</span>
          </div>
        </motion.li>
      </motion.ul>
    </section>
  )
}
