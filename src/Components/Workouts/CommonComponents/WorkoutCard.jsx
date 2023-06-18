
// Style
import "../workout.css"

// Components
import { Card } from "react-bootstrap";

const WorkoutCard = ({ img, name, equipment, bodyPart, target }) => {
  return (
    <Card className="h-100" data-aos="flip-left">
      <Card.Img variant="top" src={img} loading="lazy" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-paragraph-color">
          {equipment}
          <div className="d-flex flex-lg-wrap" data-aos="zoom-in-left">
            <div className="mt-2 workouts-card-content">{bodyPart}</div>
            <div className="mt-2 workouts-card-content ms-2">{target}</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;
