import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { motion } from "framer-motion"
import ogAnimation from "../assets/animations/animations-helper"

const AnchorLinks = () => (
  <motion.div
    variants={ogAnimation.fadeItem}
    initial="initial"
    animate="animate"
    className="anchor-links"
  >
    <AnchorLink to="/#projects" title="Work">
      <span className="tag">Work</span>
    </AnchorLink>
    <AnchorLink to="/#studio" title="Studio">
      <span className="tag">Studio</span>
    </AnchorLink>
    <AnchorLink to="/#code" title="code">
      <span className="tag">Code</span>
    </AnchorLink>
    <AnchorLink to="/#thoughts" title="Thoughts">
      <span className="tag">Thoughts</span>
    </AnchorLink>
    <AnchorLink to="/#classes" title="Classes">
      <span className="tag">Classes</span>
    </AnchorLink>
  </motion.div>
)

export default AnchorLinks
