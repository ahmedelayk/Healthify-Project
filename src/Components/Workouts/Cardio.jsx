// Components
import { Button, Card, Col, Row } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// uuid
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";

const Cardio = ({ cardios }) => {
  return (
    <div className="section-padding" data-aos="zoom-in-left">
      <div className="cardio overflow-hidden" data-aos="flip-left">
        <h1 className="header1-size ps-4 mb-3">Cardio</h1>
        <Row className="py-5 pe-5 ps-5 ps-md-0 bg-white">
          <Col xs={12} md={8} lg={8}>
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay
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
              {cardios.map((cardio, index) => (
                <SwiperSlide key={uuid()}>
                  <Card data-aos="zoom-in-left">
                    <Card.Img variant="top" src={cardio.img} />
                    <Card.Body>
                      <Card.Title className="header1-size">
                        {cardio.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
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
