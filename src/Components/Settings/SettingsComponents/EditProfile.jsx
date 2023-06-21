import { Col, Row, Form } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import "./style.css";
import ProfileImage from "./ProfileImage";
// react hook form
import { useForm } from "react-hook-form";
// firebase
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase";
// hooks
import { useAuth } from "../../../Context/AuthContext";

const EditProfile = () => {
    const { currentUserData } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm({
        defaultValues: {
            firstName: currentUserData.firstName,
            lastName: currentUserData.lastName,
            mail: currentUserData.email,
            phoneNumber: currentUserData.phoneNumber,
            password: currentUserData.password
        },
    })
    const onSubmit = async (data) => {
        console.log(data);
        const { firstName, lastName, mail, phoneNumber, password } = data;
        const newData = { firstName, lastName, mail, phoneNumber, password }
        const userDoc = doc(db, "users", currentUserData.userId)
        updateDoc(userDoc, newData)
    }

    return (
        <div className="p-lg-3 p-xs-0" data-aos="zoom-in-left">
            <Row>
                <Col xs={ 1 } className="pen-icon">
                    <BsFillPencilFill />
                </Col>
                <Col xs={ 9 } className=" pt-1">
                    <h6>Edit Profile</h6>
                </Col>
                <Col lg={ 2 } xs={ 1 }>
                    <ProfileImage />
                </Col>
            </Row>
            <Form className="mt-2" onSubmit={ handleSubmit(onSubmit) }>
                <Row className="mb-3">
                    <Col md={ 6 }>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="set first Name"
                                { ...register("firstName", {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z]{3,}$/ig,
                                        message: "name must be at least 3 char.",
                                    }
                                }
                                ) }
                                onKeyUp={ () => {
                                    trigger("firstName");
                                } }
                            />
                        </Form.Group>
                        { errors.firstName && <p className="text-danger">{ errors.firstName?.message }</p> }
                    </Col>
                    <Col md={ 6 }>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="set last Name"
                                { ...register("lastName", {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z]{3,}$/ig,
                                        message: "name must be at least 3 char.",
                                    }
                                }
                                ) }
                                onKeyUp={ () => {
                                    trigger("lastName");
                                } }
                            />
                        </Form.Group>
                        { errors.lastName && <p className="text-danger">{ errors.lastName?.message }</p> }
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    {/* <Form.Control type="email" placeholder="Email" value = {currentUser?currentUser.email:''}/> */ }
                    <Form.Control type="email" placeholder="set new email"
                        { ...register("mail", {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig,
                                message: "invalid email",
                            }
                        }
                        ) }
                        onKeyUp={ () => {
                            trigger("mail");
                        } }
                    />
                </Form.Group>
                { errors.mail && <p className="text-danger">{ errors.mail?.message }</p> }

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="set new phone number"
                        { ...register("phoneNumber", {
                            required: true,
                            pattern: {
                                value: /^(010|011|012|015)\d{8}$/ig,
                                message: "invalid phone number",
                            }
                        }
                        ) }
                        onKeyUp={ () => {
                            trigger("phoneNumber");
                        }
                        }
                    />
                </Form.Group>
                { errors.phoneNumber && <p className="text-danger">{ errors.phoneNumber?.message }</p> }

                <Form.Group>
                    <Form.Label>Change Your Password</Form.Label>
                    <Form.Control type="password" placeholder="set new password"
                        { ...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ig,
                                message: "at least 8 chars and numbers",
                            }
                        }
                        ) }
                        onKeyUp={ () => {
                            trigger("password");
                        } }
                    />
                </Form.Group>
                { errors.password && <p className="text-danger">{ errors.password?.message }</p> }

                <Row className="mt-5 text-center d-flex justify-content-center">
                    <Col xs={ 4 } md={ 3 } lg={ 2 }>
                        <Form.Control type="submit" variant="primary" className="border bg-second-color text-white" value="Save" />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default EditProfile;
