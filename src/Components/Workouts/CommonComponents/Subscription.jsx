// Style
import "../workout.css";

// Components
import { Button, Form, InputGroup } from "react-bootstrap";
// Context
import { useAuth } from "../../../Context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleValue = async (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      try {
        const response = await axios.get("https://healthify-pei4.onrender.com/subscribers");
        const subscribers = response.data;

        if (subscribers.some((subscriber) => subscriber.email === email)) {
          Swal.fire({
            icon: "info",
            title: t("Oops!"),
            text: t("You already subscribed before."),
            footer: "",
          });
        } else {
          await axios.post("https://healthify-pei4.onrender.com/subscribers", { email });
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
    <div className="p-5 newsletter-subscription" data-aos="zoom-in">
      <h1 className="header1-size text-center">
        {t("Newsletter Subscription")}
      </h1>
      <div className="p-3" data-aos="zoom-in">
        <form
          className="d-flex flex-column flex-lg-row w-75 gap-3 justify-content-center m-auto"
          action="POST"
        >
          <InputGroup className="mb-2 mb-lg-0">
            <Form.Control
              placeholder="Enter Email for subscription"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="user_email"
            />
          </InputGroup>
          <Button variant="primary" onClick={handleValue}>
            {t("Subscribe")}
          </Button>
        </form>
        <p
          className="text-center mt-3 mb-0 paragraph-size"
          data-aos="zoom-in-left"
        >
          {t("Get to know the latest news and offers we provide on this site.")}
        </p>
      </div>
    </div>
  );
};

export default Subscription;
