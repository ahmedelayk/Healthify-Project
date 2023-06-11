import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import "./style.css";
import ProfileImage from "./ProfileImage";

const EditProfile = () => {
  return (
    <div className="p-lg-3 p-xs-0">
      <Row>
        <Col xs={1} className="pen-icon">
          <BsFillPencilFill />
        </Col>
        <Col xs={9} className=" pt-1">
          <h6>Edit Profile</h6>
        </Col>
        <Col lg={2} xs={1}>
          <ProfileImage />
        </Col>
      </Row>
      <Form className="mt-2">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="inputEmail4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="number" placeholder="Contact Number" />
        </Form.Group>

        <Form.Group controlId="changePassword">
          <Form.Label>Change Your Password</Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>

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

export default EditProfile;