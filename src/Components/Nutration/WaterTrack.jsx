import React from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";
import water from "../assets/images/water.png";

export const WaterTrack = () => {
  return (
    <Col xs={12} md={6} lg={3} className="card-n mt-0">
      <h4 className="font-family1 text-paragraph-color mb-2">Water</h4>
      <Row className="justify-content-center mt-4">
        <img className="w-25 " src={water} alt="water"></img>
      </Row>
      <div className="my-3 progress" style={{ height: "6px" }}>
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p className="grey text-center">0.8L / 4L</p>
      <p className="bg-add rounded-pill text-white text-center my-2 cursor-pointer">
        +
      </p>
    </Col>
  );
};
