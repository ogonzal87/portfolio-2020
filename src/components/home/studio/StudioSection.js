import React from "react"
import profilePic from "../../../assets/images/profile-pic3.jpg"
import StudioImg from "../../../assets/images/hand-brush/studio.png"
import StackGraphic from "../../../assets/images/stack.svg"
import { Parallax } from "react-scroll-parallax"

const StudioSection = () => {
  return (
    <section className="home-studio-section">
      <img
        src={StudioImg}
        alt="Studio"
        className="home-brush-lettering studio"
      />

      <div className="text-container">
        <p className="home-studio-section-paragraph">
          I was born and raised in Colombia, Miami is home but now I live in San
          Francisco working for{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hightlighted-offset"
          >
            LinkedIn
          </a>
          . I’ve been working as a interdisciplinary Designer for over a decade
          and spent some years working as a Front-End developer as well. I am
          currently focusing in building multi-platform{" "}
          <span className="hightlighted-offset">Design Systems</span> for large
          enterprises with a strong foundation in{" "}
          <span className="hightlighted-offset">accessibility</span> and{" "}
          <span className="hightlighted-offset">inclusivity</span>.
        </p>

        <h4 className="og-text-style-overline">My Stack</h4>
        <img className="stack-graphic" src={StackGraphic} alt="my stack" />
      </div>
      <div className="profile-img-wrapper">
        <Parallax y={[-20, 20]} tagOuter="figure">
          <img
            className="studio-profile-picture"
            src={profilePic}
            alt="profile"
          />
        </Parallax>

        <div className="studio-decorative-div1"></div>

        <div className="studio-decorative-div2"></div>
      </div>
    </section>
  )
}

export default StudioSection
