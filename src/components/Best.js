import { useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Button from "./Button";
import { BestTypes } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";

const Best = ({ data, type }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  const brands =
    type === BestTypes.cuisines
      ? data?.cuisines?.slice(0, 7)
      : data?.brands?.slice(0, 7);

  return (
    <div className={`best-container ${darkMode && "dark"}`}>
      <h1 className="home-heading">{data?.title}</h1>
      <div
        className="best-items"
        style={{
          gridTemplateColumns:
            type === BestTypes.restaurants
              ? "repeat(2, 1fr)"
              : "repeat(4, 1fr)",
        }}
      >
        {brands?.map((brand) => (
          <Button key={brand.link} title={brand?.text} />
        ))}
        {type !== BestTypes.restaurants && (
          <Button title={`Show More`}>
            <ChevronDownIcon style={{ height: "20px", marginLeft: 2 }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Best;
