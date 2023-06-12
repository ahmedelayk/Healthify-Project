import { Button } from "react-bootstrap";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Style
import './WorkoutSliderSection.css';

const WorkoutSliderSection = () => {
    return (
        <>
            <div className="container-fluid d-flex gap-5" >
                <div className="d-flex flex-column justify-content-between">
                    <h1>Meet the Pros</h1>
                    <Button>View All</Button>
                </div>
                <div className="slider bg-dark flex-grow-1" data-aos="fade-up">
                    <h3 className="text-white">Slider</h3> {/* Slider Here */ }
                </div>
            </div>
        </>
    )
}

export default WorkoutSliderSection;