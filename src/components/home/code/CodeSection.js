import React from "react"
import codeLetteringImg from "../../../assets/images/hand-brush/code.png"
import CodeProjectCard from "./code-card"

const Images = {
  faceFilterImg: require("../../../assets/images/code/face-filter.gif"),
  dsImg: require("../../../assets/images/code/oskrds.gif"),
  emotionImg: require("../../../assets/images/code/emotion-recognition.gif"),
  pokemonImg: require("../../../assets/images/code/pokemon.gif"),
  // designCalImg :"require(../../../assets/images/code/design-cal.gif"),
  chameleonImg: require("../../../assets/images/code/cam-aleon.gif"),
  designDebatesImg: require("../../../assets/images/code/design-debates.jpg"),
}

const CodeSection = () => {
  return (
    <section className="home-code-section">
      <img
        src={codeLetteringImg}
        alt=""
        className="home-brush-lettering code"
      />

      <ul className="code-cards-list">
        <CodeProjectCard
          title="Instagram face filter"
          description="Made a few face filers (effects) for Instagram."
          src={Images.faceFilterImg}
          href="https://instagram.com/a/r/?effect_id=1077625679243023"
        />
        <CodeProjectCard
          title="OSKRHQ.DS 2.0"
          description="This sandbox showcases my Design System's architecture and consumption of Design Tokens."
          src={Images.dsImg}
          href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
        />
        <CodeProjectCard
          title="Emotion recognition"
          description="Created an app that recognizes face gestures and displays the emotion using Machine Learning and the browser."
          src={Images.emotionImg}
          href="https://emotion-recognition.surge.sh/"
        />
        <CodeProjectCard
          title="Cam-aleon"
          description="App I created that takes a color shown to the camera and colors a really cool chameleon I drew."
          src={Images.chameleonImg}
          href="https://cam-aleon.surge.sh/"
        />
        <CodeProjectCard
          title="Pokemon game"
          description="A Pokemon game app I created using Vanilla Javascript and CSS Custom Properties. Wanted to build it without relying on any UI Framework/Libraries like React."
          src={Images.pokemonImg}
          href="https://pokemon-game.surge.sh/"
        />
        <CodeProjectCard
          title="Design debates"
          description="A democratic approach for when you can't decide which design solution is best. This app let's you show two designs for light targeted feedback."
          src={Images.designDebatesImg}
          href="https://design-debates.netlify.com/"
        />
      </ul>
    </section>
  )
}

export default CodeSection
