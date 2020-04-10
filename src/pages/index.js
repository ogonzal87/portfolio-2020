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

import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="home-wrapper">
          <SEO title="Home" />

          <TopNav />

          <HeroSection />

          <ProjectsSection />

          <StudioSection />

          <CodeSection />

          <ThoughtsSection />

          <ClassSection />

          <CreativeLabMosque />

          <PortfolioFooter />
        </div>
      </Layout>
    )
  }
}

export default HomePage
