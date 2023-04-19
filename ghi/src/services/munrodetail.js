import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const munroDetailApi = createApi({
  reducerPath: "munroDetailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getMunroDetail: builder.query({
      query: (munro_id) => `/api/munros/${munro_id}/`,
    }),
  }),
});

export const { useGetMunroDetailQuery } = munroDetailApi;
