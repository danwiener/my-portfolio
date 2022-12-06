import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="parent-class">
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            
              <a href="https://github.com/danwiener">
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/henrikwiener/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Henrik</span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Henrik Wiener Base Resume.pdf"
              download="Henrik wiener.pdf"
            >
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <span className="profile-roll-tagline">
                Passionate developer with knack for building applications for front end and back end operations.
              </span>
            </span>
          </div>

        <div className="profile-picture">
          <div class="profile-picture-background"></div>
        </div>
      </div>
    </div>
    <div className="profile-rolling-text">
              {" "}
              <h1>
                <Typical
                id="react-typicalid"
                  loop={Infinity}
                  steps={[
                    "Passionate Dedicated 💯",
                    1500,
                    "Full Stack Dev 🔴",
                    1500,
                    "C#",
                    1500,
                    "JavaScript",
                    1500,
                    "Java",
                    1500,
                    "HTML5",
                    1500,
                    "HTML5",
                    1500,
                    "CSS",
                    1500,
                    "Python",
                    1500,
                    "T-SQL",
                    1500,
                    "Git",
                    1500,
                    "SSMS",
                    1500,
                    "ASP.NET CORE",
                    1500,
                    ".NET MAUI",
                    1500,
                    ".NET Web API",
                    1500,
                    "Entity Framework",
                    1500,
                    "Visual Studio",
                    1500,
                    "JavaFx",
                    1500,
                    "React.js",
                    1500,
                    "Bootstrap",
                    1500,
                    "Cross Platform",
                    1500,
                    "Enthusiastic Dev 🙂",
                    1500,
                  ]}
                />
              </h1>
          </div>
  </div>

  );
}
