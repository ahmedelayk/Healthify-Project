// Hooks
import { useEffect } from 'react';

// Components
import { Container, Row } from 'react-bootstrap';

// images
import foodimg1 from '../../../assets/images/food1.jpg';
import foodimg2 from '../../../assets/images/food2.jpg';

// Aos Library
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section3() {
  useEffect(()=>{
    AOS.init();
  }, [])
  return (
    <>
        <Container id="nutrition" className="section-padding-top">
          <Row>
            <h1 className="text-center text-paragraph-color">Nutrition</h1>
          </Row>
          <div className="my-5">
            <Row data-aos="fade-left">
                <div className='col-md-6'>
                    <img src={foodimg1} className=' w-100' alt="food" />
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                  <p className='text-paragraph-color header1-size'>Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life.</p>
                </div>
            </Row>

            <Row data-aos="fade-right">
                <div className='col-md-6 d-flex align-items-center'>
                  <p className='text-paragraph-color header1-size'>Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life.</p>
                </div>
                <div className='col-md-6'>
                    <img src={foodimg2} className=' w-100' alt="food" />
                </div>
            </Row>
          </div>
        </Container>
    </>
  )
}
