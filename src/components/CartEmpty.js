import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../utils/ThemeContext";

const CartEmpty = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className="cart-empty-container">
      <div className="cart-empty-img-container">
        <img
          className="cart-empty-img"
          src={process.env.REACT_APP_CDN_URL + "2xempty_cart_yfxml0"}
          alt="cart empty image"
        />
      </div>
      <h1>Your cart is empty</h1>
      <p className="cart-empty-desc">
        You can go to home page to view more restaurants
      </p>
      <Link to={"/"} className="reset-link">
        <button className={`btn-cart-empty ${darkMode && "dark"}`}>
          See Restaurants Near you
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
