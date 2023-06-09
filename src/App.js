import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarr from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Medatation from "./Components/Medatation/Medatation";
import Nutration from "./Components/Nutration/Nutration";
import Workouts from "./Components/Workouts/Workouts";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/SignInUp/Login";
import SignUp from "./Components/SignInUp/SignUp";

function App() {
  return (
    <>
      <div className="app">
        <Navbarr />
        <div className="bg-main-color">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medatation" element={<Medatation />} />
            <Route path="/nutration" element={<Nutration />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
