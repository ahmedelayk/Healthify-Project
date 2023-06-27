// Hooks
import { useState, useEffect } from "react";
// Components
import { Col, Row } from "react-bootstrap";
// Styling
import "./nutration.css";
// Image
import waterImg from "../assets/images/water.webp";
// Context
import { useAuth } from "../../Context/AuthContext";

export const WaterTrack = () => {
  const [water, setWater] = useState(0);
  const handleWaterPlus = () => {
    if (water < 4) setWater(water + 0.5);
    localStorage.setItem("waterRange", JSON.stringify(water));
  };
  const handleWaterMinus = () => {
    if (water > 0) setWater(water - 0.5);
    localStorage.setItem("waterRange", JSON.stringify(water));
  };
  useEffect(() => {
    const savedWaterRange = localStorage.getItem("waterRange");
    setWater(JSON.parse(savedWaterRange));
  }, []);
  const { t, i18n } = useAuth();
  return (
    <Col
      xs={12}
      md={6}
      lg={3}
      className={`card-n mt-0 ${i18n.language === "ar" ? "padding-r20" : ""}`}
    >
      <h4 className="font-family1 text-paragraph-color mb-2">{t("Water")}</h4>
      <Row className="justify-content-center align-items-center mt-4">
        <img className="w-25 " src={waterImg} alt="water" loading="lazy" />
      </Row>
      <div className="my-3 progress" style={{ height: "6px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${(water / 4) * 100}%` }}
          aria-valuenow="2"
          aria-valuemin="0"
          aria-valuemax="4"
        ></div>
      </div>
      <p className="grey text-center">{water}L / 4L</p>
      <Row className="d-flex justify-content-evenly ">
        <p
          className="bg-add rounded-pill text-white text-center my-2 cursor-pointer"
          onClick={handleWaterPlus}
        >
          +
        </p>
        <p
          className="bg-add rounded-pill text-white text-center my-2 cursor-pointer"
          onClick={handleWaterMinus}
        >
          -
        </p>
      </Row>
    </Col>
  );
};
