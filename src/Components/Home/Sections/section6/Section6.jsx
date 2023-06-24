// Components
import { Container, Row } from "react-bootstrap";
// style
import "./Section6.css";
// Context
import { useAuth } from "../../../../Context/AuthContext";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Section6() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");

  const handleValue = (e) => {
    e.preventDefault();
    if (email.includes("@") && name) {
      emailjs
        .sendForm(
          "service_wz4b2xg",
          "template_hajy9xu",
          form.current,
          "rrNvraXvPIQepy7tI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire(
        `${t("Thank You")} <b style=color:#0066ff;>  ${name.toUpperCase()} 
         </b> ${t("We recieved Your Message Successfully")}`,
        " <b style=color:#0066ff;> " + `${t("Healthify Team")}` + " </b>",
        "success"
      );
      clearInputs();
    } else {
      Swal.fire({
        icon: "error",
        title: t("Oops!"),
        text: t("Plz Enter Your Name And Email Correctly"),
        footer: "",
      });
    }
  };
  const clearInputs = () => {
    setName("");
    setEmail("");
    setMassege("");
  };
  const { t } = useAuth();
  return (
    <>
      <div id="contact-us" className="container-fluid bg-white section-padding">
        <Container>
          <Row>
            <h1 className="text-center text-paragraph-color">
              {t("Contact Us")}
            </h1>
          </Row>
          <div className="my-5">
            <div className="form-container">
              <form
                className="contact-us-form"
                ref={form}
                onSubmit={handleValue}
              >
                <div className="form-field-container">
                  <label className="label-field" htmlFor="name">
                    {t("Name")}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="user_name"
                    id="name"
                  />
                </div>
                <div className="form-field-container">
                  <label className="label-field" htmlFor="email">
                    {t("E-mail")}
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="user_email"
                    id="email"
                  />
                </div>
                <div className="form-field-container">
                  <label className="label-area-field" htmlFor="message">
                    {t("Message")}
                  </label>
                  <textarea
                    className="text-area-field form-control"
                    onChange={(e) => setMassege(e.target.value)}
                    value={massege}
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <input
                    className="submit-btn"
                    type="submit"
                    value={t("Send")}
                  />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
