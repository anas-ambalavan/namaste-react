import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/dummy-data";

const Body = () => {
  return (
    <div className="body-container">
      <div className="restaurants">
        <h1 className="res-heading">Restaurants</h1>
        <div className="restaurant-list">
          {restaurants.map((item) => (
            <RestaurantCard key={item.info.id} resData={item.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
