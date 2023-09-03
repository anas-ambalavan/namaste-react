import { useContext } from "react";

import Gif from "../../assets/animated.gif";
import ThemeContext from "../utils/ThemeContext";

const HomeShimmer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className={`home-shimmer shimmerBG ${darkMode && "dark"}`}>
      <div>
        <img src={Gif} alt="gif" />
      </div>
      <p>Looking for great food near you...</p>
    </div>
  );
};

export default HomeShimmer;
