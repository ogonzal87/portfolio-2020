import React from "react"
import NameLogo from "../../../assets/logos/logo3.svg"
import Link from "gatsby-link"
import Tilt from "react-tilt"
import palmsIllustrationFront from "../../../assets/images/palms/front.svg"
import palmsIllustrationMiddle from "../../../assets/images/palms/middle.svg"
import palmsIllustrationBack from "../../../assets/images/palms/back.svg"

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
      <div
        className="home-page-hero-section"
        // style={{ backgroundPositionY: `${this.state.offset}px` }}
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

        <h1
          className="og-text-style-overline hero-doverline-text-style"
          style={{}}
        >
          Hola!{" "}
          <span role="img" aria-label="emoji">
            👋🏼
          </span>{" "}
          mi nombre es
        </h1>

        <div style={{ height: "200px" }}></div>

        <Tilt
          className="portfolio-logo-container Tilt"
          options={{
            glareMaxOpacity: 0.2,
            perspective: 1000,
            glareEnable: true,
            glareMaxOpacity: 0.2,
            scale: 1,
            max: 10,
            gyroscope: true,
          }}
        >
          <Link to="/about">
            <img
              className="portfolio-logo-img"
              src={NameLogo}
              alt="Oscar Gonzalez"
            />
          </Link>
        </Tilt>

        <i>
          <h5 className="hero-subheading-text">
            I’m a{" "}
            <a
              href="https://uxplanet.org/ux-engineers-what-we-are-2b0c4d10b3a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              UX Engineer
            </a>{" "}
            and Product Designer. By day I design and {"<code />"} digital
            products specializing in multi-platform{" "}
            <a
              href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              Design Systems
            </a>{" "}
            for large enterprises. By night I enjoy making art with code, making
            moss art and doing illustrations.
          </h5>
        </i>

        <p className="home-contact-links">
          <Link to="/about">About</Link> ·{" "}
          <a
            href="mailto:someone@example.com?Subject=Hello%20again"
            target="_top"
          >
            oscar@oskrhq.com
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/ogonzal87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          ·{" "}
          <a
            href="https://codepen.io/ogonzal87/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codepen
          </a>{" "}
          ·{" "}
          <a
            href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>{" "}
          ·{" "}
          <a
            href="https://dribbble.com/ogonzal87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>{" "}
          ·{" "}
          <a
            href="https://www.instagram.com/oskrhq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    )
  }
}

export default HeroSection
