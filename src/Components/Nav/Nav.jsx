import { Button, Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/images/logo.jpg";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
function Navbarr() {
  const navigate=useNavigate()
  const handleLoginClick = () => {
   navigate('/login');
  };

  return (
    <Navbar expand="lg" className="border-bottom navbar">
      <Container>
        <div className="col-3">
          <NavLink to="/" className="d-flex logo col-1">
            <h2 className="logo-text mt-1">Healthify</h2>
            <img src={Logo} alt="logo" className="logo-img" />
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto col-6 d-flex justify-content-between ms-lg-0 ms-md-0 nav-collapse">
            <NavLink to="/nutration" className="navs">
              Nutration
            </NavLink>
            <NavLink to="/medatation" className="navs">
              Medatation
            </NavLink>
            <NavLink to="/workouts" className="navs">
              Workouts
            </NavLink>
          </Nav>
          <div className="login-btn" onClick={handleLoginClick}>
            <Button variant="primary" className="nav-collapse px-3 py-0">
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
