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

    getClimbs: builder.query({
      query: () => `/api/account/climbs/`,
      transformResponse: (response) => response.climbs,
      providesTags: (result) => {
        const tags = [{ type: "Climbs", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Climbs", id })), ...tags];
      },
    }),

    createClimb: builder.mutation({
      query: ({ munro_id, body }) => {
        // const image = body.image;
        // const binaryImage = Buffer.from(image, "base64");
        // const modifiedBody = { ...body, image: binaryImage };
        return {
          url: `/api/munros/${munro_id}/climbs`,
          method: "POST",
          munro_id: munro_id,
          body: body,
        };
      },
      invalidatesTags: [{ type: "climb", id: "str" }],
    }),
  }),
});

export const { useGetMunrosQuery, useGetClimbsQuery, useCreateClimbMutation } =
  munrosApi;
