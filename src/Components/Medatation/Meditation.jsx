import React from "react";
import "./meditation.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MeditationCard from "./MeditationDetails/MeditaionCard";
import { Link } from "react-router-dom";
const Medatation = () => {
  return (
    <>
      <div className="filter-meditation p-5" data-aos="fade-left">
        <h1 className="header1-size mb-3">Filter</h1>
        <Form className="d-flex flex-row flex-wrap flex-md-nowrap">
          <Form.Select
            aria-label="Default select example"
            className="meditaion-select mx-md-2 mb-2 mb-md-0"
          >
            <option hidden>Meditation Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="meditaion-select mx-md-2 mb-2 mb-md-0"
          >
            <option hidden>Instructor</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button className="mx-md-2">Apply</Button>
        </Form>
      </div>
      <Container data-aos="flip-left">
        <div
          className="results-section section-padding"
          data-aos="flip-left"
        >
          <h2 className="header2-size result-header mb-4">
            <span className="results-number">5</span> Result(s)
          </h2>
          <Row className="Results" data-aos="flip-right" >
            <Col xs={12} md={6} lg={4} data-aos="flip-left">
              <Link to="1" className="text-decoration-none">
                <MeditationCard />
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4} data-aos="flip-left">
              <Link to="1" className="text-decoration-none">
                <MeditationCard />
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4} data-aos="flip-left">
              <Link to="1" className="text-decoration-none">
                <MeditationCard />
              </Link>
            </Col>
            <Col xs={12} md={6} lg={4} data-aos="flip-left">
              <Link to="1" className="text-decoration-none">
                <MeditationCard />
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Medatation;
