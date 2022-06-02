import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import viewnHeroImg from "../../assets/images/viewn/vn-hero.png"
import viewnShowcaseImg from "../../assets/images/viewn/vn-showcase.jpg"
import LogoOld from "../../assets/images/viewn/logo-old.jpg"
import LogoNew from "../../assets/images/viewn/viewn-logo.jpg"
import LogoSpec from "../../assets/images/viewn/viewn-logo-specs.jpg"
import StyleSheetImg from "../../assets/images/viewn/style-sheet.jpg"
import PersonaImg1 from "../../assets/images/viewn/viewn-persona-exercise1.jpg"
import PersonaImg2 from "../../assets/images/viewn/viewn-user-persona.jpg"
import MarketResearchImg1 from "../../assets/images/viewn/viewn-product-survey1.jpg"
import MarketResearchImg2 from "../../assets/images/viewn/viewn-product-survey2.jpg"
import DefineImg1 from "../../assets/images/viewn/user-journey.jpg"
import DefineImg2 from "../../assets/images/viewn/info-architecture1.jpg"
import DefineImg3 from "../../assets/images/viewn/navigation-concept.jpg"
import InfoArchitectureImg from "../../assets/images/viewn/info-architecture2.jpg"
import NavigationGif from "../../assets/images/viewn/viewn-navigation.gif"
import demo1 from "../../assets/images/viewn/vn-demo1.gif"
import test1 from "../../assets/images/viewn/test1.gif"
import test2 from "../../assets/images/viewn/text2.jpg"
import test3 from "../../assets/images/viewn/text3.jpg"
import test5 from "../../assets/images/viewn/spreadsheet.jpg"
import test6 from "../../assets/images/viewn/vn-testing-cat.jpg"
import test7 from "../../assets/images/viewn/test7.jpg"
import PortfolioFooter from "../../components/footer"
import number1 from "../../assets/images/hand-brush/01.png"
import number2 from "../../assets/images/hand-brush/02.png"
import number3 from "../../assets/images/hand-brush/03.png"
import number4 from "../../assets/images/hand-brush/04.png"
import number5 from "../../assets/images/hand-brush/05.png"
import number6 from "../../assets/images/hand-brush/06.png"
import TopNav from "../../components/top-nav"

const MercadoProjectPage = () => {
  return (
    <Layout>
      <SEO title="Conversational Design" />
      <div className="project-page">
        <TopNav work about />

        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="og-text-style-overline">Framework</span>
            <h2 className="ds-display3-text-style hero-container__title">
              Conversational Design
            </h2>
            <p className="  hero-container__description">
              [Fill out] [Fill out] [Fill out] [Fill out] [Fill out]
            </p>
            <div className="tag-container">
              <div className="tag">Systems Design</div>
              <div className="tag">Interaction Systems</div>
              <div className="tag">Interaction Systems</div>
            </div>
          </div>
          <div className="hero-container__img-container">
            <img src={viewnHeroImg} className="project-viewn-hero" alt="Hero" />
          </div>
        </div>

        <div className="case-study-dossier-container">
          <div className="dossier__problem-container ">
            <p className="special-text-styling">Problem</p>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
          <div className="dossier__users-container dossier__others-container">
            <p className="special-text-styling">Primary Users</p>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
          <div className="dossier__duration-container dossier__others-container">
            <p className="special-text-styling">Duration</p>
            <p>March 2022 - Present</p>
          </div>
          <div className="dossier__tools-container dossier__others-container">
            <p className="special-text-styling">Tools</p>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
          <div className="dossier__role-container dossier__others-container">
            <p className="special-text-styling">Role</p>
            <p>Design Lead</p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Solution</p>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
          <div className="dossier__constraints-container dossier__others-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
          <div className="dossier__platforms-container dossier__others-container">
            <p className="special-text-styling">Platforms</p>
            <p>Native Mobile and Responsive web</p>
          </div>
        </div>

        <img
          src={viewnShowcaseImg}
          className="project-showcase-img"
          alt="Viewn showcase"
        />

        {/* <h3 className="project-section-title">the pixels' story</h3> */}

        <div className="design-process__section-container no-top-margin">
          <div className="project-design-process-title-container">
            <img
              src={number1}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              EMPATHIZE
            </h5>
          </div>
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <img
          src={LogoSpec}
          className="project-displayfb-img"
          style={{ width: "40%" }}
          alt="logo"
        />
        <img
          src={StyleSheetImg}
          className="project-displayfb-img"
          style={{ width: "60%" }}
          alt="style sheet"
        />

        <div className="design-process__section-container">
          <div />
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={PersonaImg2} alt="persona" className="grid-img" />
          <img src={PersonaImg1} alt="persona" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div></div>
          <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
        </div>

        <div className="project-img-grid">
          <img
            src={MarketResearchImg1}
            alt="market research exhibit"
            className=""
          />
          <img
            src={MarketResearchImg2}
            alt="market research exhibit"
            className=""
          />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number2}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Define
            </h5>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={DefineImg1} alt="project definition" className="grid-img" />
          <img src={DefineImg2} alt="project definition" className="grid-img" />
          <img src={DefineImg3} alt="project definition" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number3}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Ideate
            </h5>
          </div>
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <img
          src={InfoArchitectureImg}
          className="project-displayfb-img"
          alt="information architecture"
        />
        <img
          src={NavigationGif}
          className="project-displayfb-img"
          alt="navigation"
        />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number4}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Prototype
            </h5>
          </div>
          <div>
            <p>W[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <img
          src={demo1}
          className="project-displayfb-img"
          style={{ width: "50%" }}
          alt="demo"
        />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number5}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              test
            </h5>
          </div>
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>

            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <img src={test1} alt="testing" className="project-displayfb-img" />
        <img src={test5} alt="testing" className="project-displayfb-img" />

        <div className="project-img-grid">
          <img src={test2} alt="testing" className="grid-img viewn-test-img " />
          <img src={test3} alt="testing" className="grid-img viewn-test-img " />
          <img src={test7} alt="testing" className="grid-img viewn-test-img " />
          <img src={test6} alt="testing" className="grid-img viewn-test-img " />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number6}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Implement
            </h5>
          </div>
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              From the client
            </h5>
          </div>
          <div>
            <i>
              <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
            </i>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              lessons learned
            </h5>
          </div>
          <div>
            <p>[Fill out] [Fill out] [Fill out] [Fill out] [Fill out]</p>
          </div>
        </div>

        <PortfolioFooter />
      </div>
    </Layout>
  )
}
export default MercadoProjectPage
