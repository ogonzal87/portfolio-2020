import React from "react"
import FlamingoImg1 from "../assets/images/footer/flamingo-1.svg"
import FlamingoImg2 from "../assets/images/footer/flamingo-2.svg"
import WaterImg from "../assets/images/footer/water.svg"
import SunImg from "../assets/images/footer/sun.svg"
import Link from "gatsby-link"

const PortfolioFooter = () => (
  <div className="portfolio-footer-container">
    <p className="text home-contact-links">
      <Link to="/about">About</Link> ·{" "}
      <a href="mailto:oskr.fuent@gmail.com?Subject=Hola" target="_top">
        oskr.fuent@gmail.com
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
        href="https://codesandbox.io/u/ogonzal87"
        target="_blank"
        rel="noopener noreferrer"
      >
        Codesandbox
      </a>{" "}
      ·{" "}
      <a
        href="https://medium.com/@ogonzal87"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium
      </a>{" "}
      ·{" "}
      <a
        href="https://dribbble.com/oskrhq"
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

    <div className="illustration-wrapper">
      <img src={FlamingoImg1} alt="" className="flamingo1" />
      <img src={FlamingoImg2} alt="" className="flamingo2" />

      <img src={WaterImg} alt="" className="water" />
      <img src={SunImg} alt="" className="sun" />
    </div>
  </div>
)

export default PortfolioFooter
