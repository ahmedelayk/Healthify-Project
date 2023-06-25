// Components
import Fitness from "./Fitness";
import Cardio from "./Cardio";
// Context
import {useAuth} from "../../Context/AuthContext";
// Styling
import "./workout.css";
const Workouts = () => {
  const {t} = useAuth();
  return (
    <div className="workouts" data-aos="zoom-in">
      <div className="wourkouts-header">
        <h1>{t("Fitness & Cardio")}</h1>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Fitness />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Cardio />
      </div>
    </div>
  );
};

export default Workouts;
