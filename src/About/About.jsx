import React from "react";
import "./About.css";
import me from "../asset/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import qr from "../asset/qr.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {

  return (
    <React.Fragment>
      <Navbar />

      <div className="container-about">
        <div className="item-about">
          <div className="text-about">
            <h1 className="title-about">
              I`M Kadek Sucipta. I live in Yogyakarta, where I look for
              experience and future.
            </h1>
            <h3>Who am I?</h3>
            <p className="my-intro">
              Hello my name is Kadek Sucipta, you can call me Kadek, I am a
              teenager who loves technology in the IT field, especially the
              development of applications, websites and also artificial
              intelligence. I am currently working as a Web Developer, where my
              main task at the moment is to manage website maintenance and
              development. I will continue to give my best and useful things
              that I know for everyone.{" "}
            </p>
            <div className="border-line-text"></div>
            <p className="my-intro-2">
              I currently contribute to an educational company in developing
              dozens of web-based applications using React JS, Readux Thunk and
              several UI materials as a front view, for a separate back view I
              use Node JS, Express JS and also Mongo DB as a place to store
              client data or better known as MERN Stack.
            </p>
            <div className="border-line-text"></div>
            <p className="my-intro-3">
              In the past year I also contributed to the Internship program
              which I lived for more than 7 months to improve my IT skills in
              making applications and websites where I learned the basic
              Javascript programming language to FrameWork, besides that I also
              learned the stack known as MERN Stack, not forgetting the
              sweetener that I learned was the Typescript and Next JS
              programming language in making game applications.
            </p>
          </div>

          <div className="img-about">
            <article class="card">
              <img className="img-me" src={me} alt="" />
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </article>

            <p className="quot">
              "hasil yang Hebat berasal dari tekad dan Proses yang Kuat"
              <div className="right-icon">
                <li className="icon-item">
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                  <span className="span-icon">Follow on LinkedIn</span>
                </li>
                <li className="icon-item">
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                  <span className="span-icon">Follow on Facebook</span>
                </li>
                <li className="icon-item">
                  <FontAwesomeIcon icon={faYoutube} />{" "}
                  <span className="span-icon">Follow on YouTube</span>
                </li>
                <li className="icon-item">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <span className="span-icon">Follow on GitHub</span>
                </li>
              </div>
            </p>
          </div>
        </div>

        {/* FOOTER */}

        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default About;
