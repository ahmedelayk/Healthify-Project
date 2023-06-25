import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./workout.css"
// uuid
import { v4 as uuid } from "uuid";

// Components
import { Button, Card, Col, Row } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
import { getAllWorkouts } from "../../redux/workoutsSlice";
import { useAuth } from "../../Context/AuthContext";
import Spinner from "../Spinner/Spinner";

const Fitness = () => {
  const {t, i18n} = useAuth();
  const { fitnesses, isLoading, error } = useSelector(
    (state) => state.workouts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, [dispatch]);
  return (
    <div className={`section-padding ${i18n.language === "ar"? "padding-r20": ""}`} data-aos="zoom-in">
      <div className="fitness overflow-hidden">
        <h1 className="header1-size ps-4 mb-3">{t("Fitness")}</h1>
        <Row className="py-5 ps-5 pe-5 pe-md-0 bg-white">
          <Col className="mb-3" xs={12} md={4} lg={4}>
            <h1>{t("Fitness Categories")}</h1>
            <NavLink to="fitness">
              <Button variant="primary">{t("View all")}</Button>
            </NavLink>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Swiper
              // className="mt-5"
              modules={[Pagination, Autoplay]}
              autoplay
              spaceBetween={15}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767.98: {
                  slidesPerView: 2,
                },
                991.98: {
                  slidesPerView: 3,
                },
              }}
              // pagination={{ clickable: true }}
            >
              {isLoading ? (
                <div className="page-spinner">
                  <Spinner />
                </div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                // <div>fff</div>
                fitnesses?
                fitnesses.slice(0, 10).map((fitness) => (
                  <SwiperSlide key={uuid()}>
                    <Link to={`fitness/${fitness.id}`} className="text-decoration-none">
                    <Card className="workouts-card" data-aos="zoom-in">
                      <Card.Img variant="top" src={fitness.gifUrl} loading="lazy"/>
                      <Card.Body>
                        <Card.Title className="header1-size">
                          {fitness.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                    </Link>
                  </SwiperSlide>
                ))
              :"")}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Fitness;
