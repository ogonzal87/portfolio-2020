import React from "react"
import codeLetteringImg from "../../../assets/images/hand-brush/code.png"
import CodeProjectCard from "./code-card"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import chameleonVidMP4 from "../../../assets/images/code/cam-aleon.mp4"
import chameleonVidPoster from "../../../assets/images/code/cam-aleon.jpg"
import chameleonVidWEB from "../../../assets/images/code/cam-aleon.webm"
import faceFilterVidMP4 from "../../../assets/images/code/face-filter.mp4"
import faceFilterVidPoster from "../../../assets/images/code/face-filter.jpg"
import faceFilterVidWEB from "../../../assets/images/code/face-filter.webm"
import emotionVidMP4 from "../../../assets/images/code/fr.mp4"
import emotionVidPoster from "../../../assets/images/code/fr.jpg"
import emotionVidWEB from "../../../assets/images/code/fr.webm"
import babyYodaMP4 from "../../../assets/images/code/baby-yoda.mp4"
import babyYodaPoster from "../../../assets/images/code/baby-yoda.jpg"
import babyYodaWEB from "../../../assets/images/code/baby-yoda.webm"
import ethRocketMP4 from "../../../assets/images/code/eth-merge-rocket.mp4"
import ethRocketPoster from "../../../assets/images/code/eth-rocket.jpg"
import ethRocketWEB from "../../../assets/images/code/eth-merge-rocket.webm"
import cloneXLogoMP4 from "../../../assets/images/code/clonex.mp4"
import cloneXLogoPoster from "../../../assets/images/code/clonex.jpg"
import cloneXLogoWEB from "../../../assets/images/code/clonex.webm"

const CodeSection = () => {
  function createVideo(videoSourceMP4, videoSourceWEB, videoPoster) {
    return (
      <video
        playsInline
        muted
        loop
        className="scenario-video"
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

  return (
    <div style={{ position: "relative" }}>
      <p className="marquee">
        <span>
          code code code code code code code code code code code code code code
          code code code code code code code code code code code code code code
          code code code code code code code code code code code code code code
          code code code
        </span>
      </p>
      <section className="home-code-section" id="code">
        <img
          src={codeLetteringImg}
          alt=""
          className="home-brush-lettering code"
        />

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
        </ul>

        <AniLink
          paintDrip
          to="/code-projects"
          duration={0.75}
          hex="#5900FF"
          className="show-more-link"
        >
          Play with more ➡
        </AniLink>
      </section>
    </div>
  )
}

export default CodeSection
