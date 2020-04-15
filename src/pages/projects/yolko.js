import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import yolkoAvatar from "../../assets/images/yolko/yolko-hero.png"
import empathizeImg1 from "../../assets/images/yolko/ga-people.jpg"
import empathizeImg2 from "../../assets/images/yolko/ga-presentation.jpg"
import empathizeImg3 from "../../assets/images/yolko/presentation.jpg"
import empathizeImg4 from "../../assets/images/yolko/presentation2.jpg"
import defineImg1 from "../../assets/images/yolko/research1.jpg"
import defineImg2 from "../../assets/images/yolko/research2.jpg"
import ideateImg1 from "../../assets/images/yolko/yolko-journeymap.jpg"
import ideateImg2 from "../../assets/images/yolko/bubble-gum-concept.jpg"
import ideateImg3 from "../../assets/images/yolko/yolko-wireframing1.jpg"
import ideateImg4 from "../../assets/images/yolko/yolko-sketching.jpg"
import yolkoDisplayImg2 from "../../assets/images/yolko/thumbnail.jpg"
import prototypeImg1 from "../../assets/images/yolko/yolko-early.jpg"
import prototypeImg2 from "../../assets/images/yolko/yolko-early2.jpg"
import prototypeImg3 from "../../assets/images/yolko/yolko-early-ui.jpg"
import prototypeImg4 from "../../assets/images/yolko/yolko-early-ui2.jpg"
import testImg1 from "../../assets/images/yolko/yolko-testing.gif"
import testImg2 from "../../assets/images/yolko/yolko-pitch.gif"
import implementImg1 from "../../assets/images/yolko/yolko-wireframing.jpg"
import implementImg2 from "../../assets/images/yolko/yolko-implement2.jpg"
import implementImg3 from "../../assets/images/yolko/yolko-implement.jpg"
import implementImg4 from "../../assets/images/yolko/yolko-implement3.jpg"
import demo1 from "../../assets/images/yolko/yolko-demo1.gif"
import demo2 from "../../assets/images/yolko/yolko-demo2.gif"
import demo3 from "../../assets/images/yolko/yolko-demo3.gif"
import demo4 from "../../assets/images/yolko/yolko-demo4.gif"
import demo5 from "../../assets/images/yolko/yolko-demo5.gif"
import demo6 from "../../assets/images/yolko/yolko-demo6.gif"
import yolkoShowcaseImg from "../../assets/images/yolko/yolko-showcase.jpg"
import PortfolioFooter from "../../components/footer"
import number1 from "../../assets/images/hand-brush/01.png"
import number2 from "../../assets/images/hand-brush/02.png"
import number3 from "../../assets/images/hand-brush/03.png"
import number4 from "../../assets/images/hand-brush/04.png"
import number5 from "../../assets/images/hand-brush/05.png"
import number6 from "../../assets/images/hand-brush/06.png"
import TopNav from "../../components/top-nav"

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px;
  max-width: 1200px;
  margin: 0 auto;

  img {
    height: 800px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    box-sizing: border-box;

    img {
      width: 100%;
      height: auto;
    }
  }
`

const YolkoProjectPage = () => {
  return (
    <Layout>
      <SEO title="Personal work - Yolko" />
      <div className="project-page">
        <TopNav work about resume />

        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Personal Project</span>
            <h1 className="ds-display3-text-style hero-container__title">
              YOLKO
            </h1>
            <p className="  hero-container__description">
              Real-time feedback application for presentations. It quantifies
              the mood of the audience and displays it with facial gestures
              through an Emoji called YOLKO. It also allows the presenter to
              survey the audience in real-time and the audience can ask and
              up-vote anonymous questions. The app uses AngularJS for the
              front-end, and Firebase for the back-end.
            </p>
            <p className="special-text-styling">
              Product, Interaction and Experience Design
            </p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Development</span>
            <span className="special-text-styling">Creative Direction</span>
            <a
              href="https://imyolko.com/#!/"
              className="project-btn__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="og-button--primary og-button--medium og-button">
                Meet yolko
              </button>
            </a>
          </div>
          <div className="hero-container__img-container">
            <img
              src={yolkoAvatar}
              className="project-yolko-hero"
              alt="yolko avatar"
            />
          </div>
        </div>

        {/* <h3 className="project-section-title">DOSSIER</h3> */}
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p>
              As a presenter, you are running blind while in front of an
              audience since they are only able to provide feedback <i>after</i>{" "}
              the presentation or you rely on a few to speak for the group. As
              an attendee, my research showed that{" "}
              <strong>
                9 out of 10 people found themselves not wanting to participate
                out of fear of revealing themselves to other attendees and the
                presenter
              </strong>
              . I saw these as missed opportunities for learning and
              participation.
            </p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Primary Users</p>
            <p>
              Attendees and presenters at social gatherings such as classes or
              talks.{" "}
            </p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p>Apr 2016 - Nov 2017</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p>
              Pen, paper, AngularJS, Firebase, Sketch App, SASS, Gulp.JS,
              Node.js, Invision.
            </p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p>Creator, Designer, Researcher and Developer.</p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p>
              <strong>
                <i>If</i>
              </strong>{" "}
              people feel afraid of revealing themselves when asking questions,
              or expressing their opinions at social settings,{" "}
              <strong>
                <i>then</i>
              </strong>{" "}
              aggregating each participant's input while maintaining their
              privacy will 1) improve their participation and subsequent
              understanding of the subject being presented, and 2) the presenter
              could use this data to adjust to the needs of the audience in real
              time if s/he chooses to.
            </p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p>
              Avoid getting the audience distracted and provide anonymity for
              them.
            </p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p>Mobile Web and Desktop.</p>
          </div>
        </div>

        <div className="project__video-container">
          <iframe
            src="https://player.vimeo.com/video/207403309"
            width="1000"
            height="800"
            frameBorder="0"
            allowFullScreen
            title=" "
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>

        <img
          src={yolkoShowcaseImg}
          className="project-showcase-img"
          alt="showcase"
        />

        <div className="design-process__section-container no-top-margin ">
          <div className="project-design-process-title-container">
            <img
              src={number1}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              EMPATHIZE
            </h5>
          </div>
          <div>
            <p>
              The story on this one begins back in 2015 when I attended General
              Assembly to learn to code. While taking the classes, I realized
              that very few people would ask questions. Personally, I did not
              ask questions because I didn't want to sound dumb or hold up the
              class. But since no one was asking questions, I thought I was the
              only one not getting it... It wasn't until the last day of school
              when all my classmates went out to grab dinner that we all
              realized we were feeling the same way - we were all afraid of
              asking questions.
            </p>

            <p>
              Social anxiety is a natural emotion especially when you are trying
              to convey the way you think or our lack of knowledge. Everyone has
              experienced this in some way.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={empathizeImg1} className="grid-img" alt="empathizing" />
          <img src={empathizeImg2} className="grid-img" alt="empathizing" />
          <img src={empathizeImg3} className="grid-img" alt="empathizing" />
          <img src={empathizeImg4} className="grid-img" alt="empathizing" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number2}
              alt="number"
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              Define
            </h5>
          </div>
          <div>
            <p>
              People feel uncomfortable asking questions or participating in
              social settings because when they do, they reveal not only who
              they are but also their vulnerabilities to the whole group.
            </p>

            <p>
              On the presenter's side, the presenter does not receive feedback
              in time to adjust the delivery of his/her message. In the context
              of classes, for example, the teacher only gets true feedback after
              the fact usually though exams to gauge whether or not people are
              understanding the material. This is broken.
            </p>

            <p>
              At this point, these problems were just assumptions backed by some
              nodes and a few agreements over dinner, so I did some guerrilla
              research...{" "}
              <strong>
                Out of 16 participants in a survey I administered, 94% of them
                stated that they felt uncomfortable asking questions in front of
                people, and 86% stated they would provide anonymous feedback to
                the presenter if they had the chance.
              </strong>
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <div>
            <img src={defineImg1} className="grid-img" alt="define" />
            <img src={defineImg2} className="grid-img" alt="define" />
          </div>

          <p>
            Now that I had data backing up my assumptions, my testable
            hypothesis then became:{" "}
            <strong>
              <i>If</i>
            </strong>{" "}
            people feel afraid of revealing themselves when asking questions or
            expressing their opinions at social settings,{" "}
            <strong>
              <i>then</i>
            </strong>{" "}
            aggregating each participant's input and displaying it publicly
            while maintaining their privacy will improve their participation and
            subsequent understanding of the subject being presented since the
            presenter will hopefully adjust to the needs of the audience based
            on the data fed in real time.
          </p>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number3}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              Ideate
            </h5>
          </div>
          <div>
            <p>
              I was designing two solutions for two separate users; the audience
              and the presenter. My original requirements were:{" "}
            </p>
            <ol>
              <li>
                The audience can provide feedback to the Presenter in real time
              </li>
              <li>
                The audience can see how everyone is feeling in real time all
                the time
              </li>
              <li>
                The presenter can see how the audience is feeling in real time
              </li>
              <li>
                The presenter can ask questions to the audience and see the
                results in real time
              </li>
            </ol>

            <p>
              The idea was to create some sort of visual indicator that would
              allow the presenter and audience to know the real-time feelings of
              the class or presentation. It had to be relatable and had to feel
              like you could empathize with it as an attendee.
            </p>

            <p>
              I divided the app into two separate experiences; one for the
              Presenter, and the other for the Attendees. The presenter would
              have a Dashboard where he/she would be able to see all data coming
              in real time. The Attendee would have a simple interface where
              they could provide feedback. However, both interfaces must be
              connected by an artifact of emotion so that the presenter and the
              audience could see the aggregate input of everyone.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={ideateImg1} alt="ideate" className="grid-img" />
          <img src={ideateImg2} alt="ideate" className="grid-img" />
          <img src={ideateImg3} alt="ideate" className="grid-img" />
          <img src={ideateImg4} alt="ideate" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div></div>
          <div>
            <p>
              The original ideas that came to me were to create a bubble gum
              that would grow as the tension in the class increased. The goal of
              the presenter was then to not let the bubble gum get too big, but
              after getting feedback from my teacher and a few classmates, I
              realized that I needed to show emotion making the app more human.
              What better way than to use the universal language for emotions;
              Emojis. YOLKO was born as the face of the audience.
            </p>
          </div>
        </div>

        <img
          src={yolkoDisplayImg2}
          className="project-displayfb-img"
          alt="yolko display"
        />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number4}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              Prototype
            </h5>
          </div>
          <div>
            <p>
              My approach here was to learn as fast as I could through rapid
              testing. Below you can see the first iterations of the User
              Interfaces and how it progressed with each cycle.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={prototypeImg1} alt="prototype" className="grid-img" />
          <img src={prototypeImg2} alt="prototype" className="grid-img" />
          <img src={prototypeImg3} alt="prototype" className="grid-img" />
          <img src={prototypeImg4} alt="prototype" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number5}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              Test
            </h5>
          </div>
          <div>
            <p>
              It was hard to test for YOLKO because you need an audience, a
              presenter and something that allows them to communicate in real
              time. I conducted several usability tests with my classmates,
              teachers and a few friends using Invision but to really test my
              ideas, I needed to test in a live presentation, so I built a very
              simple app. I vividly remember that first test. It was actually
              fun presenting in front of an audience - it was a presentation
              about how YOLKO came to be. However, it was way too distracting
              for the audience since I didn't have any rules for giving
              feedback. It became more of a game than a tool of communication.
              The audience just wanted to see YOLKO change and I could not stop
              it. My goal for future iterations became to let the audience speak
              up through YOLKO but <strong>*only*</strong> when triggered by the
              teacher.
            </p>

            <p>
              I even went and presented YOLKO to Allan Gyorke, the Chief
              Academic Technology Officer at the University of Miami to see if I
              could test YOLKO in a real class. Unfortunately his staff shot
              down the idea stating that YOLKO would not work in one of their
              classes because the teachers would not allow a live feedback tool…
              <span role="img" aria-label="emoji">
                😞
              </span>
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={testImg1} alt="testing" className="grid-img" />
          <img src={testImg2} alt="testing" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number6}
              alt=""
              className="project-design-process-number"
            />
            <h5 className="design-process__section-title ds-headline-text-style">
              Implement
            </h5>
          </div>
          <div>
            <p>
              I decided to use AngularJS with a Component Architecture for my
              front-end coupled with Bootstrap, and Firebase for my back-end
              since I needed something that was scalable and that provided me
              with real-time features. I also wrote my own build-task setup
              using Gulp.js - the source code is available on Github.
            </p>

            <p>
              I worked on YOLKO's implementation as I was learning how to code
              right after going to General Assembly. My goal with the project
              was to really understand how design is transferred into code and
              how to work with data served from a Database in real-time. YOLKO
              still has a few interaction problems and inconsistencies in
              design. Learning to code was my main and number one priority with
              the project so I neglected to spend time on great aesthetics and
              interaction for the sake of functionality and learning.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={implementImg1} alt="implementation" className="grid-img" />
          <img src={implementImg2} alt="implementation" className="grid-img" />
          <img src={implementImg3} alt="implementation" className="grid-img" />
          <img src={implementImg4} alt="implementation" className="grid-img" />
        </div>

        <DemoGrid>
          <div>
            <h5>YOLKO</h5>
            <p>
              YOLKO is the face of the audience but he can only be awoken by the
              presenter when he needs the feedback. Throughout a presentation,
              you usually have these pauses that the presenter does when
              shifting from one topic to another. Sometimes they even ask
              questions before moving forward. I wanted the presenter to take
              advantage of these pauses to active YOLKO and get a pulse from the
              audience. As an attendee, you only have one "vote" per YOLKO
              activation. These are recorded for the presenter to see what were
              his ups and downs throughout the presentation. Notice that YOLKO
              changes in the attendee's view as well. This lets the attendee
              know how the group feels.{" "}
            </p>
          </div>
          <img src={demo1} className="grid-img" alt="demo" />
          <div>
            <h5>LOST-O-METER</h5>
            <p>
              While interviewing my teachers I asked them what were the top
              things they wanted to know while giving a class. One of the things
              they said was, "we want to know if people are lost?". This would
              let them address the problem right away. The Lost-O-Meter tells
              the presenter the percentage of people that are lost at that point
              in time and it is only activated when the presenter needs it.{" "}
            </p>
          </div>
          <img src={demo2} alt="demo" className="grid-img" />
          <div>
            <h5>AUDIENCE QUESTIONS</h5>
            <p>
              I needed to provide a way for the audience to ask questions
              without revealing themselves. Every question is stored in the
              database but the presenter and audience do not know who that
              person is. I also introduced the ability for the attendees to
              up-vote the questions to prioritize them for the presenter. Notice
              that the presenter activates the questions when he wants and can
              leave the questions active the whole presentation if need it be.
            </p>
          </div>
          <img src={demo3} alt="demo" className="grid-img" />
          <div>
            <h5>SPEEDOMETER</h5>
            <p>
              Another thing the presenters I interviewed said would be a great
              thing to know was if they were going too fast or too slow for the
              audience. Notice that again, the presenter activates the feature
              when he/she wants to.{" "}
            </p>
          </div>
          <img src={demo4} alt="demo" className="grid-img" />
          <div>
            <h5>HEARING-O-METER</h5>
            <p>
              The presenters and the attendees I interviewed also wanted a
              feature that allowed the audience to let the presenter know that
              they could not hear properly. Especially in large classes where
              people are even more afraid to speak up.{" "}
            </p>
          </div>
          <img src={demo5} alt="demo" className="grid-img" />
          <div>
            <h5>POP QUIZZES</h5>
            <p>
              Presenters wanted the chance to interact with the audience and let
              them know collectively the results of a question. The Pop Quiz
              feature allows a presenter to store questions s/he would like to
              ask the audience in real time. The answers can be revealed to the
              audience once everyone has participated. This is a cool and fun
              feature if you really want to engage with the audience.{" "}
            </p>
          </div>
          <img src={demo6} alt="demo" className="grid-img" />
        </DemoGrid>

        <div className="design-process__section-container no-top-margin">
          <div></div>
          <div>
            <p>
              The original idea was to let the presenter customize the defaulted
              questions in the app;{" "}
              <i>Are you lost? Can you hear? and How do you like the speed?</i>.
              I need to find the time to implement the feature.
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style">
              lessons learned
            </h5>
          </div>
          <div>
            <p>
              This project was the first app I ever built all by myself
              end-to-end, so naturally, building YOLKO taught me many things.
              Especially about myself. I learned to love code and expressing
              ideas through it. I learned that the best way to learn anything is
              by doing the work and putting the hours. I learned that Google is
              your best friend and that if you ever have a problem coding,
              someone else had it before you (shout out to Stack Overflow).
            </p>

            <p>
              I also learned the real meaning of <i>testing.</i>
            </p>

            <p className="crafted-quote">
              The goal of testing a solution is to <strong>*learn*</strong>, not
              just make the design/solution pass.
            </p>

            <p>
              In all, it was an amazing project to work on and I am happy YOLKO
              is alive and well, but I have moved on to working on other
              projects. Hopefully I can find the time to work on those things
              that still bother me about him in the future, but for now, I'll
              keep using him for small presentations, design critiques and small
              meetup talks.{" "}
              <span role="img" aria-label="emoji">
                😁
              </span>
            </p>
          </div>
        </div>

        <PortfolioFooter />
      </div>
    </Layout>
  )
}

export default YolkoProjectPage
