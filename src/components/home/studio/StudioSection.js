import React from "react"
import profilePic from "../../../assets/images/profile-pic2.jpg"
import StudioImg from "../../../assets/images/hand-brush/studio.png"
import { Parallax } from "react-scroll-parallax"

const StudioSection = () => {
  return (
    <section className="home-studio-section">
      <Parallax
        className="section-title-container"
        y={[-20, 20]}
        tagOuter="figure"
      >
        <img
          src={StudioImg}
          alt="Studio"
          className="home-brush-lettering studio"
        />
      </Parallax>

      <div className="text-container">
        <p className="home-studio-section-paragraph">
          I was born and raised in Colombia but now I live in San Francisco
          working at{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hightlighted-offset"
          >
            LinkedIn
          </a>
          . I’ve been working as a interdisciplinary Designer for over a decade.
          My current focus is building multi-platform{" "}
          <span className="hightlighted-offset">Design Systems</span> for large
          enterprises with a strong foundation in{" "}
          <span className="hightlighted-offset">accessibility</span> and{" "}
          <span className="hightlighted-offset">inclusivity</span>.
        </p>

        <div className="columns">
          <div>
            <h4 className="og-text-style-overline">Design</h4>
            <ul className="column">
              <li>Product Design</li>
              <li>User Interface</li>
              <li>Illustration</li>
              <li>User Experience</li>
              <li>Webflow designer</li>
            </ul>
          </div>

          <div>
            <h4 className="og-text-style-overline">Code</h4>
            <ul className="column">
              <li>React web developer</li>
              <li>Face filters for Social Media</li>
              <li>Code prototyping</li>
              <li>Code prototyping</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="profile-img-wrapper">
        <Parallax y={[-20, 20]} tagOuter="figure">
          <img
            className="studio-profile-picture"
            src={profilePic}
            alt="profile"
          />
        </Parallax>

        <div className="studio-decorative-div"></div>
      </div>
    </section>
  )
}

export default StudioSection
