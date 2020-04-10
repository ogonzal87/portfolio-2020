import React from "react"

const DesignProcessCard = ({
  numberImg,
  text,
  title,
  gridAreaName,
  badgeText,
  badgeType,
  children,
  ...rest
}) => (
  <div
    className="design-process-card__container"
    style={{ gridArea: gridAreaName }}
  >
    <div className="design-process-card__wrapper">
      <img src={numberImg} alt="number" className="design-process__number" />
      <div className="design-process__card">
        <h6 style={{ textTransform: "uppercase" }}>{title}</h6>
        <div className={`design-process-badge ${badgeType}`}>{badgeText}</div>
        <p className=" ">{children}</p>
      </div>
    </div>
  </div>
)

export default DesignProcessCard
