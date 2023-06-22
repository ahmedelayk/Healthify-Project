// Hooks
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
// icons
import { AiOutlineDown, AiOutlineUser, AiFillSetting, AiOutlineLogout, AiOutlineRight, AiFillProfile } from "react-icons/ai";
// style
import './nav.css'
// images
// import avatar from "../assets/images/avatar.webp";
// routing
import { Link, useNavigate } from "react-router-dom";

const DropDown = () => {
    const { currentUserData, logout, userImage, t } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            setError('')
            await logout();
            navigate('/login')
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
        <div>{error}</div>
            <div className="dropdown">
                <button className="dropdown-btn dropdown-toggle py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className='user-arrow'>
                        <AiOutlineUser className=" text-main-color"/>
                        <AiOutlineDown className=" text-main-color"/>
                    </div>
                </button>

                <ul className="dropdown-menu py-0">
                    <li className="p-2 dropdown-list-item">
                        <Link className="dropdown-item" type="button" to='/profile'>
                                <div className=" d-flex gap-2 align-items-center">
                                    <img src={ userImage } alt="usr" className="avatar-img" loading="lazy"/>
                                    <h6 className="dropdown-text">{ currentUserData?.firstName } { currentUserData?.lastName }</h6>
                                </div>
                        </Link>
                    </li>
                    <li className="border-top p-2 dropdown-list-item">
                        <Link className="dropdown-item" type="button" to='/profile'>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className=" d-flex gap-2 align-items-center">
                                    <AiFillProfile className="dropdown-icon" />
                                    <h6 className="dropdown-text">{t("Profile")}</h6>
                                </div>
                                <div>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="border-top p-2 dropdown-list-item">
                        <Link className="dropdown-item" type="button" to='/settings'>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className=" d-flex gap-2 align-items-center">
                                    <AiFillSetting className="dropdown-icon" />
                                    <h6 className="dropdown-text">{t("Settings")}</h6>
                                </div>
                                <div>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="border-top p-2 dropdown-list-item">
                        <Link className="dropdown-item" type="button" to='/login' onClick={ handleLogout }>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className=" d-flex gap-2 align-items-center">
                                    <AiOutlineLogout className="dropdown-icon" />
                                    <h6 className="dropdown-text">{t("Logout")}</h6>
                                </div>
                                <div>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DropDown;