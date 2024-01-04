import { useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

import SearchItem from "./SearchItem";
import ThemeContext from "../utils/ThemeContext";

const Search = () => {
  const [cuisines, setCuisines] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const fetchCuisines = async () => {
    const data = await fetch(process.env.REACT_APP_PRE_SEARCH_API);
    const json = await data.json();

    setCuisines(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  };

  const searchItems = async () => {
    const data = await fetch(process.env.REACT_APP_SEARCH_API + searchText);
    const json = await data.json();

    setSuggestions(json?.data?.suggestions);
  };

  useEffect(() => {
    fetchCuisines();
  }, []);

  useEffect(() => {
    let timer;
    if (searchText.length !== 0) {
      timer = setTimeout(() => {
        searchItems();
      }, 500);
    } else {
      setSuggestions([]);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchText.length]);

  return (
    <div className="body-container search-wfull-container">
      <div className={`search-input-wfull-container ${darkMode && "dark"}`}>
        <input
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search for restaurants and food"
        />
        {searchText.length === 0 ? (
          <MagnifyingGlassIcon width={24} />
        ) : (
          <XMarkIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSearchText("");
              setSuggestions([]);
            }}
            width={24}
          />
        )}
      </div>
      {searchText.length === 0 && (
        <div className="popular-cuisines-container">
          <h2>Popular Cuisines</h2>
          <div className="popular-cuisines">
            {cuisines.map((cuisine) => {
              return (
                <div key={cuisine.id} className="cuisine-container">
                  <img
                    className={`cuisine-image ${darkMode && "dark"}`}
                    src={process.env.REACT_APP_CDN_URL + cuisine.imageId}
                    alt="cuisine image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="search-suggestions-container">
        {suggestions?.map((suggestion) => {
          return (
            <SearchItem key={suggestion.cloudinaryId} suggestion={suggestion} />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
