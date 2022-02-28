import React from "react"
import Link from "gatsby-link"
import logo from "../assets/logos/logo4.svg"
import ResumePDF from "../assets/images/oscar-gonzalez-resume.pdf"
import { motion } from "framer-motion"

const TopNav = ({ work, about, resume, ...props }) => {
  const WorkLink = work ? (
    <Link
      to="/#work"
      className={`og-text-style-overline (history.getCurrentLocation().pathname === '/#work' ? 'top-nav-link-isActive' : '')`}
    >
      Work
    </Link>
  ) : (
    ""
  )

  const AboutLink = about ? (
    <Link
      exact
      to="/about"
      activeClassName="top-nav-link-isActive"
      className={`og-text-style-overline (history.getCurrentLocation().pathname === '/about' ? 'top-nav-link-isActive' : '')`}
    >
      About
    </Link>
  ) : (
    ""
  )

  const ResumeLink = resume ? (
    <a
      href={ResumePDF}
      target="_blank"
      rel="noopener noreferrer"
      className="og-text-style-overline"
    >
      Resume
    </a>
  ) : (
    ""
  )

  return (
    <nav className="top-nav" {...props}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: .75
        }}
      >
        <Link to="/" paintDrip duration={0.75} hex="#5900FF">
          <img src={logo} className="og-logo" alt="logo" />
        </Link>
      </motion.div>

      <ul>
        <li>{WorkLink}</li>
        <li>{AboutLink}</li>
        <li>{ResumeLink}</li> 
      </ul>
    </nav>
  )
}

export default TopNav
