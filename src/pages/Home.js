import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Shaun</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, NPM</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, Django</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, Ruby</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
