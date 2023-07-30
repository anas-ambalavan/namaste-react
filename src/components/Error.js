import React from "react";
import { CDN_URL } from "../utils/constants";

const Error = () => {
  return (
    <div className="error-container">
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
      <button className="btn-error">Retry</button>
    </div>
  );
};

export default Error;
