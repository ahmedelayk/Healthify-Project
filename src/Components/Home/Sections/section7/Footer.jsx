// icons
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import { SiMediafire } from "react-icons/si";
// style
import "./Footer.css";
// Context
import { useAuth } from "../../../../Context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState("");

  const handleValue = async (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      try {
        const response = await axios.get("http://localhost:3003/subscribers");
        const subscribers = response.data;

        if (subscribers.some((subscriber) => subscriber.email === email)) {
          Swal.fire({
            icon: "info",
            title: t("Oops!"),
            text: t("You already subscribed before."),
            footer: "",
          });
        } else {
          await axios.post("http://localhost:3003/subscribers", { email });
          Swal.fire(
            `${t("You have successfully subscribed")}`,
            ` <b style=color:#0066ff;> ${t("Healthify Team")} </b>`,
            "success"
          );
        }
        
        clearInputs();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: t("Oops!"),
          text: t("An error occurred. Please try again later."),
          footer: "",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: t("Oops!"),
        text: t("Please Enter Your Email Correctly"),
        footer: "",
      });
    }
  };

  const clearInputs = () => {
    setEmail("");
  };

  const { t } = useAuth();
  return (
    <footer id="footer" className="footer-1 ">
      <div className="main-footer widgets-dark typo-light ">
        <div className="container  ">
          <div className="row ">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  {t("About Healthify")}
                  <span></span>
                </h5>
                <p>{t("About us, little description will goes here..")} </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t("Quick Links")}
                  <span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;{t("Get Started")}</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">&nbsp;{t("Top Leaders")}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t("Follow up")}
                  <span></span>
                </h5>

                <BsFacebook className="me-2" />
                <BsGithub className="me-2" />
                <BsLinkedin className="me-2" />
                <AiFillTwitterCircle className="me-2" />
              </div>
              <div className="widget no-box">
                <h6 className="widget-title">{t("Download Healthify App")}</h6>
                <div className="ps-5">
                  <SiMediafire className="me-2 h1" />
                  <BsGooglePlay className="me-2 h1" />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  {t("Contact Us")}
                  <span></span>
                </h5>
                <p>{t("Subscribe now to be in touch")} </p>
                <div className="emailfield">
                  <input
                    className="input-email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="user_email"
                    defaultValue={t("Email")}
                  />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />

                  <input
                    className="submitbutton ripplelink footer-btn"
                    type="submit"
                    value={t("Subscribe")}
                    onClick={handleValue}
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
              <p>{t("Copyright © 2023 , Healthify team Made with Love ♥")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
