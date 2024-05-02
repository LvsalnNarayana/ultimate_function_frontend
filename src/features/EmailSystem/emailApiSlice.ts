import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const emailApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1", credentials: "include" }),
    reducerPath: "emailApi",
    endpoints: build => ({
        sendEmail: build.mutation({
            query: (data) => ({
                url: "/mail/send-email",
                method: "POST",
                body: data
            })
        })
    }),
})

export const {
    useSendEmailMutation
} = emailApiSlice
