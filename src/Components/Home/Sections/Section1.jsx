import React from "react";
import Macro from "../../assets/images/macro.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./section1.css";
const Section1 = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section id="about" className="row col-12">
      <div className="col-lg-6 col-md-6 col-12  py-5 px-5  text-center intro">
        <h2 className="macro-text">
          Unlock Your Potential. Empowering Health and Wellness for All!
          <div className="go-btn" onClick={handleLoginClick}>
            <Button variant="primary" className="">
              Start your journey
            </Button>
          </div>
        </h2>
      </div>
      <img src={Macro} className="col-lg-6 col-md-6 col-12" alt="macro" />
    </section>
  );
};

export default Section1;
