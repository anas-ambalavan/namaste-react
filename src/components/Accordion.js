import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Accordion = ({ title, itemCards }) => {
  const [isActive, setIsActive] = useState(false);

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
          {itemCards.map((item) => (
            <div key={item.card.info.id}>{item.card.info.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
