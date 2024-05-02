import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const subscriptionApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1", credentials: "include" }),
    reducerPath: "subscriptionApi",
    endpoints: build => ({
        getSubscriptionStatus: build.query({
            query: (data) => ({
                url: "/subscription/subscription-status",
            })
        }),
        purchaseSubscription: build.mutation({
            query: (data) => ({
                url: "/subscription/purchase-subscription",
                method: "POST",
                body: data
            })
        })
    }),
})

export const {
    useLazyGetSubscriptionStatusQuery,
    usePurchaseSubscriptionMutation
} = subscriptionApiSlice
