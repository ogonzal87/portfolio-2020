import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function ProfilePicture() {
  const data = useStaticQuery(graphql`
    query StudioProfileImg {
      profileImg: file(relativePath: { eq: "images/me.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.profileImg.childImageSharp.fluid} alt="me" />
}
