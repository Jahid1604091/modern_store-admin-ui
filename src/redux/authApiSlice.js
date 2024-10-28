import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: '/users',
            }),
            keepUnusedDataFor: 5
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `/api/users/login`,
                body: data,
                method: "POST",
            }),
            invalidatesTags: ["User"],
        }),
    })
})

export const {
    useGetAllUsersQuery,
    useLoginMutation,
} = authApiSlice;