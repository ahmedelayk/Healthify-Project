import React from "react";
import { Col, Row } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import { GiHelp } from "react-icons/gi";

const Help = () => {
  return (
    <div className="notifications p-lg-3 p-xs-0">
      <Row>
        <Col xs={1} className="pen-icon">
          <GiHelp />
        </Col>
        <Col xs={11} className=" pt-1">
          <h6>Help</h6>
        </Col>
        <Row className="px-3 mt-5">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>How do I get started with a fitness routine?</h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              What are some effective meditation techniques for beginners?
            </h5>{" "}
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>How can I set realistic fitness goals for myself?</h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              What are some healthy and balanced meal plans for weight loss?
            </h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>How do I stay motivated to exercise regularly?</h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>What are the benefits of incorporating mindfulness into my daily routine?</h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>How can I prevent injuries during workouts?</h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>What are some recommended meditation apps or resources?</h5>
          </Col>
        </Row>      <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>How can I improve my flexibility and mobility?</h5>
          </Col>
        </Row>      <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>What are some nutritious and convenient snack options for pre and post-workout?</h5>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Help;
