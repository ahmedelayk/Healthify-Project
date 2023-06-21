import React from "react";
import { Col } from "react-bootstrap";
import "./nutration.css";
import bodies from  "../assets/images/bmi-bodies.webp"
import body1 from  "../assets/images/body1.webp"
import body2 from  "../assets/images/body2.webp"
import body3 from  "../assets/images/body3.webp"
import body4 from  "../assets/images/body4.webp"
import body5 from  "../assets/images/body5.webp"
import { useNutrition } from "../../Context/NutritionContext";

export const BMIResult = () => {
  const {result}=useNutrition()
  return (
    <Col xs={12} lg={6} className="card-n result-sec">
      <h4 className="font-family1 text-paragraph-color">BMI Result</h4>
      <img src={bodies} width="100%"/>
      <h5 className="grey fs-6 text-center">Calculate BMI First</h5>
      <h1 className="grey fs-6 text-center">{ result}</h1>
    </Col>
  );
};
