import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const recordApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1", credentials: "include" }),
    reducerPath: "recordApi",
    tagTypes: ["records"],
    endpoints: build => ({
        createRecord: build.mutation({
            query: ({ title, tagline }) => ({
                url: `/crud`,
                method: "POST",
                body: {
                    title,
                    tagline,
                },
            }),
            invalidatesTags: ["records"],
        }),
        getRecords: build.query({
            query: () => ({
                url: `/crud`,
            }),
            providesTags: ["records"],
        }),
        getRecordById: build.query({
            query: ({ recordId }) => ({
                url: `/crud/${recordId}`,
            }),
        }),
        deleteRecord: build.mutation({
            query: recordId => ({
                url: `/crud/${recordId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["records"],
        }),
        updateRecord: build.mutation({
            query: ({ recordId, title, tagline }) => ({
                url: `/crud/${recordId}`,
                method: "PATCH",
                body: {
                    title,
                    tagline,
                },
            }),
            invalidatesTags: ["records"],
        }),
    }),
})

export const {
    useCreateRecordMutation,
    useGetRecordsQuery,
    useLazyGetRecordByIdQuery,
    useDeleteRecordMutation,
    useUpdateRecordMutation,
} = recordApiSlice
