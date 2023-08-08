import { useContext, useEffect, useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import RestaurantListShimmer from "./RestaurantListShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../utils/ThemeContext";

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!</h1>;
  }

  return (
    <div className="body-container">
      <div className="restaurants">
        <h1 className="res-heading">Restaurants</h1>
        <div className="res-header-section">
          <div className={`search-container ${darkMode && "dark"}`}>
            <input
              className={`search-input ${darkMode && "dark"}`}
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div
              className={`search-icon ${darkMode && "dark"}`}
              onClick={() => {
                if (listOfRestaurants.length === 0) return;
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
            <button className={`btn-filter ${darkMode && "dark"}`}>
              Filters
              <AdjustmentsHorizontalIcon style={{ marginLeft: 5 }} width={15} />
            </button>
            <button
              className={`btn-filter ${darkMode && "dark"} ${
                currentFilters.includes("top-rating") ? "active" : ""
              }`}
              onClick={() => {
                if (listOfRestaurants.length === 0) return;
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
              <Link
                to={"/restaurants/" + item.info.id}
                key={item.info.id}
                className="reset-link"
              >
                <RestaurantCard resData={item.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
