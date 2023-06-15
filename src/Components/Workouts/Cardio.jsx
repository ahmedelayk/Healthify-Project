import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// uuid
import { v4 as uuid } from "uuid";

// Components
import { Button, Card, Col, Row } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
import { getAllWorkouts } from "../../redux/workoutsSlice";

const Cardio = () => {
  const { cardios, isLoading, error } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);

  return (
    <div className="section-padding" data-aos="zoom-in-left">
      <div className="cardio overflow-hidden" data-aos="flip-left">
        <h1 className="header1-size ps-4 mb-3">Cardio</h1>
        <Row className="py-5 pe-5 ps-5 ps-md-0 bg-white">
          <Col xs={12} md={8} lg={8}>
            <Swiper
              modules={[Pagination, Autoplay]}
              // autoplay={{
              //   reverseDirection: true,
              // }}
              speed={2000}
              // pagination={{ clickable: true }}
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
            >
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : cardios ? (
                cardios.slice(0, 10).map((cardio) => (
                  <SwiperSlide key={uuid()}>
                    <Link
                      to={`cardio/${cardio.id}`}
                      className="text-decoration-none"
                    >
                      <Card className="workouts-card" data-aos="zoom-in-left">
                        <Card.Img variant="top" src={cardio.gifUrl} />
                        <Card.Body>
                          <Card.Title className="header1-size">
                            {cardio.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))
              ) : (
                ""
              )}
            </Swiper>
          </Col>
          <Col className="mb-3" xs={12} md={4} lg={4} data-aos="zoom-in-left">
            <h1>Cardio Categories</h1>
            <NavLink to="cardio">
              <Button variant="primary">View all</Button>
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cardio;
