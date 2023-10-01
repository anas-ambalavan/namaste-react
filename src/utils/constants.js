export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const CDN_OFFERS_MEDIA_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const API_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// export const API_URL =
// "https://swiggy-backend-two.vercel.app/api/restaurants/home";

export const MENU_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9165757&lng=77.6101163&restaurantId=";

export const SUPPORT_PARTNER_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/support/issues/partner-onboarding?";

export const SUPPORT_LEGAL_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/support/issues/legal?";

export const SUPPORT_FAQ_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/support/issues/faq?";

export const PRE_SEARCH_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9165757&lng=77.6101163";

export const SEARCH_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9165757&lng=77.6101163&str=";

export const SupportURLType = Object.freeze({
  partner: "partner-onboarding",
  legal: "legal",
  faq: "faq",
});

export const AccordionType = Object.freeze({
  normal: "normal",
  menu: "menu",
});

export const THEME_MODES = Object.freeze({
  white: "white",
  dark: "dark",
});

export const Directions = Object.freeze({
  left: "left",
  right: "right",
});

export const BestTypes = Object.freeze({
  places: "places",
  cuisines: "cuisines",
  restaurants: "restaurants",
});

export const FilterTypes = Object.freeze({
  topRated: {
    id: "topRated",
    label: "Ratings 4.2+",
  },
  fastDelivery: {
    id: "fastDelivery",
    label: "Fast Delivery",
  },
  priceBtw: { id: "priceBtw", label: "Rs.300 - Rs.600" },
  lessPrice: { id: "lessPrice", label: "Less than Rs.300" },
});

export const FilterTypeFuntions = new Map([
  [
    FilterTypes.topRated.id,
    function (item) {
      return item.info.avgRating > 4.2;
    },
  ],
  [
    FilterTypes.fastDelivery.id,
    function (item) {
      return item.info.sla.deliveryTime <= 25;
    },
  ],
  [
    FilterTypes.priceBtw.id,
    function (item) {
      const cost = parseInt(item.info.costForTwo.match(/\d+/)?.[0]) || 0;
      return cost >= 300 && cost <= 600;
    },
  ],
  [
    FilterTypes.lessPrice.id,
    function (item) {
      const cost = parseInt(item.info.costForTwo.match(/\d+/)?.[0]) || 0;
      return cost < 300;
    },
  ],
]);
