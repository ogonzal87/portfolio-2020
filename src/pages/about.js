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
              I was born and raised in Colombia. My family and I moved to the States in my teens for security reasons. I began my career as a high school janitor but taught myself to design and code while going to school for Business. I now work as a Staff Designer for LinkedIn and I was an early crypto-asset investor. When I am not creating digital things, I like making music (guitar, piano, and ukulele), Latin dance, calligraphy art pieces, and illustrations. I also like  <a
                  href="https://www.instagram.com/musgho/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                making art with moss
                </a>
                .
              </p>

              <p>I am also a strong advocate for marine life conservation (I am <a href="https://www.padi.com/courses/advanced-open-water">PADI certified Advanced Diver</a>) and accessibility and inclusivity - I have a <a href="https://www.accessibilityassociation.org/wascertification" target="_blank" rel="noopener noreferrer">technical accessibility specialist certification (WAS)</a> from The International Association of Accessibility Professionals <a href="https://www.accessibilityassociation.org/cpacccertification" target="_blank" rel="noopener noreferrer">(IAAP)</a>.</p>
              <br />
              
              <p className="special-text-styling">Current Interests</p>
              <p className="og-text-style-body1">
              I am really into anything Design Systems, decentralized autonomous systems, crypto assets, behavioral economics, metaverses, machine learning, 3D design, AR, and VR.
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
