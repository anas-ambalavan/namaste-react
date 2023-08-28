import { createContext, useReducer } from "react";

import { THEME_MODES } from "./constants";

const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_MODES.white:
      return { darkMode: false };
    case THEME_MODES.dark:
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
