import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

import AccordionListItem from "./AccordionListItem";

const RestaurantMenuSearch = () => {
  const { state } = useLocation();
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);

  const menuData = () => {
    const data = [];
    state?.menuItems?.map((menuItem) => {
      if (menuItem?.card?.card?.itemCards) {
        menuItem?.card?.card?.itemCards?.map((item) =>
          data?.push(item?.card?.info)
        );
      }
      if (menuItem?.card?.card?.categories) {
        menuItem?.card?.card?.categories?.map((category) => {
          category?.itemCards?.map((item) => data?.push(item?.card?.info));
        });
      }
    });
    return data;
  };

  const items = menuData() || [];

  const search = () => {
    if (searchText.length == 0) return setFilteredMenu([]);
    const filteredData = items?.filter((item) =>
      item?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMenu(filteredData);
  };

  useEffect(() => {
    inputRef?.current?.focus();
    const timer = setTimeout(() => {
      search();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="body-container menu">
      <div className="menu-search-container">
        <div className="menu-search-input-container">
          <Link to={`/restaurants/${state?.resSlug}`} className="reset-link">
            <ArrowLeftIcon width={20} />
          </Link>
          <input
            ref={inputRef}
            className="menu-search-input"
            type="text"
            value={searchText}
            placeholder={`Search in ${state?.resInfo?.cards[0]?.card?.card?.info?.name}`}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {searchText.length > 0 ? (
          <XCircleIcon
            color="grey"
            width={20}
            style={{ cursor: "pointer" }}
            onClick={() => setSearchText("")}
          />
        ) : (
          <MagnifyingGlassIcon width={20} />
        )}
      </div>
      <div style={{ paddingBottom: 100 }}>
        {filteredMenu?.map((item, index) => (
          <AccordionListItem
            key={item?.id + index}
            data={item}
            resInfo={state?.resInfo?.cards[0]?.card?.card?.info}
            testId={false}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuSearch;
