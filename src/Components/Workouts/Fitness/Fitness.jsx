// uuid
import {v4 as uuid} from "uuid";

// Videos and images
import gym from "../../assets/videos/gym.mp4";
import fitness1 from "../../assets/images/fitnessGym1.jpg";
import fitness2 from "../../assets/images/fitnessGym2.jpg";

// Components
import { Col, Container, Row } from "react-bootstrap";
import WorkoutCard from "../CommonComponents/WorkoutCard";
import VideoSection from "../CommonComponents/VideoSection";
import Subscription from "../CommonComponents/Subscription";

const Fitness = () => {
    const fitnesses = [
        {
            img: fitness1,
            title:"Dumbbell Press Bride On Bosu",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"muscle, exercises"
        },
        {
            img: fitness2,
            title:"Dumbbell Muscle Fit",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "4",
            muscleGroup:"muscle, exercises"
        },
        {
            img: fitness1,
            title:"Stretches & Crunches",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"Aps, Core, Hip Flexors, Neck"
        },
        {
            img: fitness1,
            title:"Dumbbell Press Bride On Bosu",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"muscle, exercises"
        },
        {
            img: fitness2,
            title:"Dumbbell Muscle Fit",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "4",
            muscleGroup:"muscle, exercises"
        },
        {
            img: fitness1,
            title:"Stretches & Crunches",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            numOfSteps: "3",
            muscleGroup:"Aps, Core, Hip Flexors, Neck"
        }
    ]
  return (
    <div>
      <VideoSection source={gym} header="Fitness Video Workout" description="Fall in love with fitness" />
      <Container className="section-padding" data-aos="zoom-in-left">
        <h1 className="header1-size text-center">Fitness of the day</h1>
        <Row className="my-5" data-aos="flip-up">
          {fitnesses.map((fitness)=>(
            <Col className="mb-3" key={uuid()} xs={12} md={6} lg={4}  data-aos="flip-right">
                <WorkoutCard img={fitness.img} title={fitness.title} description={fitness.description} numOfSteps={fitness.numOfSteps} muscleGroup={fitness.muscleGroup}/>
            </Col>
          ))}
          
        </Row >
            <Subscription />
      </Container>
    </div>
  );
};

export default Fitness;
