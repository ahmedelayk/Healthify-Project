// Comonents
import { Container, Row } from "react-bootstrap";
import { BMICalculator } from "./BMICalculator";
import { BMIResult } from "./BMIResult";
import { CaloriesTrack } from "./CaloriesTrack";
import { RecomendedRecipies } from "./RecomendedRecipies";
import { WaterTrack } from "./WaterTrack";
import MonthGraph from "../Profile/ProfileComponents/MonthGraph"

const Nutration = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <BMICalculator />
        <BMIResult />
        <CaloriesTrack />
        <WaterTrack />
        <MonthGraph />
        <RecomendedRecipies />
      </Row>
    </Container>
  );
};

export default Nutration;
