import React from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";
import progress from "../assets/images/Healthy options-amico 1.webp";

export const ProgressTrack = () => {
  return (
    <Col xs={12} md={6} lg={3} className="card-n mt-0 progress-sec">
      <h4 className="font-family1 text-paragraph-color mb-2">Progress</h4>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="w-75">
          <img className="w-75" src={progress} alt="user progress" loading="lazy"/>
        </Col>
        <Col xs={12}>
          <div className="my-3 progress" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
