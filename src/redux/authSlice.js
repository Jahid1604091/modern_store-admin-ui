import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUserInfo: localStorage.getItem('loggedInUserInfo') ? JSON.parse(localStorage.getItem('loggedInUserInfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedInUserInfo: (state, action) => {
            state.loggedInUserInfo = action.payload;
            localStorage.setItem('loggedInUserInfo', JSON.stringify(action.payload));
        },
        setClearLoggedUserInfo: (state, action) => {
            state.loggedInUserInfo = null
            localStorage.clear();
        },
    }
});

export const {
    setLoggedInUserInfo,
    setClearLoggedUserInfo
} = authSlice.actions;

export default authSlice.reducer;