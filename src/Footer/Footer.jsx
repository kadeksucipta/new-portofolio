import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import qr from "../asset/qr.png"

const Footer = () => {
  return (
    <React.Fragment>
      <div className="like-someth">
          <div className="title-footer">
            <h3>
              <FontAwesomeIcon className="code-icon" icon={faCode} /> I Like -
              Coding
            </h3>
          </div>

          <div className="isi-footer">
            <ul>
              <li className="li-footer-1">
                <a className="li-footer" href="https://github.com/kadeksucipta">
                  GitHub
                </a>
              </li>
              <li className="li-footer">
                <a
                  className="li-footer"
                  href="https://www.linkedin.com/in/kadek-sucipta-a12559238/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="li-footer">
                <a
                  className="li-footer"
                  href="https://www.instagram.com/kadekscpta/"
                >
                  Instagram
                </a>
              </li>
              <li className="li-footer">
                <a
                  className="li-footer"
                  href="https://www.youtube.com/@kadeksucipta6439/"
                >
                  Youtube
                </a>
              </li>
            </ul>
            <ul className="ul-web">
              <li className="li-footer-1">Home</li>
              <li className="li-footer">Skills</li>
              <li className="li-footer">Experience</li>
            </ul>
            <ul className="ul-cv">
              <li className="li-footer-1">
                <a
                  className="li-footer"
                  href="https://drive.google.com/file/d/1rJNZMk20eQI562H4Kfu1LMLcLWfkLESi/view"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
            <div className="qr-code">
              <ul>
              <a href="https://api.whatsapp.com/send?phone=+6281917057795&text=Halo%20Kadek.">
                <img className="qr-wa" src={qr} alt="" />
              </a>
              </ul>
            </div>
          </div>
          <div className="all-right">
            <p className="reseverb">
              © 2023 Kadeksucipta. All rights reserved.
            </p>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Footer;
