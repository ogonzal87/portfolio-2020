import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import calligraphyMov from "../../../assets/images/creative-lab/calligraphy.gif"
import mustacheMov from "../../../assets/images/creative-lab/mustache.gif"
import skullARIllustration from "../../../assets/images/creative-lab/skull-ar-illustration.gif"

const MosqueImg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

const CreativeLabMosque = ({ ...rest }) => {
  const data = useStaticQuery(graphql`
    query MosqueLabImages {
      calligraphy1: file(
        relativePath: { eq: "images/creative-lab/calligraphy1.jpg" }
      ) {
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

      calligraphy5: file(
        relativePath: { eq: "images/creative-lab/calligraphy5.jpg" }
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

      calligraphy7: file(
        relativePath: { eq: "images/creative-lab/calligraphy7.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      calligraphy8: file(
        relativePath: { eq: "images/creative-lab/calligraphy8.jpg" }
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

      illustration1: file(
        relativePath: { eq: "images/creative-lab/illustration1.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      illustration2: file(
        relativePath: { eq: "images/creative-lab/illustration2.jpg" }
      ) {
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
    }
  `)

  return (
    <div>
      <div className="home-mosque-grid">
        <MosqueImg
          style={{
            backgroundImage: `url(${skullARIllustration})`,
            gridArea: `a`,
          }}
        ></MosqueImg>
        <Img
          fluid={data.calligraphy1.childImageSharp.fluid}
          style={{ gridArea: `b` }}
        />
        <Img
          fluid={data.calligraphy2.childImageSharp.fluid}
          style={{ gridArea: `c` }}
        />
        <MosqueImg
          style={{ backgroundImage: `url(${mustacheMov})`, gridArea: `d` }}
        ></MosqueImg>
        <Img
          fluid={data.calligraphy3.childImageSharp.fluid}
          style={{ gridArea: `e` }}
        />
        <Img
          fluid={data.calligraphy4.childImageSharp.fluid}
          style={{ gridArea: `f` }}
        />
        <Img
          fluid={data.calligraphy5.childImageSharp.fluid}
          style={{ gridArea: `g` }}
        />
        <Img
          fluid={data.calligraphy6.childImageSharp.fluid}
          style={{ gridArea: `h` }}
        />
        <Img
          fluid={data.calligraphy7.childImageSharp.fluid}
          style={{ gridArea: `i !important` }}
        />
        <Img
          fluid={data.calligraphy8.childImageSharp.fluid}
          style={{ gridArea: `j` }}
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
          fluid={data.illustration1.childImageSharp.fluid}
          style={{ gridArea: `s` }}
        />
        <Img
          fluid={data.illustration2.childImageSharp.fluid}
          style={{ gridArea: `t` }}
        />
        <Img
          fluid={data.hustle.childImageSharp.fluid}
          style={{ gridArea: `u` }}
        />
        <MosqueImg
          style={{ backgroundImage: `url(${calligraphyMov})`, gridArea: `v` }}
        ></MosqueImg>
      </div>
    </div>
  )
}

export default CreativeLabMosque
