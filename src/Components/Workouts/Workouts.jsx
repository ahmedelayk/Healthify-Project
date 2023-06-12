// Images
import fitness1 from "../assets/images/fitnessGym1.jpg";
import fitness2 from "../assets/images/fitnessGym2.jpg";
import cardio1 from "../assets/images/cardio1.jpg";
import cardio2 from "../assets/images/cardio2.jpg";

// Components
import Fitness from "./Fitness";
import Cardio from "./Cardio";

const Workouts = () => {
  const fitnesses = [
    {
      img: fitness2,
      title: "Dumbbell Muscle Fit",
    },
    {
      img: fitness1,
      title: "Stretches & Crunches",
    },
    {
      img: fitness2,
      title: "Dumbbell Muscle Fit",
    },
    {
      img: fitness1,
      title: "Stretches & Crunches",
    },
    {
      img: fitness2,
      title: "Dumbbell Muscle Fit",
    },
    {
      img: fitness1,
      title: "Stretches & Crunches",
    },
    {
      img: fitness2,
      title: "Dumbbell Muscle Fit",
    },
    {
      img: fitness1,
      title: "Stretches & Crunches",
    },
  ];
  const cardios = [
    {
      img: cardio1,
      title: "Total Body Stretching",
    },
    {
      img: cardio2,
      title: "Flexibility And Toning",
    },
    {
      img: cardio1,
      title: "Strength Upper Body",
    },
    {
      img: cardio2,
      title: "Total Body Stretching",
    },
    {
      img: cardio1,
      title: "Strength Upper Body",
    },
    {
      img: cardio2,
      title: "Total Body Stretching",
    },
  ];
  return (
    <div className="workouts">
      <div className="wourkouts-header">
        <h1>Fitness & Cardio</h1>
      </div>
      <Fitness fitnesses={fitnesses} />
      <Cardio cardios={cardios} />
    </div>
  );
};

export default Workouts;
