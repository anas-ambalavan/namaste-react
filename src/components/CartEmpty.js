import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";
import { CDN_URL } from "../utils/constants";

const CartEmpty = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className="cart-empty-container">
      <div className="cart-empty-img-container">
        <img
          className="cart-empty-img"
          src={CDN_URL + "2xempty_cart_yfxml0"}
          alt="cart empty image"
        />
      </div>
      <h1>Your cart is empty</h1>
      <p className="cart-empty-desc">
        You can go to home page to view more restaurants
      </p>
      <button className={`btn-cart-empty ${darkMode && "dark"}`}>
        See Restaurants Near you
      </button>
    </div>
  );
};

export default CartEmpty;
