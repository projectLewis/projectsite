import React, { Component } from "react";
// import "./About.css";
import style from "./About.module.css";

class About extends Component {
  render() {
    return (
      <div className={style.about}>
        <h1 className={style.aboutHeadline}>Seth Lewis</h1>
        {/* INSERT IMAGE ON THIS PAGE */}
        <p>Before becoming a developer, I spent 9 years in the United States Air Force. Most of my time in the Air Force was spent traveling the world on cargo airplanes. In particular I had the pleasure of supporting the National Science Foundation in Antarctica on multiple occasions. Hence the penguin.</p>

        <p>These days, I take the work ethic I got from the Air Force, and the dedication and self study it takes to be an aviator and apply them to learning the newest technologies. Feel free to take a look at my portfolio or github page to see what I've been up to.</p>
      </div>
    );
  }
}

export default About;
