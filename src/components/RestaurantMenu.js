import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

import { AccordionType } from "../utils/constants";
import Offer from "./Offer";
import AccordionItem from "./AccordionItem";
import RestaurantDetailShimmer from "./RestaurantDetailShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ThemeContext from "../utils/ThemeContext";
import MenuModal from "./MenuModal";
import { toggleModal } from "../utils/store/appSlice";
import CulteryIcon from "../../assets/cutlery-icon.png";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const containerRef = useRef(null);
  const btnBrowseMenu = useRef(null);
  const [isBtnBrowseMenuVisible, setIsBtnBrowseMenuVisible] = useState(true);
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

  const calculateDistance = () => {
    if (containerRef.current && btnBrowseMenu.current) {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const btnBrowseMenuRect = btnBrowseMenu.current?.getBoundingClientRect();
      const verticalDistance = Math.abs(
        containerRect?.top - btnBrowseMenuRect?.top
      );

      const threshold = containerRect.height;

      setIsBtnBrowseMenuVisible(verticalDistance < threshold);
    }
  };

  useEffect(() => {
    calculateDistance();
    window.addEventListener("scroll", calculateDistance);
    window.addEventListener("resize", calculateDistance);
    return () => {
      window.removeEventListener("scroll", calculateDistance);
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

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

  const {
    name,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const offerDetails =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  const menuItems = (() => {
    const regularCards =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const specialCards =
      resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return regularCards || specialCards || [];
  })();

  return (
    <>
      <div ref={containerRef} className="body-container menu">
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
                    resInfo={resInfo?.cards[0]?.card?.card?.info}
                  />
                </div>
              );
            } else if (menuItem?.card?.card?.categories) {
              const categories = menuItem.card.card.categories;
              return (
                <div key={menuItem.card.card.title + index}>
                  <h4 className="accordion-title">
                    {menuItem.card.card.title}
                  </h4>
                  <div className="accordion-container">
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
        <div
          ref={btnBrowseMenu}
          className="btn-browse-menu-container"
          style={{
            visibility:
              isBtnBrowseMenuVisible && !showModal ? "visible" : "hidden",
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
