import React from "react";
import Macro from "../../../assets/images/macro.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./section1.css";
const Section1 = () => {
  return (
    <section id="landing" className="row col-12 section-padding-bottom">
      <div className="col-lg-6 col-md-12 col-12  p-5 part1">
        <h2 className="macro-text">
          Unlock Your Potential. Empowering Health and Wellness for All!
        </h2>
        <NavLink to="/login" className="">
          <Button className="go-btn">
            Start your journey
          </Button>
        </NavLink>
      </div>
      <img src={Macro} className="col-lg-6 col-md-6 col-12 macro-image" alt="macro"/>
    </section>
  );
};

export default Section1;
