import { Link } from "react-router-dom";

import useScroll from "../utils/useScroll";
import RestaurantCard from "./RestaurantCard";
import ArrowIcon from "./ArrowIcon";
import { Directions } from "../utils/constants";

const TopRestaurants = ({ topRestaurants }) => {
  const {
    containerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScroll();
  return (
    <div className="top-restaurants">
      <div className="heading-setion">
        <h1 className="res-heading">Top restaurant chains in Bangalore</h1>
        <div className="scroll-icons">
          <ArrowIcon
            direction={Directions.left}
            handleOnClick={scrollLeft}
            isDisabled={!showLeftArrow}
          />
          <ArrowIcon
            direction={Directions.right}
            handleOnClick={scrollRight}
            isDisabled={!showRightArrow}
          />
        </div>
      </div>
      <div ref={containerRef} className="top-restaurant-list">
        {topRestaurants?.map((item) => (
          <div key={item.info.id}>
            <Link to={"/restaurants/" + item.info.id} className="reset-link">
              <RestaurantCard resData={item.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
