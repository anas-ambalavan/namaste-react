import useScroll from "../utils/useScroll";
import ArrowIcon from "./ArrowIcon";
import { CDN_OFFERS_MEDIA_URL, Directions } from "../utils/constants";

const CuisinesHome = ({ cuisines }) => {
  const {
    containerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScroll();
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
              src={CDN_OFFERS_MEDIA_URL + cuisine.imageId}
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
