import { useContext, useEffect, useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../assets/logo.png";
import { SupportURLType, THEME_MODES } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const routes = Object.values(SupportURLType);
    const status = routes.includes(
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    );
    setIsActive(status);
  }, [location.pathname]);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const cartItemsLength = useSelector(
    (store) => store.cart.cartDetails.itemsLength
  );

  return (
    <nav className={`header fonts-loaded ${darkMode && "dark"}`}>
      <div className="header-container">
        <div className="section-left">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                width={"100%"}
                height={"100%"}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="current-location">
            <p>
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                BTM Layout
              </span>{" "}
              <span style={{ marginLeft: 5, color: "#686B78" }}>
                Bengaluru, Karnataka, India
              </span>
            </p>
            <ChevronDownIcon
              style={{ marginLeft: 5, color: "#FC8018", cursor: "pointer" }}
              width={20}
            />
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to={"/search"} className="reset-link">
                <MagnifyingGlassIcon width={20} />
                <p>Search</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/offers"} className="reset-link">
                <MegaphoneIcon width={20} />
                <p>Offers</p>
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
                  <p className={`cart-items-length ${darkMode && "dark"}`}>
                    {cartItemsLength}
                  </p>
                </div>
                <p>Cart</p>
              </NavLink>
            </li>
            <li
              className="theme-modes"
              onClick={() =>
                darkMode
                  ? theme.dispatch({ type: THEME_MODES.white })
                  : theme.dispatch({ type: THEME_MODES.dark })
              }
            >
              <div>
                {darkMode ? <SunIcon width={20} /> : <MoonIcon width={20} />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
