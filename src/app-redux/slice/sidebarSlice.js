import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchTypes from "../../components/api/fetchTypes";

export const getTypes = createAsyncThunk("getTypes", async () => {
  const currentTypes = await fetchTypes();
  return currentTypes;
});

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: {
    valueTitle:"",
    valueType:"",
    valueByType:[],
    valueBrand:[],
    valueRating :"",
    priceFrom:"",
    priceTo:"",
    valueIdTitle: "",
    valueIdType: "",
    types: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getTitle(state, action) {
      state.valueTitle = action.payload;
    },

    getType(state, action) {
      state.valueType = action.payload;
    },

    getIdTitle(state, action) {
      state.valueIdTitle = action.payload;
    },

    getIdType(state, action) {
      state.valueIdType = action.payload;
    },

    getByType(state, action) {
      const currentType = state.valueByType.indexOf(action.payload);

      if (currentType === -1) {
        state.valueByType.push(action.payload);
      } else {
        state.valueByType.splice(currentType, 1);
      }
    },

    getByBrand(state, action) {
      const currentBrand = state.valueBrand.indexOf(action.payload);

      if (currentBrand === -1) {
        state.valueBrand.push(action.payload);
      } else {
        state.valueBrand.splice(currentBrand, 1);
      }
    },

    getByRatings(state, action) {
      state.valueRating = action.payload;
    },

    getByPriceFrom(state, action) {
      state.priceFrom = action.payload;
    },

    getByPriceTo(state, action) {
      state.priceTo = action.payload;
    },

    getClearAllFilter(state, action) {
      state.valueBrand = [];
      state.priceFrom = "";
      state.priceTo = "";
      state.valueRating = "";
      state.valueByType = [];
      state.valueTitle = "";
      state.valueType = "";
    },
  },

  extraReducers: {
    [getTypes.pending]: (state) => {
      state.isLoading = true;
    },

    [getTypes.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },

    [getTypes.fulfilled]: (state, action) => {
      state.types = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = sideBarSlice;
export const {
  getTitle,
  getType,
  getByType,
  getByBrand,
  getByRatings,
  getByPriceFrom,
  getByPriceTo,
  getClearAllFilter,
  getIdTitle,
  getIdType,
} = actions;
export default reducer;
