import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GrNotification } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
// Context
import { useAuth } from "../../../Context/AuthContext";
// firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
// style
import "./style.css"
import Swal from "sweetalert2";

const Notifications = () => {
  const { t, currentUserData } = useAuth();

  const [notification, setNotification] = useState({
    exercise: currentUserData?.notification?.exercise,
    dailyMeditation: currentUserData?.notification?.dailyMeditation,
    fitnessGoals: currentUserData?.notification?.fitnessGoals,
    personalizedRecomendations: currentUserData?.notification?.personalizedRecomendations,
    weeklyBMI: currentUserData?.notification?.weeklyBMI,
  });
  const handleSubmit = async () => {
    // console.log(currentUserData?.notification)
    const userDoc = doc(db, "users", currentUserData?.userId)
    await updateDoc(userDoc, { notification: { ...notification } })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: t("Saved Successfully"),
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="notifications p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={ 1 } className="pen-icon">
          <GrNotification />
        </Col>
        <Col xs={ 11 } className=" pt-1">
          <h6>{ t("Notifications") }</h6>
        </Col>
        <Row className="px-3 mt-5">
          <Col xs={ 1 } className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={ 8 } className="">
            <h5>{ t("Reminders to exercise") }</h5>
          </Col>
          <Col xs={ 1 } className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={ notification.exercise }
              onstyle="primary"
              offstyle="danger"
              onChange={ (e) => {
                setNotification({ ...notification, exercise: e })
              } }
            />
          </Col>
        </Row>
        <Row className="px-3 mt-2">
          <Col xs={ 1 } className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={ 8 } className="">
            <h5>{ t("Daily meditation") }</h5>{ " " }
          </Col>
          <Col xs={ 1 } className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={ notification.dailyMeditation }
              onstyle="primary"
              offstyle="danger"
              onChange={ (e) => {
                setNotification({ ...notification, dailyMeditation: e })
              } }
            />
          </Col>
        </Row>{ " " }
        <Row className="px-3 mt-2">
          <Col xs={ 1 } className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={ 8 } className="">
            <h5>{ t("Updates on fitness goals") }</h5>
          </Col>
          <Col xs={ 1 } className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={ notification.fitnessGoals }
              onstyle="primary"
              offstyle="danger"
              onChange={ (e) => {
                setNotification({ ...notification, fitnessGoals: e })
              } }
            />
          </Col>
        </Row>{ " " }
        <Row className="px-3 mt-2">
          <Col xs={ 1 } className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={ 8 } className="">
            <h5>{ t("Personalized recommendations") }</h5>
          </Col>
          <Col xs={ 1 } className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={ notification.personalizedRecomendations }
              onstyle="primary"
              offstyle="danger"
              onChange={ (e) => {
                setNotification({ ...notification, personalizedRecomendations: e })
              } }
            />
          </Col>
        </Row>{ " " }
        <Row className="px-3 mt-2">
          <Col xs={ 1 } className="text-right">
            <FcAbout className="notifications-icon" />
          </Col>
          <Col xs={ 8 } className="">
            <h5>{ t("BMI weekly test notifications") }</h5>
          </Col>
          <Col xs={ 1 } className="">
            <BootstrapSwitchButton className="toggle-btn"
              checked={ notification.weeklyBMI }
              onstyle="primary"
              offstyle="danger"
              onChange={ (e) => {
                console.log(e)
                setNotification({ ...notification, weeklyBMI: e })
              } }
            />
          </Col>
          <Row className="mt-5 text-center d-flex justify-content-center">
            <Col xs={ 4 } md={ 3 } lg={ 2 }>
              <input type="submit" onClick={ handleSubmit } className="bg-second-color text-white px-4 py-2 rounded-3 no-border" value={ t("Save") } />
            </Col>
          </Row>
        </Row>
      </Row>
    </div>
  );
};

export default Notifications;
