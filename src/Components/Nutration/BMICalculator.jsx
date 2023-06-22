import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { MdMale, MdFemale } from "react-icons/md";
import "toolcool-range-slider";
import "./nutration.css";
import { useNutrition } from "../../Context/NutritionContext";

export const BMICalculator = () => {
  const {
    changeHeight,
    changeWeight,
    handleFemale,
    handleCalculate,
    handleMale,
    gender,
    loadingResult,
    result,
    height,
    weight,
  } = useNutrition();

  return (
    <Col xs={12} lg={5} className="card-n">
      <h4 className="font-family1 text-paragraph-color mb-3 bolder">
        BMI Calculator
      </h4>
      <Row className="w-50 ms-0">
        <Col>
          <Row className="cursor-pointerjustify-content-around align-items-center p-2">
            <Col xs={3}>
              <MdMale color="" size={25} />
            </Col>
            <Col xs={8}>
              <Button
                className="m-0  font-family1 border bolder"
                variant={gender !== "Male" ? "light" : "primary"}
                onClick={handleMale}
              >
                Male
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className=" cursor-pointer justify-content-around align-items-center p-2">
            <Col xs={3}>
              <MdFemale size={25} />
            </Col>
            <Col xs={8}>
              <Button
                className="m-0 font-family1 bolder"
                variant={gender === "Female" ? "primary" : "light"}
                onClick={handleFemale}
              >
                Female
              </Button>
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
          <h6 className="grey text-center">{height} Cm</h6>
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
        id="height-slider"
        min={120}
        max={220}
        step={1}
        value={height}
        onClick={changeHeight}
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
          <h6 className="grey text-center">{weight} Kg</h6>
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
        max="150"
        value={weight}
        onClick={changeWeight}
      ></toolcool-range-slider>
      <p className="fs-8 mt-2 ruler">
        |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|
      </p>
      {loadingResult ? (
        <Button
          className="mt-5 p-2 w-25 min-w-100 text-center text-white cursor-pointer"
          onClick={() => handleCalculate(weight, height)}
        >
          <span
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Calculating...
        </Button>
      ) : (
        <Button
          className="mt-5 p-2 w-25 min-w-100 text-center text-white cursor-pointer"
          onClick={() => handleCalculate(weight, height)}
        >
          Calculate BMI
        </Button>
      )}
    </Col>
  );
};
