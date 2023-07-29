import { CDN_URL } from "../utils/constants";

const Offer = ({ offer }) => {
  const { offerTag, offerLogo, header, couponCode, description } = offer;

  return (
    <div className="offer-container">
      {offerTag ? (
        <div className="offer-tag">
          <p>{offerTag}</p>
        </div>
      ) : null}
      <div className="offer-details">
        <div>
          <div className="offer-header">
            <img
              className="offer-logo"
              src={CDN_URL + offerLogo}
              alt="offer logo"
            />
            <p>{header}</p>
          </div>
          <div className="offer-description">
            <p>{couponCode}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
