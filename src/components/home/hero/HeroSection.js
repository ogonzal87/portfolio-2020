import React from "react"
import NameLogo from "../../../assets/logos/logo3.svg"
import Link from "gatsby-link"
import Tilt from "react-tilt"

export default () => {
  return (
    <div className="home-page-hero-section">
      <Tilt
        style={{ width: "100%", height: "100%" }}
        className="home-page-hero-section Tilt"
        options={{
          // glareMaxOpacity: 0.2,
          // perspective: 1000,
          // glareEnable: true,
          // glareMaxOpacity: 0.2,
          scale: 1,
          max: 10,
          gyroscope: true,
        }}
      >
        <h1
          className="og-text-style-overline hero-overline-text-style"
          style={{ textAlign: "center" }}
        >
          Hola!{" "}
          <span role="img" aria-label="emoji">
            👋🏼
          </span>{" "}
          mi nombre es
        </h1>

        <Link to="/about">
          <img
            className="portfolio-logo-img"
            src={NameLogo}
            alt="Oscar Gonzalez"
          />
        </Link>

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
      </Tilt>

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
