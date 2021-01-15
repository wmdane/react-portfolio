import React from "react";
import Photo from "../images/profile-pic.jpg"

function About() {
  return (
    <div class="container">
      <div class="card mt-3 bg-light mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <img alt="William Dane" src={Photo} id="profile-pic" />
              <div class="page-header">
                <h1>About Me</h1>
                <p>
                  My name is William Dane. I am a full-stack web developer currently living in Charlotte,
                  North Carolina. I am proficient in HTML, CSS, JavaScript, APIs, Express, Node, MySQL,
                  MongoDB, and React. I received my Bachelor's Degree from the University of North Carolina at
                  Greensboro in 2016. Thank you for taking the time to visit my portfolio. Please visit the
                  Contact tab to see how to contact me regarding any business inquiries or recruitment offers.
                </p>
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
