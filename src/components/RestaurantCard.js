import { StarIcon } from "@heroicons/react/24/solid";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } = resData;
  return (
    <div className="res-card">
      <div className="res-card-image-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant logo"
          className="res-card-image"
        />
      </div>
      <div className="res-card-details">
        <h3>{name}</h3>
        <div className="res-card-rating-container">
          <div className="res-card-star-rating">
            <StarIcon color="#fff" width={13} />
          </div>
          <h4 style={{ marginLeft: 5 }}>{avgRating}</h4>
        </div>
        <div className="bottom-details">
          <p className="res-card-cuisine">{cuisines.join(",")}</p>
          <p className="res-card-location">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
