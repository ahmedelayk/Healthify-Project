// uuid
import {v4 as uuid} from "uuid";

// Videos and images
import cardio from "../../assets/videos/cardio.mp4";
import cardio1 from "../../assets/images/cardio1.jpg";
import cardio2 from "../../assets/images/cardio2.jpg";

// Components
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../WorkoutCard";
import VideoSection from "../VideoSection";
import Subscription from "../Subscription";

const Cardio = () => {
    const Cardios = [
        {
            img: cardio1,
            title:"Total Body Stretching",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"muscle, exercises"
        },
        {
            img: cardio2,
            title:"Flexibility And Toning",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "4",
            muscleGroup:"muscle, exercises"
        },
        {
            img: cardio1,
            title:"Strength Upper Body",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"Aps, Core, Hip Flexors, Neck"
        },
        {
            img: cardio1,
            title:"Total Body Stretching",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"muscle, exercises"
        },
        {
            img: cardio2,
            title:"Flexibility And Toning",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "4",
            muscleGroup:"muscle, exercises"
        },
        {
            img: cardio1,
            title:"Strength Upper Body",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"Aps, Core, Hip Flexors, Neck"
        }
    ]
  return (
    <div>
      <VideoSection source={cardio} header="Cardio Video Workout" description="Fall in love with cardio" />
      <Container className="section-padding">
        <h1 className="header1-size text-center">Cardio of the day</h1>
        <Row className="my-5">
          {Cardios.map((cardio)=>(
            <Col className="mb-3" key={uuid()} xs={12} md={6} lg={4}>
                <WorkoutCard img={cardio.img} title={cardio.title} description={cardio.description} numOfSteps={cardio.numOfSteps} muscleGroup={cardio.muscleGroup}/>
            </Col>
          ))}
          
        </Row>
            <Subscription />
      </Container>
    </div>
  );
};

export default Cardio;
