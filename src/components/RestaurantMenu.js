import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

import { AccordionType } from "../utils/constants";
import Offer from "./Offer";
import AccordionItem from "./AccordionItem";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ThemeContext from "../utils/ThemeContext";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length === 0) return <RestaurantDetailShimmer />;

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

  const menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="body-container menu">
      <div className="menu-header">
        <div className={`menu-res-details ${darkMode && "dark"}`}>
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
        <div className={`menu-rating-container ${darkMode && "dark"}`}>
          <div className="menu-rating">
            <StarIcon width={16} color={"#1A8D3E"} style={{ marginRight: 2 }} />
            <h4>{avgRatingString}</h4>
          </div>
          <div className="menu-total-rating">
            <p>{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className={`menu-offers ${darkMode && "dark"}`}>
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
          {offerDetails?.map((offer) => {
            return <Offer key={offer.info.offerIds[0]} offer={offer.info} />;
          })}
        </div>
      </div>
      <div className={`menu-list ${darkMode && "dark"}`}>
        {menuItems?.map((menuItem, index) => {
          if (menuItem.card.card.itemCards) {
            const itemCards = menuItem.card.card.itemCards;
            const key = menuItem.card.card.title + index;
            return (
              <div key={key} className="accordion-container">
                <AccordionItem
                  title={menuItem.card.card.title}
                  itemDescriptions={itemCards}
                  type={AccordionType.menu}
                  showItems={key === showIndex ? true : false}
                  setShowIndex={setShowIndex}
                  index={key}
                  resInfo={resInfo?.cards[0]?.card?.card?.info}
                />
              </div>
            );
          } else if (menuItem?.card?.card?.categories) {
            const categories = menuItem.card.card.categories;
            return (
              <div key={menuItem.card.card.title + index}>
                <h4>{menuItem.card.card.title}</h4>
                <div className="accordion-container">
                  {categories.map((category, categoryIndex) => {
                    const key =
                      menuItem.card.card.title + category.title + categoryIndex;
                    return (
                      <AccordionItem
                        key={key}
                        title={category.title}
                        itemDescriptions={category.itemCards}
                        type={AccordionType.menu}
                        showItems={key === showIndex ? true : false}
                        setShowIndex={setShowIndex}
                        index={key}
                        resInfo={resInfo?.cards[0]?.card?.card?.info}
                      />
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
