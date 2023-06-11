import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { SiMediafire } from "react-icons/si";

function Footer() {
  return (
    <footer id="footer" className="footer-1 ">
      <div className="main-footer widgets-dark typo-light ">
        <div className="container  ">
          <div className="row ">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  About Healthify<span></span>
                </h5>
                <p>About us, little description will goes here.. </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;Get Started</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;Top Leaders</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Follow up<span></span>
                </h5>

                <BsFacebook className="me-2" />
                <BsGithub className="me-2" />
                <BsLinkedin className="me-2" />
                <AiFillTwitterCircle className="me-2" />
              </div>
              <div className="widget no-box">
                <h6 className="widget-title">Download Healthify App</h6>
                <div className="ps-5">
                  <SiMediafire className="me-2 h1" />
                  <BsGooglePlay className="me-2 h1" />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>
                <p>Subscribe now to be in touch </p>
                <div className="emailfield">
                  <input type="text" name="email" defaultValue="Email" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />

                  <input
                    className="submitbutton ripplelink footer-btn"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright © 2023 , Healthify team Made with Love ♥</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
