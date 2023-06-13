import React from "react";
import { Link } from "react-router-dom";
import "./signInUp.css";
import signUpImg from "../assets/images/signUpImg.png";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaPhoneAlt, FaUsers } from "react-icons/fa";

function SignUp() {
  return (
    <div className="sec_container_signup d-flex justify-content-center align-items-center">
      <div className="signInUp_container p-5 login template d-flex gap-5 justify-content-center align-items-center bg-white rounded">
        <div
          className="form_container rounded bg-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <form>
            <h2 className="text-start mb-4">Register</h2>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="text"
                placeholder="Enter your first name"
                className="form-control form-control-login"
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
                placeholder="Enter your last name"
                className="form-control form-control-login"
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
                placeholder="Enter Email"
                className="form-control form-control-login"
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
                placeholder="Enter Phone"
                className="form-control form-control-login"
              />
              <FaPhoneAlt className="icon-login" />
            </div>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <select className="form-select form-select-login" id="gender">
                <option value="" disabled defaultValue hidden>
                  Select Gender
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
                type="password"
                placeholder="Enter Password"
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
          <img src={signUpImg} alt="signUpImg" className="login-img" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
