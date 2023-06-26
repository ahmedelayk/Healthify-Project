import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import "./nutration.css";
import RR1 from "../assets/images/RR1.webp";
import RR2 from "../assets/images/RR2.webp";
import RR3 from "../assets/images/RR3.webp";
import RR4 from "../assets/images/RR4.webp";

export const RecomendedRecipies = () => {
  return (
    <Fragment>
      <h4 className="font-family1 text-paragraph-color bolder my-5">
        Recomended Recipies
      </h4>
      <Row className="align-content-center">
        <Col xs={12} md={6} lg={3}>
          <div className="card mb-3">
            <img src={RR1} className="card-img-top" alt="..." loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Avocado and Tuna Salad Wrap</h5>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card mb-3">
            <img src={RR2} className="card-img-top" alt="..." loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">
                Grilled Sweet Potatoes with Lemon-Herb Sauce
              </h5>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card mb-3">
            <img src={RR3} className="card-img-top" alt="..." loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Greek Salad Squash Salad with </h5>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="card mb-3">
            <img src={RR4} className="card-img-top" alt="..." loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">
                Roasted Butternut Squash Salad  
              </h5>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
