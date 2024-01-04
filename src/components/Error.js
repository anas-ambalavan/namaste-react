import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../utils/ThemeContext";

const Error = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className="body-container error-container">
      <div className="error-img-container">
        <img
          className="error-img"
          src={process.env.REACT_APP_CDN_URL + "connection_error_bsppck"}
          alt="error image"
        />
      </div>
      <h1>Uh-oh!</h1>
      <p className="error-desc">
        Sorry! This should not have happened. Please retry
      </p>
      <Link to={"/"} className="reset-link">
        <button className={`btn-error ${darkMode && "dark"}`}>Retry</button>
      </Link>
    </div>
  );
};

export default Error;
