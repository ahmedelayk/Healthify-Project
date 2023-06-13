// import VideoSection from "../../../Workouts/CommonComponents/VideoSection";
// import homeVideo from '../../../assets/videos/fitness.mp4';
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Section0.css';

export default function Section0() {
    return (
        <>
            {/* <div className="position-relative">

        <VideoSection source={homeVideo} className='position-absolute top-0 start-0' />
    </div> */}
            <div className="workouts">
                <div className="header">
                    <div className="header-content">
                        <h2 className="header-text">
                            Unlock Your Potential. Empowering Health and Wellness for All!
                        </h2>
                        <div>
                            <NavLink to="/login">
                                <Button className="go-btn">
                                    Start your journey
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
