import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/store/cartSlice";
import ThemeContext from "../utils/ThemeContext";
import CartItem from "./CartItem";

const CartInfo = ({ cart }) => {
  const { name, imageId, areaName } = cart.resInfo;

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();

  const itemTotal = useSelector((store) => store.cart.cartDetails.totalCost);
  const itemTotalCost = itemTotal / 100;
  const restaurantCharge = 33 + itemTotalCost * 0.05;
  const cartTotal = itemTotalCost + restaurantCharge + 2 + 40;

  return (
    <div className="cart-info-container">
      <div className={`cart-info ${darkMode && "dark"}`}>
        <div className={`cart-header ${darkMode && "dark"}`}>
          <div className={`cart-res-info ${darkMode && "dark"}`}>
            <div>
              <img
                className={`cart-res-image`}
                src={CDN_URL + imageId}
                alt="res image"
              />
            </div>
            <div className={`cart-res-details ${darkMode && "dark"}`}>
              <h3>{name}</h3>
              <p>{areaName}</p>
            </div>
          </div>
          <div>
            <button
              className={`btn-primary clear-cart ${darkMode && "dark"}`}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className={`cart-list-items ${darkMode && "dark"}`}>
          {cart?.items?.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div>
        <div className={`input-cart-item-container ${darkMode && "dark"}`}>
          <input
            className={`input-cart-item ${darkMode && "dark"}`}
            type="text"
            placeholder="Any suggestions? We will pass it on..."
          />
        </div>
        <div className="cart-no-contact-container">
          <div className={`cart-no-contact ${darkMode && "dark"}`}>
            <input type="checkbox" />
            <div className={`cart-no-contact-details ${darkMode && "dark"}`}>
              <p className="cart-no-contact-heading">
                Opt in for No-contact Delivery
              </p>
              <p className={`cart-no-contact-desc ${darkMode && "dark"}`}>
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </p>
            </div>
          </div>
        </div>
        <div className="cart-bill-details-container">
          <div className={`cart-bill-details ${darkMode && "dark"}`}>
            <h4>Bill Details</h4>
            <div className={`cart-bill-item ${darkMode && "dark"}`}>
              <p>Item Total</p>
              <p>₹{itemTotalCost.toFixed(2)}</p>
            </div>
            <div className={`cart-bill-item ${darkMode && "dark"}`}>
              <div className={`cart-bill-item ${darkMode && "dark"}`}>
                <p>Delivery fee | 3.0 kms</p>
                <InformationCircleIcon width={14} />
              </div>
              <p>₹40</p>
            </div>
          </div>
          <div
            className={`cart-bill-details other-charge ${darkMode && "dark"}`}
          >
            <div className={`cart-bill-item ${darkMode && "dark"}`}>
              <div className={`cart-bill-item ${darkMode && "dark"}`}>
                <p>Platform fee</p>
                <InformationCircleIcon width={14} />
              </div>
              <p>₹2</p>
            </div>
            <div className={`cart-bill-item ${darkMode && "dark"}`}>
              <div className={`cart-bill-item ${darkMode && "dark"}`}>
                <p>GST and Restaurant Charges</p>
                <InformationCircleIcon width={14} />
              </div>
              <p>₹{restaurantCharge.toFixed(2)}</p>
            </div>
          </div>
          <div className={`cart-bill-item total ${darkMode && "dark"} `}>
            <h4>TO PAY</h4>
            <h4>₹{cartTotal.toFixed(2)}</h4>
          </div>
        </div>
      </div>
      <div className={`cart-info review ${darkMode && "dark"}`}>
        <div className={`cart-review ${darkMode && "dark"}`}>
          <h4>Review your order and address details to avoid cancellations</h4>
          <p>
            <span>Note: </span> If you cancel within 60 seconds of placing your
            order, a 100% refund will be issued. No refund for cancellations
            made after 60 seconds.
          </p>
          <p>Avoid cancellation as it leads to food wastage.</p>
          <p>Read cancellation policy</p>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
