import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../utils/constants';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const state = getState()
        const { loggedInUserInfo } = state.auth;
        if (loggedInUserInfo) {
            headers.set('token', `${loggedInUserInfo.access_token}`);
        }
        // headers.set('Content-Type', 'application/json');
        return headers;
    },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Users'],
    endpoints: (builder) => ({})
})