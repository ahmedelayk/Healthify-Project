import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LuLanguages } from "react-icons/lu";
import Lang from "./Lang";
import Countries from "./Country";
// Context
import { useAuth } from "../../../Context/AuthContext";
// React form hook
import { useForm } from "react-hook-form";

const Langueges = () => {
  const { t, i18n } = useAuth();
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const {language} = data;
    console.log(language);
    if(language === "Arabic"){
      localStorage.setItem("lang", "ar");
      await i18n.changeLanguage("ar");
      document.body.style.cssText = "font-family: var(--font-family-arabic) !important;direction: rtl;";
    }else {
      localStorage.setItem("lang", "en");
      await i18n.changeLanguage("en");
      document.body.style.cssText = "font-family: var(--font-family2) !important;direction: ltr;";
    }

  };
  return (
    <div className="p-lg-3 p-xs-0" data-aos="zoom-in-left">
      <Row>
        <Col xs={ 1 } className="pen-icon">
          <LuLanguages />
        </Col>
        <Col xs={ 9 } className=" pt-1">
          <h6>{ t("Languages") }</h6>
        </Col>
      </Row>
      <Form className="mt-5" onSubmit={ handleSubmit(onSubmit) }>
        <Row className="mb-3">
          <Col md={ 6 } className="mt-5">
            <Form.Group controlId="firstName ">
              <Form.Label>{ t("Select Country") }</Form.Label>
              <Countries />
            </Form.Group>
          </Col>
          <Col md={ 6 } className="mt-5">
            <Form.Group controlId="lastName">
              <Form.Label>{ t("Select Language") }</Form.Label>
              <div style={ { display: "flex", flexWrap: "wrap" } } data-aos="zoom-in-left">
                <select
                  className="selectpicker"
                  style={ { flexGrow: 1, padding: "7px", width: "100%", boxSizing: "border-box" } }
                  data-width="fit"
                  { ...register("language") }
                >
                  <option
                    data-content='<span className="flag-icon flag-icon-us"></span> English'
                  >
                    { t("Arabic") }
                  </option>
                  <option
                    data-content='<span className="flag-icon flag-icon-mx"></span> Español'
                  >
                    { t("English") }
                  </option>
                </select>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-5 text-center d-flex justify-content-center">
          <Col xs={ 4 } md={ 3 } lg={ 2 }>
            <Form.Control type="submit" variant="primary" className="border bg-second-color text-white" value={ t("Save") } />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Langueges;
