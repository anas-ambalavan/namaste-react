import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import { AccordionType, CDN_URL } from "../utils/constants";
import vegIcon from "../../assets/veg-icon.png";
import nonVegIcon from "../../assets/non-veg-icon.png";

const Accordion = ({ title, itemDescriptions, type }) => {
  const [isActive, setIsActive] = useState(
    type === AccordionType.menu ? true : false
  );

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {title}
          {type === AccordionType.menu && ` - (${itemDescriptions.length})`}
        </div>
        <div>
          {isActive ? (
            <ChevronUpIcon width={20} />
          ) : (
            <ChevronDownIcon width={20} />
          )}
        </div>
      </div>
      {isActive && type === AccordionType.normal && (
        <div className="accordion-content">
          <p className="accordion-desc">{itemDescriptions}</p>
        </div>
      )}
      {isActive && type === AccordionType.menu && (
        <div className="accordion-content">
          {itemDescriptions.map((item) => {
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
