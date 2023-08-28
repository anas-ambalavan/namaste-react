import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";
import { CDN_URL } from "../utils/constants";

const Offer = ({ offer }) => {
  const { offerTag, offerLogo, header, couponCode, description } = offer;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className={`offer-container ${darkMode && "dark"}`}>
      {offerTag ? (
        <div className="offer-tag">
          <p>{offerTag}</p>
        </div>
      ) : null}
      <div className="offer-details">
        <div>
          <div className={`offer-header ${darkMode && "dark"}`}>
            <img
              className="offer-logo"
              src={CDN_URL + offerLogo}
              alt="offer logo"
            />
            <p>{header}</p>
          </div>
          <div className={`offer-description ${darkMode && "dark"}`}>
            <p>{couponCode}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
