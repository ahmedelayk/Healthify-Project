// Hooks
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import { Alert } from "react-bootstrap";
// icons
import { FaLock, FaUser, FaPhoneAlt, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// context
import { useAuth } from "../../Context/AuthContext";
// image
import signUpImg from "../assets/images/signUpImg.webp";
// style
import "./signInUp.css";


function SignUp() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig;
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const [gender, setGender] = useState('male');
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate =useNavigate()
  
  const handleSelect = (e) => {
    setGender(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRegex.test(emailRef.current.value) && passwordRegex.test(passwordRef.current.value)) {
      try {
        setError('')
        await signup(firstNameRef.current.value,lastNameRef.current.value,phoneNumberRef.current.value,gender, emailRef.current.value, passwordRef.current.value);
        navigate('/settings')
      } catch (err) {
        setError(err.message);
      }
    }else{
      setError('password: must have lower and uppercase character and numbers');
    }
  };

  return (
    <div className="sec_container_signup d-flex justify-content-center align-items-center">
      <div className="signInUp_container p-5 login template d-flex gap-5 justify-content-center align-items-center bg-white rounded">
        <div
          className="form_container rounded bg-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {error && <Alert variant="danger">{error }</Alert>}
          <form onSubmit={handleSubmit}>
            <h2 className="text-start mb-4">Register</h2>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="text"
                placeholder="First name"
                className="form-control form-control-login"
                ref={firstNameRef}
              />
              <FaUser className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="text"
                placeholder="Last name"
                className="form-control form-control-login"
                ref={lastNameRef}
              />
              <FaUser className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="email"
                placeholder="E-mail"
                className="form-control form-control-login"
                ref={emailRef}
              />
              <MdEmail className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="tel"
                placeholder="Phone number"
                className="form-control form-control-login"
                ref={phoneNumberRef}
              />
              <FaPhoneAlt className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <select className="form-select form-select-login" id="gender" onChange={handleSelect}>
                <option disabled defaultValue hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <FaUsers className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="form-control form-control-login"
              />
              <FaLock className="icon-login" />
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p
              className="mt-2 paragraph-size"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Already have an account?
              <Link to="/login" className="text-decoration-none">
                Login Now!
              </Link>
            </p>
          </form>
        </div>
        <div
          className="img_container"
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={signUpImg} alt="signUpImg" className="login-img" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
