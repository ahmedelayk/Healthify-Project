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

function Navbarr() {
    const { currentUser, currentUserData } = useAuth();
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
                    <Nav className="me-auto col-6 d-flex justify-content-between ms-md-0 nav-collapse">
                        <NavLink to="/nutration" className="navs mx-lg-0 mx-md-0">
                            Nutrition
                        </NavLink>
                        <NavLink to="/medatation" className="navs mx-lg-0 mx-md-0">
                            Meditation
                        </NavLink>
                        <NavLink to="/workouts" className="navs mb-lg-0 mb-md-0 mb-3 ">
                            Workouts
                        </NavLink>
                    </Nav>
                    {
                        currentUser ? (
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <h6 className=" text-capitalize mb-0  text-main-color">{ currentUserData?.firstName } { currentUserData?.lastName }</h6>
                                <DropDown />
                            </div>
                        ) : <NavLink to="/login" className="mx-lg-0 mx-md-0 mx-2">
                            <Button variant="primary" className="login-btn nav-collapse">
                                Login
                            </Button>
                        </NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarr;


{/* <div>
<NavLink to="/login" className="mx-lg-0 mx-md-0 mx-2">
  <Button variant="primary" className="login-btn nav-collapse" onClick={handleSubmit}>
    logout
  </Button>
</NavLink>
</div> */}