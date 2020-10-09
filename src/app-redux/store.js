import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slice/searchSlice';
import productsReducer from './slice/productSlice';
import sideBarReducer from './slice/sidebarSlice';

export default configureStore({
  reducer: {
    search : searchReducer,
    product : productsReducer,
    sideBar : sideBarReducer,
  },
});

