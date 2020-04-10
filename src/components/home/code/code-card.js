import React from "react"

const CodeProjectCard = ({
  src,
  description,
  title,
  buttonName,
  children,
  href,
  ...rest
}) => (
  <li className="code-card">
    <img src={src} alt="card hero" />
    <div className="card-bottom-container">
      <div className="card-text-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <a
        className="og-button--secondary og-button--medium "
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonName || "Play with code"}
      </a>
    </div>
  </li>
)

export default CodeProjectCard
