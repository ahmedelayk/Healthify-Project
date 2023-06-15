// uuid
import { v4 as uuid } from "uuid";

// Videos and images
import cardio from "../../assets/videos/cardio.mp4";
import cardio1 from "../../assets/images/cardio1.jpg";
import cardio2 from "../../assets/images/cardio2.jpg";

// Components
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../CommonComponents/WorkoutCard";
import VideoSection from "../CommonComponents/VideoSection";
import Subscription from "../CommonComponents/Subscription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCardio } from "../../../redux/workoutsSlice";

const Cardio = () => {
  const { cardios, isLoading, error } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCardio());
  }, []);
  return (
    <div>
      <VideoSection source={cardio} header="Cardio Workout" description="Fall in love with cardio" />
      <Container className="section-padding" data-aos="zoom-in-left">
        <h1 className="header1-size text-center">Cardio of the day</h1>
        <Row className="my-5" data-aos="zoom-in-left">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : ( cardios?
            cardios.map((cardio) => (
              <Col
                className="mb-3"
                key={uuid()}
                xs={12}
                md={6}
                lg={4}
                data-aos="flip-down"
              >
                <WorkoutCard
                  img={cardio.gifUrl}
                  name={cardio.name}
                  equipment={cardio.equipment}
                  bodyPart={cardio.bodyPart}
                  target={cardio.target}
                  data-aos="flip-up"
                />
              </Col>
            ))
          :"")}
        </Row>
        <Subscription />
      </Container>
    </div>
  );
};

export default Cardio;
