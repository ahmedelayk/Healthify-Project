import React from "react";
import { Link } from "react-router-dom";
import "./signInUp.css";
import loginImg from "../assets/images/loginImg.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="sec_container d-flex justify-content-center align-items-center">
      <div className="signInUp_container p-5 login template d-flex gap-5 justify-content-center align-items-center bg-white rounded">
        <div className="img_container" data-aos="flip-up"
     data-aos-anchor-placement="top-bottom">
          <img src={ loginImg } alt="loginImg" class='login-img' />
        </div>
        <div className="form_container rounded bg-white" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <form>
            <h2 className="text-start mb-4">Sign In</h2>
            <div className="mb-2 inputDiv" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control form-control-login"
              ></input>
              <MdEmail className="icon-login" />
            </div>
            <div className="mb-2 inputDiv" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control form-control-login"
              ></input>
              <FaLock className="icon-login" />
            </div>
            <p className="text-start mt-2 paragraph-size">
              <a href="" className="text-decoration-none ">
                Forgot Password?
              </a>
            </p>
            <div className="mb-2" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              ></input>
              <label htmlFor="check" className="custom-input-label ms-2">
                Remember me
              </label>
            </div>
            <div className="d-grid" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <button className="btn btn-primary">Sign in</button>
            </div>
            <p className="mt-2 paragraph-size ">
              Don't have an account?&nbsp;
              <Link to="/signup" className="text-decoration-none">
                Register Now!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
