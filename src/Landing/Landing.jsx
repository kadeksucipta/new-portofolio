import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitSquare,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import qr from "../asset/qr.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Landing = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const goToHome = () => {
  //   navigate("/dashboard");
  // };
  // const goToAbout = () => {
  //   navigate("/tentang-kadek");
  // };
  // const goToSkill = () => {
  //   navigate("/skill-kadek");
  // };
  
  return (
    <React.Fragment>
      {/* <div className="container">
        <div className="navbar">
          <ul className="bar-desk">
            <li className="child-desk">
              <h3 onClick={() => goToHome()}>Home</h3>
            </li>
            <li className="child-desk">
              <h3 onClick={() => goToAbout()}>About</h3>
            </li>
            <li className="child-desk">
              <h3 onClick={() => goToSkill()}>Skills</h3>
            </li>
            <li className="child-desk">
              <h3>Experience</h3>
            </li>
          </ul>
        </div>
      </div> */}

      <Navbar/>

      {/* ISI */}

      <div className="container-isi">
        <div className="box-name">
          <button className="my-name">Hello, call me Kadek.</button>
          <h1 className="title-job">
            Front-End Developers • Web Developers • MERN Stack • Graphic
            Designer
          </h1>
          <p className="introduce">
            Hello, I'm Kadek I'm a Web Developers who is able to design websites
            well, both in terms of UI and structure. Both Dynamic Website and
            Static Website
          </p>
        </div>

        {/* ALL SOSMED */}

        <div className="container-sosmed">
          <ul className="box-sosmed">
            <a href="https://github.com/kadeksucipta" className="li-sosmed-1">
              <FontAwesomeIcon icon={faGithub} /> <span className="name-sosmed"> kadeksucipta</span>
            </a>
            <a
              href="https://www.instagram.com/kadekscpta/"
              className="li-sosmed"
            >
              <FontAwesomeIcon icon={faInstagram} /> <span className="name-sosmed"> kadekscpta</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kadek-sucipta-a12559238/"
              className="li-sosmed"
            >
              <FontAwesomeIcon icon={faLinkedin} /> <span className="name-sosmed"> kadeksucipta</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1rJNZMk20eQI562H4Kfu1LMLcLWfkLESi/view"
              className="li-sosmed"
            >
              <FontAwesomeIcon icon={faFilePdf} /> <span className="name-sosmed"> curriculum vitae</span>
            </a>
          </ul>
        </div>

        <div className="border-line"></div>

        {/* PROJECT */}
        <div className="box-project">
          <div className="header-project">
            <button className="my-project">This My Project.</button>
            <p className="introduce-project">
              This project I built using MERN stack
            </p>
          </div>
          <div className="group-project">
            <div className="project-1">
              <img
                className="coffe-img"
                src="https://agreeable-lime-slippers.cyclic.app/images/49f1accf004be1966d6703d0312fbba1.png"
                alt=""
              />
            </div>

            <div className="project-2">
              <img
                className="coffe-img"
                src="https://kadek-fe-dev.vercel.app/static/media/portal.b8caf1ca2bc6ffe73d7a.png"
                alt=""
              />
            </div>

            <div className="project-3">
              <img
                className="coffe-img"
                src="https://agreeable-lime-slippers.cyclic.app/images/8214e3561326ff29f903b69151ee3782.png"
                alt=""
              />
            </div>

            <div className="project-4">
              <img
                className="coffe-img"
                src="https://agreeable-lime-slippers.cyclic.app/images/47b843f7ba1832e7ae27ae925eae93fc.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="border-line"></div>

        {/* FOOTER */}

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Landing;
