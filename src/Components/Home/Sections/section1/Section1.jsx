// image
import Macro from "../../../assets/images/macro.webp";
// 
import { NavLink } from "react-router-dom";
// Components
import { Container, Button, Row } from "react-bootstrap";
// style
import "./section1.css";

const Section1 = () => {
  return (
    <Container id="landing" className="section-padding-bottom">
      <Row>
        <div className="col-lg-6 col-12  p-5 part1 d-flex flex-column justify-content-center">
          <h2 className="macro-text">
            Unlock Your Potential. Empowering Health and Wellness for All!
          </h2>
          <div>

          <NavLink to="/login">
            <Button className="go-btn">
              Start your journey
            </Button>
          </NavLink>
          </div>
        </div>
        <div className="col-md-6 col-12  d-flex align-items-center mt-1">
          <img src={Macro} className="w-100 macro-image" alt="macro" loading="lazy"/>
        </div>
      </Row>
    </Container>
  );
};

export default Section1;
