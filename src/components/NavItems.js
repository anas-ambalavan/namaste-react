import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ShoppingBagIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { SupportURLType, THEME_MODES } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const NavItems = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const cartItemsLength = useSelector(
    (store) => store.cart.cartDetails.itemsLength
  );

  useEffect(() => {
    const routes = Object.values(SupportURLType);
    const status = routes.includes(
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    );
    setIsActive(status);
  }, [location.pathname]);

  return (
    <>
      <li>
        <NavLink to={"/search"} className="reset-link">
          <MagnifyingGlassIcon width={20} />
          <p>Search</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/support/issues/partner-onboarding"}
          className={`reset-link ${isActive ? "active" : ""}`}
        >
          <InformationCircleIcon width={20} />
          <p>Help</p>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/auth"} className="reset-link">
          <UserCircleIcon width={20} />
          <p>Sign In</p>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cart"} className="reset-link">
          <div className="cart-items-container">
            <ShoppingBagIcon width={26} />
            <p
              data-testid="cartItemLength"
              className={`cart-items-length ${darkMode && "dark"}`}
            >
              {cartItemsLength}
            </p>
          </div>
          <p>Cart</p>
        </NavLink>
      </li>
      <li
        data-testid="theme-icon"
        className="theme-modes"
        onClick={() =>
          darkMode
            ? theme.dispatch({ type: THEME_MODES.white })
            : theme.dispatch({ type: THEME_MODES.dark })
        }
      >
        <div>{darkMode ? <SunIcon width={20} /> : <MoonIcon width={20} />}</div>
      </li>
    </>
  );
};

export default NavItems;
