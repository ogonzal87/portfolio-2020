import React from "react"
import CodeProjectCard from "./../components/home/code/code-card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/top-nav"
import PortfolioFooter from "../components/footer"
import dsVidMP4 from "../assets/images/code/oskrds.mp4"
import dsVidWEB from "../assets/images/code/oskrds.webm"
import dsVidPoster from "../assets/images/code/oskrds.jpg"
import designCalVidMP4 from "../assets/images/code/design-cal.mp4"
import designCalVidWEB from "../assets/images/code/design-cal.webm"
import designCalVidPoster from "../assets/images/code/design-cal.jpg"
import soundIllustrationVidMP4 from "../assets/images/code/sound-illustration.mp4"
import soundIllustrationVidWEB from "../assets/images/code/sound-illustration.webm"
import soundIllustrationVidPoster from "../assets/images/code/sound-illustration.jpg"
import chameleonVidMP4 from "../assets/images/code/cam-aleon.mp4"
import chameleonVidPoster from "../assets/images/code/cam-aleon.jpg"
import chameleonVidWEB from "../assets/images/code/cam-aleon.webm"
import faceFilterVidMP4 from "../assets/images/code/face-filter.mp4"
import faceFilterVidPoster from "../assets/images/code/face-filter.jpg"
import faceFilterVidWEB from "../assets/images/code/face-filter.webm"
import emotionVidMP4 from "../assets/images/code/fr.mp4"
import emotionVidPoster from "../assets/images/code/fr.jpg"
import emotionVidWEB from "../assets/images/code/fr.webm"
import pokemonVidMP4 from "../assets/images/code/pokemon.mp4"
import pokemonVidPoster from "../assets/images/code/pokemon.jpg"
import pokemonVidWEB from "../assets/images/code/pokemon.webm"
import designDebatesVidMP4 from "../assets/images/code/design-debates.mp4"
import designDebatesVidPoster from "../assets/images/code/design-debates.jpg"
import designDebatesVidWEB from "../assets/images/code/design-debates.webm"
import skullARMP4 from "../assets/images/code/skullAR.mp4"
import skullARPoster from "../assets/images/code/skullAR.jpg"
import skullARWEB from "../assets/images/code/skullAR.webm"
import babyYodaMP4 from "../assets/images/code/baby-yoda.mp4"
import babyYodaPoster from "../assets/images/code/baby-yoda.jpg"
import babyYodaWEB from "../assets/images/code/baby-yoda.webm"
import ethRocketMP4 from "../assets/images/code/eth-merge-rocket.mp4"
import ethRocketPoster from "../assets/images/code/eth-rocket.jpg"
import ethRocketWEB from "../assets/images/code/eth-merge-rocket.webm"
import linkedInLogoMP4 from "../assets/images/code/linkedin-logo.mp4"
import linkedInLogoPoster from "../assets/images/code/linkedin-logo.jpg"
import linkedInLogoWEB from "../assets/images/code/linkedin-logo.webm"
import cloneXLogoMP4 from "../assets/images/code/clonex.mp4"
import cloneXLogoPoster from "../assets/images/code/clonex.jpg"
import cloneXLogoWEB from "../assets/images/code/clonex.webm"

function createVideo(videoSourceMP4, videoSourceWEB, videoPoster) {
  return (
    <video
      playsInline
      muted
      loop
      className="card-image"
      poster={videoPoster}
      onMouseOver={event => event.target.play()}
      onFocus={event => event.target.play()}
      onMouseOut={event => event.target.pause()}
      onBlur={event => event.target.pause()}
    >
      <source src={videoSourceWEB} type="video/webm" />
      <source src={videoSourceMP4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default () => (
  <Layout style={{ position: "relative", height: "100vh" }}>
    <SEO title="Code Projects" />
    <TopNav about contactMe />
    <section className="home-code-section" style={{ marginBottom: "200px" }}>
      <ul className="code-cards-list">
        <CodeProjectCard
          title="Metaverse NFT Identifier"
          description="Using one of my NFTs as my visual identifier in digital social gatherings."
          video={createVideo(cloneXLogoMP4, cloneXLogoWEB, cloneXLogoPoster)}
          href=""
        />

        <CodeProjectCard
          title="Baby Yoda"
          description="Just playing with 3D models and user interaction to complement the experience."
          video={createVideo(babyYodaMP4, babyYodaWEB, babyYodaPoster)}
          href="https://d43z1t.csb.app/"
        />

        <CodeProjectCard
          title="Cam-aleon"
          description="An app that takes any color shown to the camera and colors a little chameleon I drew using Procreate."
          video={createVideo(
            chameleonVidMP4,
            chameleonVidWEB,
            chameleonVidPoster
          )}
          href="https://cam-aleon.surge.sh/"
        />

        <CodeProjectCard
          title="Instagram face filter"
          description="Made a few face filers (effects) for Instagram. You can play with them on your Insta by giving it a click ⬆."
          video={createVideo(
            faceFilterVidMP4,
            faceFilterVidWEB,
            faceFilterVidPoster
          )}
          href="https://instagram.com/a/r/?effect_id=1077625679243023"
        />

        <CodeProjectCard
          title="The ETH Rocket"
          description="Just playing with 3D models and using the opportunity to educate people on The Merge."
          video={createVideo(ethRocketMP4, ethRocketWEB, ethRocketPoster)}
          href="https://tkj7e0.csb.app/"
        />

        <CodeProjectCard
          title="Covid faces"
          description="A little Covid inspired app using face detection and face recognition in the browser implemented on top of tensorflow.js."
          video={createVideo(emotionVidMP4, emotionVidWEB, emotionVidPoster)}
          href="https://covid-faces.surge.sh/"
        />

        <CodeProjectCard
          title="3D LinkedIn Logo"
          description="Just playing with 3D models and Design Tokens we used for Dark Mode."
          video={createVideo(
            linkedInLogoMP4,
            linkedInLogoWEB,
            linkedInLogoPoster
          )}
          href="https://n6g08y.csb.app/"
        />

        <CodeProjectCard
          title="Skull AR"
          description="Playing around with illustration and Augmented Reality."
          video={createVideo(skullARMP4, skullARWEB, skullARPoster)}
        />
        <CodeProjectCard
          title="OSKRHQ.DS 2.0"
          description="This sandbox showcases my Design System's architecture and consumption of Design Tokens which I use for all my projects like this portfolio."
          video={createVideo(dsVidMP4, dsVidWEB, dsVidPoster)}
          href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
        />

        <CodeProjectCard
          title="Pokemon game"
          description="A Pokemon cards game app I created using Vanilla Javascript and CSS Custom Properties. Wanted to build it without any UI Frameworks."
          video={createVideo(pokemonVidMP4, pokemonVidWEB, pokemonVidPoster)}
          href="https://pokemon-game.surge.sh/"
        />
        <CodeProjectCard
          title="Design debates"
          description="A democratic approach for when you can't decide which design solution is best. This app let's you show two designs for light targeted feedback."
          video={createVideo(
            designDebatesVidMP4,
            designDebatesVidWEB,
            designDebatesVidPoster
          )}
          href="https://design-debates.netlify.com/"
        />
        <CodeProjectCard
          title="Meeting cost calculator"
          description="A calculator react app that estimates the cost of a Design meeting in dollars."
          video={createVideo(
            designCalVidMP4,
            designCalVidWEB,
            designCalVidPoster
          )}
          href="https://money-times.surge.sh/"
        />
        <CodeProjectCard
          title="Sound activated illustration"
          description="An app that uses sound to display different parts of an illustration I made. The loader it is, the more you see."
          video={createVideo(
            soundIllustrationVidMP4,
            soundIllustrationVidWEB,
            soundIllustrationVidPoster
          )}
          href="https://sound-illustration.surge.sh/"
        />
      </ul>
    </section>
    <PortfolioFooter />
  </Layout>
)
