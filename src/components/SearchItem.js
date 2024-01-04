import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";

const SearchItem = ({ suggestion }) => {
  const { cloudinaryId, text, type } = suggestion;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className={`search-item-container ${darkMode && "dark"}`}>
      <div className="search-item-image-container">
        <img
          className="search-item-image"
          src={process.env.REACT_APP_CDN_URL + cloudinaryId}
          alt=""
        />
      </div>
      <div className="search-item-details">
        <h4>{text}</h4>
        <p>{type[0].toUpperCase() + type.toLowerCase().slice(1)}</p>
      </div>
    </div>
  );
};

export default SearchItem;
