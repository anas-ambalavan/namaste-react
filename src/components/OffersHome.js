import { useSelector } from "react-redux";

import useScroll from "../utils/useScroll";
import ArrowIcon from "./ArrowIcon";
import { Directions } from "../utils/constants";

const OffersHome = () => {
  const {
    containerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScroll();

  const offers = useSelector((store) => store.res.offers);

  return (
    <div className="offers-home-container">
      <div className="heading-setion">
        <h1 className="offers-heading">Best offers for you</h1>
        <div className="scroll-icons">
          <ArrowIcon
            direction={Directions.left}
            handleOnClick={scrollLeft}
            isDisabled={!showLeftArrow}
          />

          <ArrowIcon
            direction={Directions.right}
            handleOnClick={scrollRight}
            isDisabled={!showRightArrow}
          />
        </div>
      </div>
      <div ref={containerRef} className="offers-home">
        {offers?.map((offer) => (
          <div key={offer.id}>
            <img
              src={process.env.REACT_APP_CDN_OFFERS_MEDIA_URL + offer.imageId}
              height="250px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersHome;
