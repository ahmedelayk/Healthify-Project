
// Style
import "./workout.css"

// Components
import { Card, Col, Row } from "react-bootstrap";

const WorkoutCard = ({ img, title, description, numOfSteps, muscleGroup }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-paragraph-color">
          {description}
          <Row className="mt-3">
            <Col
              className="d-flex align-items-md-center flex-wrap flex-column"
              xs={6}
              md={3}
              lg={3}
            >
              <span className="main-color">{numOfSteps}</span>
              <span>Steps</span>
            </Col>
            <Col xs={6} md={9} lg={9}>
              <h6 className="main-color">Muscle group:</h6>
              <span className="second-color">{muscleGroup}</span>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;
