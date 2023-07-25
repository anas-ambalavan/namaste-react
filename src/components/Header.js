import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Logo from "../../assets/logo.png";

const Header = () => (
  <div className="header fonts-loaded">
    <div className="header-container">
      <div className="section-left">
        <div className="logo-container">
          <img
            className="logo"
            width={"100%"}
            height={"100%"}
            src={Logo}
            alt="logo"
          />
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
      <div className="section-right">
        <div className="header-list-item">
          <MagnifyingGlassIcon width={20} />
          <p>Search</p>
        </div>
        <div className="header-list-item">
          <MegaphoneIcon width={20} />
          <p>Offers</p>
        </div>
        <div className="header-list-item">
          <InformationCircleIcon width={20} />
          <p>Help</p>
        </div>
        <div className="header-list-item">
          <UserCircleIcon width={20} />
          <p>Sign In</p>
        </div>
        <div className="header-list-item">
          <ShoppingBagIcon width={20} />
          <p>Cart</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
