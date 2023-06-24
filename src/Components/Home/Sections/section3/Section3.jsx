
// Components
import { Container, Row } from 'react-bootstrap';
// images
// import foodimg1 from '../../../assets/images/food1.webp';
// import foodimg2 from '../../../assets/images/food2.webp';
import foodimg3 from '../../../assets/images/food3.webp';
import foodimg4 from '../../../assets/images/food4.webp';
// import foodimg2 from '../../../assets/images/about/nutrition.webp';

import 'aos/dist/aos.css';
// Context
import { useAuth } from '../../../../Context/AuthContext';

export default function Section3() {
  const {t} = useAuth();
  return (
    <>
        <Container id="nutrition" className="section-padding-top">
          <Row>
            <h1 className="text-center text-paragraph-color">{t("Nutrition")}</h1>
          </Row>
          <div className="my-5">
            <Row data-aos="fade-left">
                <div className='col-md-6'>
                    <img src={foodimg4} className=' w-100' alt="food" loading="lazy"/>
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                  <p className='text-paragraph-color header1-size'> {t("Power of meal planning and tracking. By taking control of your nutrition, you can fuel your body with balanced, nourishing meals that support your goals and optimize your well-being.")}</p>
                </div>
            </Row>

            <Row data-aos="fade-right">
                <div className='col-md-6 d-flex align-items-center'>
                  <p className='text-paragraph-color header1-size'>{t("Track your activities and what you eat with the help of our food, exercise and water trackers to maintain a balanced everyday life.")}</p>
                </div>
                <div className='col-md-6'>
                    <img src={foodimg3} className=' w-100' alt="food" loading="lazy"/>
                </div>
            </Row>
          </div>
        </Container>
    </>
  )
}
