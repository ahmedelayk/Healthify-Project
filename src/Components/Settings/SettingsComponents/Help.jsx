import React from "react";
import { Col, Row } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import { GiHelp } from "react-icons/gi";
import { BiLinkExternal } from "react-icons/bi";

import { useAuth } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

const Help = () => {
  const { t } = useAuth();
  return (
    <div className="notifications p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={1} className="pen-icon">
          <GiHelp />
        </Col>
        <Col xs={11} className=" pt-1">
          <h6>{t("Help")}</h6>
        </Col>
        <Row className="px-3 mt-5">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("How do I get started with a fitness routine?")}
              <Link to="/help/1">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t(
                "What are some effective meditation techniques for beginners?"
              )}
              <Link to="/help/2">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("How can I set realistic fitness goals for myself?")}
              <Link to="/help/3">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t(
                "What are some healthy and balanced meal plans for weight loss?"
              )}
              <Link to="/help/4">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("How do I stay motivated to exercise regularly?")}
              <Link to="/help/5">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t(
                "What are the benefits of incorporating mindfulness into my daily routine?"
              )}
              <Link to="/help/6">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("How can I prevent injuries during workouts?")}
              <Link to="/help/7">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("What are some recommended meditation apps or resources?")}
              <Link to="/help/8">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t("How can I improve my flexibility and mobility?")}
              <Link to="/help/9">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcIdea className="notifications-icon" />
          </Col>
          <Col xs={11} className="">
            <h5>
              {t(
                "What are some nutritious and convenient snack options for pre and post-workout?"
              )}
              <Link to="/help/10">
                <BiLinkExternal className="m-2" />
              </Link>
            </h5>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Help;
