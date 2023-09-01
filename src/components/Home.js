import { useContext, useEffect, useState } from "react";

import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../utils/ThemeContext";
import OffersHome from "./OffersHome";
import CuisinesHome from "./CuisinesHome";
import TopRestaurants from "./TopRestaurants";
import RestaurantList from "./RestaurantList";

const Home = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [offers, setOffers] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOffers(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setCuisines(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setTopRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!</h1>;
  }

  return (
    <div className={`body-container ${darkMode && "dark"}`}>
      <OffersHome offers={offers} />
      <CuisinesHome cuisines={cuisines} />
      <TopRestaurants topRestaurants={topRestaurants} />
      <RestaurantList
        listOfRestaurants={listOfRestaurants}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
    </div>
  );
};

export default Home;
