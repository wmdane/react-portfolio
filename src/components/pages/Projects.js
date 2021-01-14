import React from "react";

function Projects() {
  return (
    <div class="container">
      <div class="card mt-3 bg-light mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="page-header">
                <h1>Portfolio</h1>
              </div>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <h3>
                <a href="https://wmdane.github.io/getaway_planner">Getaway Planner</a>
              </h3>
              <h3>
                <a href="https://github.com/wmdane/getaway_planner">Github Link</a>
              </h3>
              <img
                src="assets/getaway_planner.png"
                class="img-fluid mx-auto d-block"
                vspace="20"
                alt="Getaway Planner"
              />
              <hr />
              <h3>
                <a href="https://serene-dawn-63330.herokuapp.com/">Battle Game RPG (Work in Progress. Site may be down)</a>
              </h3>
              <h3>
                <a href="https://github.com/grantf12/Battle_Game_RPG">Github Link</a>
              </h3>
              <img
                src="assets/battleRpgGame.jpg"
                class="img-fluid mx-auto d-block"
                vspace="20"
                alt="Battle Game RPG"
              />
              <hr />
              <h3>
                <a href="https://wmdane.github.io/weather_app">Weather App</a>
              </h3>
              <h3>
                <a href="https://github.com/wmdane/weather_app">Github Link</a>
              </h3>
              <img
                src="assets/weatherAppPic2.jpg"
                class="img-fluid mx-auto d-block"
                vspace="20"
                alt="Weather App"
              />
              <hr />
              <h3>
                <a href="https://wmdane.github.io/work_day_scheduler">Work Day Scheduler</a>
              </h3>
              <h3>
                <a href="https://github.com/wmdane/work_day_scheduler">Github Link</a>
              </h3>
              <img
                src="assets/workDayPlanner.jpg"
                class="img-fluid mx-auto d-block"
                vspace="20"
                alt="Work-day Scheduler"
              />
              <h3>
                <a href="https://nameless-tor-28099.herokuapp.com/">Eat The Burger</a>
              </h3>
              <h3>
                <a href="https://github.com/wmdane/eat-da-burger">Github Link</a>
              </h3>
              <img
                src="assets/burgersApp.png"
                class="img-fluid mx-auto d-block"
                vspace="20"
                alt="Eat the Burger"
              />
            </div>
            <div class="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Projects;