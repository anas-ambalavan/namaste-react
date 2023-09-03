import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL, BestTypes } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../utils/ThemeContext";
import OffersHome from "./OffersHome";
import CuisinesHome from "./CuisinesHome";
import TopRestaurants from "./TopRestaurants";
import RestaurantList from "./RestaurantList";
import Best from "./Best";
import Download from "./Download";
import { loadData } from "../utils/store/resSlice";
import HomeShimmer from "./HomeShimmer";
import RestaurantListShimmer from "./RestaurantListShimmer";

const Home = () => {
  const dispatch = useDispatch();

  const bestPlaces = useSelector((store) => store.res.bestResPlaces);
  const bestCuisines = useSelector((store) => store.res.bestResCuisines);
  const restaurantNearMe = useSelector((store) => store.res.restaurantNearMe);
  const listOfRestaurants = useSelector((store) => store.res.resList);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    dispatch(loadData(json?.data));
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <>
      <HomeShimmer />
      <RestaurantListShimmer />
    </>
  ) : (
    <>
      <div className={`body-container ${darkMode && "dark"}`}>
        <OffersHome />
        <CuisinesHome />
        <TopRestaurants />
        <RestaurantList />
        <Best data={bestPlaces} type={BestTypes.places} />
        <Best data={bestCuisines} type={BestTypes.cuisines} />
        <Best data={restaurantNearMe} type={BestTypes.restaurants} />
      </div>
      <Download />
    </>
  );
};

export default Home;
