import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import AuthProvider from "./Context/AuthContext";
import NutritionProvider from "./Context/NutritionContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <NutritionProvider>
        <App />
      </NutritionProvider>
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
