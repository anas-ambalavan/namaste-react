import { useContext } from "react";
import { useDispatch } from "react-redux";

import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/store/cartSlice";
import ThemeContext from "../utils/ThemeContext";
import CartItem from "./CartItem";

const CartInfo = ({ cart }) => {
  const { name, imageId, areaName } = cart.resInfo;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();
  return (
    <div className="cart-info">
      <div className="cart-header">
        <div className="cart-res-info">
          <div>
            <img
              className="cart-res-image"
              src={CDN_URL + imageId}
              alt="res image"
            />
          </div>
          <div className="cart-res-details">
            <h3>{name}</h3>
            <p>{areaName}</p>
          </div>
        </div>
        {/* <div>
          <button
            className={`btn-primary ${darkMode && "dark"}`}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div> */}
      </div>
      <div className="cart-list-items">
        {cart?.items?.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="input-cart-item-container">
        <input
          className="input-cart-item"
          type="text"
          placeholder="Any suggestions? We will pass it on..."
        />
      </div>
      <div className="cart-no-contact-container">
        <div className="cart-no-contact">
          <input type="checkbox" />
          <div className="cart-no-contact-details">
            <p className="cart-no-contact-heading">
              Opt in for No-contact Delivery
            </p>
            <p className="cart-no-contact-desc">
              Unwell, or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for
              COD)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
