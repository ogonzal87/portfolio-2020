import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const PaginationControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1400px;
  margin: 100px auto;
  margin-top: 150px;

  @media (max-width: 767px) {
    justify-content: space-between;
  }

  button {
    font-size: 14px;
  }
`

const PaginationControl = ({ previous, next }) => (
  <PaginationControlContainer>
    <AniLink
      to={previous}
      paintDrip
      duration={0.75}
      hex="#5900FF"
      className="pagination-control "
    >
      <button
        className="og-button--secondary og-button--medium og-button"
        disabled={previous ? "" : `disabled`}
      >
        Previous project
      </button>
    </AniLink>
    <AniLink
      to={next}
      paintDrip
      duration={0.75}
      hex="#5900FF"
      className="pagination-control"
    >
      <button
        className="og-button--secondary og-button--medium og-button"
        disabled={next ? "" : `disabled`}
      >
        Next project
      </button>
    </AniLink>
  </PaginationControlContainer>
)

export default PaginationControl
