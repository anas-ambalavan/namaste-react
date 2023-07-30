const RestaurantCardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmerBG shimmer-img"></div>
      <div className="shimmer-bottom-details">
        <div className="shimmerBG shimmer-bottom-line"></div>
        <div className="shimmerBG shimmer-bottom-line small"></div>
        <div className="shimmerBG shimmer-bottom-line"></div>
        <div className="shimmerBG shimmer-bottom-line medium"></div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
