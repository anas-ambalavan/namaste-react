import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid";

import { CDN_URL } from "../utils/constants";
import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";
import {
  addItem,
  clearCart,
  decrementCartItemQuantity,
  incrementCartItemQuantity,
} from "../utils/store/cartSlice";
import ThemeContext from "../utils/ThemeContext";

const AccordionListItem = ({ data, resInfo, testId }) => {
  const { id, name, ribbon, price, defaultPrice, description, imageId, isVeg } =
    data;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();

  const cartResDetailsID = useSelector(
    (store) => store.cart.cartDetails.resInfo.id
  );

  const cartItems = useSelector((store) => store.cart.cartDetails.items);
  const currentItem = cartItems?.find((item) => item.id === id);

  const addToCart = () => {
    if (cartResDetailsID && cartResDetailsID !== resInfo.id) {
      if (
        window.confirm(
          "Items already in cart! Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?"
        )
      ) {
        dispatch(clearCart());
      }
      return;
    }
    const cartData = {};
    cartData.item = data;
    if (cartResDetailsID?.length === 0) cartData.resInfo = resInfo;
    dispatch(addItem(cartData));
  };

  return (
    <div
      data-testid={`${testId ? "foodItem" : ""}`}
      className={`accordion-item-card ${darkMode && "dark"}`}
    >
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
        <h3 className="accordion-item-title">{name}</h3>
        <p>₹ {price / 100 || defaultPrice / 100}</p>
        <p className="accordion-desc">{description}</p>
      </div>
      <div className="accordion-action">
        <img
          loading="lazy"
          className="accordion-item-image"
          src={CDN_URL + imageId}
          alt="item image"
        />
        {currentItem ? (
          <div
            data-testid="accordionItemAction"
            className={`btn-accordion ${darkMode && "dark"}`}
          >
            <div className="accordion-item-action-container">
              <div
                data-testid="accordionItemQuantityDecrement"
                className="accordion-item-action"
                onClick={() => dispatch(decrementCartItemQuantity(id))}
              >
                <MinusIcon width={15} />
              </div>
              <div className="accordion-item-action">
                <p data-testid="accordionItemQuantity">
                  {currentItem.quantity}
                </p>
              </div>
              <div
                data-testid="accordionItemQuantityIncrement"
                className="accordion-item-action"
                onClick={() => dispatch(incrementCartItemQuantity(id))}
              >
                <PlusIcon width={15} />
              </div>
            </div>
          </div>
        ) : (
          <div
            data-testid="addBtn"
            className={`btn-accordion ${darkMode && "dark"}`}
            onClick={addToCart}
          >
            Add
            <PlusIcon
              width={10}
              style={{ position: "absolute", top: 1, right: 1 }}
            />
          </div>
        )}
        {(data?.addons || Object.keys(data?.variantsV2).length > 0) && (
          <p className={`accordion-customisable ${darkMode && "dark"}`}>
            Customisable
          </p>
        )}
      </div>
    </div>
  );
};

export default AccordionListItem;
