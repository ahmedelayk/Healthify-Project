// Components
import { Container, Row } from "react-bootstrap";
// style
import './Section6.css';
// Context
import { useAuth } from "../../../../Context/AuthContext";
export default function Section6() {
  const {t} = useAuth()
  return (
    <>
    <div id="contact-us" className="container-fluid bg-white section-padding">
      <Container>
        <Row>
          <h1 className="text-center text-paragraph-color">{t("Contact Us")}</h1>
        </Row>
        <div className="my-5">
            <div className='form-container'>
                <form className="contact-us-form" action="POST">
                    <div className="form-field-container">
                        <label className="label-field" htmlFor="name">{t("Name")}</label>
                        <input className="form-control" type="text" name="name" id="name" />
                    </div>
                    <div className="form-field-container">
                        <label className="label-field" htmlFor="email">{t("E-mail")}</label>
                        <input className="form-control" type="email" name="email" id="email" />
                    </div>
                    <div className="form-field-container">
                        <label className="label-field" htmlFor="mobile">{t("Mobile")}</label>
                        <input className="form-control" type="tel" name="mobile" id="mobile" />
                    </div>
                    <div className="form-field-container">
                        <label className="label-area-field" htmlFor="message">{t("Message")}</label>
                        <textarea className="text-area-field form-control" name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input className="submit-btn" type="submit" value={t("Send")} />
                    </div>
                    
                </form>
            </div>
        </div>
      </Container>
    </div>
    </>
  )
}
