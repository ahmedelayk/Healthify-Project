// Components
import { Col, Row } from "react-bootstrap";
import Popup from "./Popup";
// Styling
import "./nutration.css";
import "./popup.css";
// Hooks
import { useState, useEffect } from "react";
// Context
import { useAuth } from "../../Context/AuthContext";
import { useNutrition } from "../../Context/NutritionContext";

export const CaloriesTrack = () => {
  const { t, i18n } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBreakfast, setSelectedBreakfast] = useState();
  const [selectedLunch, setSelectedLunch] = useState();
  const [selectedDinner, setSelectedDinner] = useState();
  const [currentDate, setCurrentDate] = useState("");
  const [currentWeekday, setCurrentWeekday] = useState("");
  const { handleBrClick, handleDnClick, handleLnClick } =
    useNutrition();
  const togglePopup = (e) => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
    setCurrentWeekday(date.toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  const handleSaveRecipe = (rec) => {
    if (rec.type === "breakfast") {
      localStorage.setItem("selectedBreakfast", JSON.stringify(rec));
      setSelectedBreakfast(rec);
    } else if (rec.type === "lunch") {
      localStorage.setItem("selectedLunch", JSON.stringify(rec));
      setSelectedLunch(rec);
    } else if (rec.type === "dinner") {
      localStorage.setItem("selectedDinner", JSON.stringify(rec));
      setSelectedDinner(rec);
    }

    togglePopup();
  };

  const getSavedRecipe = () => {
    const savedBreakfast = localStorage.getItem("selectedBreakfast");
    if (savedBreakfast) {
      setSelectedBreakfast(JSON.parse(savedBreakfast));
    }
    const savedLunch = localStorage.getItem("selectedLunch");
    if (savedLunch) {
      setSelectedLunch(JSON.parse(savedLunch));
    }
    const savedDinner = localStorage.getItem("selectedDinner");
    if (savedDinner) {
      setSelectedDinner(JSON.parse(savedDinner));
    }
  };

  useEffect(() => {
    getSavedRecipe();
  }, []);

  return (
    <Col
      xs={12}
      lg={6}
      className={`card-n mt-0 ${i18n.language === "ar" ? "padding-r20" : ""}`}
    >
      <Row className="justify-between mb-2">
        <Col>
          <h4 className="font-family1 text-primary-color">{currentWeekday}</h4>
        </Col>
        <Col>
          <p className="text-center text-primary-color">{currentDate}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={3}>
          <h6>{t("Breakfast")}</h6>
          <Row className="justify-between align-items-center">
            {selectedBreakfast && (
              <img
                src={selectedBreakfast.poster}
                width={90}
                height={50}
                alt="Selected Recipe"
              />
            )}
          </Row>
          <Row className="justify-between align-items-center">
            {selectedBreakfast && (
              <p className="grey">{selectedBreakfast.food1}</p>
            )}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedBreakfast && (
              <p className="grey m-0 fs-9">{selectedBreakfast.food2}</p>
            )}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedBreakfast && (
              <p className="grey m-0 fs-9">{selectedBreakfast.food3}</p>
            )}
          </Row>
          <p
            className="bg-add rounded-pill text-white text-center my-2 cursor-pointer"
            onClick={() => {
              togglePopup();
              handleBrClick();
            }}
            id=""
          >
            +
          </p>
          {showPopup ? (
            <Popup
              handleSave={handleSaveRecipe}
              closePopup={togglePopup}
              recipe_type="brakfast"
              // breakfast={meals?.meals?.filter((m) => m.type === "breakfast")}
            />
          ) : null}
        </Col>{" "}
        <Col xs={12} md={6} lg={3}>
          <h6>{t("Lunch")}</h6>
          <Row className="justify-between align-items-center">
            {selectedLunch && (
              <img
                src={selectedLunch.poster}
                width={90}
                height={50}
                alt="Selected Recipe"
              />
            )}
          </Row>
          <Row className="justify-between align-items-center">
            {selectedLunch && <p className="grey">{selectedLunch.food1}</p>}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedLunch && (
              <p className="grey m-0 fs-9">{selectedLunch.food2}</p>
            )}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedLunch && (
              <p className="grey m-0 fs-9">{selectedLunch.food3}</p>
            )}
          </Row>
          <p
            className="bg-add rounded-pill text-white text-center my-2 cursor-pointer"
            onClick={() => {
              togglePopup();
              handleLnClick();
            }}
          >
            +
          </p>
          {showPopup ? (
            <Popup
              handleSave={handleSaveRecipe}
              closePopup={togglePopup}
              // breakfast={meals?.meals?.filter((m) => m.type === "breakfast")}
            />
          ) : null}
        </Col>
        <Col xs={12} md={6} lg={3}>
          <h6>{t("Dinner")}</h6>
          <Row className="justify-between align-items-center">
            {selectedDinner && (
              <img
                src={selectedDinner.poster}
                width={90}
                height={50}
                alt="Selected Recipe"
              />
            )}
          </Row>
          <Row className="justify-between align-items-center">
            {selectedDinner && <p className="grey">{selectedDinner.food1}</p>}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedDinner && (
              <p className="grey m-0 fs-9">{selectedDinner.food2}</p>
            )}
          </Row>
          <Row className="justify-content-between align-items-center">
            {selectedDinner && (
              <p className="grey m-0 fs-9">{selectedDinner.food3}</p>
            )}
          </Row>
          <p
            className="bg-add rounded-pill text-white text-center my-2 cursor-pointer"
            onClick={() => {
              togglePopup();
              handleDnClick();
            }}
          >
            +
          </p>
          {showPopup ? (
            <Popup
              handleSave={handleSaveRecipe}
              closePopup={togglePopup}
              // breakfast={meals?.meals?.filter((m) => m.type === "breakfast")}
            />
          ) : null}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6} lg={3}>
          <p className="">
            {t("Calories")}
            <span className="fs-8 text-primary-color ">&nbsp; {selectedBreakfast?.kal } kal</span>
          </p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="">
            {t("Calories")}
            <span className="fs-8 text-primary-color ">&nbsp; {selectedLunch?.kal } kal</span>
          </p>
        </Col>
        <Col xs={6} lg={3}>
          <p className="">
            {t("Calories")}
            <span className="fs-8 text-primary-color ">&nbsp; {selectedDinner?.kal } kal</span>
          </p>
        </Col>
  
      </Row>
    </Col>
  );
};
