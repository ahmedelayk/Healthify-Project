import React from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";

export const CaloriesTrack = () => {
  return (
    <Col xs={12} lg={6} className="card-n mt-0">
      <Row className="justify-between mb-2">
        <Col>
          <h4 className="font-family1 text-paragraph-color">Day1</h4>
        </Col>
        <Col>
          <p className="text-end">24/10/2000</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <h6>Breakfast</h6>
          <Row className="justify-between align-items-center">
            <Col>
              <p className="grey">Eggs</p>
            </Col>
            <Col>
              <p className="grey fs-8 text-end">2</p>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col>
              <p className="grey m-0 fs-7">Beans</p>
            </Col>
            <Col>
              <p className="grey fs-8 text-end">100g</p>
            </Col>
          </Row>
          <p className="bg-add rounded-pill text-white text-center my-2 cursor-pointer">
            +
          </p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>Lunch</h6>
          <Row className="justify-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <p className="bg-add rounded-pill text-white text-center my-2 cursor-pointer">
            +
          </p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>Dinner</h6>
          <Row className="justify-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <p className="bg-add rounded-pill text-white text-center my-2 cursor-pointer">
            +
          </p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>Snacks</h6>
          <Row className="justify-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col></Col>
            <Col></Col>
          </Row>
          <p className="bg-add rounded-pill text-white text-center my-2 cursor-pointer">
            +
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6} lg={3}>
          <p className="">
            Calories
            <span className="fs-8 text-primary-color ">&nbsp; 370kj</span>
          </p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="">
            Carb
            <span className="fs-8 text-primary-color ">&nbsp; 33g</span>
          </p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="">
            Fats
            <span className="fs-8 text-primary-color ">&nbsp; 22g</span>
          </p>
        </Col>
        <Col>
          <p className="">
            Protein
            <span className="fs-8 text-primary-color ">&nbsp; 15g</span>
          </p>
        </Col>
      </Row>
    </Col>
  );
};
