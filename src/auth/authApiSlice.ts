import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1" }),
  reducerPath: "authApi",
  tagTypes: ["session"],
  endpoints: build => ({
    getSession: build.query({
      query: () => ({
        url: `/auth/get-session`,
        credentials: "include",
      }),
      providesTags: ["session"],
    }),
    checkUsername: build.query({
      query: (username) => ({
        url: `/auth/check-username/${username}`,
      })
    }),
    Login: build.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["session"]
    }),
    Register: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: JSON.stringify(data),
      }),
    }),
    Logout: build.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["session"],
    }),
  }),
})

export const {
  useGetSessionQuery,
  useRegisterMutation,
  useLogoutMutation,
  useLoginMutation,
  useLazyCheckUsernameQuery
} = authApiSlice
