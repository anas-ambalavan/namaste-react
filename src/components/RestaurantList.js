import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import ThemeContext from "../utils/ThemeContext";
import RestaurantCard from "./RestaurantCard";
import RestaurantListShimmer from "./RestaurantListShimmer";
import { setfilteredResList } from "../utils/store/resSlice";
import FilterButton from "./FilterButton";
import { FilterTypes } from "../utils/constants";

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const listOfRestaurants = useSelector((store) => store.res.resList);
  const filteredList = useSelector((store) => store.res.filteredResList);
  const currentFilters = useSelector((store) => store.res.filters);

  const search = () => {
    if (listOfRestaurants.length === 0) return;
    const filteredData = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(setfilteredResList(filteredData));
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      search();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText.length]);

  return (
    <div className="restaurants">
      <div>
        <h1 className="res-heading">
          Restaurants with online food delivery in Bangalore
        </h1>
      </div>
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
            data-testid="search-icon"
            className={`search-icon ${darkMode && "dark"}`}
            // onClick={search}
          >
            <MagnifyingGlassIcon width={20} />
          </div>
        </div>

        <div className="filters-container">
          <button className={`btn-filter ${darkMode && "dark"}`}>
            {currentFilters.length !== 0 && (
              <span className="filter-count">{currentFilters.length}</span>
            )}
            Filters
            <AdjustmentsHorizontalIcon style={{ marginLeft: 5 }} width={15} />
          </button>
          <FilterButton type={FilterTypes.topRated} />
          <FilterButton type={FilterTypes.fastDelivery} />
          <FilterButton type={FilterTypes.priceBtw} />
          <FilterButton type={FilterTypes.lessPrice} />
        </div>
      </div>
      {listOfRestaurants?.length === 0 ? (
        <RestaurantListShimmer />
      ) : filteredList?.length === 0 ? (
        <div className="no-found-text">
          <p>No restaurants found!</p>
        </div>
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
  );
};

export default RestaurantList;
