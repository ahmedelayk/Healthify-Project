import React from "react";
import { Col } from "react-bootstrap";
import "./nutration.css";

export const BMIResult = () => {
  return (
    <Col xs={12} lg={6} className="card-n result-sec">
      <h4 className="font-family1 text-paragraph-color">BMI Result</h4>
      <h5 className="grey fs-6 text-center pt-9">Calculate BMI First</h5>
    </Col>
  );
};
