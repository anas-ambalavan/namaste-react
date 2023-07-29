import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

import { MENU_API } from "../utils/constants";
import Offer from "./Offer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo.length === 0) return <h1>Loading....</h1>;

  const {
    name,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const offerDetails =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  return (
    <div className="body-container menu">
      <div className="menu-header">
        <div className="menu-res-details">
          <h2>{name}</h2>
          <div>
            <p>{cuisines.join(", ")}</p>
            <div>
              <p>
                {areaName}, {sla?.lastMileTravel} km
              </p>
              <ChevronDownIcon
                width={14}
                color={"#FC8018"}
                style={{ marginLeft: 5 }}
              />
            </div>
          </div>
        </div>
        <div className="menu-rating-container">
          <div className="menu-rating">
            <StarIcon width={16} color={"#1A8D3E"} style={{ marginRight: 2 }} />
            <h4>{avgRatingString}</h4>
          </div>
          <div className="menu-total-rating">
            <p>{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="menu-offers">
        <div className="menu-offers-header">
          <div className="menu-offers-header-item">
            <ClockIcon width={18} style={{ marginRight: 5 }} />
            <h4>{sla?.slaString}</h4>
          </div>
          <div className="menu-offers-header-item">
            <CurrencyRupeeIcon width={18} style={{ marginRight: 5 }} />
            <h4>{costForTwoMessage}</h4>
          </div>
        </div>
        <div className="menu-offers-list">
          {offerDetails?.map((offer) => (
            <Offer key={offer.restId} offer={offer.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
