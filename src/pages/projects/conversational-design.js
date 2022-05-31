import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import fifHeroImg from "../../assets/images/fif/hero.png"
import tooltipImg from "../../assets/images/fif/tool-tip.png"
import inlineCalloutImg from "../../assets/images/fif/inline-callout.png"
import FIFInventory from "../../assets/images/fif/inventory.gif"
import contextualRelevanceImg from "../../assets/images/fif/contextual-relevance.png"
import figjamImg from "../../assets/images/fif/figjam.png"
import gameImg1 from "../../assets/images/fif/game1.png"
import gameImg2 from "../../assets/images/fif/game2.png"
import gameImg3 from "../../assets/images/fif/game3.png"
import gameImg4 from "../../assets/images/fif/game4.png"
import disneyImg from "../../assets/images/fif/disney.png"
import componentsGrayImg1 from "../../assets/images/fif/components-grayscale.png"
import shapeExplorationImg from "../../assets/images/fif/shape-explorations.png"
import componentsVMImg from "../../assets/images/fif/components-vm.png"
import componentsShowcase from "../../assets/images/fif/components-2.png"
import reactionsImg from "../../assets/images/fif/reactions.gif"
import scenarioVideo1 from "../../assets/images/fif/compressed/3Launchpad-to-coachmark.mp4"
import scenarioVideo2 from "../../assets/images/fif/compressed/2Inline-callout-to-coachmark.mp4"
import scenarioVideo3 from "../../assets/images/fif/compressed/4Label-to-Inline-callout.mp4"
import scenarioVideo4 from "../../assets/images/fif/compressed/1Inline-callout-standalone.mp4"
import withDesigners1 from "../../assets/images/fif/showing-to-designers-1.gif"
import withDesigners2 from "../../assets/images/fif/showing-to-designers-2.gif"
import withDesigners3 from "../../assets/images/fif/showing-to-designers-3.gif"
import withLeadership from "../../assets/images/fif/showing-to-leadership.gif"
import qaProcessImg from "../../assets/images/fif/qa-process.png"

import PortfolioFooter from "../../components/footer"
import number1 from "../../assets/images/hand-brush/01.png"
import number2 from "../../assets/images/hand-brush/02.png"
import number3 from "../../assets/images/hand-brush/03.png"
import number4 from "../../assets/images/hand-brush/04.png"
import number5 from "../../assets/images/hand-brush/05.png"
import number6 from "../../assets/images/hand-brush/06.png"
import TopNav from "../../components/top-nav"

const ConversationalDesignProjectPage = () => {
  function createVideo(videoSourceMP4, videoSourceWEB, videoPoster) {
    return (
      <video
        // playsInline
        muted
        loop
        className="card-image"
        // poster={videoPoster}
        // onMouseOver={event => event.target.play()}
        // onFocus={event => event.target.play()}
        // onMouseOut={event => event.target.pause()}
        // onBlur={event => event.target.pause()}
        controls
      >
        <source src={videoSourceWEB} type="video/webm" />
        <source src={videoSourceMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <Layout>
      <SEO title="Conversational Design" />
      <div className="project-page">
        <TopNav work about />
        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="og-text-style-overline">Design Framework</span>
            <h2 className="ds-display3-text-style hero-container__title">
              Feature Introduction
            </h2>
            <p className="hero-container__description">
              I led the creation of a Design Framework inspired by one of my
              articles (
              <i>
                <a
                  href="https://uxdesign.cc/why-great-conversationalists-make-great-designers-c845039b9ab5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Design for conversations. Not screens"
                </a>
              </i>
              ), Open World Game Design, and Disney's approach to
              personalization. The framework guides designers on properly
              introducing features to LinkedIn users while carefully considering
              contextual relevance over a user journey. The framework draws
              parallels between ordinary spoken conversations (introductions) in
              the physical world and Digital Interaction Design.
            </p>
            <div className="tag-container">
              <div className="tag">Systems Design</div>
              <div className="tag">Interaction Systems</div>
              <div className="tag">Framework Design</div>
            </div>
          </div>
          <div className="hero-container__img-container">
            <img src={fifHeroImg} className="project-viewn-hero" alt=" " />
          </div>
        </div>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-solution-grid">
            <div className="dossier__problem-container">
              <p className="special-text-styling">Problem</p>
              <p>
                When LinkedIn launches a new feature, we generally introduce it
                to everyone without regard for relevancy.{" "}
              </p>
              <p>There were three related problems we were trying to solve:</p>
              <ul>
                <li>
                  As a{" "}
                  <span className="highlighted-offset-very-important">
                    user
                  </span>
                  , I want to know about features that would help{" "}
                  <strong>me</strong> get the most out of LinkedIn.{" "}
                </li>
                <li>
                  As a{" "}
                  <span className="highlighted-offset-very-important">
                    designer
                  </span>
                  , I would like to let the <strong>right users</strong> know
                  about features they may find valuable.
                </li>
                <li>
                  As a{" "}
                  <span className="highlighted-offset-very-important">
                    UX Infrastructure team
                  </span>
                  , we would like to <strong>evaluate the quality</strong> and
                  effectiveness of these introductions
                </li>
              </ul>
            </div>
            <div className="dossier__hypothesis-container">
              <p className="special-text-styling">Solution</p>
              <p>
                LinkedIn content engines already match content with the right
                audience so users can engage with content they may find most
                valuable.{" "}
              </p>
              <p>
                Suppose we introduce features to users at contextually relevant
                moments by guiding designers in identifying the right context,
                user, message type, and components while also evaluating how
                effective these are. In that case, we can provide lasting value
                to our users, helping them with their individual immediate and
                long-term goals and objectives on our platform.{" "}
              </p>
            </div>
          </div>

          <div className="dossier__others-grid">
            <div className="dossier__role-container">
              <p className="special-text-styling">Role</p>
              <p>
                Design Lead - I led the project from start to finish. My most
                significant contribution was synthesizing the data gathered by
                integrating Conversational Design principles with digital
                interaction design.{" "}
              </p>
            </div>
            <div className="dossier__constraints-container">
              <p className="special-text-styling">
                Constraints & Considerations
              </p>
              <p>
                We have heard from users that LinkedIn's UI is too cluttered and
                they receive too many notifications.
              </p>
            </div>
            <div className="dossier__users-container">
              <p className="special-text-styling">Users</p>
              <p>
                New, frequent, and infrequent users of LinkedIn's consumer
                products.{" "}
              </p>
            </div>
            <div className="dossier__duration-container">
              <p className="special-text-styling">Duration</p>
              <p>April 2022 - Present</p>
            </div>
            <div className="dossier__tools-container">
              <p className="special-text-styling">Tools</p>
              <p>Figma and Protopie</p>
            </div>

            <div className="dossier__platforms-container">
              <p className="special-text-styling">Platforms</p>
              <p>Native Mobile and Responsive web</p>
            </div>
          </div>
        </div>
        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number1}
              alt="step 1"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Understand
            </h5>
          </div>
          <div>
            <p>
              The framework started by identifying a pattern becoming prevalent
              in the industry.{" "}
            </p>
            <div className="project-img-phone-container">
              <img
                src={tooltipImg}
                alt="tooltip calling out a new feature obscuring other content on the page"
              />
            </div>
            <p>
              These prompts represent an accessibility problem as they are
              heavily reliant on visual proximity to be meaningful, and they
              were self-activating. Most of the implementations we saw were
              technically not accessible to screen reader users or did not make
              sense, essentially excluding screen reader users, so we decided to
              do this instead:
            </p>
            <div className="project-img-phone-container">
              <img
                src={inlineCalloutImg}
                alt="tooltip calling out a new feature obscuring other content on the page"
              />
            </div>
            <p>
              Although not perfect, we believed that the linear navigation via
              focus order would help screen users discover the features and
              address sighted users' needs. However, after rolling out this
              solution, we saw a severe increase in the number of prompts. Every
              team wanted to call out their features or UI changes using this
              pattern, and since teams work on isolated features, users were
              complaining about the number of prompts they were being exposed
              to. We then did a comprehensive audit of all of the instances that
              we would identify to identify themes:
            </p>
          </div>
        </div>
        <img
          src={FIFInventory}
          className="project-displayfb-img"
          style={{ width: "80%" }}
          alt="demo"
        />
        <div className="design-process__section-container">
          <div />
          <div>
            <p>
              There was an apparent disregard for contextual relevance when
              introducing features, as every user was getting the same
              introduction to a feature without regard for the context and
              timing.
            </p>
          </div>
        </div>
        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number2}
              alt="step 2"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Define
            </h5>
          </div>
          <div>
            <div>
              <p>
                In early 2020, I wrote an{" "}
                <a
                  href="https://uxdesign.cc/why-great-conversationalists-make-great-designers-c845039b9ab5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  article drawing parallels between Conversational Design and
                  digital interaction design
                </a>
                . We wanted to see if approaching these interactions like a
                spoken conversation would help, so my team and I decided to
                create a design framework to help teams{" "}
                <i className="highlighted-offset-very-important">
                  Design these Introductions
                </i>{" "}
                through conversational competence. Furthermore, we wanted to
                provide specific components that teams could use, delivering
                clear guidance on how and when to use them properly.
              </p>

              <h5 className="og-text-style-heading6">Establishing Relevance</h5>
              <p>
                Teams are naturally proud of the features they design and would
                like users to engage with them. However, determining contextual
                relevance when introducing something to another person is
                extremely important. We do it unconsciously in the physical
                world when introducing a friend to another, so we wanted
                Designers to consider that.
              </p>
            </div>
          </div>
        </div>
        <img
          src={contextualRelevanceImg}
          alt="tooltip calling out a new feature obscuring other content on the page"
          className="project-displayfb-img"
        />
        <div className="design-process__section-container no-top-margin ">
          <div />
          <div>
            <h5 className="og-text-style-heading5">Principles</h5>
            <p>
              Before ideating, we wanted to create a set of principles that
              would help us evaluate the quality of these introductions and our
              solutions.
            </p>
            <ol>
              <li>
                {" "}
                <span className="highlighted-offset-very-important">
                  Relevant:
                </span>{" "}
                Presented to the right user at contextually relevant moments and
                circumstances.
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Valuable:
                </span>{" "}
                Help members with their immediate or long-term goals and
                objectives on our platform.
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Actionable:
                </span>{" "}
                Learning by doing is more effective than reading instructions.{" "}
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Conversational:
                </span>{" "}
                The goal is not to force users to notice or engage with the
                feature; let them find and engage with the features on their
                terms.
              </li>
            </ol>

            <h5 className="og-text-style-heading5">Introduction Types</h5>
            <p>
              We did a Figjam session with multiple partners to segment the
              types of introductions we accounted for in the inventory. This
              would allow us to establish a hierarchy and usage rules for
              volume, persistence, and frequency.
            </p>
            <p>
              We were able to segment introductions and assigned the following
              hierarchy:
            </p>
            <ol>
              <li>
                {" "}
                <span className="highlighted-offset-very-important">
                  Onboarding to the app:
                </span>{" "}
                Prompts designed to show a member around the application
                including key tasks <i>("touring around the house")</i>.
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Onboarding to an Environment:
                </span>{" "}
                Prompts designed to show members around a new specific
                environment within the app <i>("touring around a new room")</i>.
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Horizontal Feature:
                </span>{" "}
                Prompts designed to introduce members to important app
                improvements{" "}
                <i>("Dark Mode, accessibility improvements, etc."")</i>
              </li>
              <li>
                <span className="highlighted-offset-very-important">
                  Contextual Feature:
                </span>{" "}
                Prompts designed to introduce members to contextual features to
                the app <i>("Now you can pin comments in your posts.")</i>
              </li>
            </ol>
          </div>
        </div>
        <img
          src={figjamImg}
          className="project-displayfb-img"
          alt="figjam session"
        />
        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number3}
              alt="Step 3"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset og-text-style-heading4">
              Ideate
            </h5>
          </div>
          <div>
            <h3 className="og-text-style-heading5" style={{ marginTop: 0 }}>
              Inspiration
            </h3>
            <p>
              Aside from examining Conversational Design and how other apps in
              the industry were solving this problem, we also wanted to get
              inspired by other more unconventional design practices.
            </p>

            <h4 className="og-text-style-heading6">Game Design</h4>
            <p>
              In Open World game design, the player's interface, prompts, and
              capabilities adapt based on where the player is in the game, how
              many resources they have acquired, and the missions or journeys
              they have chosen to take.{" "}
            </p>
          </div>
        </div>
        <div className="project-img-grid">
          <img
            src={gameImg1}
            alt="Open world game design interface"
            className="grid-img"
          />
          <img
            src={gameImg2}
            alt="Open world game design interface"
            className="grid-img"
          />
          <img
            src={gameImg3}
            alt="Open world game design interface"
            className="grid-img"
          />
          <img
            src={gameImg4}
            alt="Open world game design interface"
            className="grid-img"
          />
        </div>
        <div className="design-process__section-container no-top-margin ">
          <div />
          <div>
            <h4 className="og-text-style-heading6">Disney Personalization</h4>
            <p>
              When you plan a trip to Disney, the company may give you the
              option to tailor your experience to a specific occasion or intent
              (birthday, meeting your favorite character, anniversary, etc.).
              This personalizes their experience, creating a deeper connection
              to the brand. Since all experiences are individual, we wanted to
              see if there was an opportunity for us to capture the user's
              intent or goals within LinkedIn and surface features that may help
              them achieve those goals.
            </p>
          </div>
        </div>
        <img
          src={disneyImg}
          className="project-displayfb-img"
          alt="girl using Disney's Magic Bracelet"
        />
        <div className="design-process__section-container no-top-margin ">
          <div />
          <div>
            <h3 className="og-text-style-heading5">Components</h3>
            <p>
              We landed on creating three components that we were confident
              would help us deliver accessible and contextual introductions.
            </p>
          </div>
        </div>
        <img
          src={componentsGrayImg1}
          className="project-displayfb-img"
          alt="displaying three components: Coachmark, inline callout and a new tag."
        />
        <div className="design-process__section-container no-top-margin ">
          <div />
          <div>
            <h3 className="og-text-style-heading5">Visual and Motion Design</h3>
            <p>
              My team also saw an opportunity to create a Color & Shape system
              for these components so that they would be recognizable, visually
              different than the rest of the UI, and a chance for us to
              introduce a bit of personality.
            </p>
            <div style={{ width: `100%` }}>
              <img
                src={shapeExplorationImg}
                alt="exploration shapes"
                style={{
                  width: `100%`,
                  borderRadius: `24px`,
                  marginTop: `32px`,
                }}
              />
            </div>
          </div>
        </div>
        <img
          src={componentsVMImg}
          className="project-displayfb-img"
          alt="color explorations"
        />
        <div className="design-process__section-container no-top-margin ">
          <div />
          <div>
            <p>
              We also explored paring the Introduction with motion as a form of
              communication.{" "}
            </p>
            <div className="project-img-phone-container">
              <img
                src={reactionsImg}
                style={{ marginTop: `32px` }}
                className="using motion to introduce features"
                alt="color explorations"
              />
            </div>
          </div>
        </div>

        <img
          src={componentsShowcase}
          className="project-displayfb-img"
          alt="components in various contexts"
        />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number4}
              alt="step 4"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Prototype
            </h5>
          </div>
          <div>
            <p>
              We created a small deck of the framework and four prototypes that
              illustrated solutions addressing most of the use cases we gathered
              with the audit, carefully considering relevance and accessibility.{" "}
            </p>
            <div className="videos-grid">
              {createVideo(scenarioVideo1)}
              {createVideo(scenarioVideo2)}
              {createVideo(scenarioVideo3)}
              {createVideo(scenarioVideo4)}
            </div>
          </div>
        </div>
        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number5}
              alt="step 5"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style highlighted-offset">
              Validate
            </h5>
          </div>
          <div>
            <p>
              We partnered with Designers that were very interested and invested
              in this project, and we asked them to help us gather feedback from
              their teams.{" "}
            </p>
          </div>
        </div>
        {/* <img
          src={withDesigners1}
          alt="testing"
          className="project-displayfb-img"
        /> */}
        {/* <img src={test5} alt="testing" className="project-displayfb-img" /> */}
        <div className="project-img-grid">
          <img
            src={withDesigners1}
            alt="testing"
            className="grid-img  "
            style={{ objectFit: `fill`, maxHeight: `300px !important` }}
          />
          <img
            src={withDesigners2}
            alt="testing"
            className="grid-img  "
            style={{ objectFit: `fill`, maxHeight: `300px` }}
          />
          <img
            src={withDesigners3}
            alt="testing"
            className="grid-img  "
            style={{ objectFit: `fill`, maxHeight: `300px` }}
          />
        </div>
        <div className="design-process__section-container no-top-margin">
          <div />
          <div>
            <p>
              In a small workshop with our engineering team, we discussed
              implementation ideas and investment costs.
            </p>

            <p>
              After getting validation and feedback from designers and
              engineers, we presented the framework to Design Leadership. We got
              great feedback and positive remarks, and they also advised us to
              pair the framework with a way to track these introductions.{" "}
            </p>
          </div>
        </div>
        <img
          src={withLeadership}
          className="project-displayfb-img"
          alt="showing framework to leadership"
        />

        <div className="design-process__section-container no-top-margin">
          <div />
          <p>
            Although it is not perfect yet, we created a process requiring teams
            to record their Introduction on Airtable detailing the relevancy of
            the feature to the user so the team can use our components. They
            allow us to almost guarantee designers think through all appropriate
            considerations and will enable us to track their volume.
          </p>
        </div>

        <img
          src={qaProcessImg}
          alt="testing"
          className="project-displayfb-img  "
          // style={{ objectFit: `fill`, maxHeight: `300px !important` }}
        />

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
export default ConversationalDesignProjectPage
