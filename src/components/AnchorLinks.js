import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { motion } from "framer-motion"
import ogAnimation from "../assets/animations/animations-helper"

const AnchorLinks = () => (
  <motion.div variants={ogAnimation.fadeItem} initial="initial" animate="animate" className="anchor-links">
    <AnchorLink to="/#hero" title="Introduction">
        <span className="dot" style={{background: "var(--og-brand-color3)"}}></span>
    </AnchorLink>
    <AnchorLink to="/#projects" title="Work">
        <span className="dot"></span>
    </AnchorLink>
    <AnchorLink to="/#studio" title="Studio">
        <span className="dot"></span>
    </AnchorLink>
    <AnchorLink to="/#code" title="code">
        <span className="dot"></span>
    </AnchorLink>
    <AnchorLink to="/#thoughts" title="Thoughts">
        <span className="dot"></span>
    </AnchorLink>
    <AnchorLink to="/#classes" title="Classes">
        <span className="dot"></span>
    </AnchorLink>
  </motion.div>
)

export default AnchorLinks