// Components
import { Col, Row, Spinner } from "react-bootstrap";
// Styling
import "./nutration.css";
// Context
import { useNutrition } from "../../Context/NutritionContext";
import { useAuth } from "../../Context/AuthContext";
// Images
import bodies from "../assets/images/bmi-bodies.webp";
import m_bodies from "../assets/images/m-bmi-bodies.webp";

export const BMIResult = () => {
  const {
    result,
    loadingResult,
    bodyFemSrc,
    bodyMaleSrc,
    bmiMessage,
    gender,
    weight,
    height,
  } = useNutrition();
  const { currentUser, currentUserData, t, i18n } = useAuth();

  return (
    <Col
      xs={12}
      lg={6}
      className={
        `card-n result-sec ${i18n.language === "ar"? "padding-r20":""}
        ${gender === "Female" ? "f-color" : ""}`
      }
    >
      {loadingResult ? (
        <>
          <div style={{ textAlign: "center" }} className="mt-5">
            <Spinner
              className="spinner-grow mt-5 "
              style={{ width: "5rem", height: "5rem" }}
              role="status"
              variant="primary"
            />
          </div>
        </>
      ) : (
        <>
          {result ? (
            <>
              <Row>
                  <h5 className="mb-3">
                    {t("Welcome")}{" "}
                    <span className=" fs-5 color-red text-primary-color">
                      {currentUser
                        ? currentUserData.firstName
                        : "Register Or Login "}
                    </span>
                    {bmiMessage}
                  </h5>
                <Col xs={5} className="ms-5">
                  <h6 className="my-5">
                    {t("BMI Result")} :{" "}
                    <span className="boder fs-7 mb-2">{result}</span>
                  </h6>

                  <h6 className="mb-5">
                    {t("Weight")} : <span className=" fs-7">{weight}</span>
                    {"   "}
                    {t("kg")}
                  </h6>
                  <h6 className="mb-5">
                    {t("Height")} : <span className=" fs-7">{height}</span>
                    {"   "}
                    {t("cm")}
                  </h6>
                  <h6 className="mb-5">
                    {t("Gender")} : <span className=" fs-7">{gender}</span>
                  </h6>
                </Col>
                <Col xs={4}>
                  <img
                    src={gender === "Male" ? bodyMaleSrc : bodyFemSrc}
                    width="100"
                    height="100%"
                    loading="lazy"
                    alt="bmi"
                  />
                </Col>
              </Row>
            </>
          ) : (
            <>
              <h5 className="text-center">{t("Calculate bmi now")}</h5>
              <img src={gender === "Male" ? m_bodies : bodies} width="100%" alt="bmi" />
            </>
          )}
        </>
      )}
    </Col>
  );
};
