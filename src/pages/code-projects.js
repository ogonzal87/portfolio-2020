import React from "react"
import CodeProjectCard from "./../components/home/code/code-card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/top-nav"
import PortfolioFooter from "../components/footer"

const Images = {
  faceFilterImg: require("../assets/images/code/face-filter.gif"),
  dsImg: require("../assets/images/code/oskrds.gif"),
  emotionImg: require("../assets/images/code/emotion-recognition.gif"),
  pokemonImg: require("../assets/images/code/pokemon.gif"),
  designCalImg: require("../assets/images/code/design-cal.gif"),
  chameleonImg: require("../assets/images/code/cam-aleon.gif"),
  designDebatesImg: require("../assets/images/code/design-debates.jpg"),
  dimSumImg: require("../assets/images/code/dim-sum.jpg"),
  soundIllustrationImg: require("../assets/images/code/sound-illustration.gif"),
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
          src={Images.faceFilterImg}
          href="https://instagram.com/a/r/?effect_id=1077625679243023"
        />
        <CodeProjectCard
          title="OSKRHQ.DS 2.0"
          description="This sandbox showcases my Design System's architecture and consumption of Design Tokens which I use for all my projects like this portfolio."
          src={Images.dsImg}
          href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
        />
        <CodeProjectCard
          title="Emotion recognition"
          description="An app that recognizes face gestures and displays the corresponding emotion using Machine Learning and the browser."
          src={Images.emotionImg}
          href="https://emotion-recognition.surge.sh/"
        />
        <CodeProjectCard
          title="Cam-aleon"
          description="An app that takes any color shown to the camera and colors a little chameleon I drew using Procreate."
          src={Images.chameleonImg}
          href="https://cam-aleon.surge.sh/"
        />
        <CodeProjectCard
          title="Pokemon game"
          description="A Pokemon cards game app I created using Vanilla Javascript and CSS Custom Properties. Wanted to build it without any UI Frameworks."
          src={Images.pokemonImg}
          href="https://pokemon-game.surge.sh/"
        />
        <CodeProjectCard
          title="Design debates"
          description="A democratic approach for when you can't decide which design solution is best. This app let's you show two designs for light targeted feedback."
          src={Images.designDebatesImg}
          href="https://design-debates.netlify.com/"
        />
        <CodeProjectCard
          title="Meeting cost calculator"
          description="A calculator react app that estimates the cost of a Design meeting in dollars."
          src={Images.designCalImg}
          href="https://money-time.surge.sh/"
        />
        <CodeProjectCard
          title="Sound activated illustration"
          description="An app that uses sound to display different parts of an illustration I made. The loader it is, the more you see."
          src={Images.soundIllustrationImg}
          href="https://sound-illustration.surge.sh/"
        />
        <CodeProjectCard
          title="Dim Sum Design System site"
          description="A react application showcasing a design system I created for a previous employer."
          src={Images.dimSumImg}
          href="https://dimsum-demo.surge.sh/"
        />
      </ul>
    </section>
    <PortfolioFooter />
  </Layout>
)
