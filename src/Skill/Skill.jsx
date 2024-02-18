import React from "react";
import "./Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAppStore,
  faBootstrap,
  faCss3,
  faCss3Alt,
  faFigma,
  faGit,
  faGitAlt,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faJsfiddle,
  faLinux,
  faNodeJs,
  faReact,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import qr from "../asset/qr.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Kadeksucpitaskill = () => {

  return (
    <React.Fragment>
      <Navbar />

      <div className="container-skill">
        <h1>Front-End • Web Developers</h1>
        <h3>Professional Skillset</h3>
        <div className="all-skill">
          <button className="btn-skill-1">
            <FontAwesomeIcon className="icon-skill" icon={faHtml5} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faCss3Alt} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faJs} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faReact} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faNodeJs} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faBootstrap} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faGitAlt} />
          </button>
          <button className="btn-skill">
            <FontAwesomeIcon className="icon-skill" icon={faDatabase} />
          </button>
        </div>

        <h3>Frequently Used Tools & Libraries</h3>
        <div className="skill-plus">
        <button className="btn-skill-1">
          <FontAwesomeIcon className="icon-skill" icon={faFigma} />
        </button>
        <button className="btn-skill">
          <FontAwesomeIcon className="icon-skill" icon={faGithub} />
        </button>
        <button className="btn-skill">
          <FontAwesomeIcon className="icon-skill" icon={faGitlab} />
        </button>
        <button className="btn-skill">
          <FontAwesomeIcon className="icon-skill" icon={faWindows} />
        </button>
        </div>

        {/* SKILL BAR */}

        <div className="border-line-skillbar"></div>

        <div className="skills">
          <h2 className="title-skillbar">Rate of expertise</h2>
          <li className="li-skillbar">
            <h4>HTML</h4>
            <span className="bar">
              <span className="html" />
            </span>{" "}
          </li>
          <li className="li-skillbar">
            <h4>CSS</h4>
            <span className="bar">
              <span className="css" />
            </span>
          </li>
          <li className="li-skillbar">
            <h4>JavaScript</h4>
            <span className="bar">
              <span className="javascript" />
            </span>
          </li>
          <li className="li-skillbar">
            <h4>Bootstrap</h4>
            <span className="bar">
              <span className="bootstrap" />
            </span>
          </li>
          <li className="li-skillbar">
            <h4>React JS</h4>
            <span className="bar">
              <span className="react" />
            </span>
          </li>
          <li className="li-skillbar">
            <h4>Node JS</h4>
            <span className="bar">
              <span className="nodejs" />
            </span>
          </li>
          <li className="li-skillbar">
            <h4>Express JS</h4>
            <span className="bar">
              <span className="nodejs" />
            </span>
          </li>
        </div>

        {/* FOOTER */}

        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Kadeksucpitaskill;
