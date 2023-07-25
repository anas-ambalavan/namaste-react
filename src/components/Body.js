import { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/dummy-data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [currentFilters, setCurrentFilters] = useState([]);

  return (
    <div className="body-container">
      <div className="restaurants">
        <h1 className="res-heading">Restaurants</h1>
        <div className="filters-container">
          <button className="btn-filter">
            Filters
            <AdjustmentsHorizontalIcon style={{ marginLeft: 5 }} width={15} />
          </button>
          <button
            className={`btn-filter ${
              currentFilters.includes("top-rating") ? "active" : ""
            }`}
            onClick={() => {
              if (currentFilters.includes("top-rating")) {
                setListOfRestaurants(restaurants);
                const filteredList = currentFilters.filter(
                  (item) => item !== "top-rating"
                );
                setCurrentFilters(filteredList);
              } else {
                const filteredList = restaurants.filter(
                  (item) => item.info.avgRating > 4.1
                );
                setListOfRestaurants(filteredList);
                setCurrentFilters((prev) => [...prev, "top-rating"]); // adding a new filter to the list of current Filters
              }
            }}
          >
            Ratings 4.1+
            {currentFilters.includes("top-rating") && (
              <XMarkIcon style={{ marginLeft: 5, color: "red" }} width={15} />
            )}
          </button>
        </div>
        <div className="restaurant-list">
          {listOfRestaurants.map((item) => (
            <RestaurantCard key={item.info.id} resData={item.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
