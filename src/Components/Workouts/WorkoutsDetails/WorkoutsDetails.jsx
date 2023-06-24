import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

// Style
import "./workoutsDetails.css";

// uuid
import { v4 as uuid } from "uuid";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import WorkoutsDetailsCard from "./WorkoutsDetailsCard";

// Icons
import "@smastrom/react-rating/style.css";
import {
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineStar,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

// Data
import { getAllWorkouts, getWorkoutByID } from "../../../redux/workoutsSlice";

const WorkoutsDetails = () => {
  const { workout, cardios, fitnesses, isLoading, error } = useSelector(
    (state) => state.workouts
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  const [btnsAction, setBtnsAction] = useState({
    save: false,
    rate: false,
    share: false,
    purches: false,
  });

  const handleBtnsAction = (name) => {
    setBtnsAction({ ...btnsAction, [name]: !btnsAction[name] });
  };
  const btns = [
    {
      name: "Save",
      icon: <AiOutlineHeart />,
      icon2: <AiFillHeart color="red" />,
    },
    {
      name: "Rate",
      icon: <AiOutlineStar />,
      icon2: <AiFillStar color="orange" />,
    },
    {
      name: "Share",
      icon: <AiOutlineShareAlt />,
      icon2: <AiOutlineShareAlt />,
    },
    {
      name: "Purches",
      icon: <MdAttachMoney />,
      icon2: <MdAttachMoney />,
    },
  ];

  const [rating, setRating] = useState(3);

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);

  useEffect(() => {
    dispatch(getWorkoutByID(id));
  }, [id, dispatch]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : workout ? (
        <Container id="workouts-details" className="section-padding">
          <h1 className="header1-size">{workout.name}</h1>
          <div className="d-flex pb-3">
            <Rating className="rating-size" value={rating} readOnly />
            <span className="color">(3 Reviews)</span>
          </div>
          <Row className="mb-4 d-lg-flex justify-content-lg-center">
            <img
              src={workout.gifUrl}
              className="workouts-img"
              alt="workouts img"
            />
          </Row>
          <Row className="mb-4">
            {btns.map((btn) => (
              <Col className="details-btns" key={uuid()} xs={12} md={6} lg={3}>
                <div
                  onClick={() => handleBtnsAction(btn.name.toLowerCase())}
                  className="btns-action d-flex justify-content-between align-items-center p-3 border border-secondary-subtle rounded-5 mb-2"
                >
                  <div>{btn.name}</div>
                  {!btnsAction[btn.name.toLowerCase()] ? btn.icon : btn.icon2}
                </div>
              </Col>
            ))}
          </Row>
          <div className="content mb-5">
            <span
              className="workouts-name"
              style={{ textTransform: "capitalize" }}
            >
              {workout.name}
            </span>{" "}
            is one of the best exercises to target your {workout.target}. It
            will help you improve your mood and gain energy.
          </div>

          <div className="pt-4">
            <h1 className="header1-size text-center">Another Workouts</h1>
            <div className="another-workouts">
              <Swiper
                className="mt-5"
                modules={[Pagination]}
                spaceBetween={30}
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
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {workout.bodyPart === "cardio" && cardios
                  ? cardios
                      .filter(
                        (cardio) =>
                          cardio.equipment === "body weight" && cardio.id !== id
                      )
                      .slice(0, 3)
                      .map((cardio) => (
                        <SwiperSlide>
                          <Link
                            to={`/workouts/cardio/${cardio.id}`}
                            className="text-decoration-none"
                          >
                            <WorkoutsDetailsCard
                              name={cardio.name}
                              img={cardio.gifUrl}
                              another={cardio.equipment}
                            />
                          </Link>
                        </SwiperSlide>
                      ))
                  : fitnesses
                  ? fitnesses
                      .filter(
                        (fitness) =>
                          fitness.bodyPart === workout.bodyPart &&
                          fitness.id !== id
                      )
                      .slice(0, 5)
                      .map((fitness) => (
                        <SwiperSlide>
                          <Link
                            to={`/workouts/fitness/${fitness.id}`}
                            className="text-decoration-none"
                          >
                            <WorkoutsDetailsCard
                              name={fitness.name}
                              img={fitness.gifUrl}
                              another={fitness.bodyPart}
                            />
                          </Link>
                        </SwiperSlide>
                      ))
                  : ""}
              </Swiper>
            </div>
          </div>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default WorkoutsDetails;
