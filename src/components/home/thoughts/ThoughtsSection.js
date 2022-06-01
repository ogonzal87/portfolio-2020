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
      mediumPost1Img: file(relativePath: { eq: "images/anatomy-hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mediumPost2Img: file(
        relativePath: { eq: "images/dictionary-hero1.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost3Img: file(relativePath: { eq: "images/language-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost4Img: file(relativePath: { eq: "images/walle-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost5Img: file(relativePath: { eq: "images/ds-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost6Img: file(
        relativePath: { eq: "images/design-for-conversations.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost7Img: file(relativePath: { eq: "images/design-tokens.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost8Img: file(
        relativePath: { eq: "images/motion-design-tokens.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mediumPost9Img: file(
        relativePath: { eq: "images/design-for-blind.png" }
      ) {
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
        duration: 0.4,
        ease: easing,
      },
    },
  }

  return (
    <div style={{ position: "relative" }}>
      <p className="marquee">
        <span>
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts thoughts thoughts thoughts thoughts
          thoughts thoughts thoughts
        </span>
      </p>
      <section
        className="home-page-section home-thoughts-section"
        id="thoughts"
      >
        <img
          src={thoughtsImg}
          alt="title"
          className="home-brush-lettering thoughts"
        />

        <motion.ul
          className="home-posts-container"
          animate="animate"
          initial="initial"
        >
          <motion.li>
            <motion.div className="home-post-card">
              <motion.a
                href="https://medium.com/@ogonzal87/design-for-the-blind-39eec9ca419b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="animate"
              >
                <Img
                  fluid={data.mediumPost9Img.childImageSharp.fluid}
                  alt="article post"
                  className="img-thumbnail"
                />
                <motion.div className="cta-overlay" variants={fadeItem}>
                  <p className="og-text-style-heading4">Read it =></p>
                </motion.div>
              </motion.a>
            </motion.div>

            <div className="post-text-container">
              <h5 className="og-text-style-heading6">Design for the blind</h5>

              <span className="ds-overlay-text-style">MEDIUM</span>
            </div>
          </motion.li>

          <motion.li>
            <motion.div className="home-post-card">
              <motion.a
                href="https://medium.com/@ogonzal87/animation-motion-design-tokens-8cf67ffa36e9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="animate"
              >
                <Img
                  fluid={data.mediumPost8Img.childImageSharp.fluid}
                  alt="article post"
                  className="img-thumbnail"
                />
                <motion.div className="cta-overlay" variants={fadeItem}>
                  <p className="og-text-style-heading4">Read it =></p>
                </motion.div>
              </motion.a>
            </motion.div>

            <div className="post-text-container">
              <h5 className="og-text-style-heading6">Motion Design Tokens</h5>

              <span className="ds-overlay-text-style">MEDIUM</span>
            </div>
          </motion.li>

          <motion.li>
            <motion.div className="home-post-card">
              <motion.a
                href="https://uxdesign.cc/design-tokens-cheatsheet-927fc1404099"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="animate"
              >
                <Img
                  fluid={data.mediumPost7Img.childImageSharp.fluid}
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
                Design Tokens cheatsheet
              </h5>

              <span className="ds-overlay-text-style">
                MEDIUM, UX Collective
              </span>
            </div>
          </motion.li>

          <motion.li>
            <motion.div className="home-post-card">
              <motion.a
                href="https://medium.com/p/why-great-conversationalists-make-great-designers-c845039b9ab5?source=email-f1128363359a--writer.postDistributed&sk=44404496ea3566cc9c224673cc5c4a16"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="animate"
              >
                <Img
                  fluid={data.mediumPost6Img.childImageSharp.fluid}
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
                Design for conversations. Not screens.
              </h5>

              <span className="ds-overlay-text-style">
                MEDIUM, UX Collective
              </span>
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

              <span className="ds-overlay-text-style">MEDIUM, Javascript</span>
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
              <span className="ds-overlay-text-style">
                MEDIUM, UX Collective
              </span>
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
        </motion.ul>

        <a
          href="https://medium.com/@ogonzal87"
          target="_blank"
          rel="noopener noreferrer"
          className="show-more-link"
          style={{ margin: `64px auto`, marginBottom: 0 }}
        >
          Read more ➡
        </a>
      </section>
    </div>
  )
}
