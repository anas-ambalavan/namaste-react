import { useDispatch, useSelector } from "react-redux";
import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
} from "../utils/store/cartSlice";

const CartItem = ({ data }) => {
  const { id, isVeg, name } = data;

  const cartItems = useSelector((store) => store.cart.cartDetails.items);

  const dispatch = useDispatch();

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
            <div
              data-testid="cartItemQuantityDecrement"
              className="cart-items-action"
              onClick={() => dispatch(decrementCartItemQuantity(id))}
            >
              <MinusIcon width={15} />
            </div>
            <div className="cart-items-action">
              <p data-testid="cartItemQuantity">{currentCartItem.quantity}</p>
            </div>
            <div
              data-testid="cartItemQuantityIncrement"
              className="cart-items-action"
              onClick={() => dispatch(incrementCartItemQuantity(id))}
            >
              <PlusIcon width={15} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="cart-item-price">
          ₹{(currentCartItem.totalItemCost / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
