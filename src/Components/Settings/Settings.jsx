import React, { useState } from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import "./settings.css";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { GiBurningEye } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { BsCalculatorFill } from "react-icons/bs";
import { LuLanguages } from "react-icons/lu";
import { BiHelpCircle } from "react-icons/bi";

import EditProfile from "./SettingsComponents/EditProfile";
import Notifications from "./SettingsComponents/Notifications";
import Languages from "./SettingsComponents/Languages";
import BMI from "./SettingsComponents/BMI";
import Help from "./SettingsComponents/Help";

const Settings = () => {
  const [selectedComponent, setSelectedComponent] = useState(<EditProfile />);
  const [activeNavLink, setActiveNavLink] = useState("EditProfile");

  const handleNavLinkClick = (component, navLinkName) => {
    setSelectedComponent(component);
    setActiveNavLink(navLinkName);
  };

  return (
    <Row className="settings ">
      {/* The first settings sidebar */ }
      <Col xs={ 1 } className="first-sidebar">
        <Row className="icons-row">
          <div className="icon-sidebar">
            <GiStrong />
          </div>
          <div className="icon-sidebar">
            <MdOutlineFitnessCenter />
          </div>
          <div className="icon-sidebar">
            <BsGraphUp />
          </div>
          <div className="icon-sidebar">
            <GiBurningEye />
          </div>
        </Row>
        <div className="settings-icon">
          <AiFillSetting />
        </div>
      </Col>
      {/* The second settings sidebar */ }
      <Col lg={ 2 } xs={ 4 } className="second-sidebar">
        <Row>
          <Col xs={ 3 }>
            <MdArrowBackIosNew />
          </Col>
          <Col xs={ 9 }>
            <h5>Settings</h5>
          </Col>
        </Row>
        <div className="setting-nav">
          <Row>
            <NavLink
              onClick={ () => handleNavLinkClick(<EditProfile />, "EditProfile") }
              className={
                activeNavLink === "EditProfile"
                  ? "active-settings  setting-item"
                  : " setting-item"
              }
            >
              <Row>
                <Col xs={ 1 }>
                  <BsFillPencilFill />
                </Col>
                <Col xs={ 10 } className="pt-1">
                  <h6>Edit Profile</h6>
                </Col>
              </Row>
            </NavLink>
            <NavLink
              onClick={ () =>
                handleNavLinkClick(<Notifications />, "Notifications")
              }
              className={
                activeNavLink === "Notifications"
                  ? "active-settings setting-item"
                  : " setting-item"
              }
            >
              <Row>
                <Col xs={ 1 }>
                  <GrNotification />
                </Col>
                <Col xs={ 10 } className="pt-1">
                  <h6>Notifications</h6>
                </Col>
              </Row>
            </NavLink>
            <NavLink
              onClick={ () => handleNavLinkClick(<BMI />, "BMI") }
              className={
                activeNavLink === "BMI"
                  ? "active-settings setting-item"
                  : " setting-item"
              }
            >
              <Row>
                <Col xs={ 1 }>
                  <BsCalculatorFill />
                </Col>
                <Col xs={ 10 } className="pt-1">
                  <h6>BMI Test</h6>
                </Col>
              </Row>
            </NavLink>
            <NavLink
              onClick={ () => handleNavLinkClick(<Languages />, "Languages") }
              className={
                activeNavLink === "Languages"
                  ? "active-settings setting-item"
                  : " setting-item"
              }
            >
              <Row>
                <Col xs={ 1 }>
                  <LuLanguages />
                </Col>
                <Col xs={ 10 } className="pt-1">
                  <h6>Languages</h6>
                </Col>
              </Row>
            </NavLink>
            <NavLink
              onClick={ () => handleNavLinkClick(<Help />, "Help") }
              className={
                activeNavLink === "Help"
                  ? "active-settings setting-item"
                  : " setting-item"
              }
            >
              <Row>
                <Col xs={ 1 }>
                  <BiHelpCircle />
                </Col>
                <Col xs={ 10 } className="pt-1">
                  <h6>Help</h6>
                </Col>
              </Row>
            </NavLink>
          </Row>
        </div>
      </Col>
      <Col lg={ 1 } xs={ 2 } className="sized-box"></Col>
      <Col lg={ 8 } xs={ 5 } className="edit-area ">
        { selectedComponent }
      </Col>
    </Row>
  );
};

export default Settings;
