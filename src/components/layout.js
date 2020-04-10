/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../scss/_styles.scss"

class Layout extends React.Component {
  state = {
    xMain: 0,
    yMain: 0,
  }

  handleMouseMove = e => {
    const { clientX, clientY } = e
    this.setState({
      xMain: clientX - 95,
      yMain: clientY - 95,
    })
  }

  render() {
    const { xMain, yMain } = this.state
    const { children } = this.props

    return (
      <div>
        <div>
          <main onMouseMove={e => this.handleMouseMove(e)}>
            <div
              className="cursor"
              style={{
                left: xMain,
                top: yMain,
                zIndex: 999,
              }}
            />
            {children}
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
