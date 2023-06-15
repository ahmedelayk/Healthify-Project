// uuid
import {v4 as uuid} from "uuid";

// Videos and images
import gym from "../../assets/videos/gym.mp4";
import fitness1 from "../../assets/images/fitnessGym1.jpg";
import fitness2 from "../../assets/images/fitnessGym2.jpg";

// Components
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../CommonComponents/WorkoutCard";
import VideoSection from "../CommonComponents/VideoSection";
import Subscription from "../CommonComponents/Subscription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllWorkouts } from "../../../redux/workoutsSlice";

const Fitness = () => {
  const { fitnesses, isLoading, error } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);
  return (
    <div>
      <VideoSection source={gym} header="Fitness Workout" description="Fall in love with fitness" />
      <Container className="section-padding" data-aos="zoom-in-left">
        <h1 className="header1-size text-center">Fitness of the day</h1>
        <Row className="my-5" data-aos="flip-up">
        {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : ( fitnesses?
            fitnesses.map((fitness) => (
              <Col
                className="mb-3"
                key={uuid()}
                xs={12}
                md={6}
                lg={4}
                data-aos="flip-down"
              >
                <WorkoutCard
                  img={fitness.gifUrl}
                  name={fitness.name}
                  equipment={fitness.equipment}
                  bodyPart={fitness.bodyPart}
                  target={fitness.target}
                  data-aos="flip-up"
                />
              </Col>
            ))
          :"")}
          
        </Row >
            <Subscription />
      </Container>
    </div>
  );
};

export default Fitness;
