import React from "react"
import codeLetteringImg from "../../../assets/images/hand-brush/code.png"
import CodeProjectCard from "./code-card"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import chameleonVid from "../../../assets/images/code/cam-aleon.mp4"
import faceFilterVid from "../../../assets/images/code/face-filter.mp4"
import emotionVid from "../../../assets/images/code/fr.mp4"
import pokemonVid from "../../../assets/images/code/pokemon.mp4"
import designDebatesVid from "../../../assets/images/code/design-debates.mp4"
import skullAR from "../../../assets/images/code/skullAR.mp4"

const CodeSection = () => {
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
          href="https://design-debates.netlify.app/"
        />
      </ul>

      <AniLink
        paintDrip
        to="/code-projects"
        duration={0.75}
        hex="#5900FF"
        className="show-more-link"
      >
        Show more ➡
      </AniLink>
    </section>
  )
}

export default CodeSection
