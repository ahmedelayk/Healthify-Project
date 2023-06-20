import { useEffect, lazy, Suspense } from "react";
// routing
import { Route, Routes } from "react-router-dom";
// Aos library
import Aos from "aos";
import "aos/dist/aos.css";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { Spinner } from "react-bootstrap";
import Spinner from "./Components/Spinner/Spinner";

// lazy loading
const Navbarr = lazy(() => import("./Components/Nav/Nav"));
const Home = lazy(() => import("./Components/Home/Home"));
const Nutration = lazy(() => import("./Components/Nutration/Nutration"))
const Medatation = lazy(() => import("./Components/Medatation/Meditation"));
const MeditationDetails = lazy(() => import("./Components/Medatation/MeditationDetails/MeditationDetails"))
const Workouts = lazy(() => import("./Components/Workouts/Workouts"))
const Fitness = lazy(() => import("./Components/Workouts/Fitness/Fitness"))
const Cardio = lazy(() => import("./Components/Workouts/Cardio/Cardio"))
const WorkoutsDetails = lazy(() => import("./Components/Workouts/WorkoutsDetails/WorkoutsDetails"))
const Profile = lazy(() => import("./Components/Profile/Profile"))
const Settings = lazy(() => import("./Components/Settings/Settings"))
const Login = lazy(() => import("./Components/SignInUp/Login"))
const SignUp = lazy(() => import("./Components/SignInUp/SignUp"))
const Footer = lazy(() => import("./Components/Home/Sections/section7/Footer"))

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Suspense fallback={
      <>
        <div className="d-flex justify-content-center align-items-center page-height">
          <Spinner/>
        </div>
      </>
    }>
    <Provider store={store}>
      <div className="app">
        <Navbarr />
        <div className="bg-main-color">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medatation" element={<Medatation />} />
            <Route path="/medatation/details/:id" element={<MeditationDetails />} />
            <Route path="/nutration" element={<Nutration />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/fitness" element={<Fitness />} />
            <Route path="/workouts/cardio" element={<Cardio />} />
            <Route path="/workouts/cardio/:id" element={<WorkoutsDetails />} />
            <Route path="/workouts/fitness/:id" element={<WorkoutsDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
    </Suspense>
  );
}

export default App;
