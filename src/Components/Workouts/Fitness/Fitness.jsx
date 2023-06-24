import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// styling
import "./fit.css";
// uuid
import { v4 as uuid } from "uuid";

// Videos and images
import gym from "../../assets/videos/gym.mp4";

// Components
import { Col, Container, Row } from "react-bootstrap";

import WorkoutCard from "../CommonComponents/WorkoutCard";
import VideoSection from "../CommonComponents/VideoSection";
import Subscription from "../CommonComponents/Subscription";

// Data
import { getAllWorkouts } from "../../../redux/workoutsSlice";
// Spinner
import Spinner from "../../Spinner/Spinner";
import { useAuth } from "../../../Context/AuthContext";

const Fitness = () => {
  const {t} = useAuth();
  const { fitnesses, isLoading, error } = useSelector(
    (state) => state.workouts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);
  return (
    <div>
      <VideoSection source={gym} header="Fitness Workout" description="Fall in love with fitness" />
      <Container className="section-padding ltr-direction" data-aos="zoom-in-left">
        <h1 className="header1-size text-center">{t("Fitness of the day")}</h1>
        <Row className="my-5" data-aos="flip-up">
          {isLoading ? (
            <div>
              <Spinner/>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : fitnesses ? (
            fitnesses.map((fitness) => (
              <Col
                className="mb-3"
                key={uuid()}
                xs={12}
                md={6}
                lg={4}
                data-aos="flip-down"
              >
                <Link to={fitness.id} className="text-decoration-none">
                  <WorkoutCard
                    img={fitness.gifUrl}
                    name={fitness.name}
                    equipment={fitness.equipment}
                    bodyPart={fitness.bodyPart}
                    target={fitness.target}
                    data-aos="flip-up"
                  />
                </Link>
              </Col>
            ))
          ) : (
            ""
          )}
        </Row>
        <Subscription />
      </Container>
    </div>
  );
};

export default Fitness;
