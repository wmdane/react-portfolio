import React from "react";
import Photo from "../../images/profile-pic.jpg";
import "./style.css"

function About() {
  return (
    <div className="container">
      <div className="card mt-3 bg-light mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <img  classname="mx-auto d-block" alt="William Dane" src={Photo} id="profile-pic" />
              <div className="page-header">
                <h1 className="text-center">About Me</h1>
                <p>
                  My name is William Dane. I am a full-stack web developer currently living in Charlotte,
                  North Carolina. I received my Bachelor's Degree from the University of North Carolina at
                  Greensboro in 2016. Thank you for taking the time to visit my portfolio. Please visit the
                  Contact tab to see how to contact me regarding any business inquiries or recruitment offers.
                </p>
                <h1 className="text-center">
                  Proficiencies
                </h1>
                <p className="text-center">I am proficient with the following technologies:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>React.js</li>
                </ul>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
