import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProducts from '../../components/api/fetchProducts';
export const getProducts = createAsyncThunk(
    'getProducts',
    async ({valueTitle,
        valueType,
        valueByType,
        valueBrand,
        valueRate,
        priceFrom,
        priceTo,
        sort,
        valueSearch}) => {
            const currentProducts = await fetchProducts({
                valueTitle,
                valueType,
                valueByType,
                valueBrand,
                valueRate,
                priceFrom,
                priceTo,
                sort,
                valueSearch,
            });

            return currentProducts;
    }
)

const productSlice = createSlice({
    name : "productSlice",
    initialState : {
        countProducts: "",
        sort: "",
        currentPage: 1,
        productsPerPage: 8,
        products: [],
        isLoading: false,
        error: "",
    },
    reducers : {
        getCountProducts : (state,actions) => {
            state.countProducts = actions.payload;
        },
        getSort : (state, actions) => {
            state.sort = actions.payload;
        },
        getCurrentPage : (state, actions) => {
            state.currentPage = actions.payload;
        },      
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
          state.isLoading = true;
        },
    
        [getProducts.rejected]: (state, action) => {
          state.error = action.error;
          state.isLoading = false;
        },

        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
      },
}
)

const { reducer , actions } = productSlice;
export const { getCountProducts,getSort,getCurrentPage } = actions;
export default reducer;
