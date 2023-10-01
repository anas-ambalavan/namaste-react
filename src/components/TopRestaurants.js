import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useScroll from "../utils/useScroll";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import ArrowIcon from "./ArrowIcon";
import { Directions } from "../utils/constants";

const TopRestaurants = () => {
  const {
    containerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScroll();

  const topRestaurants = useSelector((store) => store.res.topResList);

  const RestaurantOfferCard = withOfferLabel(RestaurantCard);

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
        {topRestaurants?.map((item) => {
          const slug = item?.cta?.link?.split("/").at(-1);
          return (
            <div key={item.info.id}>
              <Link
                to={"/restaurants/" + slug}
                key={item.info.id}
                className="reset-link"
              >
                {item.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantOfferCard
                    resData={item.info}
                    offers={item.info.aggregatedDiscountInfoV3}
                  />
                ) : (
                  <RestaurantCard resData={item.info} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
