import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const climbsApi = createApi({
  reducerPath: "climbsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/climbs`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getClimbs: builder.query({
      query: () => "",
      transformResponse: (response) => response.climbs,
      providesTags: (result) => {
        const tags = [{ type: "Climbs", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Climbs", id })), ...tags];
      },
    }),
  }),
});

export const { useGetClimbsQuery } = climbsApi;
