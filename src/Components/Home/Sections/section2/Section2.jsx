// Hooks
import { useEffect } from "react";
// Aos Library
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import { Card, Container, Row } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Styles
import "./section2.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// uuid
import { v4 as uuid } from "uuid";
// import images
import master_your_nutrition_image from "../../../assets/images/about/Master-Your-Nutrition.webp";
import meditation_image from "../../../assets/images/about/meditation.webp";
import unleash_your_potential_image from "../../../assets/images/about/Unleash-Your-Potential2.webp";
import stay_hydrated_image from "../../../assets/images/about/stay_hydrated3.webp";
// Conntext
import { useAuth } from "../../../../Context/AuthContext";

export default function Section2() {
    const { t } = useAuth()
    const features = [
        {
            img: master_your_nutrition_image,
            title: t("Master Your Nutrition"),
            slogan: t("Achieve Success with Meal Planning and Tracking"),
            text: t("Unlock the key to a healthier and more organized lifestyle through the power of meal planning and tracking. By taking control of your nutrition, you can fuel your body with balanced, nourishing meals that support your goals and optimize your well-being"),
        },
        {
            img: meditation_image,
            title: t("Discover Inner Peace"),
            slogan: t("Harness the Power of Meditation and Stress Management Tools"),
            text: t("In our fast-paced, chaotic world, finding moments of tranquility and managing stress is more important than ever. Meditation and stress management tools offer a path to inner peace and emotional well-being. Through the practice of meditation, you can quiet the mind, cultivate mindfulness, and tap into a deep sense of calm and clarity"),
        },
        {
            img: unleash_your_potential_image,
            title: t("Unleash Your Potential"),
            slogan: t("Ignite Your Fitness Journey with Effective Workout Plans"),
            text: t("It's time to ignite your passion for exercise and achieve your goals with our powerful workout plans. Designed to unlock your hidden strengths and elevate your fitness level, our comprehensive programs offer a clear roadmap to success"),
        },
        {
            img: stay_hydrated_image,
            title: t("stay hydrated"),
            slogan: t("Embrace the Power of Minimalism"),
            text: t("Water is essential for numerous bodily functions, from regulating body temperature to supporting digestion and nutrient absorption. It helps flush out toxins, improves cognitive function, and boosts energy levels"),
        },
    ];

    useEffect(() => {
        AOS.init();
    }, [])
    return (<>
        <Container id='about' className='section-padding'>
            <Row className="col-12">
                <h1 className="text-center text-paragraph-color">{t("What is a Healthify?")}</h1>
            </Row>
            <Row className='my-5'>

                <Swiper
                    modules={ [Pagination, Autoplay] }
                    autoplay
                    spaceBetween={ 15 }
                    slidesPerView={ 3 }
                    breakpoints={ {
                        0: {
                            slidesPerView: 1,
                        },
                        767.98: {
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 3,
                        },
                    } }
                // pagination={{ clickable: true }}
                >
                    { features.map((feature, index) => (
                        <SwiperSlide key={ uuid() }>
                            <Card data-aos="fade-left" className='h-300 overflow-hidden'>
                                <Card.Img variant="top" src={ feature.img } loading="lazy" className="image-size" />
                                <Card.Body>
                                    <Card.Title className="header1-size">
                                        { feature.title }
                                    </Card.Title>
                                    <Card.Text className="text-paragraph-color paragraph-size">
                                        { feature.slogan }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    )) }
                </Swiper>
            </Row>
        </Container>
    </>
    )
}
