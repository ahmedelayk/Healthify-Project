import React from "react";
import "./profile.css";
import Datepicker from "./ProfileComponents/Datepicker";
import { Button, Container, Row, Col } from "react-bootstrap";
import TodayReport from "./ProfileComponents/TodayReport";
import MonthGraph from "./ProfileComponents/MonthGraph";
import WeekGraph from "./ProfileComponents/WeekGraph";

function Profile() {
  return (
    <Container>
      <Row className="profile">
        {/* left side bar */}
        <Col lg={2} xs={12} className="left-side">
          <div className="p-3">
            <WeekGraph />
          </div>
        </Col>
        <Col lg={1} xs={12} className="sized-box-profile" data-aos="flip-up"></Col>

        {/* middle */}
        <Col lg={4} xs={12} className="middle text-center">
          <div className="p-3" data-aos="fade-up-left">
            <h5>Tip of the Day</h5>
            <h6>
              “It’s not until you get tired that you see how strong you really
              are.”
            </h6>
            <p>– Shaun T</p>
          </div>
          <div data-aos="flip-up">
            <MonthGraph />
          </div>
          <Col xs={6}>
            <Button
              variant="primary"
              className="mt-5 ms-5"
              data-aos="fade-up-left"
            >
              Reset graph
            </Button>
          </Col>
        </Col>

        <Col lg={1} xs={12} className="sized-box-profile"></Col>
        {/* right side bar */}
        <Col lg={4} xs={12} className="right-side" data-aos="fade-in-out">
          <Row className="date-picker mt-4">
            <Col xs={12}>
              <Datepicker />
            </Col>
          </Row>

          <Row data-aos="fade-up-right">
            <Col xs={12}>
              <h4 className="mb-5 mt-3">Today report</h4>
            </Col>
          </Row>

          <TodayReport />

          <Row data-aos="fade-in-left">
            <Col xs={12} className="mt-5">
              <h5>Recent workouts</h5>
            </Col>
            <Col xs={12} className="my-3">
              <p>No workouts done</p>
            </Col>
          </Row>

          <Row data-aos="fade-down"> 
            <Col xs={12}>
              <Button className="lets-btn" data-aos="fade-up-left">Let's start</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
