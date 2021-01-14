import React from "react";
import Photo from "../images/profile-pic.jpg";

function About() {
  return (
    <div>
      <img alt="William Dane" src= {Photo} id="profile-pic" />
      <h1>About Me</h1>
      <p></p>
    </div>
  )
}

export default About;