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
    <div className="workouts" data-aos="zoom-in-left">
      <div className="wourkouts-header">
        <h1>{t("Fitness & Cardio")}</h1>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="2000"
      >
        <Fitness />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Cardio />
      </div>
    </div>
  );
};

export default Workouts;
