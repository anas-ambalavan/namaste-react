import { useSelector } from "react-redux";
import {
  CreditCardIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import CartEmpty from "./CartEmpty";
import CartInfo from "./CartInfo";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cartDetails);

  console.log(cart);

  return (
    <div className="cart">
      <div>
        {cart.items?.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="cart-container">
            <div className="cart-left-container">
              <div className="cart-account-section">
                <div className="cart-dashed-vertical-line"></div>
                <div className="cart-left-container-icon">
                  <UserIcon width={28} />
                </div>
                <div className="cart-card-details">
                  <h3>Account</h3>
                  <p>
                    To place your order now, log in to your existing account or
                    sign up.
                  </p>
                  <div className="cart-account-actions">
                    <button className="btn-accent">
                      Have an account?
                      <br />{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Login
                      </span>
                    </button>
                    <button className="btn-secondary">
                      New to Swiggy?
                      <br />{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Sign UP
                      </span>
                    </button>
                  </div>
                </div>
                <div className="cart-account-details-img-container">
                  <img
                    className="cart-account-details-img"
                    src={CDN_URL + "Image-login_btpq7r"}
                    alt=""
                  />
                </div>
              </div>
              <div className="cart-delivery-section">
                <div className="cart-dashed-vertical-line"></div>
                <div className="cart-left-container-icon">
                  <MapPinIcon width={28} />
                </div>

                <div className="cart-card-details">
                  <h3>Delivery address</h3>
                </div>
              </div>
              <div className="cart-payment-section">
                <div className="cart-left-container-icon">
                  <CreditCardIcon width={28} />
                </div>
                <div className="cart-card-details">
                  <h3>Payment</h3>
                </div>
              </div>
            </div>
            <CartInfo cart={cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;