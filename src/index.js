import ReactDOM from "react-dom/client";
import App from "./App";
// routing
import { BrowserRouter } from "react-router-dom";
// Styling
// import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import "./index.css";
// ContextAPI
import AuthProvider from "./Context/AuthContext";

// localization
import "./i18n";

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
