import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { toggleMenu } from "../utils/store/appSlice";
import NavItems from "./NavItems";
import ThemeContext from "../utils/ThemeContext";

const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const menuClass = isMenuOpen ? "side-menu open" : "side-menu";

  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className={`${menuClass} ${darkMode && "dark"}`}>
      <div className="nav-items-mobile">
        <ul onClick={() => dispatch(toggleMenu())}>
          <NavItems />
        </ul>
      </div>
      <button onClick={() => dispatch(toggleMenu())}>
        <XMarkIcon width={30} />
      </button>
    </div>
  );
};

export default SideMenu;
