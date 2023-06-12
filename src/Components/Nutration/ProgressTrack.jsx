import React from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";
import progress from "../assets/images/Healthy options-amico 1.png";

export const ProgressTrack = () => {
  return (
    <Col xs={12} md={6} lg={3} className="card-n mt-0 progress-sec">
      <h4 className="font-family1 text-paragraph-color">Progress</h4>
      <Row className="justify-content-center">
        <Col>
          <img className="w-75" src={progress} alt=""></img>
        </Col>
      </Row>
    </Col>
  );
};
