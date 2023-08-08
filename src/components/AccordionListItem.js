import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, StarIcon } from "@heroicons/react/24/solid";

import { CDN_URL } from "../utils/constants";
import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";
import { addItem } from "../utils/store/cartSlice";
import ThemeContext from "../utils/ThemeContext";

const AccordionListItem = ({ data, resInfo }) => {
  const { name, ribbon, price, defaultPrice, description, imageId, isVeg } =
    data;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();

  const cartResDetails = useSelector(
    (store) => store.cart.cartDetails.resInfo.id
  );

  const addToCart = () => {
    const cartData = {};
    cartData.items = data;
    if (cartResDetails.length === 0) cartData.resInfo = resInfo;
    dispatch(addItem(cartData));
  };

  return (
    <div className={`accordion-item-card ${darkMode && "dark"}`}>
      <div className="accordion-card-details">
        <div className="accordion-items-type">
          {isVeg ? (
            <img
              className="food-item-type-image"
              src={vegIcon}
              alt="veg icon image"
            />
          ) : (
            <img
              className="food-item-type-image"
              src={nonVegIcon}
              alt="non veg icon image"
            />
          )}

          {Object.keys(ribbon).length !== 0 ? (
            <div className="accordion-bestseller">
              <StarIcon width={12} color={"#ED9C00"} />
              <p>{ribbon.text}</p>
            </div>
          ) : null}
        </div>
        <h3 className="accordion-title">{name}</h3>
        <p>₹ {price / 100 || defaultPrice / 100}</p>
        <p className="accordion-desc">{description}</p>
      </div>
      <div className="accordion-action">
        <img
          className="accordion-item-image"
          src={CDN_URL + imageId}
          alt="item image"
        />
        <button
          className={`btn-accordion ${darkMode && "dark"}`}
          onClick={addToCart}
        >
          Add
          <PlusIcon
            width={10}
            style={{ position: "absolute", top: 1, right: 1 }}
          />
        </button>
        <p className={`accordion-customisable ${darkMode && "dark"}`}>
          Customisable
        </p>
      </div>
    </div>
  );
};

export default AccordionListItem;
