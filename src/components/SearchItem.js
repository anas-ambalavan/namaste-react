import { CDN_URL } from "../utils/constants";

const SearchItem = ({ suggestion }) => {
  const { cloudinaryId, text, type } = suggestion;
  return (
    <div className="search-item-container">
      <div className="search-item-image-container">
        <img
          className="search-item-image"
          src={CDN_URL + cloudinaryId}
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
