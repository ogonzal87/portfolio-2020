import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import calligraphyVid from "../../../assets/images/creative-lab/calligraphy.gif"
import mustacheVidMP4 from "../../../assets/images/creative-lab/mustache.mp4"
import mustacheVidWEB from "../../../assets/images/creative-lab/mustache.webm"
import mustacheVidPoster from "../../../assets/images/creative-lab/mustache.jpg"
import parallaxSwordVidMP4 from "../../../assets/images/creative-lab/parallax-sword.mp4"
import parallaxSwordVidWEB from "../../../assets/images/creative-lab/parallax-sword.webm"
import parallaxSwordVidPoster from "../../../assets/images/creative-lab/parallax-sword.jpg"
import skullARVidMP4 from "../../../assets/images/creative-lab/skullAR.mp4"
import skullARVidWEB from "../../../assets/images/creative-lab/skullAR.webm"
import skullARVidPoster from "../../../assets/images/creative-lab/skullAR.jpg"

const CreativeLabMosque = () => {
  const data = useStaticQuery(graphql`
    query MosqueLabImages {
      ketchup: file(relativePath: { eq: "images/creative-lab/ketchup.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy2: file(
        relativePath: { eq: "images/creative-lab/calligraphy2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy3: file(
        relativePath: { eq: "images/creative-lab/calligraphy3.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy4: file(
        relativePath: { eq: "images/creative-lab/calligraphy4.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      coloredBall: file(
        relativePath: { eq: "images/creative-lab/colored-ball.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy6: file(
        relativePath: { eq: "images/creative-lab/calligraphy6.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      planets: file(relativePath: { eq: "images/creative-lab/planets.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cartoonFace: file(
        relativePath: { eq: "images/creative-lab/cartoon-face.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy9: file(
        relativePath: { eq: "images/creative-lab/calligraphy9.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy10: file(
        relativePath: { eq: "images/creative-lab/calligraphy10.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy11: file(
        relativePath: { eq: "images/creative-lab/calligraphy11.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy12: file(
        relativePath: { eq: "images/creative-lab/calligraphy12.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy13: file(
        relativePath: { eq: "images/creative-lab/calligraphy13.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hustle: file(relativePath: { eq: "images/musgho/hustle.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cartoonfaces: file(
        relativePath: { eq: "images/creative-lab/cartoonfaces.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      avocato: file(relativePath: { eq: "images/creative-lab/avocato.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hiddenGem: file(
        relativePath: { eq: "images/creative-lab/hidden-gem.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hakuna: file(relativePath: { eq: "images/musgho/hakuna.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      clouds: file(relativePath: { eq: "images/musgho/clouds.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      raton: file(relativePath: { eq: "images/creative-lab/raton.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cute666: file(relativePath: { eq: "images/creative-lab/666.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      shot: file(relativePath: { eq: "images/creative-lab/shot.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bird: file(relativePath: { eq: "images/creative-lab/bird.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      pencil: file(relativePath: { eq: "images/creative-lab/pencil.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function createVideo(
    videoSourceMP4,
    videoSourceWEB,
    videoSourcePoster,
    location
  ) {
    return (
      <video
        playsInline
        onMouseOver={event => event.target.play()}
        onFocus={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
        onBlur={event => event.target.pause()}
        muted
        loop
        poster={videoSourcePoster}
        style={{
          gridArea: `${location}`,
          width: "100%",
          height: "100%",
          background: "black",
          objectFit: "cover",
        }}
      >
        <source src={videoSourceWEB} type="video/webm" />
        <source src={videoSourceMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <div>
      <div className="home-mosque-grid">
        {createVideo(skullARVidMP4, skullARVidWEB, skullARVidPoster, "a")}
        <Img
          fluid={data.ketchup.childImageSharp.fluid}
          style={{ gridArea: `b` }}
        />
        {createVideo(
          parallaxSwordVidMP4,
          parallaxSwordVidWEB,
          parallaxSwordVidPoster,
          "c"
        )}
        {createVideo(mustacheVidMP4, mustacheVidWEB, mustacheVidPoster, "d")}
        <Img
          fluid={data.calligraphy3.childImageSharp.fluid}
          style={{ gridArea: `e` }}
        />
        <Img
          fluid={data.calligraphy4.childImageSharp.fluid}
          style={{ gridArea: `f` }}
        />
        <Img
          fluid={data.coloredBall.childImageSharp.fluid}
          style={{ gridArea: `g` }}
        />
        <Img
          fluid={data.calligraphy6.childImageSharp.fluid}
          style={{ gridArea: `h` }}
        />
        <Img
          fluid={data.planets.childImageSharp.fluid}
          style={{ gridArea: `i` }}
        />
        <Img
          fluid={data.hiddenGem.childImageSharp.fluid}
          style={{ gridArea: `k` }}
        />
        <Img
          fluid={data.hakuna.childImageSharp.fluid}
          style={{ gridArea: `l` }}
        />
        <Img
          fluid={data.clouds.childImageSharp.fluid}
          style={{ gridArea: `m` }}
        />
        <Img
          fluid={data.calligraphy9.childImageSharp.fluid}
          style={{ gridArea: `n` }}
        />
        <Img
          fluid={data.calligraphy10.childImageSharp.fluid}
          style={{ gridArea: `o` }}
        />
        <Img
          fluid={data.calligraphy11.childImageSharp.fluid}
          style={{ gridArea: `p` }}
        />
        <Img
          fluid={data.calligraphy12.childImageSharp.fluid}
          style={{ gridArea: `q` }}
        />
        <Img
          fluid={data.calligraphy13.childImageSharp.fluid}
          style={{ gridArea: `r` }}
        />
        <Img
          fluid={data.cartoonfaces.childImageSharp.fluid}
          style={{ gridArea: `s` }}
        />
        <Img
          fluid={data.avocato.childImageSharp.fluid}
          style={{ gridArea: `t` }}
        />
        <Img
          fluid={data.hustle.childImageSharp.fluid}
          style={{ gridArea: `u` }}
        />
        <Img
          fluid={data.raton.childImageSharp.fluid}
          style={{ gridArea: `w` }}
        />
        <Img
          fluid={data.cute666.childImageSharp.fluid}
          style={{ gridArea: `x` }}
        />
        <Img
          fluid={data.cartoonFace.childImageSharp.fluid}
          style={{ gridArea: `j` }}
        />
        <Img
          fluid={data.shot.childImageSharp.fluid}
          style={{ gridArea: `y` }}
        />
        <Img
          fluid={data.bird.childImageSharp.fluid}
          style={{ gridArea: `z` }}
        />
        <Img
          fluid={data.pencil.childImageSharp.fluid}
          style={{ gridArea: `aa` }}
        />
      </div>
    </div>
  )
}
// <MosqueImg
//           style={{ backgroundImage: `url(${calligraphyVid})`, gridArea: `v` }}
//         ></MosqueImg>

export default CreativeLabMosque
