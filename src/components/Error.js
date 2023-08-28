import { useContext } from "react";

import { CDN_URL } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const Error = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className="body-container error-container">
      <div className="error-img-container">
        <img
          className="error-img"
          src={CDN_URL + "connection_error_bsppck"}
          alt="error image"
        />
      </div>
      <h1>Uh-oh!</h1>
      <p className="error-desc">
        Sorry! This should not have happened. Please retry
      </p>
      <button className={`btn-error ${darkMode && "dark"}`}>Retry</button>
    </div>
  );
};

export default Error;
