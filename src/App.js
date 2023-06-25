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
import { useAuth } from "./Context/AuthContext";
// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelpContent from "./Components/Settings/SettingsComponents/HelpContent";

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
  const notificationsArr = {
    dailyMeditation: [
      "Meditation: Take 10 minutes to meditate",
      "Meditation: Practice deep breathing exercises",
      "Meditation: Listen to calming music",
    ],
    fitnessGoals: [
      "Go for a 30-minute jog",
      "Do 20 push-ups and 30 sit-ups",
      "Attend a yoga class",
    ],
    personalizedRecommendations: [
      "Try a new healthy recipe",
      "Explore a new workout routine",
      "Read a book on mindfulness",
    ],
    weeklyBMI: [
      "Calculate your BMI using a trusted online calculator",
      "Track your progress with a fitness app",
      "Consider consulting a nutritionist for personalized advice",
    ],
    exercise: [
      "Complete a full-body workout",
      "Try a HIIT (High-Intensity Interval Training) session",
      "Go for a hike in nature",
    ],
  }
  const { i18n, currentUserData } = useAuth();

  const notifyWith = (message) => {
    const notify = () => toast( message , {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    notify()
  }
  useEffect(() => {
    if (currentUserData?.notification?.exercise) {
      var exerciseTimer = setInterval(() => {
        notifyWith(notificationsArr.exercise[Math.trunc(Math.random()*3)]);
      }, 10000);
      // }, 3.6e+6);
    }
    if (currentUserData?.notification?.dailyMeditation) {
      var dailyMeditationTimer = setInterval(() => {
        notifyWith(notificationsArr.dailyMeditation[Math.trunc(Math.random()*3)]);
      }, 8.64e+7);
      // }, 8.64e+7);
    }
    if (currentUserData?.notification?.fitnessGoals) {
      var fitnessGoalsTimer = setInterval(() => {
        notifyWith(notificationsArr.fitnessGoals[Math.trunc(Math.random()*3)]);
      }, 1.8e+6);
      // }, 1.8e+6);
    }
    if (currentUserData?.notification?.personalizedRecommendations) {
      var personalizedRecommendationsTimer = setInterval(() => {
        notifyWith(notificationsArr.personalizedRecommendations[Math.trunc(Math.random()*3)]);
      }, 600000);
    }
    if (currentUserData?.notification?.weeklyBMI) {
      var weeklyBMITimer = setInterval(() => {
        notifyWith(notificationsArr.weeklyBMI[Math.trunc(Math.random()*3)]);
      }, 6.048e+8);
      // }, 6.048e+8);
    }
    return ()=>{
      clearInterval(exerciseTimer);
      clearInterval(dailyMeditationTimer);
      clearInterval(fitnessGoalsTimer);
      clearInterval(personalizedRecommendationsTimer);
      clearInterval(weeklyBMITimer);
    }
  }, [currentUserData?.notification])

  useEffect(() => {
    // const notifyTimer = setInterval(() => {
    //   notify();
    // }, 40000);
    if (localStorage.getItem("lang") === "ar") {
      i18n.changeLanguage("ar");
      document.body.style.cssText = "font-family: var(--font-family-arabic) !important;direction: rtl;";
    } else {
      i18n.changeLanguage("en");
      document.body.style.cssText = "font-family: var(--font-family2) !important;direction: ltr;";
    }
    Aos.init();
    Aos.refresh();
    return () => {
      // clearInterval(notifyTimer)
    }
  }, []);
  return (
    <Suspense fallback={
      <>
        <div className="d-flex justify-content-center align-items-center page-height">
          <Spinner />
        </div>
      </>
    }>
      {/* <button onClick={ notify }>Notify !</button> */ }

      <ToastContainer
        position="bottom-right"
        autoClose={ 3000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Provider store={ store }>
        <div className="app">
          <Navbarr />
          <div className="bg-main-color">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/medatation" element={ <Medatation /> } />
              <Route path="/medatation/details/:id" element={ <MeditationDetails /> } />
              <Route path="/nutration" element={ <Nutration /> } />
              <Route path="/workouts" element={ <Workouts /> } />
              <Route path="/workouts/fitness" element={ <Fitness /> } />
              <Route path="/workouts/cardio" element={ <Cardio /> } />
              <Route path="/workouts/cardio/:id" element={ <WorkoutsDetails /> } />
              <Route path="/workouts/fitness/:id" element={ <WorkoutsDetails /> } />
              <Route path="/help/:id" element={ <HelpContent /> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/settings" element={ <Settings /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/signup" element={ <SignUp /> } />
            </Routes>
          </div>
          <Footer />
        </div>
      </Provider>
    </Suspense>
  );
}

export default App;
