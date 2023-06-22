import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// style
import "./signInUp.css";
// image
import loginImg from "../assets/images/loginImg.webp";
// icons
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
// react hook form
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm()

  const [error, setError] = useState("")
  const { login, t } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    console.log(data);
    const { mail, password, remember } = data;
    try {
      await login(mail, password);
      navigate("/settings");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  }

  return (
    <div className="sec_container_login d-flex justify-content-center align-items-center">
      <div className="signInUp_container p-5 login template d-flex gap-5 justify-content-center align-items-center bg-white rounded">
        <div
          className="img_container"
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={ loginImg } alt="loginImg" className="login-img" loading="lazy" />
        </div>
        <div
          className="form_container rounded bg-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <form onSubmit={ handleSubmit(onSubmit) }>
            <h2 className="text-start mb-4">{t("Sign In")}</h2>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="email"
                placeholder={t("Enter Email")}
                className="form-control form-control-login"
                { ...register("mail", {
                  required: t("Enter your Email"),
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig,
                    message: t("invalid email"),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("mail");
                  setError("");
                } }
              />
              <MdEmail className="icon-login" />
            </div>
            { errors.mail && <p className="text-danger">{ errors.mail?.message }</p> }
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="password"
                placeholder={t("Enter Password")}
                className="form-control form-control-login"
                { ...register("password", {
                  required: t("Enter your password"),
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig,
                    message: t("check your password"),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("password");
                  setError("");
                } }
              />
              <FaLock className="icon-login" />
            </div>
            { errors.password && <p className="text-danger">{ errors.password?.message }</p> }
            { error && <p className="text-danger">{ error}</p> }
            <p className="text-start mt-2 paragraph-size">
              <a href="#" className="text-decoration-none ">
                {t("Forgot Password?")}
              </a>
            </p>
            <div
              className="mb-2"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
                { ...register("remember") }
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                {t("Remember me")}
              </label>
            </div>
            <div
              className="d-grid"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <button className="btn btn-primary">{t("Sign in")}</button>
            </div>
            <p className="mt-2 paragraph-size ">
              {t("Don't have an account?")}&nbsp;
              <Link to="/signup" className="text-decoration-none">
                {t("Register Now!")}
              </Link>
            </p>
          </form>
        </div>
      </div >
    </div >
  );
}

export default Login;
