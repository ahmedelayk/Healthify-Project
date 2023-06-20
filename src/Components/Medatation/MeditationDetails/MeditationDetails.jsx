import React, { useState } from "react";

// Style
import "./meditationDetails.css";

// uuid
import { v4 as uuid } from "uuid";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import MeditationCard from "./MeditaionCard";
import "swiper/css";
import "swiper/css/pagination";

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

// Images
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../../redux/medititionSlice";

const MeditationDetails = () => {
  const [btnsAction, setBtnsAction] = useState({
    save: false,
    rate: false,
    share: false,
    purches: false,
  });
  // const [recommended, setRecommended] = useState([]);
  const [artDetails, setArtDetails] = useState();
  const { id } = useParams();
  const { types } = useSelector((state) => state.meditition);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3002/articles/${id}`)
        .then(function (response) {
          setArtDetails(response.data);
        });
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

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

  const [rating, setRating] = useState(5);
  let randomNum = Math.floor(Math.random() * 3);
  return (
    <Container id="meditation-details" className="section-padding">
      <h1 className="header1-size">{artDetails?.title}</h1>
      <div className="d-flex pb-3">
        <Rating className="rating-size" value={rating} readOnly />
        <span className="color">(3 Reviews)</span>
      </div>
      <Row className="mb-4">
        <img
          src={artDetails?.poster}
          className=" w-100"
          alt="meditation"
          loading="lazy"
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
        <div key={uuid()} className={`section`}>
          <p className="paragraph-size color">{artDetails?.description}</p>
          <h2 className="header2-size mt-5 ">
            Instructor: ( {artDetails?.author} )
          </h2>
        </div>
      </div>

      <div className="pt-4">
        <h1 className="header1-size text-center">Another Meditaions</h1>
        <div className="another-meditations">
          <Row className="Results">
            {types?.length &&
              types.map((item) =>
                item.articles?.slice(randomNum, randomNum + 1).map((i) => (
                  <Col xs={12} md={6} lg={4} data-aos="flip-right">
                    <Link
                      to={`/medatation/details/${i.id}`}
                      className="text-decoration-none"
                    >
                      <MeditationCard
                        title={i.title}
                        description={i.description}
                        poster={i.poster}
                        author={i.author}
                      />
                    </Link>
                  </Col>
                ))
              )}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default MeditationDetails;
