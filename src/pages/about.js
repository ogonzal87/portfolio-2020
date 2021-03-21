import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/top-nav"
import PortfolioFooter from "../components/footer"
import styled from "styled-components"
import ProfileImg from "../assets/images/profile-pic.jpg"

const SectionHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1300px;

  @media (max-width: 767px) {
    max-width: 375px;
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About me - Oscar Gonzalez" />
      <div style={{ position: "relative" }}>
        <TopNav work about />
        <div className="about-page">
          <SectionHero>
            <div className="img-container">
              <img src={ProfileImg} alt="profile" className="profile-img" />
            </div>

            <div className="text-container">
              <p>
                My name is Oscar. I am a self-taught
                designer and developer. I went to Business School, but not
                by choice...{" "}
                <span role="img" aria-label="unamused emoji">
                  😒
                </span>
                . My passion lies at the intersection of Design and Code. When I
                am not creating digital things, I like making music, ride my
                bike "La Negra", Latin dance, calligraphy, illustrating and I am a PADI certified Advanced Open Water Diver.
                Also, I <a
                  href="https://www.instagram.com/musgho/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                make art with moss
                </a>
                .
              </p>
              <br />
              
              
              <p className="special-text-styling">Current Interests</p>
              <p className="og-text-style-body1">
                I am really into anything Design Systems, accessibility and inclusivity (studying right now to get <a href="https://www.accessibilityassociation.org/wascertification" target="_blank" rel="noopener noreferrer">WAS certified</a>), decentralized
                autonomous systems, crypto assets, machine learning, 3D design,
                AR and VR.
              </p>
            </div>
          </SectionHero>
        </div>
        <PortfolioFooter />
      </div>
    </Layout>
  )
}

export default AboutPage
