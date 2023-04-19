import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `/api/account/reviews`,
      transformResponse: (response) => response.reviews,
      providesTags: (result) => {
        const tags = [{ type: "Reviews", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Reviews", id })), ...tags];
      },
    }),

    createReview: builder.mutation({
      query: ({ munro_id, body }) => {
        return {
          url: `/api/munros/${munro_id}/reviews/`,
          method: "POST",
          munro_id: munro_id,
          body: body,
        };
      },
      invalidatesTags: [{ type: "review", id: "str" }],
    }),
  }),
});

export const { useGetReviewsQuery, useCreateReviewMutation } = reviewsApi;
