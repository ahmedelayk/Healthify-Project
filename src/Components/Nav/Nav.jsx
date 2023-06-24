// Components
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// Hooks
import { useAuth } from "../../Context/AuthContext";
// images
import Logo from "../assets/images/logo.webp";
// style
import "./nav.css";
// Custom Components
import DropDown from "./DropDown";
import { useState, useEffect } from "react";

function Navbarr() {
  const { currentUser, currentUserData, t, i18n } = useAuth();
  const [username, setUsername] = useState("Welcome...");
  useEffect(() => {
    currentUserData?.firstName != null
      ? setUsername(`${currentUserData?.firstName} ${currentUserData?.lastName}`)
      : setUsername(currentUser?.displayName);
  }, []);
  return (
    <Navbar expand="lg" className="border-bottom navbar">
      <Container>
        <NavLink to="/" className="col-3 navbar-brand">
          <div className="d-flex align-items-center gap-1">
            <h2 className="logo-text mt-1">Healthify</h2>
            <img src={ Logo } alt="logo" className="logo-img" loading="lazy" />
          </div>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            i18n.language === "ar" ?(
            <Nav className="ms-auto col-6 d-flex justify-content-between nav-collapse">
              <NavLink to="/nutration" className="navs mx-lg-0 mx-md-0">
                { t("Nutrition") }
              </NavLink>
              <NavLink to="/medatation" className="navs mx-lg-0 mx-md-0">
                { t("Meditation") }
              </NavLink>
              <NavLink to="/workouts" className="navs mb-lg-0 mb-md-0 mb-3 ">
                { t("Workouts") }
              </NavLink>
            </Nav>):
(
            <Nav className="me-auto col-6 d-flex justify-content-between ms-md-0 nav-collapse">
              <NavLink to="/nutration" className="navs mx-lg-0 mx-md-0">
                { t("Nutrition") }
              </NavLink>
              <NavLink to="/medatation" className="navs mx-lg-0 mx-md-0">
                { t("Meditation") }
              </NavLink>
              <NavLink to="/workouts" className="navs mb-lg-0 mb-md-0 mb-3 ">
                { t("Workouts") }
              </NavLink>
            </Nav>)
          }
          {
            currentUser ? (
              <div className='d-flex justify-content-center align-items-center gap-2'>
                <h6 className=" text-capitalize mb-0  text-main-color">{ username }</h6>
                <DropDown />
                {
                  i18n.language === "en" && (
                    <>
                      <input type="button" value="عربي" onClick={ () => {
                        i18n.changeLanguage("ar");
                        document.body.style.cssText = "font-family: var(--font-family-arabic) !important;direction: rtl;"
                      } } />
                    </>
                  )
                }
                {
                  i18n.language === "ar" && (<input type="button" value="English" onClick={ () => {
                    i18n.changeLanguage("en");
                    document.body.style.cssText = "font-family: var(--font-family2) !important;direction: ltr;"
                  } } />)
                }
              </div>
            ) : <NavLink to="/login" className="mx-lg-0 mx-md-0 mx-2">
              <Button variant="primary" className="login-btn nav-collapse">
                { t("Login") }
              </Button>
            </NavLink>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
