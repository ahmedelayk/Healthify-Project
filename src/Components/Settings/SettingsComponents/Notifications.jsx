import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GrNotification } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import BootstrapSwitchButton  from "bootstrap-switch-button-react";
// Context
import { useAuth } from "../../../Context/AuthContext";

const Notifications = () => {
  const {t} = useAuth();
  return (
    <div className="notifications p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={1} className="pen-icon">
          <GrNotification />
        </Col>
        <Col xs={11} className=" pt-1">
          <h6>{t("Notifications")}</h6>
        </Col>
        <Row className="px-3 mt-5">
          <Col xs={1} className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={8} className="">
            <h5>{t("Reminders to exercise")}</h5>
          </Col>
          <Col xs={1} className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={true}
              onstyle="primary"
              offstyle="danger"
            />
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={8} className="">
            <h5>{t("Daily meditation")}</h5>{" "}
          </Col>
          <Col xs={1} className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={true}
              onstyle="primary"
              offstyle="danger"
            />
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={8} className="">
            <h5>{t("Updates on fitness goals")}</h5>
          </Col>
          <Col xs={1} className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={true}
              onstyle="primary"
              offstyle="danger"
            />
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={8} className="">
            <h5>{t("Personalized recommendations")}</h5>
          </Col>
          <Col xs={1} className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={true}
              onstyle="primary"
              offstyle="danger"
            />
          </Col>
        </Row>{" "}
        <Row className="px-3 mt-2">
          <Col xs={1} className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={8} className="">
            <h5>{t("BMI weekly test notifications")}</h5>
          </Col>
          <Col xs={1} className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={true}
              onstyle="primary"
              offstyle="danger"
            />
          </Col>
          <Row className="py-3 text-center">
            <Col xs={6}>
              <Button variant="primary " className="border px-lg-5 px-xs-0">
                {t("Save")}
              </Button>
            </Col>
            <Col xs={6}>
              <Button variant="light" className="border px-lg-5 px-xs-0">
                {t("Cancel")}
              </Button>
            </Col>
          </Row>
        </Row>
      </Row>
    </div>
  );
};

export default Notifications;
