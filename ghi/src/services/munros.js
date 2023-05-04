import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const munrosApi = createApi({
  reducerPath: "munrosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getMunros: builder.query({
      query: () => `/api/munros`,
      transformResponse: (response) => response.munros,
      providesTags: (result) => {
        const tags = [{ type: "Munros", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Munros", id })), ...tags];
      },
    }),

    getMunroDetail: builder.query({
      query: (munro_id) => `/api/munros/${munro_id}`,
    }),
  }),
});

export const { useGetMunrosQuery, useGetMunroDetailQuery } = munrosApi;
