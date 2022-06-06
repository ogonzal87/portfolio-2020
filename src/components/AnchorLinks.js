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
    <AnchorLink to="/#projects" title="Work" className="anchor-link">
      Work
    </AnchorLink>
    <AnchorLink to="/#studio" title="About" className="anchor-link">
      About
    </AnchorLink>
    <AnchorLink to="/#code" title="code" className="anchor-link">
      Code
    </AnchorLink>
    <AnchorLink to="/#thoughts" title="Thoughts" className="anchor-link">
      Thoughts
    </AnchorLink>
    <AnchorLink to="/#classes" title="Classes" className="anchor-link">
      Classes
    </AnchorLink>
  </motion.div>
)

export default AnchorLinks
