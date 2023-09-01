import { useContext } from "react";

import ThemeContext from "../utils/ThemeContext";

const Button = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <button className={`btn ${darkMode && "dark"}`}>
      {title}
      {children}
    </button>
  );
};

export default Button;
