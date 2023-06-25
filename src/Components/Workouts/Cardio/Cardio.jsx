import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// styling
import "../Fitness/fit.css"
// uuid
import { v4 as uuid } from "uuid";

// Videos and images
import cardio from "../../assets/videos/cardio.mp4";

// Components
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../CommonComponents/WorkoutCard";
import VideoSection from "../CommonComponents/VideoSection";
import Subscription from "../CommonComponents/Subscription";
import MyPagination from "../CommonComponents/Pagination";

// Data
import { getAllWorkouts } from "../../../redux/workoutsSlice";
import { useAuth } from "../../../Context/AuthContext";
import Spinner from "../../Spinner/Spinner";

const Cardio = () => {
  const {t} = useAuth();
  const todoPerPage = 6;
  const [page, setPage] = useState(1);
  const [indexOfFirstTodo, setIndexOfFirstTodo] = useState(0);
  const [indexOflastTodo, setIndexOfLastTodo] = useState(todoPerPage);
  const { cardios, isLoading, error } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorkouts());
  }, [page]);
  const handleChangePage = useCallback((page) => {
    setPage(page);
    setIndexOfFirstTodo(indexOflastTodo - todoPerPage);
    setIndexOfLastTodo(page + todoPerPage);
  }, []);
  return (
    <div>
      <VideoSection source={cardio} header="Cardio Workout" description="Fall in love with cardio" />
      <Container className="section-padding ltr-direction" data-aos="zoom-in-left">
        <h1 className="header1-size text-center">{t("Cardio of the day")}</h1>
        <Row className="my-5" data-aos="zoom-in-left">
          {isLoading ? (
            <div className="page-height">
              <Spinner />
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : cardios ? (
            cardios.slice(indexOfFirstTodo, indexOflastTodo).map((cardio) => (
              <Col
                className="mb-3"
                key={uuid()}
                xs={12}
                md={6}
                lg={4}
                data-aos="flip-down"
              >
                <Link to={cardio.id} className="text-decoration-none">
                  <WorkoutCard
                    img={cardio.gifUrl}
                    name={cardio.name}
                    equipment={cardio.equipment}
                    bodyPart={cardio.bodyPart}
                    target={cardio.target}
                    data-aos="flip-up"
                  />
                </Link>
              </Col>
            ))
          ) : (
            ""
          )}
        </Row>
        {cardios && (
          <MyPagination
            total={Math.ceil(cardios.length / todoPerPage)}
            current={page}
            onChangePage={handleChangePage}
          />
        )}
        <Subscription />
      </Container>
    </div>
  );
};

export default Cardio;
