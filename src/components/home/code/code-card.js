import React from "react"
import { motion } from "framer-motion"

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeItem = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
}

const rotateHoverItem1 = {
  initial: {
    opacity: 0,
    rotate: 25,
  },
  animate: {
    opacity: 1,
    rotate: 45,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

const rotateHoverItem2 = {
  initial: {
    opacity: 0,
    rotate: -25,
  },
  animate: {
    opacity: 1,
    rotate: -45,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

const CodeProjectCard = ({
  video,
  description,
  title,
  buttonName,
  children,
  href,
  ...rest
}) => (
  <motion.li
    className="code-card"
    {...rest}
    animate="animate"
    initial="initial"
  >
    <motion.div className="img-wrapper" whileHover="animate">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {video}
        <motion.div className="cta-overlay" variants={fadeItem}>
          <p className="og-text-style-heading4">Play with it =></p>
        </motion.div>
      </a>
      <motion.div
        variants={rotateHoverItem1}
        className="selection-decorator-bar1"
      ></motion.div>
      <motion.div
        variants={rotateHoverItem2}
        className="selection-decorator-bar2"
      ></motion.div>
    </motion.div>
    <div className="card-bottom-container">
      <div className="card-text-container">
        <h5 className="og-text-style-heading6">{title}</h5>
        <p className="og-text-style-caption">{description}</p>
      </div>
    </div>
  </motion.li>
)

export default CodeProjectCard
