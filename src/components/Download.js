import { useContext } from "react";

import { CDN_URL } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const Download = ({ data }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  return (
    <div className={`download-container ${darkMode && "dark"}`}>
      <div className="donwload-text-container">
        <h1 className="donwload-text">{data?.title}</h1>
      </div>
      <div className="download-icons">
        <img
          src={CDN_URL + data?.androidAppImage}
          alt="play store"
          width={180}
          height={60}
        />
        <img
          src={CDN_URL + data?.iosAppImage}
          alt="app store"
          width={180}
          height={60}
        />
      </div>
    </div>
  );
};

export default Download;
