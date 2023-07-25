import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import Logo from "./assets/logo.png";
import { restaurants } from "./dummy-data";

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

const ResCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } = resData;
  return (
    <div className="res-card">
      <div className="res-card-image-container">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="restaurant logo"
          className="res-card-image"
        />
      </div>
      <div className="res-card-details">
        <h3>{name}</h3>
        <div className="res-card-rating-container">
          <div className="res-card-star-rating">
            <StarIcon color="#fff" width={13} />
          </div>
          <h4 style={{ marginLeft: 5 }}>{avgRating}</h4>
        </div>
        <div className="bottom-details">
          <p className="res-card-cuisine">{cuisines.join(",")}</p>
          <p className="res-card-location">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="restaurants">
        <h1 className="res-heading">Restaurants</h1>
        <div className="restaurant-list">
          {restaurants.map((item) => (
            <ResCard key={item.info.id} resData={item.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
