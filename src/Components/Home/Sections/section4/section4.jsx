import { Container, Row } from "react-bootstrap";
import yoga from '../../../assets/images/yoga.jpg'

export default function Section4() {
  return (
    <>
    <div id="nutrition" className="container-fluid bg-white section-padding">

    <Container>
      <Row>
        <h1 className="text-center text-paragraph-color">Meditation</h1>
      </Row>
      <div className="my-5">
        <Row  className="col-12">
            <div className='col-md-6 d-flex align-items-center'>
                <h3 className=' header2-size'>Find Inner Peace and Harmony
Meditate with Serenity</h3>
            </div>
            <div className="col-md-6">
                <img className="w-100" src={yoga} alt="yoga" />
            </div>
        </Row>
      </div>
    </Container>

    </div>

</>
  )
}
