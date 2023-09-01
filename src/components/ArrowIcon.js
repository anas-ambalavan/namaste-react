import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";
import { Directions } from "../utils/constants";

const ArrowIcon = ({ direction, handleOnClick, isDisabled }) => {
  return (
    <div
      onClick={handleOnClick}
      style={{
        background: isDisabled ? "#eee" : "#ccc",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isDisabled ? "" : "pointer",
        borderRadius: 100,
      }}
    >
      {direction === Directions.left ? (
        <ArrowSmallLeftIcon
          style={{ height: "20px", color: isDisabled ? "grey" : "black" }}
        />
      ) : (
        <ArrowSmallRightIcon
          style={{ height: "20px", color: isDisabled ? "grey" : "black" }}
        />
      )}
    </div>
  );
};

export default ArrowIcon;
