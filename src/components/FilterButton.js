import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";

import ThemeContext from "../utils/ThemeContext";
import { addFilter, removeFilter } from "../utils/store/resSlice";

const FilterButton = ({ type }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();

  const listOfRestaurants = useSelector((store) => store.res.resList);
  const currentFilters = useSelector((store) => store.res.filters);

  return (
    <button
      className={`btn-filter ${darkMode && "dark"} ${
        currentFilters.includes(type?.id) ? "active" : ""
      }`}
      onClick={() => {
        if (listOfRestaurants.length === 0) return;
        if (currentFilters.includes(type?.id)) {
          dispatch(removeFilter({ type: type?.id }));
        } else {
          dispatch(addFilter({ type: type?.id }));
        }
      }}
    >
      {type?.label}
      {currentFilters.includes(type?.id) && (
        <XMarkIcon style={{ marginLeft: 5, color: "red" }} width={15} />
      )}
    </button>
  );
};

export default FilterButton;
