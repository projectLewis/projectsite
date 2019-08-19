import React, { Component } from "react";
import {Icon} from "semantic-ui-react";
import style from "./About.module.css";
import sethHeadshot from "../../../static/imgs/sethHeadshot.jpg"

class About extends Component {
  render() {
    return (
      <div className={style.about}>
        <div className={style.textWrapper}>
          <h1 className={style.Headline}>Seth Lewis</h1>
          <img className={style.headshot} alt="headshot of seth" src={sethHeadshot} />
          <h5>
            <a title="linkedin" alt="linkedin" href="https://linkedin.com/in/sethlewis2/"><Icon color="blue" size="large" name="linkedin" /></a>
            <a title="github" alt="github" href="www.github.com/projectlewis"><Icon size="large" name="github" /></a>
            <a title="twitter" alt="twitter" href="www.twitter.com/projectlewis_"><Icon size="large" color="blue" inverted name="twitter" /></a>
          </h5>
          <h3>Software Engineer</h3>
          <p>Before becoming a developer, I spent 9 years in the United States Air Force. Most of my time in the Air Force was spent traveling the world on cargo airplanes. In particular I had the pleasure of supporting the National Science Foundation in Antarctica on multiple occasions. Starting my appreciation for penguins.</p>

          <p>These days, I take the work ethic I got from the Air Force, and the dedication and self study it takes to be an aviator and apply them to learning the newest technologies. Feel free to take a look at my portfolio or github page to see what I've been up to.</p>
        </div>
      </div>
    );
  }
}

export default About;
