import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Text = styled.div`
  z-index: 1;
  h1,
  h5 {
    background: #5252ed;
    color: white;
  }
  h5 {
    margin-bottom: 40px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className="ds-main-content"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        height: "100vh",
      }}
    >
      <Text>
        <h1>SIIIIKE 404!</h1>
        <h5>You arrived to a place that doesn&#39;t exist...</h5>
        <Link to="/">
          <button
            style={{ float: "right", marginTop: "40px" }}
            className="og-button--primary og-button--medium og-button"
          >
            Go Home
          </button>
        </Link>
      </Text>

      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <iframe
          title="404 page"
          src="https://giphy.com/embed/14glWZLXkYWDzW"
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
