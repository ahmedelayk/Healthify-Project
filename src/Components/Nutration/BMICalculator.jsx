import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdMale, MdFemale } from "react-icons/md";
import "toolcool-range-slider";
import "./nutration.css";

export const BMICalculator = () => {
  return (
    <Col xs={12} lg={6} className="card-n">
      <h4 className="font-family1 text-paragraph-color mb-3 bolder">
        BMI Calculator
      </h4>
      <Row className="w-50 ms-0">
        <Col>
          <Row className="cursor-pointer bg-second-color justify-content-around align-items-center p-2">
            <Col xs={3}>
              <MdMale color="white" size={25} />
            </Col>
            <Col xs={8}>
              <h5 className="m-0 text-white font-family1 bolder">Male</h5>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" cursor-pointer justify-content-around align-items-center p-2">
            <Col xs={3}>
              <MdFemale size={25} />
            </Col>
            <Col xs={8}>
              <h5 className="m-0 font-family1 bolder">Female</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3 mb-2 align-items-center">
        <Col>
          <h6 className="font-family1 fw-bolder">
            Height <span>CM</span>
          </h6>
        </Col>
        <Col>
          <h6 className="grey text-center">167"</h6>
        </Col>
      </Row>
      <toolcool-range-slider
        slider-width="445px"
        slider-height="0.2rem"
        pointer-width="1rem"
        pointer-height="1rem"
        pointer-bg="white"
        pointer-bg-hover="white"
        pointer-bg-focus="white"
        slider-bg-fill="#0066ff"
        min="120"
        max="220"
        value="167"
      ></toolcool-range-slider>
      <p className="fs-8 mt-2 ruler">
        |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
      </p>
      <Row className="mt-3 mb-2 align-items-center">
        <Col>
          <h6 className="font-family1 fw-bolder">
            Weight <span>KG</span>
          </h6>
        </Col>
        <Col>
          <h6 className="grey text-center">80"</h6>
        </Col>
      </Row>
      <toolcool-range-slider
        slider-width="445px"
        slider-height="0.2rem"
        pointer-width="1rem"
        pointer-height="1rem"
        pointer-bg="white"
        pointer-bg-hover="white"
        pointer-bg-focus="white"
        slider-bg-fill="#0066ff"
        min="40"
        max="400"
        value="80"
      ></toolcool-range-slider>
      <p className="fs-8 mt-2 ruler">
        |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
      </p>
      <h6 className="bg-second-color p-2 w-25 min-w-100 text-center text-white cursor-pointer">
        Calculate BMI
      </h6>
    </Col>
  );
};
