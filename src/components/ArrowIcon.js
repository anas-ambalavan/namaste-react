import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";
import { Directions } from "../utils/constants";

const ArrowIcon = ({ direction, handleOnClick, disable }) => {
  return (
    <div
      onClick={handleOnClick}
      style={{
        background: disable ? "#eee" : "#ccc",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disable ? "" : "pointer",
        borderRadius: 100,
      }}
    >
      {direction === Directions.left ? (
        <ArrowSmallLeftIcon
          style={{ height: "20px", color: disable ? "grey" : "black" }}
        />
      ) : (
        <ArrowSmallRightIcon style={{ height: "20px", color: "black" }} />
      )}
    </div>
  );
};

export default ArrowIcon;
