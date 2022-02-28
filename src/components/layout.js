import React from "react"
import "../scss/_styles.scss"

class Layout extends React.Component {
  state = {
    xMain: -500,
    yMain: -500,
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
      <>
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
      </>
    )
  }
}

export default Layout
