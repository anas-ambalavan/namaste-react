import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Button from "./Button";
import { BestTypes } from "../utils/constants";

const Best = ({ data, type }) => {
  const brands =
    type === BestTypes.cuisines
      ? data?.cuisines?.splice(0, 7)
      : data?.brands?.splice(0, 7);

  return (
    <div className="best-container">
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
