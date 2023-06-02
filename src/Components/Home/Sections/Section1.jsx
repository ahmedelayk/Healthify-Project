import React from "react";
import Macro from "../../assets/images/macro.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./section1.css";
const Section1 = () => {
  return (
    <section id="about" className="row col-12">
      <div className="col-lg-6 col-md-6 col-12 macro-text py-5 px-5 part1">
        <h2>
          Unlock Your Potential. Empowering Health and Wellness for All!
          <NavLink to="/login" className="go-btn d-block ">
            <Button variant="primary" className="go-btn">
              Start your journey
            </Button>
          </NavLink>
        </h2>
      </div>
      <img src={Macro} className="col-lg-6 col-md-6 col-12" />
    </section>
  );
};

export default Section1;
