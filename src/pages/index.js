import React from "react"
import TopNav from "../components/top-nav"
import HeroSection from "../components/home/hero/HeroSection"
import ProjectsSection from "../components/home/projects/ProjectsSection"
import StudioSection from "../components/home/studio/StudioSection"
import CodeSection from "../components/home/code/CodeSection"
import ThoughtsSection from "../components/home/thoughts/ThoughtsSection"
import ClassSection from "../components/home/class/ClassSection"
import CreativeLabMosque from "../components/home/creative-lab-mosque/CreativeLabMosque"
import PortfolioFooter from "../components/footer"
import { ParallaxProvider } from "react-scroll-parallax"
import AnchorLinks from "../components/AnchorLinks"
import {motion} from "framer-motion"
import ogAnimation from "../assets/animations/animations-helper"
import AboutMePrompt from "../assets/images/about-me-prompt.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <ParallaxProvider>
          <div className="home-wrapper">
            <SEO title="Home" />

            <TopNav />

            <AnchorLinks />

            <HeroSection /> 

            <ProjectsSection />

            <StudioSection />

            <CodeSection />

            <ThoughtsSection />

            <ClassSection />

            <CreativeLabMosque />

            <PortfolioFooter />
          </div>   
        </ParallaxProvider>


        <div className="contact-me-circle-container">
          <div className="about-me-prompt-container">
            <a className="og-button og-button--tertiary og-button--medium">
              <div className="button-icon">🧟</div>
              <div className="button-text">Human</div> 
            </a>

            <a className="og-button og-button--tertiary og-button--medium">
              <div className="button-icon">💼</div>
              <div className="button-text">Professional </div> 
            </a>
            <img src={AboutMePrompt} alt="" />
          </div>
          
          <motion.svg variants={ogAnimation.ContactMeCircle} initial="initial" animate="animate" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="280px" height="280px" viewBox="0 0 280 280" enableBackground="new 0 0 300 300" className="contact-me-circle">
            <defs>
                <path id="circlePath" d="M0.5,140a139.5,139.5 0 1,0 279,0a139.5,139.5 0 1,0 -279,0"/>
            </defs>
            <circle cx="140" cy="140" r="139.5" fill="none"/>
            <g>
                <use xlinkHref="#circlePath" fill="none"/>
                <text fill="">
                    <textPath xlinkHref="#circlePath" >
                        <a href="mailto:oskr.fuent@gmail.com?Subject=Hola" target="_top">oskr.fuent@gmail.com</a>{" ∙ "}
                        <a href="https://github.com/ogonzal87" target="_blank" rel="noopener noreferrer">Github</a>{" ∙ "}
                        <a href="https://codepen.io/ogonzal87/" target="_blank" rel="noopener noreferrer">Codepen</a>{" ∙ "} 
                        <a href="https://codesandbox.io/u/ogonzal87" target="_blank" rel="noopener noreferrer">Codesandbox</a>{" ∙ "} 
                        <a href="https://medium.com/@ogonzal87" target="_blank" rel="noopener noreferrer">Medium</a>{" ∙ "} 
                        <a href="https://dribbble.com/oskrhq" target="_blank" rel="noopener noreferrer">Dribbble</a>{" ∙ "} 
                        <a href="https://www.instagram.com/oskrhq/" target="_blank" rel="noopener noreferrer">Instagram</a> 
                    </textPath>
                </text>
            </g>
          </motion.svg>  
        </div>
        
      </Layout>
    )
  }
}

export default HomePage