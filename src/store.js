import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './redux/authSlice';
import { apiSlice } from './redux/apiSlice';

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export default store;