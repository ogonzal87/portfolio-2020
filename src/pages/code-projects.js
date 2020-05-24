import React from "react"
import CodeProjectCard from "./../components/home/code/code-card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/top-nav"
import PortfolioFooter from "../components/footer"
import chameleonVid from "../assets/images/code/cam-aleon.mp4"
import faceFilterVid from "../assets/images/code/face-filter.mp4"
import dsVid from "../assets/images/code/oskrds.mp4"
import emotionVid from "../assets/images/code/fr.mp4"
import pokemonVid from "../assets/images/code/pokemon.mp4"
import designDebatesVid from "../assets/images/code/design-debates.mp4"
import designCalVid from "../assets/images/code/design-cal.mp4"
import soundIllustrationVid from "../assets/images/code/sound-illustration.mp4"
import skullAR from "../assets/images/code/skullAR.mp4"

function createVideo(videoSource) {
  return (
    <video
      playsInline
      muted
      loop
      className="card-image"
      onMouseOver={event => event.target.play()}
      onMouseOut={event => event.target.pause()}
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  )
}

export default () => (
  <Layout style={{ position: "relative", height: "100vh" }}>
    <SEO title="Code Projects" />
    <TopNav work about />
    <section className="home-code-section" style={{ marginBottom: "200px" }}>
      <ul className="code-cards-list">
        <CodeProjectCard
          title="Instagram face filter"
          description="Made a few face filers (effects) for Instagram. You can play with them on your Insta by giving it a click ⬆."
          video={createVideo(faceFilterVid)}
          href="https://instagram.com/a/r/?effect_id=1077625679243023"
        />
        <CodeProjectCard
          title="Skull AR"
          description="Playing around with illustration and Augmented Reality."
          video={createVideo(skullAR)}
        />
        <CodeProjectCard
          title="OSKRHQ.DS 2.0"
          description="This sandbox showcases my Design System's architecture and consumption of Design Tokens which I use for all my projects like this portfolio."
          video={createVideo(dsVid)}
          href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
        />
        <CodeProjectCard
          title="Emotion recognition"
          description="An app that recognizes face gestures and displays the corresponding emotion using Machine Learning and the browser."
          video={createVideo(emotionVid)}
          href="https://emotion-recognition.surge.sh/"
        />
        <CodeProjectCard
          title="Cam-aleon"
          description="An app that takes any color shown to the camera and colors a little chameleon I drew using Procreate."
          video={createVideo(chameleonVid)}
          href="https://cam-aleon.surge.sh/"
        />
        <CodeProjectCard
          title="Pokemon game"
          description="A Pokemon cards game app I created using Vanilla Javascript and CSS Custom Properties. Wanted to build it without any UI Frameworks."
          video={createVideo(pokemonVid)}
          href="https://pokemon-game.surge.sh/"
        />
        <CodeProjectCard
          title="Design debates"
          description="A democratic approach for when you can't decide which design solution is best. This app let's you show two designs for light targeted feedback."
          video={createVideo(designDebatesVid)}
          href="https://design-debates.netlify.com/"
        />
        <CodeProjectCard
          title="Meeting cost calculator"
          description="A calculator react app that estimates the cost of a Design meeting in dollars."
          video={createVideo(designCalVid)}
          href="https://money-time.surge.sh/"
        />
        <CodeProjectCard
          title="Sound activated illustration"
          description="An app that uses sound to display different parts of an illustration I made. The loader it is, the more you see."
          video={createVideo(soundIllustrationVid)}
          href="https://sound-illustration.surge.sh/"
        />
      </ul>
    </section>
    <PortfolioFooter />
  </Layout>
)
