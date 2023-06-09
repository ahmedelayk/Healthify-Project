import { Row } from "react-bootstrap";
import fitnessImg from '../../../assets/images/fitness.jpg'
import './Section5.css';

export default function Section5() {
    return (
        <>
            <div id="workouts" className="container-fluid bg-main-color">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#F9F9F9" fill-opacity="1" d="M0,160L30,154.7C60,149,120,139,180,122.7C240,107,300,85,360,112C420,139,480,213,540,234.7C600,256,660,224,720,176C780,128,840,64,900,64C960,64,1020,128,1080,149.3C1140,171,1200,149,1260,144C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                <div className=" position-relative">
                    <img className="w-100" src={fitnessImg} alt="workouts" />
                    <div className="fitness-overlay"></div>
                    <div className=" workouts-content container text-white position-absolute top-0 left-50">
                        <div className="higher-part h-30 d-flex flex-column justify-content-between ">
                            <Row>
                                <h1 className="text-center">Workouts</h1>
                            </Row>
                            <div className=" d-flex justify-content-evenly">
                                <h2>Train</h2>
                                <h2>Transform</h2>
                                <h2>Triumph</h2>
                            </div>
                        </div>
                        <div className=" h-60 d-flex flex-column-reverse align-items-center ">
                                <h2 className=" lower-part">Unleash Your Potential with Powerful Workouts</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
