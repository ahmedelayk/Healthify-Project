// video section
import VideoSection from "../../../Workouts/CommonComponents/VideoSection";
import homeVideo from '../../../assets/videos/fitness.mp4';
// 
import { NavLink } from "react-router-dom";
// Components
import { Button } from "react-bootstrap";
// style
import './Section0.css';
// Context
import { useAuth } from "../../../../Context/AuthContext"

export default function Section0() {
    const { t } = useAuth();
    return (
        <>
            {/* <div className="position-relative">
            <VideoSection source={homeVideo} className='position-absolute top-0 start-0' />
        </div> */}
            <div className="workouts">
                <div className="header">
                    <div className="header-content">
                        <h2 className="header-text">
                            { t("Unlock Your Potential. Empowering Health and Wellness for All!") }
                        </h2>
                        <div>
                            <NavLink to="/login">
                                <Button className="go-btn">
                                    { t("Start your journey") }
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
