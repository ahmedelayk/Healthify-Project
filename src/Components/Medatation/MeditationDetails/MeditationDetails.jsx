import React, { useState } from "react";

// Style
import "./meditationDetails.css";

// uuid
import { v4 as uuid } from "uuid";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import MeditationCard from "./MeditaionCard";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Icons
import "@smastrom/react-rating/style.css";
import {
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineStar,
  AiFillHeart,
  AiFillStar
} from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

// Images
import meditation from "../../assets/images/meditation.webp";

const MeditationDetails = () => {
  const [btnsAction, setBtnsAction] = useState({save: false, rate:false, share: false, purches: false})

  const handleBtnsAction = (name) => {
    setBtnsAction({...btnsAction, [name]: !btnsAction[name]})
  }
  const btns = [
    {
      name: "Save",
      icon: <AiOutlineHeart />,
      icon2: <AiFillHeart color="red" />
    },
    {
      name: "Rate",
      icon: <AiOutlineStar />,
      icon2: <AiFillStar color="orange" />
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

  const detailsSections = [
    {
      title: "Restful Intuition",
      content:
        "This practice is a form of intuitive strength training and supports clearing overwhelmed sensory pathways, while you rest. It can be used any time, day or night. It will invite you to explore your intuitive gut, heart and sense of taste, smell, vision, hearing, feeling, and inter-connectivity. *Please note the introduction ends at 4:02, and there is a 45-second pause between each intuitive portal.*",
    },
    {
      title: "Shapeshifting Sleep",
      content:
        "Enter this gate to liberate and re-create. Use this practice anytime you'd like to weave a sweet daytime reprieve, or to deepen your sleep at night. This experience invites you to remember your shape-shifting powers while creating a sacred pause so you can be receptive to rest and sleep with a sense of magic and wonder. It encourages you to plant seeds of intention, bring awareness to distinct and subtle layers of the breath and the body, and includes an invocation.",
    },
    {
      title: "The Heart of Sleep",
      content:
        "Enter the quiet deep through the soul of sleep. Nourish the wisdom of endings and beginnings as you lay down any burdens. Invite self-soothing touch, subtle breath and body awareness, and communing with the creative power of rest and sleep. Finally, be carried by the heart into the dreamworld.",
    },
  ];

  const [rating, setRating] = useState(3);
  return (
    <Container id="meditation-details" className="section-padding">
      <h1 className="header1-size">Meditative Rest and Sleep Magic</h1>
      <div className="d-flex pb-3">
        <Rating className="rating-size" value={rating} readOnly />
        <span className="color">(3 Reviews)</span>
      </div>
      <Row className="mb-4">
        <img src={meditation} className=" w-100" alt="meditation" loading="lazy"/>
      </Row>
      <Row className="mb-4">
        {btns.map((btn) => (
          <Col className="details-btns" key={uuid()} xs={12} md={6} lg={3}>
            <div onClick={()=>handleBtnsAction(btn.name.toLowerCase())} className="btns-action d-flex justify-content-between align-items-center p-3 border border-secondary-subtle rounded-5 mb-2">
              <div>{btn.name}</div>
              {!btnsAction[btn.name.toLowerCase()]? btn.icon : btn.icon2}
            </div>
          </Col>
        ))}
      </Row>
      <div className="content mb-5">
        {detailsSections.map((section, idx) => (
          <div key={uuid()} className={`section-${idx + 1}`}>
            <h2 className="header2-size">{section.title}</h2>
            <p className="paragraph-size color">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <h1 className="header1-size text-center">Another Meditaions</h1>
        <div className="another-meditations">
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
            <SwiperSlide>
              <MeditationCard />
            </SwiperSlide>
            <SwiperSlide>
              <MeditationCard />
            </SwiperSlide>
            <SwiperSlide>
              <MeditationCard />
            </SwiperSlide>
            <SwiperSlide>
              <MeditationCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default MeditationDetails;
