import React from "react";
import { Link } from "react-router-dom";
import "./error.css"; // Import the CSS file

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-image">Oops!</h1>
      <h1 className="error-heading">404 Error: Page Not Found</h1>
      <p className="error-message">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/" className="error-link">
        Go to Home
      </Link>
    </div>
  );
};
<div id="notfound">
  <div class="notfound">
    <div class="notfound-404">
      <h1>Oops!</h1>
    </div>
    <h2>404 - Page not found</h2>
    <p>
      The page you are looking for might have been removed had its name changed
      or is temporarily unavailable.
    </p>
    <a href="#">Go To Homepage</a>
  </div>
</div>;
export default Error;
