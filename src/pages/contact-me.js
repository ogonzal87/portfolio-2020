import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/top-nav"
import PortfolioFooter from "../components/footer"
import styled from "styled-components"
import ContactMeRetroImg from "../assets/images/contact-me-retro.jpeg"
import MailIcon from "../assets/images/contact-me/mail-icon.svg"
import GithubIcon from "../assets/images/contact-me/github-icon.svg"
import CodePenIcon from "../assets/images/contact-me/codepen-icon.svg"
import CodeSandboxIcon from "../assets/images/contact-me/codesandbox-icon.svg"
import MediumIcon from "../assets/images/contact-me/medium-icon.svg"
import DribbleIcon from "../assets/images/contact-me/dribbble-icon.svg"
import InstagramIcon from "../assets/images/contact-me/instagram-icon.svg"

const SectionHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1300px;

  @media (max-width: 767px) {
    max-width: 375px;
  }
`

const ContactMePage = () => {
  return (
    <Layout>
      <SEO title="Contact me - Oscar Gonzalez" />
      <div style={{ position: "relative" }}>
        <TopNav about contactMe />
        <div className="about-page contact-me-page">
          <SectionHero>
            <div className="img-container">
              <img
                src={ContactMeRetroImg}
                alt="profile"
                className="contact-me-retro-img"
              />
            </div>
            <ul className="text-container">
              <li className="contact-me-item-container">
                <img src={MailIcon} alt="" />
                <a href="mailto:osk.gonzo@gmail.com?Subject=Hola" target="_top">
                  osk.gonzo@gmail.com
                </a>
              </li>
              <li className="contact-me-item-container">
                <img src={GithubIcon} alt="" />
                <a
                  href="https://github.com/ogonzal87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-me-item"
                >
                  Github
                </a>
              </li>
              <li className="contact-me-item-container">
                <img src={CodePenIcon} alt="" />
                <a
                  href="https://codepen.io/ogonzal87/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codepen
                </a>
              </li>

              <li className="contact-me-item-container">
                <img src={CodeSandboxIcon} alt="" />
                <a
                  href="https://codesandbox.io/u/ogonzal87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codesandbox
                </a>
              </li>
              <li className="contact-me-item-container">
                <img src={MediumIcon} alt="" />
                <a
                  href="https://medium.com/@ogonzal87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </li>
              <li className="contact-me-item-container">
                <img src={DribbleIcon} alt="" />
                <a
                  href="https://dribbble.com/oskrhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </li>
              <li className="contact-me-item-container">
                <img src={InstagramIcon} alt="" />
                <a
                  href="https://www.instagram.com/oskrhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </SectionHero>
        </div>
        <PortfolioFooter />
      </div>
    </Layout>
  )
}

export default ContactMePage
