import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Token"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
  }),
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => "/token",
      transformResponse: (response) => response?.account,
      providesTags: ["Account"],
    }),
    login: builder.mutation({
      query: (info) => {
        // let formData = null;
        // if (info instanceof HTMLElement) {
        //   formData = new FormData(info);
        // } else {
        const formData = new FormData();
        formData.append("username", info.username);
        formData.append("password", info.password);
        // }
        return {
          url: "/token",
          method: "post",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: (result) => {
        return (result && ["Account"]) || [];
      },
    }),
    getToken: builder.query({
      query: () => ({
        url: "/token",

        credentials: "include",
      }),
      providesTags: ["Token"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
      }),
      invalidatesTags: ["Account", { type: "Things", id: "LIST" }],
    }),
  }),
});

export const { useGetAccountQuery, useLogoutMutation, useLoginMutation } =
  authApi;
