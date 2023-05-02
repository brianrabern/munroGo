import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const climbsApi = createApi({
  reducerPath: "climbsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    getClimbs: builder.query({
      query: () => `/api/account/climbs/`,
      transformResponse: (response) => response.climbs,
      providesTags: (result) => {
        const tags = [{ type: "climbs", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "climb", id })), ...tags];
      },
    }),

    createClimb: builder.mutation({
      query: ({ munro_id, body }) => {
        return {
          url: `/api/munros/${munro_id}/climbs`,
          method: "POST",
          munro_id: munro_id,
          body: body,
        };
      },
      invalidatesTags: [{ type: "climbs", id: "LIST" }],
    }),
    deleteClimb: builder.mutation({
      query: (climb_id) => ({
        url: `/api/climbs/${climb_id}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "climbs", id }],
    }),
  }),
});

export const {
  useGetClimbsQuery,
  useDeleteClimbMutation,
  useCreateClimbMutation,
} = climbsApi;
