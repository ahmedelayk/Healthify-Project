// Routing
import { Link } from "react-router-dom";
// Styling
import "./error.css"; // Import the CSS file
// Context
import { useAuth } from "../../Context/AuthContext";

const Error = () => {
  const {t} = useAuth()
  return (
    <div className="error-container">
      <h1 className="error-image">{t("Oops!")}</h1>
      <h1 className="error-heading">{t("404 Error: Page Not Found")}</h1>
      <p className="error-message">
        {t("The page you are looking for might have been removed had its name changed or is temporarily unavailable.")}
      </p>
      <Link to="/" className="error-link">
        {t("Go to Home")}
      </Link>
    </div>
  );
};
export default Error;
