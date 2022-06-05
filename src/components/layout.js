import React from "react"
import "../scss/_styles.scss"
// import styled from "styled-components"
// import Cursor from "../assets/cursor/purple-zebra-cursor.png"
// import Pointer from "../assets/cursor/purple-zebra-pointer.png"

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

    // const Main = styled.main`
    //   cursor: url(${Cursor}), auto;

    //   button,
    //   a,
    //   input {
    //     cursor: url(${Pointer}), auto;
    //   }
    // `

    return (
      <>
        <main onMouseMove={e => this.handleMouseMove(e)}>
          {/* <Main style={{}} onMouseMove={e => this.handleMouseMove(e)}> */}

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
