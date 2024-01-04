import { useContext } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

import ThemeContext from "../utils/ThemeContext";
import FSSAIImg from "../../assets/fssai.svg";

const RestaurantMenuFooter = ({ resLicenseInfo, resDetails }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className={`res-menu-footer ${darkMode && "dark"}`}>
      <div className="res-menu-footer-license">
        <img
          className="res-menu-footer-img"
          src={
            darkMode
              ? FSSAIImg
              : process.env.REACT_APP_CDN_URL + resLicenseInfo?.imageId
          }
          alt={resLicenseInfo?.type + "image"}
        />
        <p>{resLicenseInfo?.text[0]}</p>
      </div>
      <div className="res-menu-footer-details">
        <h4>{resDetails?.name}</h4>
        <p>{`(Outlet: ${resDetails?.area})`}</p>
        <div className="res-menu-footer-address">
          <MapPinIcon width={15} />
          <p>{resDetails?.completeAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuFooter;
