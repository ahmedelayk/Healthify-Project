import { Col, Container, Form, Row } from "react-bootstrap";
import MeditationCard from "./MeditationDetails/MeditaionCard";

import { Link } from "react-router-dom";
// Style
import "./meditation.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getInstructors,
  getTypes,
} from "../../redux/medititionSlice";
import { useState } from "react";
import { v4 as uuid } from "uuid";
// Context
import { useAuth } from "../../Context/AuthContext";

const Meditation = () => {
  const { t } = useAuth()
  const [filterdInst, setFilterdInst] = useState([]);
  const { instructors, types } = useSelector((state) => state.meditition);
  // let filterdInst;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructors());
    dispatch(getTypes());
  }, [dispatch]);
  useEffect(() => {
    setFilterdInst(instructors?.slice(1, instructors.length));
  }, [instructors])
  const onInstructorChanged = (event) => {
    if (event.target.value === "All") {
      setFilterdInst(instructors.slice(1, instructors.length));
    } else {
      setFilterdInst(
        instructors.filter((ins) => ins.name === event.target.value)
      );
    }
  };
  const onTypeChanged = (event) => {
    setFilterdInst(types.filter((ins) => ins.name === event.target.value));
  };
  return (
    <>
      <div className="filter-meditation p-5">
        <h1 className="header1-size mb-3">{t("Filter")}</h1>
        <Form
          className="d-flex flex-row flex-wrap flex-md-nowrap"
          data-aos="fade-in"
        >
          <Form.Select
            aria-label="Default select example"
            className="meditaion-select mx-md-2 mb-2 mb-md-0"
            onChange={ onTypeChanged }
          >
            <option hidden>{t("Meditation Type")}</option>
            { types?.map((type) => (
              <option value={ type.name } key={ uuid() }>
                { type.name }
              </option>
            )) }
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            className="meditaion-select mx-md-2 mb-2 mb-md-0"
            onChange={ onInstructorChanged }
          >
            <option hidden >
              {t("Instructor")}
            </option>
            <option value="All">{t("All")}</option>
            { instructors?.map((instructor) => (
              <option value={ instructor.name } key={ uuid() }>
                { instructor.name }
              </option>
            )) }
          </Form.Select>
        </Form>
      </div>
      <Container>
        <div className="results-section section-padding">
          <h2 className="header2-size result-header mb-4">
            <span className="results-number">
              (
              { filterdInst?.length &&
                filterdInst.map((item) => item.articles?.length) }
              )
            </span>
            {t("Results")}
          </h2>
          <Row className="Results ltr-direction">
            { filterdInst?.length &&
              filterdInst.map((item) =>
                item.articles.map((i) => (
                  <Col xs={ 12 } md={ 6 } lg={ 4 } data-aos="flip-right" key={ uuid() }>
                    <Link
                      to={ `/medatation/details/${i.id}` }
                      className="text-decoration-none"
                    >
                      <MeditationCard
                        id={ i.id }
                        title={ i.title }
                        description={ i.description }
                        poster={ i.poster }
                        author={ i.author }
                        
                      />
                    </Link>
                  </Col>
                ))
              ) }
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Meditation;
