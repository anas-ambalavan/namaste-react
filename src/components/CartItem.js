import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";
import { useSelector } from "react-redux";

const CartItem = ({ data }) => {
  const { id, isVeg, name } = data;

  const cartItems = useSelector((store) => store.cart.cartDetails.items);

  const currentCartItem = cartItems.find((item) => item.id === id);

  return (
    <div className="cart-item">
      <div className="cart-left">
        <div>
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
        </div>
        <div className="cart-item-details">
          <p>{name}</p>
          <div className="cart-item-customize">
            <p>Customize</p>
            <ChevronRightIcon width={10} />
          </div>
        </div>
      </div>
      <div className="cart-right">
        <div>
          <div className="cart-items-action-container">
            <div className="cart-items-action">
              <MinusIcon width={15} />
            </div>
            <div className="cart-items-action">
              <p>{currentCartItem.quantity}</p>
            </div>
            <div className="cart-items-action">
              <PlusIcon width={15} />
            </div>
          </div>
        </div>
        <div>
          <p className="cart-item-price">
            ₹{(currentCartItem.totalItemCost / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
