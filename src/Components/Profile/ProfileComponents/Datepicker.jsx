import React from "react";
import "../profile.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
function Datepicker() {
  const [selectedBreakfast, setSelectedBreakfast] = useState();
  const [selectedLunch, setSelectedLunch] = useState();
  const [selectedDinner, setSelectedDinner] = useState();
  // const meals = useSelector((state) => state.meals);
  // const dispatch=useDispatch()
  // useEffect(() => {
  //   dispatch(getRecipes())
  // },)
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
  const { t, i18n } = useAuth();

  return (
    <div className="col-12 row " data-aos="flip-left">
      <Row>
        <Col xs={4}>
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
        </Col>{" "}
        <Col xs={4}>
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
        </Col>
        <Col xs={4}>
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
        </Col>
      </Row>
    </div>
  );
}

export default Datepicker;
