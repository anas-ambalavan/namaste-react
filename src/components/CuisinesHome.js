import { useSelector } from "react-redux";

import useScroll from "../utils/useScroll";
import ArrowIcon from "./ArrowIcon";
import { Directions } from "../utils/constants";

const CuisinesHome = () => {
  const {
    containerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScroll();

  const cuisines = useSelector((store) => store.res.cuisines);

  return (
    <div className="cuisine-home-container">
      <div className="heading-setion">
        <h1 className="cuisine-heading">What's on your mind?</h1>
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
      <div ref={containerRef} className="cuisine-home">
        {cuisines?.map((cuisine) => (
          <div key={cuisine.id}>
            <img
              className={`cuisine-home-image`}
              src={process.env.REACT_APP_CDN_OFFERS_MEDIA_URL + cuisine.imageId}
              width="144px"
              height="180px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinesHome;
