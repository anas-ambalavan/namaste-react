import { createSlice } from "@reduxjs/toolkit";

import { FilterTypes } from "../constants";

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
    addFilter: (state, action) => {
      switch (action.payload.type) {
        case FilterTypes.topRated.id: {
          state.filteredResList = state.resList.filter(
            (item) => item.info.avgRating >= 4.3
          );
          state.filters.push(action.payload.type);
        }
        default:
          return state;
      }
    },
    removeFilter: (state, action) => {
      switch (action.payload.type) {
        case FilterTypes.topRated.id: {
          state.filteredResList = state.resList.filter(
            (item) => item.info.avgRating >= 0
          );
          state.filters = state.filters.filter(
            (item) => item !== FilterTypes.topRated.id
          );
        }
        default:
          return state;
      }
    },
  },
});

export const { loadData, addFilter, removeFilter, setfilteredResList } =
  resSlice.actions;

export default resSlice.reducer;
