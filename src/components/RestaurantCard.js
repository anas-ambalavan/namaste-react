import { useContext } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

import { CDN_URL } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } = resData;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div data-testid="resCard" className={`res-card ${darkMode && "dark"}`}>
      <div className="res-card-image-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant logo"
          className="res-card-image"
        />
      </div>
      <div className={`res-card-details ${darkMode && "dark"}`}>
        <h3>{name}</h3>
        <div className="res-card-rating-container">
          <div className="res-card-star-rating">
            <StarIcon color="#fff" width={13} />
          </div>
          <h4 style={{ marginLeft: 5 }}>{avgRating}</h4>
        </div>
        <div className={`bottom-details ${darkMode && "dark"}`}>
          <p className="res-card-cuisine">{cuisines.join(", ")}</p>
          <p className="res-card-location">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
