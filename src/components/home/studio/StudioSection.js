import React from "react"
import profilePic from "../../../assets/images/profile-pic3.jpg"
import StudioImg from "../../../assets/images/hand-brush/studio.png"
import StackGraphic from "../../../assets/images/stack.svg"
import { Parallax } from "react-scroll-parallax"

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
      <section className="home-studio-section">
        <img src={StudioImg} alt="" className="home-brush-lettering studio" />

        <div className="text-container">
          <p className="home-studio-section-paragraph">
            I was born and raised in Colombia, Miami is home but now I live in
            San Francisco working at{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hightlighted-offset"
            >
              LinkedIn
            </a>
            . I’ve worked as a interdisciplinary Designer for over a decade or
            exactly{" "}
            <span className="hightlighted-offse-very-important">{`${year} years, ${months} months, ${days} days, ${hours} hours, ${minute} minutes, ${seconds} seconds, ${milliseconds} milliseconds `}</span>
            . 3 of those years working as a Front-End developer. I am currently
            focusing on building and maintaining multi-platform Design Systems
            for large enterprises with a strong foundation in{" "}
            <span className="hightlighted-offset">accessibility</span> and{" "}
            <span className="hightlighted-offset">inclusivity</span>.
          </p>

          <h4 className="og-text-style-overline">My Stack</h4>
          <img className="stack-graphic" src={StackGraphic} alt="my stack" />
        </div>

        <div className="profile-img-wrapper">
          <Parallax y={[-30, 30]} tagOuter="figure">
            <img
              className="studio-profile-picture"
              src={profilePic}
              alt="profile"
            />
          </Parallax>

          <div className="studio-decorative-div1"></div>

          <div className="studio-decorative-div2"></div>
        </div>
      </section>
    )
  }
}

export default StudioSection
