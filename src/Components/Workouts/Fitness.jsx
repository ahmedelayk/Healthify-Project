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

const Fitness = ({ fitnesses }) => {
  return (
    <div className="section-padding" >
      <div className="fitness overflow-hidden">
        <h1 className="header1-size ps-4 mb-3">Fitness</h1>
        <Row className="py-5 ps-5 pe-5 pe-md-0 bg-white">
          <Col className="mb-3" xs={12} md={4} lg={4}>
            <h1>Fitness Categories</h1>
            <NavLink to="fitness">
            <Button variant="primary">View all</Button>
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
              {fitnesses.map((fitness, index) => (
                <SwiperSlide key={uuid()}>
                  <Card>
                    <Card.Img variant="top" src={fitness.img} />
                    <Card.Body>
                      <Card.Title className="header1-size">
                        {fitness.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Fitness;
