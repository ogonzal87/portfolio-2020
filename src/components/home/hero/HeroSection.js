import React from "react"
import NameLogo from "../../../assets/logos/logo3.svg"
import Tilt from "react-tilt"
import palmsIllustrationFront from "../../../assets/images/palms/front.svg"
import palmsIllustrationMiddle from "../../../assets/images/palms/middle.svg"
import palmsIllustrationBack from "../../../assets/images/palms/back.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import ogAnimation from "../../../assets/animations/animations-helper"

class HeroSection extends React.Component {
  state = {
    offset: 0,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift)
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    })
  }

  render() {
    return (
      <motion.div
        className="home-page-hero-section"
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        id="hero"
      >
        <img
          src={palmsIllustrationFront}
          alt=" "
          className="hero-palms-illustration"
          style={{ top: `${this.state.offset * -1}px` }}
        />
        <img
          src={palmsIllustrationMiddle}
          alt=" "
          className="hero-palms-illustration"
          style={{ top: `${this.state.offset * -0.8}px` }}
        />
        <img
          src={palmsIllustrationBack}
          alt=" "
          className="hero-palms-illustration"
          style={{ top: `${this.state.offset * -0.5}px` }}
        />

        <motion.div
          variants={ogAnimation.containerStagger}
          className="home-page-hero-section"
        >
          <motion.h1
            className="og-text-style-overline hero-doverline-text-style"
            variants={ogAnimation.fadeUpItem}
          >
            Hola!{" "}
            <span role="img" aria-label="emoji">
              👋🏼
            </span>{" "}
            mi nombre es
          </motion.h1>

          <motion.div
            variants={ogAnimation.fadeUpItem}
            className="hero-empty-div"
          ></motion.div>

          <Tilt
            className="portfolio-logo-container Tilt"
            options={{
              perspective: 1000,
              glareEnable: true,
              glareMaxOpacity: 0.2,
              scale: 1,
              max: 10,
              gyroscope: true,
            }}
          >
            <AniLink paintDrip to="/about" duration={0.75} hex="#5900FF">
              <motion.img
                className="portfolio-logo-img"
                src={NameLogo}
                alt="Oscar Gonzalez"
                variants={ogAnimation.fadeItem}
              />
            </AniLink>
          </Tilt>

          <motion.h2
            className="hero-subheading-text"
            variants={ogAnimation.fadeUpItem}
          >
            I’m a self-taught{" "}
            <a
              href="https://uxplanet.org/ux-engineers-what-we-are-2b0c4d10b3a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              UX Engineer
            </a>{" "}
            and Product Designer. By day I work on digital interfaces at{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              LinkedIn
            </a>{" "}
            concentrating on accessible multi-platform{" "} 
            <a
              href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              Design Systems
            </a>,{" "}
            product redesign and Dark Mode. By night I make art with code or
            plants, some calligraphy, illustrations and music.
          </motion.h2>
        </motion.div>
      </motion.div>
    )
  }
}

export default HeroSection
