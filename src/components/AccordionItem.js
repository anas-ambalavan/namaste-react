import { useContext, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { AccordionType } from "../utils/constants";
import ThemeContext from "../utils/ThemeContext";
import AccordionListItem from "./AccordionListItem";

const AccordionItem = ({
  title,
  itemDescriptions,
  type,
  index,
  showItems,
  setShowIndex,
  resInfo,
}) => {
  const content = useRef(null);
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className={`accordion-item ${darkMode && "dark"}`}>
      <div
        className="accordion-title"
        onClick={() => (showItems ? setShowIndex(null) : setShowIndex(index))}
      >
        <div>
          {title}
          {type === AccordionType.menu && ` - (${itemDescriptions.length})`}
        </div>
        <div>
          {showItems ? (
            <ChevronUpIcon width={20} />
          ) : (
            <ChevronDownIcon width={20} />
          )}
        </div>
      </div>
      {showItems && type === AccordionType.normal && (
        <div className="accordion-content">
          <p className="accordion-desc">{itemDescriptions}</p>
        </div>
      )}
      {type === AccordionType.menu && (
        <div
          ref={content}
          className="accordion-content"
          style={{
            maxHeight: showItems ? `${content.current.scrollHeight}px` : "0px",
          }}
        >
          {itemDescriptions.map((item) => {
            return (
              <AccordionListItem
                key={item?.card?.info?.id}
                data={item?.card?.info}
                resInfo={resInfo}
                testId={showItems ? true : false}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
