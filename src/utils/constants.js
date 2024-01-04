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

export const RoutesWithFooter = ["/"];
