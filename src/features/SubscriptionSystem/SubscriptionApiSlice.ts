import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const subscriptionApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1", credentials: "include" }),
    reducerPath: "subscriptionApi",
    endpoints: build => ({
        getSubscriptionStatus: build.query({
            query: () => ({
                url: "/subscription/subscription-status",
            })
        }),
        purchaseSubscription: build.mutation({
            query: (data) => ({
                url: "/subscription/purchase-subscription",
                method: "POST",
                body: data
            })
        }),
        getSubscribedContent: build.query({
            query: () => ({
                url: "/subscription/subscribed-content"
            })
        })
    }),
})

export const {
    useLazyGetSubscriptionStatusQuery,
    usePurchaseSubscriptionMutation,
    useLazyGetSubscribedContentQuery
} = subscriptionApiSlice
