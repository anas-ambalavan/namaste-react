import { useContext, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

import { AccordionType, CDN_URL } from "../utils/constants";
import Offer from "./Offer";
import AccordionItem from "./AccordionItem";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ThemeContext from "../utils/ThemeContext";
import MenuModal from "./MenuModal";
import { toggleModal } from "../utils/store/appSlice";
import CulteryIcon from "../../assets/cutlery-icon.png";
import RestaurantMenuFooter from "./RestaurantMenuFooter";
import RestaurantMenuBreadcrumb from "./RestaurantMenuBreadcrumb";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const btnBrowseMenu = useRef(null);
  const [modalMenuClickedIndex, setModalMenuClickedIndex] = useState(null);

  const showModal = useSelector((store) => store.app.showModal);

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const { slug } = useParams();
  const navigate = useNavigate();
  const resId = slug?.split("-").at(-1);

  if (!parseInt(resId)) window.location.replace("/error");

  const resInfo = useRestaurantMenu(resId) || {};

  const generateSlug = (resInfo) => {
    const properties = ["name", "locality", "areaName", "city", "id"];

    const slugParts = properties
      .map((prop) => {
        const value = resInfo?.cards[0]?.card?.card?.info[prop];
        return value ? value.replace("'", "") : "";
      })
      .filter(Boolean);

    const slug = slugParts
      .join("-")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .toLowerCase()
      .replace(/^-+|-+$/g, "");
    return slug;
  };

  useLayoutEffect(() => {
    if (Object.keys(resInfo).length > 0) {
      const apiSlug = generateSlug(resInfo);
      if (apiSlug !== slug) {
        navigate(`/restaurants/${apiSlug}`, { replace: true });
      }
    }
  }, [Object.keys(resInfo)?.length]);

  if (Object.keys(resInfo)?.length === 0) return <RestaurantDetailShimmer />;

  const resData = resInfo?.cards[0]?.card?.card?.info;
  resData.customSlug = slug;

  const {
    name,
    city,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwoMessage,
    feeDetails,
  } = resData || {};

  const offerDetails =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  const menuItems = (() => {
    const regularCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const specialCards =
      resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return regularCards || specialCards || [];
  })();

  const restaurantDetails = menuItems.at(-1).card?.card;
  const restaurantLicenseInfo = menuItems.at(-2).card?.card;

  const routes = [
    { path: "/", text: "Home" },
    { path: "/", text: city },
    { path: "", text: name },
  ];

  return (
    <>
      <div className="body-container menu">
        <div className="menu-breadcrumb">
          <RestaurantMenuBreadcrumb items={routes} />
          <Link
            to="search"
            state={{ resSlug: slug, menuItems: menuItems, resInfo: resInfo }}
            className="reset-link"
          >
            <MagnifyingGlassIcon width={20} />
          </Link>
        </div>
        <div className="menu-header">
          <div className="menu-header-top">
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
                <StarIcon
                  width={16}
                  color={"#1A8D3E"}
                  style={{ marginRight: 2 }}
                />
                <h4>{avgRatingString}</h4>
              </div>
              <div className="menu-total-rating">
                <p>{totalRatingsString}</p>
              </div>
            </div>
          </div>
          {feeDetails && (
            <div className="menu-fee-details">
              <img
                src={CDN_URL + feeDetails?.icon}
                alt={`delivery fee icon`}
                width={20}
              />
              <p>{feeDetails?.message}</p>
            </div>
          )}
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
                    showItems={key === showIndex}
                    scrollIntoView={
                      key === modalMenuClickedIndex && key === showIndex
                    }
                    setShowIndex={setShowIndex}
                    index={key}
                    resInfo={resData}
                  />
                </div>
              );
            } else if (menuItem?.card?.card?.categories) {
              const categories = menuItem.card.card.categories;
              return (
                <div
                  key={menuItem.card.card.title + index}
                  className="accordion-container"
                >
                  <h4 className="accordion-title">
                    {menuItem.card.card.title}
                  </h4>
                  <div>
                    {categories.map((category, categoryIndex) => {
                      const key =
                        menuItem.card.card.title +
                        category.title +
                        categoryIndex;
                      return (
                        <AccordionItem
                          key={key}
                          title={category.title}
                          itemDescriptions={category.itemCards}
                          type={AccordionType.menu}
                          showItems={key === showIndex}
                          scrollIntoView={
                            key === modalMenuClickedIndex && key === showIndex
                          }
                          setShowIndex={setShowIndex}
                          index={key}
                          resInfo={resData}
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
        <RestaurantMenuFooter
          resLicenseInfo={restaurantLicenseInfo}
          resDetails={restaurantDetails}
        />
        <div
          ref={btnBrowseMenu}
          className="btn-browse-menu-container"
          style={{
            visibility: showModal ? "hidden" : "visible",
          }}
        >
          <button
            className="btn-browse-menu"
            onClick={() => dispatch(toggleModal())}
          >
            <img src={CulteryIcon} width={15} style={{ marginRight: 5 }} />
            BROWSE MENU
          </button>
        </div>
      </div>
      {showModal &&
        createPortal(
          <MenuModal
            menu={menuItems}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
            setModalMenuClickedIndex={setModalMenuClickedIndex}
          />,
          document.body
        )}
    </>
  );
};

export default RestaurantMenu;
