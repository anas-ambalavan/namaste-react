import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";

const RestaurantDetailShimmer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className="shimmer-res-detail-container">
      <div className="shimmer-res-detail-header">
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-details`}
        ></div>
        <div className={`shimmerBG ${darkMode && "dark"} shimmer-rating`}></div>
      </div>
      <div className="shimmer-offers-container">
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-offer-card`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-offer-card`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-offer-card`}
        ></div>
      </div>
      <div className="shimmer-res-detail-items-container">
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-res-detail-item`}
        ></div>
      </div>
    </div>
  );
};

export default RestaurantDetailShimmer;
