import { createSlice } from "@reduxjs/toolkit";

import { FilterTypeFuntions } from "../constants";

const initialState = {
  resList: [],
  filteredResList: [],
  filters: [],
  offers: [],
  cuisines: [],
  topResList: [],
  bestResPlaces: [],
  bestResCuisines: [],
  restaurantNearMe: [],
  downloadData: [],
};

const resSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    loadData: (state, action) => {
      state.resList =
        action.payload?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      state.filteredResList =
        action.payload?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      state.offers = action.payload?.cards[0]?.card?.card?.imageGridCards?.info;
      state.cuisines =
        action.payload?.cards[1]?.card?.card?.imageGridCards?.info;

      state.topResList =
        action.payload?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      state.bestResPlaces = action.payload?.cards[7]?.card?.card;
      state.bestResCuisines = action.payload?.cards[8]?.card?.card;
      state.restaurantNearMe = action.payload?.cards[9]?.card?.card;
      state.downloadData = action.payload?.cards[10]?.card?.card;
    },
    setfilteredResList: (state, action) => {
      state.filteredResList = action.payload;
    },
    setFilteredData: (state) => {
      const resList = state.resList;
      const filteredResList = state.filters.reduce((acc, curr) => {
        const logic = FilterTypeFuntions.get(curr.id);
        acc = acc.filter((item) => logic(item));
        return acc;
      }, resList);
      state.filteredResList = filteredResList;
    },
    addFilter: (state, action) => {
      state.filters.push(action.payload.type);
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  loadData,
  addFilter,
  removeFilter,
  setfilteredResList,
  setFilteredData,
} = resSlice.actions;

export default resSlice.reducer;
