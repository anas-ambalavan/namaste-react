import { useContext } from "react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Logo from "../../assets/logo.png";
import ThemeContext from "../utils/ThemeContext";
import { toggleMenu } from "../utils/store/appSlice";
import NavItems from "./NavItems";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

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
            <NavItems />
          </ul>
        </div>
        <div className="menu-icon" onClick={() => dispatch(toggleMenu())}>
          <Bars3Icon width={30} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
