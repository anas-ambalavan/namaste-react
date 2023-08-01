import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import { CDN_URL } from "../utils/constants";
import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";

const Accordion = ({ title, itemCards }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {title} - ({itemCards.length})
        </div>
        <div>
          {isActive ? (
            <ChevronUpIcon width={20} />
          ) : (
            <ChevronDownIcon width={20} />
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {itemCards.map((item) => {
            const { id, name, ribbon, price, description, imageId, isVeg } =
              item.card.info;
            return (
              <div key={id} className="accordion-item-card">
                <div className="accordion-card-details">
                  <div className="accordion-items-type">
                    {isVeg ? (
                      <img
                        className="food-item-type-image"
                        src={vegIcon}
                        alt="veg icon image"
                      />
                    ) : (
                      <img
                        className="food-item-type-image"
                        src={nonVegIcon}
                        alt="non veg icon image"
                      />
                    )}

                    {Object.keys(ribbon).length !== 0 ? (
                      <div className="accordion-bestseller">
                        <StarIcon width={12} color={"#ED9C00"} />
                        <p>{ribbon.text}</p>
                      </div>
                    ) : null}
                  </div>
                  <h3 className="accordion-title">{name}</h3>
                  <p>₹ {price / 100}</p>
                  <p className="accordion-desc">{description}</p>
                </div>
                <div className="accordion-action">
                  <img
                    className="accordion-item-image"
                    src={CDN_URL + imageId}
                    alt="item image"
                  />
                  <button className="btn-accordion">
                    Add
                    <PlusIcon
                      width={10}
                      style={{ position: "absolute", top: 1, right: 1 }}
                    />
                  </button>
                  <p className="accordion-customisable">Customisable</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
