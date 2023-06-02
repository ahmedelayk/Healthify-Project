import { Button, Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/images/logo.jpg";
import "./nav.css";
import { NavLink } from "react-router-dom";
function Navbarr() {
  return (
    <Navbar expand="lg" className="border-bottom ">
      <Container>
        <NavLink to="/" className="col-3">
          <img src={Logo} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto col-6 d-flex justify-content-between">
            <NavLink to="/nutration" className="navbar-brand">Nutration</NavLink>
            <NavLink to="/medatation" className="navbar-brand">Medatation</NavLink>
            <NavLink to="/workouts" className="navbar-brand">Workouts</NavLink>
          </Nav>
          <NavLink to="/login">
            <Button variant="primary" className="login-btn">Login</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
