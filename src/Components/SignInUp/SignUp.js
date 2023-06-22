// Hooks
import { Link, useNavigate } from "react-router-dom";
// icons
import { FaLock, FaUser, FaPhoneAlt, FaUsers } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// context
import { useAuth } from "../../Context/AuthContext";
// image
import signUpImg from "../assets/images/signUpImg.webp";
// style
import "./signInUp.css";
// react hook form
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm()
  const { signup, t } = useAuth();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log(data);
    const { firstName, lastName, mail, phoneNumber, gender, password } = data;
    await signup(firstName, lastName, phoneNumber, gender, mail, password);
    navigate('/settings');
  }

  return (
    <div className="sec_container_signup d-flex justify-content-center align-items-center">
      <div className="signInUp_container p-5 login template d-flex gap-5 justify-content-center align-items-center bg-white rounded">
        <div
          className="form_container rounded bg-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <form onSubmit={ handleSubmit(onSubmit) }>
            <h2 className="text-start mb-4">{ t("Register") }</h2>
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="text"
                placeholder={ t("First name") }
                className="form-control form-control-login"
                { ...register("firstName", {
                  required: t("required"),
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/ig,
                    message: t("name must be at least 3 char."),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("firstName");
                } }
              />
              <FaUser className="icon-login" />
            </div>
            { errors.firstName && <p className="text-danger">{ errors.firstName?.message }</p> }
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="text"
                placeholder={ t("Last name") }
                className="form-control form-control-login"
                { ...register("lastName", {
                  required: t("required"),
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/ig,
                    message: t("name must be at least 3 char."),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("lastName");
                } }
              />
              <FaUser className="icon-login" />
            </div>
            { errors.lastName && <p className="text-danger">{ errors.lastName?.message }</p> }
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <input
                type="email"
                placeholder={ t("E-mail") }
                className="form-control form-control-login"
                { ...register("mail", {
                  required: t("required"),
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig,
                    message: t("invalid email"),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("mail");
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
                type="tel"
                placeholder={ t("Phone number") }
                className="form-control form-control-login"
                { ...register("phoneNumber", {
                  required: t("required"),
                  pattern: {
                    value: /^(010|011|012|015)\d{8}$/ig,
                    message: t("invalid phone number"),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("phoneNumber");
                } }
              />
              <FaPhoneAlt className="icon-login" />
            </div>
            { errors.phoneNumber && <p className="text-danger">{ errors.phoneNumber?.message }</p> }
            <div
              className="mb-2 inputDiv"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <select className="form-select form-select-login" id="gender"
                { ...register("gender") }

              >
                <option disabled defaultValue hidden>
                  { t("Gender") }
                </option>
                <option value="male">{ t("Male") }</option>
                <option value="female">{ t("Female") }</option>
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
                placeholder={ t("Password") }
                className="form-control form-control-login"
                { ...register("password", {
                  required: t("required"),
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig,
                    message: t("at least 8 chars and numbers"),
                  }
                }
                ) }
                onKeyUp={ () => {
                  trigger("password");
                } }
              />
              <FaLock className="icon-login" />
            </div>
            { errors.password && <p className="text-danger">{ errors.password?.message }</p> }
            <div className="d-grid mt-4">
              <button className="btn btn-primary">{ t("Sign Up") }</button>
            </div>
            <p
              className="mt-2 paragraph-size"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              { t("Already have an account?") }
              <Link to="/login" className="text-decoration-none">
                { t("Login Now!") }
              </Link>
            </p>
            <Row className="text-center">
              <Col xs={ 12 }>
                <p className="mt-2 paragraph-size d-inline ">
                  Try To Sign Up With &nbsp;
                </p>
                <FcGoogle
                  className="social-icons"
                  onClick={ () => console.log("hhh") }
                />
                <p className="mt-2 paragraph-size d-inline ">Or</p>
                <BsFacebook className="social-icons" />
              </Col>
            </Row>
          </form>
        </div>
        <div
          className="img_container"
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={ signUpImg } alt="signUpImg" className="login-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
