import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="header fonts-loaded">
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
            <Link to={"/"} className="reset-link">
              <MagnifyingGlassIcon width={20} />
              <p>Search</p>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reset-link">
              <MegaphoneIcon width={20} />
              <p>Offers</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/support/issues/partner-onboarding"}
              className="reset-link"
            >
              <InformationCircleIcon width={20} />
              <p>Help</p>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reset-link">
              <UserCircleIcon width={20} />
              <p>Sign In</p>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="reset-link">
              <ShoppingBagIcon width={20} />
              <p>Cart</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
