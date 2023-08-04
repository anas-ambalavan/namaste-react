import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";

const RestaurantCardShimmer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className="shimmer-card">
      <div className={`shimmerBG ${darkMode && "dark"} shimmer-img`}></div>
      <div className="shimmer-bottom-details">
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-bottom-line`}
        ></div>
        <div
          className={`shimmerBG ${
            darkMode && "dark"
          } shimmer-bottom-line small`}
        ></div>
        <div
          className={`shimmerBG ${darkMode && "dark"} shimmer-bottom-line`}
        ></div>
        <div
          className={`shimmerBG ${
            darkMode && "dark"
          } shimmer-bottom-line medium`}
        ></div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
