import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ClimbsByAccountApi = createApi({
  reducerPath: "ClimbsByAccountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getClimbsByAccount: builder.query({
      query: () => `/api/account/climbs`,
      transformResponse: (response) => response.climbs,
      providesTags: (result) => {
        const tags = [{ type: "Climbs", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Climbs", id })), ...tags];
      },
    }),
  }),
});

export const { useGetClimbsByAccountQuery } = ClimbsByAccountApi;
