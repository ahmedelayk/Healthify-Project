// Components
import Fitness from "./Fitness";
import Cardio from "./Cardio";

const Workouts = () => {
  return (
    <div className="workouts" data-aos="zoom-in-left">
      <div className="wourkouts-header" data-aos="zoom-in-left">
        <h1>Fitness & Cardio</h1>
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
