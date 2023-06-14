// Images
import fitness1 from "../assets/images/fitnessGym1.jpg";
import fitness2 from "../assets/images/fitnessGym2.jpg";
import cardio1 from "../assets/images/cardio1.jpg";
import cardio2 from "../assets/images/cardio2.jpg";

// Components
import Fitness from "./Fitness";
import Cardio from "./Cardio";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCardio, getAllWorkouts } from "../../redux/workoutsSlice";

const Workouts = () => {
  // const { workouts } = useSelector((state) => state.workouts);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllWorkouts());
  //   console.log("Hello");
  //   console.log(workouts);
  // }, []);
  // const fitnesses = [
  //   {
  //     img: fitness2,
  //     title: "Dumbbell Muscle Fit",
  //   },
  //   {
  //     img: fitness1,
  //     title: "Stretches & Crunches",
  //   },
  //   {
  //     img: fitness2,
  //     title: "Dumbbell Muscle Fit",
  //   },
  //   {
  //     img: fitness1,
  //     title: "Stretches & Crunches",
  //   },
  //   {
  //     img: fitness2,
  //     title: "Dumbbell Muscle Fit",
  //   },
  //   {
  //     img: fitness1,
  //     title: "Stretches & Crunches",
  //   },
  //   {
  //     img: fitness2,
  //     title: "Dumbbell Muscle Fit",
  //   },
  //   {
  //     img: fitness1,
  //     title: "Stretches & Crunches",
  //   },
  // ];
  // const cardios = [
  //   {
  //     img: cardio1,
  //     title: "Total Body Stretching",
  //   },
  //   {
  //     img: cardio2,
  //     title: "Flexibility And Toning",
  //   },
  //   {
  //     img: cardio1,
  //     title: "Strength Upper Body",
  //   },
  //   {
  //     img: cardio2,
  //     title: "Total Body Stretching",
  //   },
  //   {
  //     img: cardio1,
  //     title: "Strength Upper Body",
  //   },
  //   {
  //     img: cardio2,
  //     title: "Total Body Stretching",
  //   },
  // ];
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
