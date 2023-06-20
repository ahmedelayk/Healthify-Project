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

export default function Section2() {

    const features = [
        {
            img: master_your_nutrition_image,
            title: "Master Your Nutrition",
            slogan: 'Achieve Success with Meal Planning and Tracking',
            text:'Unlock the key to a healthier and more organized lifestyle through the power of meal planning and tracking. By taking control of your nutrition, you can fuel your body with balanced, nourishing meals that support your goals and optimize your well-being. ',
        },
        {
            img: meditation_image,
            title: "Discover Inner Peace",
            slogan: 'Harness the Power of Meditation and Stress Management Tools',
            text:'In our fast-paced, chaotic world, finding moments of tranquility and managing stress is more important than ever. Meditation and stress management tools offer a path to inner peace and emotional well-being. Through the practice of meditation, you can quiet the mind, cultivate mindfulness, and tap into a deep sense of calm and clarity.',
        },
        {
            img: unleash_your_potential_image,
            title: "Unleash Your Potential",
            slogan: 'Ignite Your Fitness Journey with Effective Workout Plans',
            text:" It's time to ignite your passion for exercise and achieve your goals with our powerful workout plans. Designed to unlock your hidden strengths and elevate your fitness level, our comprehensive programs offer a clear roadmap to success.",
        },
        {
            img: stay_hydrated_image,
            title: "stay hydrated",
            slogan: 'Embrace the Power of Minimalism',
            text:'Water is essential for numerous bodily functions, from regulating body temperature to supporting digestion and nutrient absorption. It helps flush out toxins, improves cognitive function, and boosts energy levels',
        },
    ];

    useEffect(() => {
        AOS.init();
    }, [])
    return (<>
        <Container id='about' className='section-padding'>
            <Row className="col-12">
                <h1 className="text-center text-paragraph-color">What is a Healthify?</h1>
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
                                        {feature.slogan}
                                    </Card.Text>
                                    {/* <Button className='mt-2' variant="primary">show more</Button> */}
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    )) }
                </Swiper>
            </Row>
        </Container>

        {/* <Container id="about" className="section-padding">
            <Row  className="col-12">
                <h1 className="text-center text-paragraph-color">What is a Healthify?</h1>
            </Row>
            <div className=" d-flex justify-content-center">
                <div  className="col-12 my-5 grid-3">
                    <div className="text-center p-2">
                        <article className="bg-white rounded  p-2" data-aos="fade-up" data-aos-duration="1000">
                        
                            <div>
                                <svg width="200" height="200" viewBox="0 0 256 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M205.186 13.5182C194.032 27.2092 179.447 39.1193 166.841 51.5254C153.491 64.6679 140.14 77.8104 126.789 90.9529C116.885 81.4022 106.213 71.1152 95.5564 60.8281C89.34 54.8317 89.3701 54.8467 83.2817 61.1888C76.689 68.0493 70.0361 74.8648 62.9769 82.1537C83.8085 102.427 104.128 122.212 124.606 142.148C160.031 106.853 194.913 73.4672 231.775 36.7523C234.672 46.5209 238.217 52.7127 239.346 60.7755C241.144 73.5874 239.526 86.6773 234.025 98.4371C227.967 111.399 217.694 120.341 207.729 130.41C194.627 143.658 181.449 156.823 168.181 169.913C161.551 176.458 154.898 182.98 148.222 189.48C143.368 194.199 137.754 202.052 130.792 203.427C125.878 204.404 120.911 201.834 117.141 198.542C94.6232 178.915 74.0098 156.523 52.6363 135.64C40.4896 123.775 28.0493 111.489 21.3362 95.8973C10.2732 70.221 18.1302 37.6991 39.6918 19.8753C61.2535 2.05136 94.7135 0.413246 117.916 16.0505C121.784 18.6579 126.096 21.8515 130.642 20.7695C132.877 20.2359 134.729 18.7256 136.572 17.3505C146.19 10.1893 157.938 6.1241 169.867 5.27499C179.666 4.57616 198.45 5.44782 205.186 13.5182Z" fill="#32B744"/>
                                <path d="M72.361 91.2986L64.1729 99.9551L124.011 159.709L235.845 48.4146L231.789 36.2415L124.583 142.155L72.361 91.2986Z" fill="#2F973A"/>
                                </svg>
                            </div>
                            <h3>Find more joy</h3>
                            <p className="text-paragraph-color">
                                Catch your breath
                                relax your mind
                                feel 14% less stressed in just 10 days. 
                            </p>
                        </article>
                    </div>
                    <div className="text-center p-2" data-aos="zoom-out">
                        <article className="bg-white rounded  p-2">
                            <div>
                                <svg width="200" height="200" viewBox="0 0 256 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M205.186 13.5182C194.032 27.2092 179.447 39.1193 166.841 51.5254C153.491 64.6679 140.14 77.8104 126.789 90.9529C116.885 81.4022 106.213 71.1152 95.5564 60.8281C89.34 54.8317 89.3701 54.8467 83.2817 61.1888C76.689 68.0493 70.0361 74.8648 62.9769 82.1537C83.8085 102.427 104.128 122.212 124.606 142.148C160.031 106.853 194.913 73.4672 231.775 36.7523C234.672 46.5209 238.217 52.7127 239.346 60.7755C241.144 73.5874 239.526 86.6773 234.025 98.4371C227.967 111.399 217.694 120.341 207.729 130.41C194.627 143.658 181.449 156.823 168.181 169.913C161.551 176.458 154.898 182.98 148.222 189.48C143.368 194.199 137.754 202.052 130.792 203.427C125.878 204.404 120.911 201.834 117.141 198.542C94.6232 178.915 74.0098 156.523 52.6363 135.64C40.4896 123.775 28.0493 111.489 21.3362 95.8973C10.2732 70.221 18.1302 37.6991 39.6918 19.8753C61.2535 2.05136 94.7135 0.413246 117.916 16.0505C121.784 18.6579 126.096 21.8515 130.642 20.7695C132.877 20.2359 134.729 18.7256 136.572 17.3505C146.19 10.1893 157.938 6.1241 169.867 5.27499C179.666 4.57616 198.45 5.44782 205.186 13.5182Z" fill="#32B744"/>
                                <path d="M72.361 91.2986L64.1729 99.9551L124.011 159.709L235.845 48.4146L231.789 36.2415L124.583 142.155L72.361 91.2986Z" fill="#2F973A"/>
                                </svg>
                            </div>
                            <h3>Find more joy</h3>
                            <p className="text-paragraph-color">
                                Catch your breath
                                relax your mind
                                feel 14% less stressed in just 10 days. 
                            </p>
                        </article>
                    </div>
                    <div className="text-center p-2">
                        <article className="bg-white rounded p-2">
                            <div>
                                <svg width="200" height="200" viewBox="0 0 256 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M205.186 13.5182C194.032 27.2092 179.447 39.1193 166.841 51.5254C153.491 64.6679 140.14 77.8104 126.789 90.9529C116.885 81.4022 106.213 71.1152 95.5564 60.8281C89.34 54.8317 89.3701 54.8467 83.2817 61.1888C76.689 68.0493 70.0361 74.8648 62.9769 82.1537C83.8085 102.427 104.128 122.212 124.606 142.148C160.031 106.853 194.913 73.4672 231.775 36.7523C234.672 46.5209 238.217 52.7127 239.346 60.7755C241.144 73.5874 239.526 86.6773 234.025 98.4371C227.967 111.399 217.694 120.341 207.729 130.41C194.627 143.658 181.449 156.823 168.181 169.913C161.551 176.458 154.898 182.98 148.222 189.48C143.368 194.199 137.754 202.052 130.792 203.427C125.878 204.404 120.911 201.834 117.141 198.542C94.6232 178.915 74.0098 156.523 52.6363 135.64C40.4896 123.775 28.0493 111.489 21.3362 95.8973C10.2732 70.221 18.1302 37.6991 39.6918 19.8753C61.2535 2.05136 94.7135 0.413246 117.916 16.0505C121.784 18.6579 126.096 21.8515 130.642 20.7695C132.877 20.2359 134.729 18.7256 136.572 17.3505C146.19 10.1893 157.938 6.1241 169.867 5.27499C179.666 4.57616 198.45 5.44782 205.186 13.5182Z" fill="#32B744"/>
                                <path d="M72.361 91.2986L64.1729 99.9551L124.011 159.709L235.845 48.4146L231.789 36.2415L124.583 142.155L72.361 91.2986Z" fill="#2F973A"/>
                                </svg>
                            </div>
                            <h3 data-aos="zoom-out">Find more joy</h3>
                            <p className="text-paragraph-color">
                                Catch your breath
                                relax your mind
                                feel 14% less stressed in just 10 days. 
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </Container> */}
    </>
    )
}
