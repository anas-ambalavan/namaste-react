import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";

import ThemeContext from "../utils/ThemeContext";
import {
  addFilter,
  removeFilter,
  setFilteredData,
} from "../utils/store/resSlice";

const FilterButton = ({ type }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const dispatch = useDispatch();

  const listOfRestaurants = useSelector((store) => store.res.resList);
  const currentFilters = useSelector((store) => store.res.filters);
  const currentFilterIds = currentFilters?.reduce((acc, curr) => {
    acc.push(curr.id);
    return acc;
  }, []);

  return (
    <button
      className={`btn-filter ${darkMode && "dark"} ${
        currentFilterIds.includes(type?.id) ? "active" : ""
      }`}
      onClick={async () => {
        if (listOfRestaurants.length === 0) return;
        if (currentFilterIds.includes(type?.id)) {
          await dispatch(removeFilter({ id: type?.id }));
          await dispatch(setFilteredData());
        } else {
          await dispatch(addFilter({ type: type }));
          await dispatch(setFilteredData());
        }
      }}
    >
      {type?.label}
      {currentFilterIds.includes(type?.id) && (
        <XMarkIcon style={{ marginLeft: 5, color: "red" }} width={15} />
      )}
    </button>
  );
};

export default FilterButton;
