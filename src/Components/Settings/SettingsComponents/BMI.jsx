import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsCalculatorFill } from "react-icons/bs";

const BMI = () => {
  return (
    <div className="p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={1} className="pen-icon pt-0">
          <BsCalculatorFill className=""/>
        </Col>
        <Col xs={9} className=" pt-1">
          <h6>BMI Calculation</h6>
        </Col>
      </Row>
    
    </div>
  );
};

export default BMI;
