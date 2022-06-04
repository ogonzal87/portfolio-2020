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
import robertoImg from "../../assets/images/viewn/roberto.jpg"
import areeyaImg from "../../assets/images/viewn/areeya.jpg"
import PaginationControl from "../../components/PaginationControl"

const ClientProjectPage = () => {
  return (
    <Layout>
      <SEO title="Client work - VIEWN" />
      <div className="project-page">
        <TopNav work about contactMe />

        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="og-text-style-overline">Client Work</span>
            <h2 className="ds-display3-text-style hero-container__title">
              VIEWN
            </h2>
            <p className="  hero-container__description">
              Marketing data playground for non-technical marketers based on the
              principles of Customer Data Platforms (CDP-s). The challenge was
              to create a platform where marketers could see, manage and track a
              unified profile of a customer so they could not only measure the
              customer's engagement with the brand but also provide them with a
              tailored marketing experience to create a closer relationship
              between that customer and the brand.
            </p>
            <div className="tag-container">
              <div className="tag">Brand Identity</div>
              <div className="tag">UX Research</div>
              <div className="tag">Product Design</div>
              <div className="tag">Development</div>
            </div>
          </div>
          <div className="hero-container__img-container">
            <img src={viewnHeroImg} className="project-viewn-hero" alt="Hero" />
          </div>
        </div>

        <div className="case-study-dossier-container">
          <div className="dossier__problem-solution-grid">
            <div className="dossier__problem-container">
              <p className="special-text-styling">Problem</p>
              <p>
                I was hired to create a product that would help non-technical
                marketers like Rafael, our user persona, create meaningful
                relationships between brands and its customers. I also was hired
                to craft a Brand Identity that would resonate with him. Today,
                Rafael has to dig through lots of data to create effective
                marketing campaigns for the customers of the brands he manages.
                Many of the efforts are done manually and many times he relies
                on the help of other people like Data Analysts who query the
                data for him.
              </p>
            </div>

            <div className="dossier__hypothesis-container">
              <p className="special-text-styling">Solution</p>
              <p>
                A platform that would allow Rafael to aggregate the data about a
                specific customer housed in many data bases and create a unified
                customer profile. With this profile, Rafael could measure and
                track the customer's engagement with the brand and provide
                him/her with a tailored marketing experience, creating a closer
                relationship between the customer and the brand.
              </p>
            </div>
          </div>

          <div className="dossier__others-grid">
            <div className="dossier__users-container dossier__others-container">
              <p className="special-text-styling">Primary Users</p>
              <p>
                Non-technical marketers wanting to create stronger and
                meaningful relationships with a brand's customers.
              </p>
            </div>
            <div className="dossier__duration-container dossier__others-container">
              <p className="special-text-styling">Duration</p>
              <p>July 2017 - Present</p>
            </div>
            <div className="dossier__tools-container dossier__others-container">
              <p className="special-text-styling">Tools</p>
              <p>
                Pen, paper, Invision, Maze, Sketch App, Illustrator, and lots of
                sticky notes.
              </p>
            </div>
            <div className="dossier__role-container dossier__others-container">
              <p className="special-text-styling">Role</p>
              <p>Product Designer, Creative Director, and Researcher.</p>
            </div>

            <div className="dossier__constraints-container dossier__others-container">
              <p className="special-text-styling">
                Constraints & Considerations
              </p>
              <p>
                VIEWN is a Certified Google Partner so the founders wanted their
                UI to be inspired by Google's.
              </p>
            </div>
            <div className="dossier__platforms-container dossier__others-container">
              <p className="special-text-styling">Platforms</p>
              <p>Desktop</p>
            </div>
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
            <p>
              Working very closely with the founders we crafted a Brand Identity
              that would resonate with someone like Rafael. To do this, we used
              one of my favorite techniques - <i>Humanizing the Product</i>. I
              wrote an entire article on this subject. You can read it{" "}
              <a
                href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . VIEWN is part of another company also owned by VIEWN's founders.
              This company is a Certified Google Partner so for them it was very
              important that the User Interface was heavily influenced by
              Google's Interfaces. We decided to follow Material's Design but we
              were careful not to dilute our brand.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <h4>Old Brand Identity</h4>
          <h4>New Brand Identity</h4>
          <img src={LogoOld} alt="Old Logo" className="grid-img" />
          <img src={LogoNew} alt="New logo" className="grid-img" />
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
            <p>
              I conducted a workshop with the founders in which we created
              Rafael. Since human actions are driven by emotion, throughout the
              workshop I looked for cues that I could use through the design
              process to feel what Rafael feels, to know what drives or
              discourages him as a marketer, and what are his pains and
              frustrations. If I can empathize with his feelings, I should be
              able to create experiences of value to him.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={PersonaImg2} alt="persona" className="grid-img" />
          <img src={PersonaImg1} alt="persona" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div></div>
          <p>
            We also prioritized features based on research. We wanted to focus
            on what Rafael would value the most first so we sent out surveys to
            marketers that most closely resembled Rafael. We even included some
            questions about the new brand identity we had created.
          </p>
        </div>

        <div className="project-img-grid">
          <img
            src={MarketResearchImg1}
            alt="market research exhibit"
            className="market-research-exhibit"
          />
          <img
            src={MarketResearchImg2}
            alt="market research exhibit"
            className="market-research-exhibit"
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
          <div>
            <p>
              We combined our research and began highlighting opportunities for
              innovation. We found that Rafael values looking at and tracking
              profiles the most to gauge how engaged that customer is with a
              brand. Insights and automation were huge as well. Remember, Rafael
              must dig through lots of data to find meaningful patterns he could
              use to target his customers effectively. Furthermore, we found
              that Rafael thinks he is tech savvy but is really not, so he
              relies on other people to query data. What if we could provide him
              with a product that felt intuitive, helpful, and human while it
              also had predictive analytics and insightful KPI's. We wanted
              Rafael to feel{" "}
              <strong>
                {" "}
                1) powerful/confident, 2) in control or organized and 3) feel
                good at the end of his workday after using VIEWN{" "}
              </strong>
              . We wanted him to focus on connecting customers to a brand, and
              less time digging through data and admin stuff... Who likes that
              anyway?
            </p>
            <p>So the requirements became:</p>
            <ol>
              <li>
                Rafael will import data from different sources including
                MailChimp, Marketo, Google Analytics, etc.
              </li>
              <li>
                Rafael will be able to see a unified customer profile with very
                detailed information about a customer sourced from the apps
                above
              </li>
              <li>
                Rafael will create segments. These are groups of profiles that
                matched certain criterion. i.e. "Millennials in Miami that have
                children over 2 years old."
              </li>
              <li>
                Rafael will be able to see metrics on the segments and/or
                individual profiles with predictive analytics to help him create
                meaningful marketing campaigns
              </li>
              <li>
                Rafael will create and track marketing campaigns through VIEWN
              </li>
            </ol>
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
            <p>
              What if we could architect the app as a story? The requirements
              themselves told a story for me; 1) Rafael imports data 2) Rafael
              segments that data 3) Rafael learns from the data 4) Rafael
              engages the customer through marketing campaigns. Rafael would not
              always work in chronological order but I assumed the information
              architecture would resonate with him.
            </p>
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
            <p>
              We went through a few lo-fi iterations to confirm that the
              Information Architecture made sense to Rafael and the founders.
              After confirmation, I created a hi-fi prototype that would allow
              us to get more meaningful test results and would also allow
              VIEWN's founders to start showing what we were working on to
              investors.
            </p>
          </div>
        </div>

        <img
          src={demo1}
          className="project-displayfb-img"
          style={{ width: "100%" }}
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
            <p>
              We conducted monitored usability tests with friends and family. I
              wanted to see how much I could learn from participants that were
              not marketers, however, the most valuable tests came from people
              that resembled Rafael. I used a really cool app called{" "}
              <a
                href="https://maze.design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maze
              </a>
              . Still a beta and has some bugs but I like the fact that I can
              record the journeys the participant takes as well as their clicks
              on each individual test.
            </p>

            <p>
              Although the tests I did were heavy on usability, I was more
              concerned about how the participant{" "}
              <strong>
                <i>felt</i>
              </strong>{" "}
              at the end of each task. I gauged the success of the tests on
              that; feelings and how much I learned, not whether a participant
              would complete the task successfully. At the end of each task, I
              would ask these questions and record the results on a spreadsheet:
            </p>

            <ol>
              <li>
                <i>How does this make you feel?</i>
              </li>
              <li>
                <i>How would you like to feel in this scenario?</i>
              </li>
              <li>
                <i>
                  To what extent [1-5] does this make you feel
                  [powerful/empowered/confident]?
                </i>
              </li>
              <li>
                <i>To what extent [1-5] does this make you feel [organized]?</i>
              </li>
              <li>
                <i>
                  To what extent [1-5] does this make you feel [like you did a
                  good job at the end of the day]?
                </i>
              </li>
            </ol>

            <p>
              These were things we wanted Rafael to feel when using VIEWN. Oh,
              and I even had my brother's cat as a participant. He did not pass
              any of the tests though{" "}
              <span role="img" aria-label="emoji">
                😑
              </span>
              .
            </p>
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
            <p>
              We are still working on testing but I look forward to implementing
              what we are learning in code and I'll update this page
              accordingly.
            </p>

            <p>
              We can't wait to have real life Rafael(a)'s using the product!
            </p>
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
              <p>
                "Oscar is an excellent designer, technologist and a superv human
                being. Working with him from a founder’s point of view is like
                working with a co-founder. He understand the business value,
                purpose and vision. His design reflect the right value, with the
                end customer/user in mind."
              </p>
              <p>
                "Oscar is very real and down to earth type of guy. His highly
                professional style of working is not hindered with his
                personality touch. Oscar is an artist, with a technology
                background. Oscar simplified our navigation and improved our
                intuitive business model. We loved the process on defining user
                personas, interactive prototypes and every artifact develop
                during the engagement."
              </p>
              <p>
                "Oscar help us from the beginning on a information architecture
                based on a proven design process. This helped myself and the
                leadership team understand the steps and stages of UX/UI design,
                from a corporate image and branding to the actual product design
                to technical specs for UI developers. Colors and style matter,
                and Oscar taught us the right use of color and style to reflect
                our high level of sophistication, and quality of our product
                plus services."
              </p>
              <p>
                "Oscar is an integral part of the company and an amazing asset
                for competitive advantage and strategic vision, incredible
                marketing knowledge."
              </p>

              <div className="clients-container">
                <div className="client-container">
                  <img
                    src={robertoImg}
                    alt="founder"
                    className="client-avatar"
                  />
                  <span>Roberto Landrau</span>
                </div>
                <div className="client-container">
                  <img
                    src={areeyaImg}
                    alt="founder"
                    className="client-avatar"
                  />
                  <span>Areeya Lila</span>
                </div>
              </div>
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
            <p>
              This project was an amazing exercise in selling Design as a
              practice and an essential part of Product Development to key
              stakeholders. I have been part of projects where design is
              perceived as an afterthought or the team and business folks just
              have a <i>“make it look pretty”</i> mentality. Design Thinking is
              not something that Business people are taught or even aware of
              most of the time. They are driven by numbers and market
              conditions, but it is still important for them to understand the
              needs of the user (not their client), and the importance of
              Branding before diving into design or code.
            </p>
            <p>
              As a designer, you are responsible for selling Design to your
              client, team or organization so I have started to educate clients{" "}
              <strong>*before*</strong> I work with them. I have become very
              strict about this to the point of refusing work if they are not
              willing to learn about Design and my process first.
            </p>
            <p>
              This project also reminded me about the importance of Empathy in
              design. Actress Natalie Portman once said, “The actor’s job is
              empathy”. That holds very true about designers as well. Most of
              the time, we design experiences for people we never meet. This is
              why it is so important to learn about your users early. See what
              motivates them and what discourages them.
            </p>
            <p>
              User Persona creation was extremely useful for me and for VIEWN’s
              team, to the point of us always talking about Rafael as if he were
              a real person. It was very rewarding to see my clients embracing
              the persona and making him part of every decision. For that, I
              have to thank them for being so receptive to my process, eager to
              learn from Design and so empathic.
            </p>
            <p>
              Thank you Roberto and Areeya! You both taught me so much about
              business and it has been a blast working with you.
            </p>
          </div>
        </div>

        <PaginationControl
          previous="/projects/design-system"
          next="/projects/yolko"
        />

        <PortfolioFooter />
      </div>
    </Layout>
  )
}
export default ClientProjectPage
