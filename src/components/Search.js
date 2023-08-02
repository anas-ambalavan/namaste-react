import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { CDN_URL, PRE_SEARCH_API } from "../utils/constants";

const Search = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetchCuisines();
  }, []);

  const fetchCuisines = async () => {
    const data = await fetch(PRE_SEARCH_API);
    const json = await data.json();

    console.log(json);

    setCuisines(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  };

  return (
    <div className="body-container search-wfull-container">
      <div className="search-input-wfull-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurants and food"
        />
        <MagnifyingGlassIcon width={24} />
      </div>
      <div className="popular-cuisines-container">
        <h2>Popular Cuisines</h2>
        <div className="popular-cuisines">
          {cuisines.map((cuisine) => {
            return (
              <div key={cuisine.id} className="cuisine-container">
                <img
                  className="cuisine-image"
                  src={CDN_URL + cuisine.imageId}
                  alt="cuisine image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
