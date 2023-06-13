import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LuLanguages } from "react-icons/lu";
import Lang from "./Lang";
import Countries from "./Country";

const Langueges = () => {
  return (
    <div className="p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={1} className="pen-icon">
          <LuLanguages />
        </Col>
        <Col xs={9} className=" pt-1">
          <h6>Languages</h6>
        </Col>
      </Row>
      <Form className="mt-5">
        <Row className="mb-3">
          <Col md={6} className="mt-5">
            <Form.Group controlId="firstName ">
              <Form.Label>Select Country</Form.Label>
              <Countries />
            </Form.Group>
          </Col>
          <Col md={6} className="mt-5">
            <Form.Group controlId="lastName">
              <Form.Label>Select Language</Form.Label>
              <Lang />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col xs={6}>
            <Button variant="primary " className="border px-lg-5 px-xs-0">
              Save
            </Button>
          </Col>
          <Col xs={6}>
            <Button variant="light" className="border px-lg-5 px-xs-0">
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Langueges;
