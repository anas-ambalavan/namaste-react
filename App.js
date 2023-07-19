import React from "react";
import ReactDOM from "react-dom/client";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import Logo from "./assets/logo.png";

const SubTitle = <h3>Namaste React - React Element</h3>;

const Title = () => (
  <div id="title" className="title" tabIndex={1}>
    <h1>Welcome!</h1>
    {SubTitle}
  </div>
);

const Header = () => (
  <div className="header-container">
    <div className="image-container">
      <img
        className="image"
        width={"100%"}
        height={"100%"}
        src={Logo}
        alt="logo"
      />
    </div>
    <input className="search-bar" type="text" placeholder="Search..." />
    <div className="section-right">
      <UserCircleIcon width={30} />
    </div>
  </div>
);

const Main = () => (
  <>
    <Header />
    <Title />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
