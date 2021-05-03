import React from "react"
import StudioImg from "../../../assets/images/hand-brush/studio.png"
import StackGraphic from "../../../assets/images/stack.svg"
import { Parallax } from "react-scroll-parallax"
import ProfilePicture from "./ProfilePicture"

class StudioSection extends React.Component {
  state = {
    year: null,
    days: null,
    months: null,
    hours: null,
    minute: null,
    seconds: null,
    milliseconds: null,
  }

  componentDidMount() {
    let self = this
    function time_passed() {
      const current = new Date()
      const started_working_date = new Date(2008, 1, 24, 10, 33, 30)

      const time_since_in_milliseconds =
        current.getTime() - started_working_date.getTime()

      let year, day, hour, minute, seconds

      seconds = Math.floor(time_since_in_milliseconds / 1000)
      minute = Math.floor(seconds / 60)
      seconds = seconds % 60
      hour = Math.floor(minute / 60)
      minute = minute % 60
      day = Math.floor(hour / 24)
      year = Math.floor(day / 365)

      self.setState({
        year: year,
        months: current.getMonth() + 1,
        days: current.getDate(),
        hours: current.getHours(),
        minute: minute,
        seconds: seconds,
        milliseconds: current.getMilliseconds(),
      })
    }

    setInterval(() => {
      time_passed()
    }, 100)
  }

  render() {
    const {
      year,
      months,
      days,
      hours,
      minute,
      seconds,
      milliseconds,
    } = this.state

    return (
      <div style={{ position: "relative" }}>
        <p className="marquee" style={{ width: "1400px", fontSize: "96px" }}>
          <span>
            studio studio studio studio studio studio studio studio studio
            studio studio studio studio studio studio studio studio studio
            studio studio studio studio studio studio studio studio studio
            studio studio studio studio studio studio studio studio studio
            studio studio studio studio studio studio studio studio studio
          </span>
        </p>
        <section className="home-studio-section" id="studio">
          <img src={StudioImg} alt="" className="home-brush-lettering studio" />

          <div className="text-container">
            <p className="home-studio-section-paragraph">
              I was born and raised in Colombia (not <i>Columbia</i>), Although I
              went to school for Business, I have been working as an
              interdisciplinary Designer for over a decade - or precisely{" "}
              <span className="hightlighted-offse-very-important">{`${year} years, ${months} months, ${days} days, ${hours} hours, ${minute} minutes, ${seconds} seconds, ${milliseconds} milliseconds.`}</span>
              <br></br>Four of those years, I worked as a Design Systems front-end Engineer.
            </p>
            <p>
              I am currently focusing on building, growing and maintaining
              multi-platform Design Systems for large enterprises with a strong
              foundation in{" "}
              <span className="hightlighted-offset">accessibility</span> and{" "}
              <span className="hightlighted-offset">inclusivity</span> - studying right now to get <a href="https://www.accessibilityassociation.org/wascertification" target="_blank" rel="noopener noreferrer">WAS certified</a> in January 2021.
            </p>

            <h3 className="og-text-style-overline">
              <strong>My Stack</strong>
            </h3>
            <img className="stack-graphic" src={StackGraphic} alt="my stack" />
          </div>

          <div className="profile-img-wrapper">
            <Parallax y={[-30, 30]} tagOuter="figure">
              <ProfilePicture
                className="studio-profile-picture"
                style={{ width: "573px" }}
              />
            </Parallax>

            <div className="studio-decorative-div1"></div>

            <div className="studio-decorative-div2"></div>
          </div>
        </section>
      </div>
    )
  }
}

export default StudioSection
