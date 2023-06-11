import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BMICalculator } from "./BMICalculator";
import { BMIResult } from "./BMIResult";
import { CaloriesTrack } from "./CaloriesTrack";
import { ProgressTrack } from "./ProgressTrack";
import { WaterTrack } from "./WaterTrack";

const Nutration = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <BMICalculator />
        {/* <Col lg={1} className="padding"></Col> */}
        <BMIResult />
        <CaloriesTrack />
        {/* <Col lg={1} className="padding"></Col> */}
        <WaterTrack />
        {/* <Col lg={1} className="padding"></Col> */}
        <ProgressTrack />
      </Row>
    </Container>
  );
};

export default Nutration;
