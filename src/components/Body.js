import { useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import RestaurantListShimmer from "./RestaurantListShimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="restaurants">
        <h1 className="res-heading">Restaurants</h1>
        <div className="res-header-section">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div
              className="search-icon"
              onClick={() => {
                const filteredData = listOfRestaurants.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredList(filteredData);
              }}
            >
              <MagnifyingGlassIcon width={20} />
            </div>
          </div>

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
                  setFilteredList(listOfRestaurants);
                  const filteredData = currentFilters.filter(
                    (item) => item !== "top-rating"
                  );
                  setCurrentFilters(filteredData);
                } else {
                  const filteredData = listOfRestaurants.filter(
                    (item) => item.info.avgRating > 4.1
                  );
                  setFilteredList(filteredData);
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
        </div>
        {listOfRestaurants?.length === 0 ? (
          <RestaurantListShimmer />
        ) : (
          <div className="restaurant-list">
            {filteredList?.map((item) => (
              <RestaurantCard key={item.info.id} resData={item.info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
