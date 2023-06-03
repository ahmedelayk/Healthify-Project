import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarr from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Medatation from "./Components/Medatation/Medatation";
import Nutration from "./Components/Nutration/Nutration";
import Workouts from "./Components/Workouts/Workouts";

function App() {
  return (
    <>
      <div className="app">
        <Navbarr />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medatation" element={<Medatation />} />
            <Route path="/nutration" element={<Nutration />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
