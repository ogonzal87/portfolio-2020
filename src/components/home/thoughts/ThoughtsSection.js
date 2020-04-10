import React from "react"
import thoughtsImg from "../../../assets/images/hand-brush/thoughts.png"
import mediumPost1Img from "../../../assets/images/duotone1.jpg"
import mediumPost2Img from "../../../assets/images/duotone2.jpg"
import mediumPost3Img from "../../../assets/images/duotone3.jpg"
import mediumPost4Img from "../../../assets/images/walle-min.png"
import mediumPost5Img from "../../../assets/images/oskrhq-ds-min.jpg"

export default () => {
  return (
    <section className="home-page-section home-thoughts-section">
      <div className="section-title-container">
        <img
          src={thoughtsImg}
          alt="title"
          className="home-brush-lettering thoughts"
        />
      </div>
      <div className="home-posts-container">
        <a
          href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
          className="home-post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumPost1Img}
            alt="article post"
            className="img-thumbnail"
          />
          <div className="post-text-container">
            <h6>The Anatomy of All Digital Interfaces</h6>
            <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
          </div>
        </a>
        <a
          href="https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43"
          className="home-post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumPost3Img}
            alt="article post"
            className="img-thumbnail"
          />
          <div className="post-text-container">
            <h6>Crafting a New Visual Language</h6>
            <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
          </div>
        </a>
        <a
          href="https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586"
          className="home-post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumPost2Img}
            alt="article post"
            className="img-thumbnail"
          />
          <div className="post-text-container">
            <h6>A Dictionary for a Design Language</h6>
            <span className="ds-overlay-text-style">MEDIUM, PROTOTYPR</span>
          </div>
        </a>
        <a
          href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7"
          className="home-post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumPost4Img}
            alt="article post"
            className="img-thumbnail"
          />
          <div className="post-text-container">
            <h6>Homosapien-ing Interfaces</h6>
            <span className="ds-overlay-text-style">MEDIUM, UX Collective</span>
          </div>
        </a>
        <a
          href="https://medium.com/@ogonzal87/how-i-made-a-themeable-design-system-for-my-professional-brand-oskrhq-ds-1c10f5b87587"
          className="home-post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mediumPost5Img}
            alt="article post"
            className="img-thumbnail"
          />
          <div className="post-text-container">
            <h6>
              How I made a themeable Design System for my Professional Brand
            </h6>
            <span className="ds-overlay-text-style">MEDIUM</span>
          </div>
        </a>
      </div>
    </section>
  )
}
