// Components
import { Container, Row } from "react-bootstrap";
// images
import yoga from '../../../assets/images/yoga.webp'
// Context
import { useAuth } from "../../../../Context/AuthContext";

export default function Section4() {
  const {t} = useAuth()
  return (
    <>
    <div id="nutrition" className="container-fluid bg-white section-padding-bottom">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="#F9F9F9" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,122.7C240,107,300,85,360,112C420,139,480,213,540,234.7C600,256,660,224,720,176C780,128,840,64,900,64C960,64,1020,128,1080,149.3C1140,171,1200,149,1260,144C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <Container>
        <Row>
          <h1 className="text-center text-paragraph-color">{t("Meditation")}</h1>
        </Row>
        <div className="my-5">
          <Row>
              <div className='col-md-6 d-flex align-items-center'>
                  <h3 className=' header1-size'>{t("Find Inner Peace and Harmony Meditate with Serenity")}</h3>
              </div>
              <div className="col-md-6">
                  <img className="w-100" src={yoga} alt="yoga" loading="lazy"/>
              </div>
          </Row>
        </div>
      </Container>
    </div>
  </>
  )
}
