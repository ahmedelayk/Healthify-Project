import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarr from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Medatation from "./Components/Medatation/Meditation";
import Nutration from "./Components/Nutration/Nutration";
import Workouts from "./Components/Workouts/Workouts";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import MeditationDetails from "./Components/Medatation/MeditationDetails/MeditationDetails";
import Fitness from "./Components/Workouts/Fitness/Fitness";
import Cardio from "./Components/Workouts/Cardio/Cardio";
import Login from "./Components/SignInUp/Login";
import SignUp from "./Components/SignInUp/SignUp";
import Footer from "./Components/Home/Sections/section7/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
    <div className="app">
      <Navbarr />
      <div className="bg-main-color">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medatation" element={<Medatation />} />
          <Route path="/medatation/:id" element={<MeditationDetails />} />
          <Route path="/nutration" element={<Nutration />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/fitness" element={<Fitness />} />
          <Route path="/workouts/cardio" element={<Cardio />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  </>
  );
}

export default App;
